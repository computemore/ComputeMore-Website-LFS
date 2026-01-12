<template>
  <div class="computemore-page">
    <!-- Hero Section -->
    <section class="hero bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 px-5 text-center -mt-16 sm:-mt-20 md:mt-0">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">ICT Consultancy</h1>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto">
        Strategic ICT guidance, hardware procurement expertise, and knowledge transfer through professional training and technical webinars.
      </p>
      <button class="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
        Book a Consultation
      </button>
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
            ComputeMore provides independent ICT consultancy that bridges technology and business strategy. We advise on system integration, hardware procurement, and how to embed technology effectively into your operations for measurable performance improvements.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Beyond consulting, we deliver professional training through webinars and lectures in Data Science, Computational Mechanics, and emerging ICT domains—helping teams build the skills they need to leverage technology confidently.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our ICT Consultancy Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Strategic guidance, procurement expertise, and knowledge transfer to optimize your technology investments.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">ICT Strategy & Digital Transformation</h3>
          <p class="text-gray-700">Strategic roadmaps that align technology investments with business objectives, streamline workflows, and position your organization for growth.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">ICT Integration & Process Optimization</h3>
          <p class="text-gray-700">Expert guidance on integrating technology into core business processes to improve efficiency, reduce costs, and enhance service delivery.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Hardware Procurement & Vendor Management</h3>
          <p class="text-gray-700">Independent advice on hardware selection, vendor evaluation, procurement strategy, and total cost of ownership analysis.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Technology Assessment & Due Diligence</h3>
          <p class="text-gray-700">Objective evaluation of existing systems, proposed solutions, and technology partners to inform investment decisions.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Data Science Webinars & Training</h3>
          <p class="text-gray-700">Professional development sessions covering Data Science, machine learning, analytics techniques, and practical applications.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Computational Mechanics & Technical Lectures</h3>
          <p class="text-gray-700">Specialized lectures and seminars on Computational Mechanics, engineering simulations, and advanced technical topics.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Independent & Objective</h3>
            <p class="text-gray-700">Vendor-neutral advice focused solely on delivering the best outcomes for your organization.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Business-Focused Approach</h3>
            <p class="text-gray-700">We bridge the gap between technology and business strategy to ensure investments drive real value.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Knowledge Transfer</h3>
            <p class="text-gray-700">Comprehensive training programs and webinars that build in-house capability and technical confidence.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Make Smarter ICT Decisions</h2>
      <p class="text-lg mb-6 max-w-xl mx-auto">
        Connect with our ICT consultants for independent advice on strategy, procurement, integration, or to arrange technical training for your team.
      </p>
      <NuxtLink to="/contact" class="bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition">Get Started</NuxtLink>
    </div>
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
