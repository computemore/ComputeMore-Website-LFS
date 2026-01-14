<template>
  <div class="relative">
    <div v-if="isAuthorized">
      <!-- Lock Button in top right -->
      <div class="absolute top-4 right-4 z-50">
        <UButton
          size="sm"
          color="white"
          variant="solid"
          icon="i-heroicons-lock-closed"
          label="Lock Page"
          @click="lockPage"
        />
      </div>
      <NicolifeFlow />
    </div>

    <div
      v-else
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <UCard class="w-full max-w-md">
        <template #header>
          <div class="text-lg font-semibold">Password required</div>
        </template>

        <form class="space-y-4" @submit.prevent="submitPassword">
          <UInput
            v-model="password"
            type="password"
            placeholder="Enter password"
            autocomplete="current-password"
          />

          <p v-if="error" class="text-sm text-red-500">Incorrect password.</p>

          <div class="flex justify-end">
            <UButton type="submit" color="primary">Continue</UButton>
          </div>
        </form>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UButton, UCard, UInput } from '#components'
import NicolifeFlow from '~/components/Nico/NicolifeFlow.vue'

definePageMeta({
  layout: 'life',
  middleware: 'nicolife-auth'
})

const password = ref('')
const error = ref(false)
const isAuthorized = useState<boolean>('nicolifeAuthorized', () => false)

async function lockPage() {
  await $fetch('/api/nicolife/lock', { method: 'POST' })
  isAuthorized.value = false
  password.value = ''
}

async function submitPassword() {
  error.value = false

  try {
    await $fetch('/api/nicolife/unlock', {
      method: 'POST',
      body: { password: password.value }
    })
    isAuthorized.value = true
    password.value = ''
  } catch {
    error.value = true
    password.value = ''
  }
}
</script>
