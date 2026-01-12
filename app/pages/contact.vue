<template>
  <!-- HERO SECTION WITH UPDATED BACKGROUND -->
  <section
    class="w-full bg-gradient-to-br from-blue-600 to-blue-800 text-white py-24 shadow-lg rounded-b-[40px] mb-20 relative overflow-hidden -mt-16 sm:-mt-20 md:mt-0"
  >
    <div
      class="absolute inset-0 bg-cover bg-center opacity-80"
      style="background-image:url('/hero.png')"
    ></div>

    <div class="relative max-w-3xl mx-auto text-center px-6">
      <h1 class="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
        Get in Touch
      </h1>
      <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
        Whether you’re looking to collaborate, need support, or simply have a
        question, we’d love to hear from you.
      </p>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 py-20 -mt-16 sm:-mt-20 md:mt-0">
    <div>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        Contact Information
      </h2>
      <p class="text-gray-600 leading-relaxed mb-6">
        Reach out to our team anytime. We typically respond within 24 hours.
      </p>

      <div class="space-y-6">
        <!-- <div class="flex items-center gap-4">
          <div class="text-blue-600 text-3xl">
            <i class="i-fa6-solid-phone"></i>
          </div>
          <p class="text-gray-700 font-medium">+265</p>
        </div> -->

        <div class="flex items-center gap-4">
          <div class="text-blue-600 text-3xl">
            <i class="i-fa6-solid-envelope"></i>
          </div>
          <p class="text-gray-700 font-medium">tech@computemore.com</p>
        </div>

        <div class="flex items-center gap-4">
          <div class="text-blue-600 text-3xl">
            <i class="i-fa6-solid-location-dot"></i>
          </div>
          <p class="text-gray-700 font-medium">
            P.O. Box 31548, Blantyre 3, Chichiri, Malawi
          </p>
        </div>
      </div>
    </div>

    <!-- FORM PANEL -->
    <div class="bg-white rounded-3xl shadow-xl w-full p-10 border border-gray-200">
      <h3 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

      <form @submit.prevent="submitForm" class="space-y-6 flex flex-col w-full">

        <div class="w-full">
          <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <UInput
            v-model="form.name"
            size="lg"
            placeholder="Your name"
            required
            class="w-full"
          />
        </div>

        <div class="w-full">
          <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
          <UInput
            v-model="form.email"
            type="email"
            size="lg"
            placeholder="you@example.com"
            required
            class="w-full"
          />
        </div>

        <div class="w-full">
          <label class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <UInput
            v-model="form.subject"
            size="lg"
            placeholder="How can we help?"
            required
            class="w-full"
          />
        </div>

        <div class="w-full">
          <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <UTextarea
            v-model="form.message"
            size="lg"
            rows="5"
            placeholder="Write your message..."
            required
            class="w-full"
          />
        </div>

        <div class="flex items-center w-full">
          <UButton
            type="submit"
            size="lg"
            color="secondary"
            class="font-semibold py-3"
            :loading="loading"
            :disabled="loading"
          >
            Send Message
          </UButton>
        </div>

        <p v-if="errorMessage" class="text-red-600 mt-3 font-medium text-center">
          {{ errorMessage }}
        </p>

        <p
          v-if="success"
          class="text-green-600 mt-3 font-medium text-center"
        >
          🎉 Message sent! We'll get back to you soon.
        </p>
      </form>
    </div>
  </section>

  <!-- SUPPORT SECTION
  <section class="bg-blue-50 pb-24 pt-18 text-center">
    <h2 class="text-4xl font-bold text-gray-900 mb-6">
      We’re Here to Support You
    </h2>
    <p class="text-gray-600 max-w-2xl mx-auto mb-10">
      Our team is committed to delivering excellent service. If you need help
      with our products or services, feel free to contact us at any time.
    </p>
    <UButton to="/faq" size="lg" color="primary" class="font-semibold">
      Visit FAQ
    </UButton>
  </section> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const success = ref(false)
const loading = ref(false)
const errorMessage = ref('')

const submitForm = async () => {
  if (loading.value) return

  loading.value = true
  errorMessage.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })

    success.value = true
    setTimeout(() => (success.value = false), 3000)
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    const message = (error && typeof error === 'object' && 'statusMessage' in error)
      ? String((error as any).statusMessage)
      : 'Failed to send message. Please try again.'
    errorMessage.value = message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
section {
  scroll-margin-top: 100px;
}
</style>
