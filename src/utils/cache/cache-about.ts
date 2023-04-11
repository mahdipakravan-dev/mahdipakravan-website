import { callApi } from "../api";
import { REQUEST_PAGE_FIND_MANY } from "../../constants/webservices";
import {
  CACHE_API_KEY,
  getAppStorage,
  setAppStorage,
  STORAGE_APP,
} from "../../constants/local-storage";

export function checkAboutCache() {
  setTimeout(() => {
    if (getAppStorage()?.about__version) return;
    callApi(REQUEST_PAGE_FIND_MANY, {
      method: "get",
    }).then((responses) => {
      const mockedResponses = responses.map((res: any) => ({
        url: res?.url,
        response: new Response(JSON.stringify(res?.object), {
          headers: { "Content-Type": "text/plain" },
        }),
      }));

      caches.open(CACHE_API_KEY).then((cache) => {
        mockedResponses.forEach((mockedResponse: any) => {
          cache.put(mockedResponse.url as string, mockedResponse.response);
        });
      });
      setAppStorage({ about__version: 1 });
    });
  });
}
