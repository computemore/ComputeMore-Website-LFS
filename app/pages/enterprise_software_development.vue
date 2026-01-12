<template>
  <div class="computemore-development-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-5 text-center -mt-16 sm:-mt-20 md:mt-0">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Enterprise Software Development</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Custom software solutions, robust APIs, and seamless integrations that deliver measurable business value and competitive advantage.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-green-600 font-semibold rounded hover:bg-gray-100">
        Request a Consultation
      </button>
    </section>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            About ComputeMore Development
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore specializes in enterprise-grade software that connects systems, unlocks data, and drives ROI. We build secure APIs, integrate complex third-party services like Google Maps and payment gateways, and develop applications that scale with your business.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Our development approach emphasizes security, performance, and maintainability. From authenticated OpenAPI specifications to real-time integrations, we deliver solutions that meet enterprise standards and exceed user expectations.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Development Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Custom software, secure APIs, and seamless integrations that deliver measurable business impact.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Custom API Development</h3>
          <p class="text-gray-700">Secure, well-documented REST and GraphQL APIs with authentication, rate limiting, and OpenAPI specifications for seamless integration.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Third-Party API Integration</h3>
          <p class="text-gray-700">Connect your applications with Google Maps, payment processors, CRM systems, and other external services to enhance functionality and user experience.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Secure Application Development</h3>
          <p class="text-gray-700">Enterprise applications built with security-first principles including authentication, authorization, encryption, and compliance standards.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Location-Based Solutions</h3>
          <p class="text-gray-700">Google Maps integration, geolocation services, and spatial data visualization to power logistics, delivery, and customer engagement apps.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Enterprise System Integration</h3>
          <p class="text-gray-700">Connect internal systems, legacy platforms, and modern cloud services to create unified workflows and eliminate data silos.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">API Documentation & Developer Tools</h3>
          <p class="text-gray-700">Comprehensive OpenAPI specs, developer portals, and SDKs that make your APIs easy to adopt and integrate.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Proven ROI Delivery</h3>
            <p class="text-gray-700">We build solutions that measurably improve efficiency, reduce costs, and unlock new revenue opportunities for your business.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Security & Compliance Focus</h3>
            <p class="text-gray-700">Every application is built with enterprise-grade security, authentication, and compliance standards at its core.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Integration Expertise</h3>
            <p class="text-gray-700">Extensive experience connecting complex external APIs and building robust, scalable integration architectures.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Build Software That Drives Results</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Let ComputeMore develop secure, integrated solutions that connect your systems, serve your customers, and deliver measurable business impact.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDevelopmentPage",
};
</script>

<style scoped>
.computemore-development-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
