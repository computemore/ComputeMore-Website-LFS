<template>
  <div class="computemore-analysis-page">
    <!-- Hero Section (styled like index.vue) -->
    <section
      class="relative text-white min-h-[50vh] flex items-center justify-center overflow-hidden bg-cover bg-top px-4 sm:px-6 -mt-16 sm:-mt-20 md:mt-0"
      style="background-image: url('/circuit.jpg');"
    >
      <!-- gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/25 to-transparent pointer-events-none"></div>
      
      <!-- noise overlay -->
      <div class="absolute inset-0 z-20 pointer-events-none opacity-10 md:opacity-20 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <!-- bottom fade into next section -->
      <div class="absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 bg-gradient-to-b from-transparent to-green-600 pointer-events-none z-10"></div>

      <div class="relative z-30 text-center max-w-3xl mx-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Advanced Data Analytics & AI
        </h1>
        <p class="text-base sm:text-lg md:text-xl opacity-95 mb-6 leading-relaxed">
          Turn data into confident decisions. We combine reliable data foundations, clear dashboards, and applied machine learning to forecast outcomes, detect anomalies, and drive measurable business value.
        </p>
        <NuxtLink to="/contact">
          <UButton class="px-5 py-3 text-base sm:text-base md:text-lg bg-white text-green-600 font-semibold rounded hover:bg-gray-100" color="secondary">
            Schedule a Consultation
          </UButton>
        </NuxtLink>
      </div>
    </section>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            About Our Analytics Practice
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore helps teams move from scattered data to a single source of truth. We blend analytics engineering, business intelligence and applied AI to uncover patterns, quantify opportunities, and improve operational performance.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Our methodology emphasizes data quality, reproducible workflows, and models that integrate into your existing systems—so insights are reliable and actionable.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Data & AI Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Practical services that move your organisation from insight to impact.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Data Cleaning & Preparation</h3>
          <p class="text-gray-700">Standardize, validate and enrich datasets so reporting and models are accurate and reliable.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Statistical Analysis & Exploration</h3>
          <p class="text-gray-700">Identify drivers, correlations and anomalies using rigorous methods and clear narratives for stakeholders.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Predictive Modeling & Deployment</h3>
          <p class="text-gray-700">Build and productionize models to forecast demand, reduce churn, and guide resource allocation.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Custom Reporting & Dashboards</h3>
          <p class="text-gray-700">Tailored dashboards and automated reports that keep teams aligned and decisions data-driven.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Decision Support Analytics</h3>
          <p class="text-gray-700">Translate insights into clear options, trade-offs and recommended next steps for leaders.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Analytics Consulting & Roadmaps</h3>
          <p class="text-gray-700">Define a practical analytics roadmap, choose tools and upskill teams for long-term success.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Accurate Insights</h3>
            <p class="text-gray-700">We prioritise data quality and repeatable analyses that you can trust.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Expert Team</h3>
            <p class="text-gray-700">A practical team combining analytics, engineering and business domain knowledge.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Actionable Outcomes</h3>
            <p class="text-gray-700">We deliver clear next steps so insights become measurable results.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Maximise the Value of Your Data</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">Let’s identify quick wins and build a roadmap for dashboards, analytics and AI that fits your business.</p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { UButton } from "#components";
</script>

<style scoped>
.computemore-analysis-page { font-family: 'Inter', sans-serif; }
.service-card { background-color: #ffffff; }

@keyframes pulse-anim { 0% { opacity: .08 } 50% { opacity: .14 } 100% { opacity: .08 } }
.animate-pulse { animation: pulse-anim 4s ease-in-out infinite; }
</style>
