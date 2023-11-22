// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false, 
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue"],
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
    importPT: { as: "Tailwind", from: "primevue/passthrough/tailwind" },
    options: {
      ripple: true,
    },
  },
  css: [
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-dark-green/theme.css",
  ],
  // app: {
  //   head: {
  //     link: [
  //       {
  //         id: "theme-link",
  //         rel: "stylesheet",
  //         href: "themes/lara-light-green/theme.css",
  //       },
  //     ],
  //   },
  // },
});
