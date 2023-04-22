import { ConfigEnv, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
import replace from "@rollup/plugin-replace";
import viteCompression from "vite-plugin-compression";

const pwaOptions: Record<string, any> = {
  mode: "development",
  base: "/",
  includeAssets: ["logo.png"],
  description: "portfolio website of MahdiPakravan , developed by reactJS .",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  lang: "en",
  scope: "/",
  theme_color: "#011627",
  dir: "ltr",
  orientation: "portrait",
  display_override: ["standalone"],
  related_applications: [],
  shortcuts: [
    {
      name: "MahdiPakravan",
      url: "https://mahdipakravan.ir",
      description: "Mahdipkarvan shortcut",
    },
  ],
  manifest: {
    name: "MahdiPakravan website !",
    short_name: "mahdipakravan",
    theme_color: "#011627",
    icons: [
      {
        src: "icons/android/android-launchericon-512-512.png",
        sizes: "512x512",
      },
      {
        src: "icons/android/android-launchericon-192-192.png",
        sizes: "192x192",
      },
      {
        src: "icons/android/android-launchericon-144-144.png",
        sizes: "144x144",
      },
      {
        src: "icons/android/android-launchericon-96-96.png",
        sizes: "96x96",
      },
      {
        src: "icons/android/android-launchericon-72-72.png",
        sizes: "72x72",
      },
      {
        src: "icons/android/android-launchericon-48-48.png",
        sizes: "48x48",
      },
    ],
  },
  devOptions: {
    enabled: process.env.SW_DEV === "true",
    /* when using generateSW the PWA plugin will switch to classic */
    type: "module",
    navigateFallback: "index.html",
  },
};

const replaceOptions = { __DATE__: new Date().toISOString() };
const claims = process.env.CLAIMS === "true";
const reload = process.env.RELOAD_SW === "true";
const selfDestroying = process.env.SW_DESTROY === "true";

if (process.env.SW === "true") {
  //Test
  pwaOptions.srcDir = "src";
  pwaOptions.filename = claims
    ? "serviceworker/claims-sw.ts"
    : "serviceworker/prompt-sw.ts";
  pwaOptions.strategies = "injectManifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).name =
    "PWA Inject Manifest";
  (pwaOptions.manifest as Partial<ManifestOptions>).short_name = "PWA Inject";
}

if (claims) pwaOptions.registerType = "autoUpdate";

if (reload) {
  // @ts-expect-error just ignore
  replaceOptions.__RELOAD_SW__ = "true";
}

if (selfDestroying) pwaOptions.selfDestroying = selfDestroying;
export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    base: process.env.BASE_URL || "https://github.com/",
    build: {
      sourcemap: process.env.SOURCE_MAP === "true",
    },
    plugins: [
      reactRefresh(),
      VitePWA(pwaOptions),
      replace(replaceOptions) as any,
      // viteCompression(),
    ],
  };
};
