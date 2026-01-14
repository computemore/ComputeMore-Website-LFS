// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/image'],
  image:{
    format: ['webp']
  },
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  css: ["~/assets/css/global.css", "~/assets/css/main.css"],
  compatibilityDate: '2025-11-11',
  components: true,
  runtimeConfig: {
    // Server-only secrets (do not put these under `public`)
    nicolifePassword: process.env.NICOLIFE_PASSWORD || 'nico.computemore',
    // Change in production. If this is leaked/unchanged, cookies can be forged.
    nicolifeAuthSecret: process.env.NICOLIFE_AUTH_SECRET || 'dev-only-change-me',
    public: {
      // Base URL where large static videos are hosted (e.g. Cloudflare R2 public domain).
      // Example: https://media.example.com
      // If empty, falls back to local /public/videos.
      videosBaseUrl: ''
    },
    // Contact form email settings (server-only)
    // Configure via environment variables (recommended for Vercel).
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
    smtpSecure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE.toLowerCase() === 'true'
      : false,
    smtpUser: process.env.SMTP_USER || '',
    smtpPass: process.env.SMTP_PASS || '',
    smtpFrom: process.env.SMTP_FROM || '',
    contactTo: process.env.CONTACT_TO || 'tech@computemore.com'
  }
})