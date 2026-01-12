<template>
  <div class="computemore-support-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20 px-5 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ComputeMore IT Support</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Reliable IT support and managed services to keep your business systems running smoothly and efficiently.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Request Support
      </button>
    </section>

    <!-- About Support Section -->
    <section class="about py-16 px-5 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">About ComputeMore Support</h2>
        <p class="text-gray-700 leading-relaxed mb-4">
          ComputeMore Support provides professional IT assistance to businesses, organizations, and institutions. Our goal is to ensure your technology environment is secure, reliable, and always available.
        </p>
        <p class="text-gray-700 leading-relaxed">
          From troubleshooting issues to proactive monitoring and maintenance, we offer flexible support packages tailored to your needs. Our team is available to resolve technical challenges quickly, minimizing downtime and maximizing productivity.
        </p>
      </div>
    </section>

    <!-- Support Services Section -->
    <section class="services py-16 px-5">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Support Services</h2>
        <div class="grid md:grid-cols-3 gap-10">
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">24/7 Helpdesk Support</h3>
            <p class="text-gray-700">
              Our helpdesk team is available around the clock to troubleshoot hardware, software, and network issues, ensuring your operations never stop.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">System Maintenance & Monitoring</h3>
            <p class="text-gray-700">
              Proactive monitoring of your IT systems to detect issues before they become critical. Regular maintenance keeps your infrastructure secure and efficient.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Managed IT Services</h3>
            <p class="text-gray-700">
              Outsource your IT management to ComputeMore for comprehensive support, including servers, networks, software, and end-user devices.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Network & Infrastructure Support</h3>
            <p class="text-gray-700">
              Ensure reliable connectivity and optimized network performance with expert configuration, troubleshooting, and upgrades.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Cybersecurity Support</h3>
            <p class="text-gray-700">
              Protect your business from cyber threats with monitoring, vulnerability assessments, and rapid incident response.
            </p>
          </div>
          <div class="service-card p-6 border rounded shadow hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-3">Remote & On-site Assistance</h3>
            <p class="text-gray-700">
              Flexible support options including remote troubleshooting or on-site visits to resolve complex technical issues efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose ComputeMore Support Section -->
    <section class="why-choose-us py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">Why Choose ComputeMore Support</h2>
        <div class="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 class="text-xl font-semibold mb-3">Rapid Response</h3>
            <p class="text-gray-700">Our team responds quickly to technical issues, minimizing downtime and disruption to your business.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Expert Technicians</h3>
            <p class="text-gray-700">Certified IT professionals with experience across multiple technologies provide reliable solutions.</p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-3">Proactive Support</h3>
            <p class="text-gray-700">We identify potential problems early, preventing costly outages and keeping your systems secure.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta bg-blue-600 text-white py-20 px-5 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Need IT Support? ComputeMore Has You Covered</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Contact our support team today and ensure your business systems are always up and running without interruptions.
      </p>
      <button class="px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Request Support Now
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreSupportPage",
};
</script>

<style scoped>
.computemore-support-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
