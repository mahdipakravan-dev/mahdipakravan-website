import axios, { AxiosRequestConfig } from "axios";
import { CACHE_API_KEY } from "../constants/local-storage";

export function callApi<T = any>(
  url: string,
  payload: AxiosRequestConfig,
  options?: {
    authorized?: boolean;
    useCache?: boolean;
    saveCache?: boolean;
  }
): Promise<T> {
  const { authorized, useCache, saveCache } = {
    authorized: true,
    useCache: false,
    saveCache: false,
  };
  return new Promise((resolve, reject) => {
    const headers = {
      ...payload.headers,
    };
    const send = () => {
      axios({
        url,
        ...payload,
        ...headers,
      })
        .then((res) => {
          if (!res.data) return reject("Response Payload is not acceptable");
          if (saveCache)
            caches.open(CACHE_API_KEY).then((cache) => {
              cache.put(
                url as string,
                new Response(JSON.stringify(res.data), {
                  headers: { "Content-Type": "application/json" },
                })
              );
            });
          return resolve(res.data as T);
        })
        .catch((err) => {
          if (!err.response?.data)
            return reject("Response Payload is not acceptable");
          return reject(err.response.data);
        });
    };
    if (!useCache) return send();
    caches.open(CACHE_API_KEY).then(function (cache) {
      cache.match(url).then(function (response) {
        if (response) {
          response.text().then(function (data) {
            resolve(JSON.parse(data) as T);
          });
        } else {
          send();
        }
      });
    });
  });
}
