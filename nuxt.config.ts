// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "@nuxtjs/color-mode"],
  primevue: {
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
    components: {
      // prefix: "Prime",
      include: "*",
    },
    directives: {
      include: "*",
    },
    composables: {
      include: "*",
    },
    // importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    options: {
      ripple: true,
    },
  },
  css: ["primeicons/primeicons.css"],
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
});
