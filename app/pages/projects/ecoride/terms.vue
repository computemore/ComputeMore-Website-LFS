<script setup lang="ts">
import MarkdownIt from 'markdown-it'

definePageMeta({
  layout: 'ecoride-legal',
  ecorideTitle: 'Terms and Conditions'
})

useHead({
  title: 'Ecoride Terms and Conditions',
  meta: [
    { name: 'robots', content: 'index,follow' }
  ]
})

const markdownIt = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true
})

const {
  data: rawMarkdown,
  pending,
  error
} = await useAsyncData('ecoride-terms-md', () =>
  // Client-only fetch from public/ to support static hosting in production.
  $fetch<string>('/docs/ecoride/terms.md', { responseType: 'text' }),
  { server: false }
)

const normalizedMarkdown = computed(() => {
  const source = rawMarkdown.value ?? ''
  return source
    .replace(/\r\n/g, '\n')
    .replace(/^\s*[•·]\s+/gm, '- ')
})

const renderedHtml = computed(() => markdownIt.render(normalizedMarkdown.value))
</script>

<template>
  <section class="space-y-6">
    <div v-if="pending" class="text-sm opacity-70">Loading…</div>
    <div v-else-if="error" class="text-sm opacity-70">
      Failed to load the terms.
    </div>
    <div v-else class="ecoride-legal-content" v-html="renderedHtml" />
  </section>
</template>

<style scoped>
.ecoride-legal-content :deep(h2) {
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.ecoride-legal-content :deep(h3) {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.ecoride-legal-content :deep(p) {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.ecoride-legal-content :deep(ul),
.ecoride-legal-content :deep(ol) {
  margin: 0.5rem 0 0.75rem;
  padding-left: 1.25rem;
}

.ecoride-legal-content :deep(a) {
  text-decoration: underline;
}

.ecoride-legal-content :deep(li) {
  margin: 0.25rem 0;
}
</style>
