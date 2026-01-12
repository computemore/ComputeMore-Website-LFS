<template>
  <section class="w-full bg-white py-20 border-t border-gray-200">
    <div class="max-w-2xl mx-auto px-6 text-center">
      <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
        Subscribe to Updates and Offers from <strong>ComputeMore</strong>
      </h2>

      <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-85 mb-6 leading-relaxed max-w-3xl mx-auto">
        Receive strategic insights, product news, and enterprise technology updates.
      </p>

      <form @submit.prevent="submitForm" class="flex flex-col gap-4 max-w-md mx-auto">
        <input
          v-model="email"
          type="email"
          placeholder="Email address"
          required
          class="px-4 py-3 rounded-lg border border-gray-300 text-gray-800
                 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <UButton
          type="submit"
          size="lg"
          color="secondary"
          class="w-full flex justify-center px-6 py-3 text-white font-semibold rounded transition"
        >
          Subscribe
        </UButton>
      </form>
      <br></br>
      <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-85 mb-6 leading-relaxed max-w-3xl mx-auto">
        Your information is always confidential.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const submitForm = () => console.log("Subscribed:", email.value);
</script>
