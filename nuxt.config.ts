import { resolve } from "path";
const srcDir = resolve(__dirname, "/");

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@nuxtjs/color-mode",
    "nuxt-svgo",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      exclude: ["Editor", "Chart"],
    },
    composables: {
      include: "*",
    },
    directives: {
      include: ["Ripple", "Tooltip"],
    },
    // importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    options: {
      ripple: true,
    },
  },
  css: [
    "primeicons/primeicons.css",
    "ag-grid-community/styles/ag-grid.css",
    "ag-grid-community/styles/ag-theme-alpine.css",
  ],
  colorMode: {
    preference: "light",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-rick-and-morty-color-mode",
  },
  typescript: {
    typeCheck: true,
  },
  svgo: {
    autoImportPath: false,
  },
  app: {
    baseURL: "/nuxt-rick-and-morty/",
    head: {
      title: "Rick and Morty - Nuxt",
      link: [{ rel: "icon", type: "image/x-icon", href: "./favicon.ico" }],
    },
  },
});
