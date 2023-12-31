// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/content", "@unocss/nuxt", "nuxt-simple-robots"],
  site: { indexable: false },
  typescript: {
    shim: false,
  },
});
