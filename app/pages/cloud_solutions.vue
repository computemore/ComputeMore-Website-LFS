<template>
  <div class="computemore-data-center-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20 px-5 text-center relative -mt-16 sm:-mt-20 md:mt-0">
      <img src="https://via.placeholder.com/1500x400" alt="Data center hero" class="absolute inset-0 w-full h-full object-cover opacity-20">
      <div class="relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Cloud Solutions & DevOps</h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto">
          Modern cloud infrastructure and DevOps practices that accelerate deployment, improve reliability, and scale with your growth.
        </p>
        <button class="mt-6 px-6 py-3 bg-white text-gray-800 font-semibold rounded hover:bg-gray-100">
          Request a Consultation
        </button>
      </div>
    </section>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Cloud Infrastructure & DevOps Excellence
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore delivers cloud-native solutions that modernize your infrastructure and streamline your deployment pipelines. We help organizations migrate to the cloud, automate operations, and achieve continuous delivery at scale.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Our team brings hands-on experience with industry-leading platforms including AWS, Docker containerization, Cloud Run, Render, and VPS solutions—ensuring your applications are deployed efficiently, monitored effectively, and maintained with best practices.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Cloud & DevOps Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">End-to-end cloud solutions from infrastructure design to automated deployment and monitoring.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Cloud Migration & Architecture</h3>
          <p class="text-gray-700">Strategic cloud migration planning and architecture design for AWS, Google Cloud, and hybrid cloud environments.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Container Orchestration & Deployment</h3>
          <p class="text-gray-700">Docker containerization, Cloud Run deployments, and orchestration strategies for scalable application hosting.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">CI/CD Pipeline Automation</h3>
          <p class="text-gray-700">Automated build, test, and deployment pipelines that accelerate delivery and reduce manual errors.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">VPS & Infrastructure Management</h3>
          <p class="text-gray-700">Virtual private server setup, configuration, and ongoing management for cost-effective, reliable hosting.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Monitoring & Incident Response</h3>
          <p class="text-gray-700">Real-time monitoring, alerting, and automated incident response to maintain uptime and performance.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Infrastructure as Code</h3>
          <p class="text-gray-700">Automated infrastructure provisioning with version control, repeatability, and compliance built in.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Cloud Platform Mastery</h3>
            <p class="text-gray-700">Extensive experience across AWS, Google Cloud Run, Render, and VPS platforms for diverse deployment needs.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">DevOps Best Practices</h3>
            <p class="text-gray-700">Proven automation workflows with Docker, CI/CD pipelines, and infrastructure-as-code methodologies.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Scalable & Resilient</h3>
            <p class="text-gray-700">We design cloud infrastructure that scales efficiently and maintains high availability under any load.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Accelerate Your Cloud Journey</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Let ComputeMore modernize your infrastructure with cloud solutions and DevOps practices that drive efficiency and innovation.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputeMoreDataCenterPage",
};
</script>

<style scoped>
.computemore-data-center-page {
  font-family: 'Inter', sans-serif;
}

.service-card {
  background-color: #ffffff;
}
</style>
