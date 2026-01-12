<template>
  <section class="w-full">
    <!-- Hero Section -->
    <div class="relative bg-gray-900 text-white py-24 px-6 text-center -mt-16 sm:-mt-20 md:mt-0">
      <img src="/website_hero.svg" alt="Hosting Hero" class="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div class="relative z-10 max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold mb-4">Website & Webapp Development</h1>
        <p class="text-lg text-gray-200">Highly responsive enterprise websites and powerful web applications built with modern frameworks—Node.js, React, Vue, .NET, Django, and more.</p>
      </div>
    </div>

    <!-- About Section (index style spacing and layout) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gray-50">
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div class="text-center relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        <div>
          <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            Modern Web Development Expertise
          </h2>
          <p class="text-sm sm:text-base md:text-lg opacity-90 mb-4 leading-relaxed text-gray-700">
            ComputeMore builds highly responsive enterprise websites and web applications using industry-leading frameworks. From front-end interfaces with React and Vue to robust back-end services with Node.js, .NET, Django, and Flask—we deliver solutions that scale and perform.
          </p>
          <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700">
            Our full-stack development capabilities span TypeScript, C# ASP.NET Core, Python, and modern build tools like Vite, ensuring your web presence is fast, maintainable, and built for long-term success.
          </p>
        </div>
      </div>
    </section>

    <!-- Services (cards) -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white">
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Our Web Development Services</h2>
        <p class="max-w-2xl mx-auto text-sm sm:text-base text-gray-600">Custom websites, web applications, and web services built with cutting-edge frameworks and best practices.</p>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Enterprise Website Development</h3>
          <p class="text-gray-700">Highly responsive, multi-language enterprise websites optimized for performance, accessibility, and search engines.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">React & Vue Front-End Development</h3>
          <p class="text-gray-700">Modern, interactive user interfaces built with React, Vue, and Vite for fast, component-based development.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Node.js & TypeScript Back-End Services</h3>
          <p class="text-gray-700">Scalable server-side applications and APIs built with Node.js and TypeScript for type-safe, maintainable code.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">.NET & ASP.NET Core Development</h3>
          <p class="text-gray-700">Enterprise-grade web applications and web services built with C#, ASP.NET Core, and the .NET ecosystem.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Django & Flask Python Web Apps</h3>
          <p class="text-gray-700">Rapid development of data-driven web applications using Django and Flask frameworks with Python.</p>
        </div>

        <div class="service-card p-6 border rounded shadow hover:shadow-lg transition flex flex-col items-start">
          <h3 class="text-xl font-semibold mb-2">Full-Stack Web Application Development</h3>
          <p class="text-gray-700">Complete web applications combining modern front-end frameworks with robust back-end services and databases.</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Section (index style) -->
    <section class="py-16 px-5 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">Why Choose ComputeMore?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Multi-Framework Expertise</h3>
            <p class="text-gray-700">Deep knowledge across React, Vue, Node.js, TypeScript, .NET, Django, Flask, and modern build tools.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Enterprise-Grade Quality</h3>
            <p class="text-gray-700">Highly responsive, scalable web solutions built with performance, security, and maintainability in mind.</p>
          </div>
          <div class="flex flex-col items-center">
            <h3 class="text-xl font-semibold mb-2">Full-Stack Capabilities</h3>
            <p class="text-gray-700">Complete development services from modern front-end interfaces to robust back-end web services and APIs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div class="py-20 px-6 text-center">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600" class="mx-auto rounded-xl shadow-lg mb-8 max-h-72 object-cover" />
      <h2 class="text-3xl font-bold mb-4">Build Your Next Web Application</h2>
      <p class="text-gray-700 mb-8 max-w-2xl mx-auto">
        Let ComputeMore develop a responsive website or powerful web application using the right frameworks and technologies for your business needs.
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
