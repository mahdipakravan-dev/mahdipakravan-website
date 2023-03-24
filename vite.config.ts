import { ConfigEnv, defineConfig, UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import type { ManifestOptions, VitePWAOptions } from "vite-plugin-pwa";
import { VitePWA } from "vite-plugin-pwa";
import replace from "@rollup/plugin-replace";
import viteCompression from "vite-plugin-compression";

const pwaOptions: Partial<VitePWAOptions> = {
  mode: "development",
  base: "/",
  includeAssets: ["logo.png"],
  manifest: {
    name: "PWA Router",
    short_name: "PWA Router",
    theme_color: "#ffffff",
    icons: [
      {
        src: "pwa-192x192.png", // <== don't add slash, for testing
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa-512x512.png", // <== don't remove slash, for testing
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png", // <== don't add slash, for testing
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
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
  const root = process.cwd();

  return {
    base: process.env.BASE_URL || "https://github.com/",
    build: {
      sourcemap: process.env.SOURCE_MAP === "true",
    },
    plugins: [
      reactRefresh(),
      VitePWA(pwaOptions),
      replace(replaceOptions) as any,
      viteCompression(),
    ],
  };
};
// export default defineConfig({

// });
