<script setup lang="ts">
definePageMeta({
  layout: 'life',
})
</script>

<script lang="ts">
import NicolifeFlow from "~/components/Nico/NicolifeFlow.vue";

export default {
  components: { NicolifeFlow }
}
</script>

<template>
  <NicolifeFlow />
</template>
