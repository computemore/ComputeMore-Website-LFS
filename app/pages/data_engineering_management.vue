<template>
  <div class="computemore-data-warehouse-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-5 text-center relative -mt-16 sm:-mt-20 md:mt-0">
      <img src="https://via.placeholder.com/1500x500" 
           alt="Data warehouse" 
           class="absolute inset-0 w-full h-full object-cover opacity-20">

      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Data Engineering & Management</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Centralize, organize, and optimize your business data for analytics, reporting, and strategic insights.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded hover:bg-gray-100">
          Book a Free Assessment
        </button>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Build a Strong Data Foundation</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Let ComputeMore design and manage your enterprise data warehouse for powerful analytics and insights.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDataWarehousePage",
};
</script>

<style scoped>
.computemore-data-warehouse-page {
  font-family: 'Inter', sans-serif;
}
.service-card {
  background-color: #ffffff;
}
</style>
