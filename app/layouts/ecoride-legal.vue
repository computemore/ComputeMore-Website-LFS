<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()

const pageTitle = computed(() => {
  const metaTitle = route.meta?.ecorideTitle
  return typeof metaTitle === 'string' ? metaTitle : ''
})
</script>

<template>
  <div class="min-h-dvh bg-white text-dark-900">
    <header class="border-b border-dark-200 bg-white">
      <UContainer class="py-6">
        <div class="flex items-center gap-4">
          <NuxtImg
            src="/ecoride.png"
            format="webp"
            densities="x1 x2"
            class="h-10 w-auto object-contain"
            alt="Ecoride"
          />

          <div class="min-w-0">
            <div class="text-sm font-medium text-dark-500">Ecoride</div>
            <h1 class="truncate text-xl font-semibold">{{ pageTitle }}</h1>
          </div>
        </div>
      </UContainer>
    </header>

    <main>
      <UContainer class="py-10">
        <slot />
      </UContainer>
    </main>
  </div>
</template>
