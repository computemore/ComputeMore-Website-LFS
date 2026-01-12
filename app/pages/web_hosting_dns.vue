<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center -mt-16 sm:-mt-20 md:mt-0">
      <img src="/network_hero.svg" alt="Hosting Hero" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Web Hosting & Domain Name Services</h1>
        <p class="text-lg text-gray-200">Complete domain registration, professional hosting, private email, and managed web services to establish your online presence with confidence.</p>
      </div>
    </div>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Complete Web Hosting & Domain Solutions
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore handles the full lifecycle of your online presence—from registering the perfect domain name and connecting it to your website, to setting up professional email addresses and managing ongoing hosting requirements.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            We simplify domain procurement, DNS configuration, SSL certificate installation, and email hosting so you can focus on your business while we ensure your web services run reliably and securely.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Hosting & Domain Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">End-to-end web services from domain registration to hosting, email, and ongoing management.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Domain Registration & Management</h3>
          <p class="text-gray-700">Search, purchase, and register the perfect domain name for your brand with full ownership and renewal management.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Domain-to-Website Connection</h3>
          <p class="text-gray-700">Complete DNS configuration and domain connection to ensure your website goes live smoothly with proper SSL setup.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Private Email Hosting</h3>
          <p class="text-gray-700">Professional email addresses using your domain name with secure hosting, spam filtering, and reliable delivery.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Web Hosting & Server Management</h3>
          <p class="text-gray-700">Reliable shared and managed hosting with regular backups, security updates, and performance monitoring.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">SSL Certificates & Security</h3>
          <p class="text-gray-700">Install and manage SSL certificates to secure your website and build trust with visitors and search engines.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Ongoing Managed Services</h3>
          <p class="text-gray-700">Continuous monitoring, updates, renewals, and technical support to keep your web presence running smoothly.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Full-Service Management</h3>
            <p class="text-gray-700">We handle domain procurement, DNS setup, email configuration, and hosting—all in one place.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Trusted Partnerships</h3>
            <p class="text-gray-700">Powered by industry-leading providers like Namecheap for reliability, security, and competitive pricing.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Expert Support</h3>
            <p class="text-gray-700">Ongoing technical support and proactive management to keep your online presence secure and accessible.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Secure Your Domain & Launch Your Website</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Let ComputeMore register your domain, set up professional email, and manage your hosting so you can establish a strong online presence.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
  </section>
</template>

<script setup>
// No script needed for now
</script>

<style scoped>
</style>
