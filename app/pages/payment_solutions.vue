<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center -mt-16 sm:-mt-20 md:mt-0">
      <img src="/payment_solutions.svg" alt="Hosting Hero" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Payment Solutions</h1>
        <p class="text-lg text-gray-200">Quick and efficient payment management solutions with Yoco, PayChangu (Malawi), payment databases, and seamless integration for your business.</p>
      </div>
    </div>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Comprehensive Payment Management Solutions
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore helps businesses implement quick and efficient payment solutions with trusted providers like Yoco and PayChangu (Malawi). We handle payment gateway integration, transaction management, and secure payment processing to streamline your revenue collection.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            From designing and implementing payment databases to integrating payment APIs and building custom payment management systems, we ensure your business can accept payments securely and efficiently while maintaining full control over transaction data.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Payment Solutions Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Complete payment integration, database design, and management solutions for efficient and secure transaction processing.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Yoco Payment Integration</h3>
          <p class="text-gray-700">Seamless integration with Yoco payment systems for quick, secure card and mobile payments in South Africa.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">PayChangu Integration (Malawi)</h3>
          <p class="text-gray-700">Expert integration with PayChangu for efficient mobile money and digital payment solutions in Malawi.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Payment Database Design & Implementation</h3>
          <p class="text-gray-700">Custom payment databases to track transactions, reconcile payments, and maintain complete financial records.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Payment Gateway Integration</h3>
          <p class="text-gray-700">API integration with multiple payment gateways for card processing, mobile wallets, and digital transactions.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Transaction Management Systems</h3>
          <p class="text-gray-700">Build custom systems for payment tracking, reconciliation, reporting, and analytics to manage your revenue flow.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Secure Payment Processing</h3>
          <p class="text-gray-700">PCI-compliant payment handling with encryption, fraud detection, and secure transaction processing protocols.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Regional Expertise</h3>
            <p class="text-gray-700">Deep knowledge of Yoco, PayChangu (Malawi), and regional payment ecosystems for quick deployment.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Custom Database Solutions</h3>
            <p class="text-gray-700">Tailored payment databases and transaction management systems built for your specific business needs.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">End-to-End Integration</h3>
            <p class="text-gray-700">Complete payment solution from API integration to database design, reporting, and ongoing support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Streamline Your Payment Management</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Let ComputeMore implement efficient payment solutions with Yoco, PayChangu, or custom payment systems to simplify your transaction processing.
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
