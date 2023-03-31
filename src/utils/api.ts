import axios, { AxiosRequestConfig } from "axios";

export function callApi<T = any>(
  url: string,
  payload: AxiosRequestConfig,
  options?: {
    authorized: boolean;
  }
): Promise<T> {
  const { authorized } = options ?? { authorized: true };
  return new Promise((resolve, reject) => {
    const headers = {
      ...payload.headers,
    };
    caches.open("MAHDI_CACHE").then(function (cache) {
      cache.match(url).then(function (response) {
        if (response) {
          response.text().then(function (data) {
            resolve(JSON.parse(data) as T);
          });
        } else {
          axios({
            url,
            ...payload,
            ...headers,
          })
            .then((res) => {
              if (!res.data)
                return reject("Response Payload is not acceptable");
              cache.put(
                url as string,
                new Response(JSON.stringify(res.data), {
                  headers: { "Content-Type": "application/json" },
                })
              );
              return resolve(res.data as T);
            })
            .catch((err) => {
              if (!err.response?.data)
                return reject("Response Payload is not acceptable");
              return reject(err.response.data);
            });
        }
      });
    });
  });
}
