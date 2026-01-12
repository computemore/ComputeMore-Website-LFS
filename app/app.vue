<template>
  <NuxtLoadingIndicator />
  <UApp :toaster="toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
// See documentation here: https://ui.nuxt.com/docs/components/toast#stacked-toasts
const toaster = { expand: false }

// See documentation here: https://x.com/Atinux/status/1912803617566081396
useFaviconFromTheme()

useHead({
  title: 'ComputeMore Africa Technologies',
  meta: [
    { name: 'description', content: 'ComputeMore builds tools that simplify workflows and help businesses thrive.' },
    { property: 'og:title', content: 'ComputeMore Africa Technologies' },
    { property: 'og:description', content: 'ComputeMore builds tools that simplify workflows and help businesses thrive.' },
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>
