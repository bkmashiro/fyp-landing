// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],

  //forced bright mode
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },

  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  }
});
