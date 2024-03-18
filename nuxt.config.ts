// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["@vueform/slider"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: false },
  css: ["~/assets/global.css"],
  modules: [
    "@nuxt/image",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: "200..700",
          Bitter: "400..700",
        },
        display: "swap",
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
  ],
});
