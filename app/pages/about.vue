<template>
  <div class="w-full">

    <!-- === HERO: CLEAN CORPORATE SPLIT LAYOUT === -->
    <section class="relative bg-white dark:bg-gray-900 py-28 px-6 border-b border-gray-200/60 dark:border-gray-700/40 -mt-16 sm:-mt-20 md:mt-0 pb-18">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <!-- Text -->
        <div v-motion :initial="{ opacity: 0, x: -40 }" :enter="{ opacity: 1, x: 0, transition: { duration: 700 } }" class="space-y-6">
          <h1 class="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">Empowering People Through Better Business Technology</h1>
          <p class="text-lg opacity-80 leading-relaxed">
            At ComputeMore, we build tools that simplify workflows and help businesses thrive in a digital world. These business solutions are designed with scalability, security, and user experience in mind, ensuring they meet the evolving needs of modern enterprises.
          </p>
        </div>

        <!-- Image -->
        <div v-motion :initial="{ opacity: 0, x: 40 }" :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 150 } }">
          <img src="/about.jpg" alt="Corporate Hero" class="rounded-3xl shadow-2xl w-full object-cover -mt-12" />
        </div>
      </div>
    </section>

    <!-- === COMPANY VALUES STRIP === -->
    <section class="pb-20 text-white pt-16 mb-10 bg-gray-900 dark:bg-black border-b border-gray-800/60 dark:border-gray-700/40">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">Innovation</h3>
          <p class="opacity-70">Designing forward-thinking solutions for tomorrow.</p>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">Integrity</h3>
          <p class="opacity-70">Building trustworthy tools with transparency and care.</p>
        </div>
        <div class="space-y-4">
          <h3 class="text-2xl font-bold">People First</h3>
          <p class="opacity-70">Crafting technology that makes life simpler for everyone.</p>
        </div>
      </div>
    </section>

    <!-- === MISSION & VISION (SIDE-BY-SIDE RESPONSIVE) === -->
    <section class="pt-0 px-6 max-w-7xl mx-auto pt-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold">Mission & Vision</h2>
        <p class="text-lg opacity-75 max-w-2xl mx-auto mt-2">What drives us forward and shapes our future.</p>
      </div>

      <div class="text-center grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-gray-800 p-12 rounded-3xl  border border-gray-200/50 dark:border-gray-700/40 -mt-6">
        <div class="space-y-4">
          <h3 class="text-xl font-bold">Our Mission</h3>
          <p class="text-lg opacity-80 leading-relaxed">
            To make technology lighter, more intuitive, and more empowering for people all over the world.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-bold">Our Vision</h3>
          <p class="text-lg opacity-80 leading-relaxed">
            A world where advanced computing feels as natural as breathing — powerful, accessible, and effortless for everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- === WHAT WE DO === -->
    <section class="text-center py-28 px-6 bg-gray-50 dark:bg-gray-900/30 border-y border-gray-200/60 dark:border-gray-700/40 pb-6 pt-24">
      <div class="max-w-7xl mx-auto text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">What We Do</h2>
        <p class="text-lg opacity-80 max-w-3xl mx-auto">
          Practical, polished solutions that help people accomplish more with confidence.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto -mt-6">
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Smart Tools</h3>
          <p class="opacity-80">Designed to streamline tasks, reduce clutter, and help teams stay focused.</p>
        </div>
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Web Development</h3>
           <p class="opacity-80">Crafting fast, secure, and scalable web apps and websites built for modern business needs.</p>
        </div>
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Data Trainings</h3>
          <p class="opacity-80">Empowering teams with hands-on training in modern data tools and workflows.</p>
        </div>
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Modern UX</h3>
          <p class="opacity-80">Clear, intuitive interfaces crafted for humansnot systems.</p>
        </div>
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
  <h3 class="text-xl font-semibold mb-3">Mobile App Development</h3>
  <p class="opacity-80">
    Designing high-performance, user-friendly mobile apps that bring your ideas to life on any device.
  </p>
</div>

        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Future-Ready</h3>
          <p class="opacity-80">Scalable solutions that grow with your team and your needs.</p>
        </div>
        <div class="p-10 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover: transition">
          <h3 class="text-xl font-semibold mb-3">Web Hosting</h3>
          <p class="opacity-80">Reliable, scalable hosting solutions to keep your digital presence fast and secure.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>


</script>

<style scoped>
</style>
