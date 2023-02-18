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
    return axios({
      url,
      ...payload,
      ...headers,
    })
      .then((res) => {
        if (!res.data) return reject("Response Payload is not acceptable");
        return resolve(res.data as T);
      })
      .catch((err) => {
        if (!err.response?.data)
          return reject("Response Payload is not acceptable");
        return reject(err.response.data);
      });
  });
}
