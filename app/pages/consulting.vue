<template>
  <div class="computemore-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-5 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore ICT Solutions</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Driving digital transformation with smart ICT strategies, innovative solutions, and expert consultancy.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Book a Consultation
      </button>
    </section>

    <!-- About Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">About ComputeMore</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore is a forward-thinking ICT consultancy that helps businesses, organizations, and governments optimize their technology landscape. We combine strategy, innovation, and technical expertise to deliver results that matter.
        </p>
        <p class="text-gray-700 leading-relaxed">
          From digital transformation roadmaps to cybersecurity, cloud adoption, and custom software solutions, our team ensures that technology investments align with your objectives, streamline operations, and enhance growth.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">ICT Strategy & Planning</h3>
            <p class="text-gray-700">
              We provide bespoke ICT strategies, helping you plan technology adoption, align systems with business goals, and improve operational efficiency.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Cybersecurity & Risk Management</h3>
            <p class="text-gray-700">
              Protect your organization with proactive cybersecurity solutions, risk assessment, and compliance guidance.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Cloud & Infrastructure</h3>
            <p class="text-gray-700">
              Leverage cloud platforms, optimize infrastructure, and ensure high availability for your applications and data.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Custom Software Development</h3>
            <p class="text-gray-700">
              We build software tailored to your business processes, including ERP, CRM, and mobile applications.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Data Analytics & Visualization</h3>
            <p class="text-gray-700">
              Transform your data into actionable insights with dashboards, predictive analytics, and reporting solutions.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Training & Capacity Building</h3>
            <p class="text-gray-700">
              Build in-house ICT skills through workshops, training sessions, and hands-on technical guidance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 class="text-xl font-semibold mb-3">Expert Team</h3>
            <p class="text-gray-700">Our consultants bring years of ICT experience across diverse industries and technologies.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Tailored Solutions</h3>
            <p class="text-gray-700">We analyze your unique challenges to deliver solutions that truly fit your needs.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Innovative Approach</h3>
            <p class="text-gray-700">We stay ahead with the latest ICT trends and tools to maximize your competitive advantage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-indigo-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Transform Your Business with ComputeMore</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Get in touch with our ICT experts today for a personalized consultation and discover how technology can drive your success.
      </p>
      <button class="px-6 py-3 bg-white text-indigo-600 font-semibold rounded hover:bg-gray-100">
        Contact Us Now
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMorePage",
};
</script>

<style scoped>
.computemore-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
