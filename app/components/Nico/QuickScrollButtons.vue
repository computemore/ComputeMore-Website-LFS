<template>
  <div class="fixed right-4 bottom-28 sm:bottom-8 z-50 flex flex-col gap-2">
    <UButton
      size="sm"
      variant="outline"
      class="bg-white/90 text-[#002D72] border-[#002D72] w-10 h-10 p-0 flex items-center justify-center"
      aria-label="Scroll up"
      @click="scrollUp"
    >
      <UIcon name="i-heroicons-arrow-up" class="w-5 h-5" />
    </UButton>

    <UButton
      size="sm"
      variant="outline"
      class="bg-white/90 text-[#002D72] border-[#002D72] w-10 h-10 p-0 flex items-center justify-center"
      aria-label="Scroll down"
      @click="scrollDown"
    >
      <UIcon name="i-heroicons-arrow-down" class="w-5 h-5" />
    </UButton>
  </div>
</template>

<script setup lang="ts">
function scrollByAmount(amount: number) {
  if (typeof window === 'undefined') return
  window.scrollBy({ top: amount, behavior: 'smooth' })
}

function scrollUp() {
  if (typeof window === 'undefined') return
  if (window.scrollY <= 0) return
  scrollByAmount(-Math.round(window.innerHeight * 0.85))
}

function scrollDown() {
  if (typeof window === 'undefined') return
  scrollByAmount(Math.round(window.innerHeight * 0.85))
}
</script>
