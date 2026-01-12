<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center -mt-16 sm:-mt-20 md:mt-0">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600" alt="Computers & Devices" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Computer Hardware & Devices</h1>
        <p class="text-lg text-gray-200">Enterprise-grade device procurement services—from GPS trackers and payment terminals to high-performance laptops for your team.</p>
      </div>
    </div>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Expert Hardware Procurement & Device Solutions
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore specializes in sourcing and delivering the right hardware for your business needs. From GPS trackers for logistics, payment devices for retail operations, to enterprise-grade laptops for your workforce—we handle device procurement, configuration, and deployment.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Our consulting approach ensures you invest in devices that match your operational requirements, integrate seamlessly with existing systems, and deliver lasting value across your organization.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Hardware & Device Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Complete device procurement, configuration, and deployment for business operations and technology enablement.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Device Procurement Consulting</h3>
          <p class="text-gray-700">Expert guidance on selecting the right hardware, vendor evaluation, and procurement strategy to optimize your technology investments.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">GPS Trackers & Location Devices</h3>
          <p class="text-gray-700">Fleet management trackers, asset monitoring devices, and location-based hardware for logistics and operations management.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Payment Terminals & POS Devices</h3>
          <p class="text-gray-700">Modern payment devices, card readers, and point-of-sale systems for retail, hospitality, and service businesses.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">High-Performance Laptops & Workstations</h3>
          <p class="text-gray-700">Enterprise-grade laptops, workstations, and computing devices optimized for productivity, performance, and reliability.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Mobile Phones & Communication Devices</h3>
          <p class="text-gray-700">Business smartphones, mobile devices, and communication equipment for your team with bulk procurement pricing.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Device Configuration & Deployment</h3>
          <p class="text-gray-700">Pre-configuration, imaging, software installation, and organized deployment to get your team up and running quickly.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Vendor-Neutral Advice</h3>
            <p class="text-gray-700">Independent guidance focused on finding the best hardware solutions for your specific business requirements.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Specialized Devices</h3>
            <p class="text-gray-700">Access to GPS trackers, payment terminals, high-performance laptops, and other specialized equipment for business operations.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Full Lifecycle Support</h3>
            <p class="text-gray-700">From procurement consulting and configuration to deployment and ongoing device management support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Equip Your Business with the Right Hardware</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Let ComputeMore source and deliver specialized devices—GPS trackers, mobile phones, payment terminals, and performance laptops—tailored to your operational needs.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Contact Us</NuxtLink>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
</style>