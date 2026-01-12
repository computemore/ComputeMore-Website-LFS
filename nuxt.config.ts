// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image'],
  image:{
    format: ['webp']
  },
  devtools: { enabled: true },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  compatibilityDate: '2025-11-11',
  components: true,
  runtimeConfig: {
    public: {
      // Base URL where large static videos are hosted (e.g. Cloudflare R2 public domain).
      // Example: https://media.example.com
      // If empty, falls back to local /public/videos.
      videosBaseUrl: ''
    },
    smtpHost: '',
    smtpPort: 587,
    smtpSecure: false,
    smtpUser: '',
    smtpPass: '',
    smtpFrom: '',
    contactTo: 'tech@computemore.com'
  }
})