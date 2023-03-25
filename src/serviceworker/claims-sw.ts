import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { NavigationRoute, registerRoute } from "workbox-routing";
import responses from "./responses";

declare let self: ServiceWorkerGlobalScope;

// self.__WB_MANIFEST is default injection point
precacheAndRoute(self.__WB_MANIFEST);

// clean old assets
cleanupOutdatedCaches();

let allowlist: undefined | RegExp[];
if (import.meta.env.DEV) allowlist = [/^\/$/];

// to allow work offline
registerRoute(
  new NavigationRoute(createHandlerBoundToURL("index.html"), { allowlist })
);

self.skipWaiting();
clientsClaim();

const cacheName = "MAHDI_CACHE";

const mockedResponses = responses.map((res) => ({
  url: res.url,
  response: new Response(JSON.stringify(res.object), {
    headers: { "Content-Type": "text/plain" },
  }),
}));

caches.open(cacheName).then((cache) => {
  mockedResponses.forEach((mockedResponse) => {
    cache.put(mockedResponse.url, mockedResponse.response);
  });
});
