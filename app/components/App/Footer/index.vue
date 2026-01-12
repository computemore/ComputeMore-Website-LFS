<template>
  <!-- Enterprise Corporate Footer -->
  <footer class="bg-blue-900 text-gray-300 pt-20 pb-10 border-t border-blue-800">
    <div class="max-w-7xl mx-auto px-6">

      <!-- Top Row -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-12">

        <!-- Brand -->
        <div class="md:col-span-2">
          <NuxtLink to="/" class="text-xl font-semibold">
            <NuxtImg 
              src="/Internal/Main-Logo_2b.png" 
              class="h-16 md:h-20 w-auto object-contain" 
              alt="Company Logo" 
            />
          </NuxtLink>

          <p class="text-gray-200 leading-relaxed max-w-sm">
            Delivering secure, scalable, and enterprise-grade digital solutions
            trusted by businesses worldwide.
          </p>

          <!-- Social Icons -->
          <div class="flex space-x-5 mt-6">
            <a href="#" class="text-gray-300 hover:text-white transition text-xl">
              <i class="i-fa6-brands-linkedin"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition text-xl">
              <i class="i-fa6-brands-twitter"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition text-xl">
              <i class="i-fa6-brands-github"></i>
            </a>
          </div>
        </div>

        <!-- SOLUTIONS -->
        <div>
          <h3 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Solutions
          </h3>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="/advanced_analytics_ai" class="hover:text-white transition">Advanced Analytics & AI</NuxtLink></li>
            <li><NuxtLink to="/cloud_solutions" class="hover:text-white transition">Cloud Solutions & DevOps</NuxtLink></li>
            <li><NuxtLink to="/data_engineering_management" class="hover:text-white transition">Database Engineering & Management</NuxtLink></li>
            <li><NuxtLink to="/enterprise_software_development" class="hover:text-white transition">Enterprise Software Development</NuxtLink></li>
            <li><NuxtLink to="/hardware_devices" class="hover:text-white transition">Computer Hardware & Devices</NuxtLink></li>
            <li><NuxtLink to="/ict_consultancy" class="hover:text-white transition">ICT Consultancy</NuxtLink></li>
            <li><NuxtLink to="/payment_solutions" class="hover:text-white transition">Payment Solutions</NuxtLink></li>
            <li><NuxtLink to="/website_and_webapp_development" class="hover:text-white transition">Website & WebApp Development</NuxtLink></li>
            <li><NuxtLink to="/web_hosting_dns" class="hover:text-white transition">Web Hosting & Domain Name Services</NuxtLink></li>
          </ul>
        </div>

        <!-- COMPANY -->
        <div>
          <h3 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Company
          </h3>
          <ul class="space-y-2 text-gray-300">
            <li><NuxtLink to="/about" class="hover:text-white transition">About</NuxtLink></li>
            <li><NuxtLink to="/team" class="hover:text-white transition">Leadership</NuxtLink></li>
            <!-- <li><NuxtLink to="/newsroom" class="hover:text-white transition">Newsroom</NuxtLink></li>
            <li><NuxtLink to="/careers" class="hover:text-white transition">Careers</NuxtLink></li> -->
          </ul>
        </div>

        <!-- SUPPORT -->
        <!-- <div>
          <h3 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Support
          </h3>
          <ul class="space-y-2 text-gray-300">
            <li><a href="#" class="hover:text-white transition">Help Center</a></li>
            <li><a href="#" class="hover:text-white transition">Security</a></li>
            <li><a href="#" class="hover:text-white transition">Documentation</a></li>
            <li><a href="#" class="hover:text-white transition">Service Status</a></li>
          </ul>
        </div> -->

        <!-- CONTACT -->
        <div>
          <h3 class="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">
            Contact Us
          </h3>
          <p class="text-gray-300 mb-4">
            Have questions or need assistance? Our team is here to help you.
          </p>
          <NuxtLink to="/contact" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
            Get in Touch
          </NuxtLink>
        </div>
        
        <!-- Social Icons (update with real links) -->
        <!-- <div class="flex space-x-5 mt-6"> -->
          <!-- <a href="https://www.linkedin.com/company/computemore" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition text-xl">
            <i class="i-fa6-brands-linkedin"></i>
          </a>
          <a href="https://twitter.com/computemore" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition text-xl">
            <i class="i-fa6-brands-twitter"></i>
          </a> -->
          <!-- <a href="https://github.com/computemore" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition text-xl"> -->
            <!-- <i class="i-fa6-brands-github"></i> -->
          <!-- </a> -->
        <!-- </div> -->

      </div>

      <!-- Divider -->
      <div class="border-t border-blue-800 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-300 text-sm">
          © {{ currentYear }} ComputeMore Africa Technologies Limited. All rights reserved.
        </p>

        <!-- <div class="flex space-x-6 text-sm">
          <a href="#" class="text-gray-300 hover:text-white transition">Privacy Policy</a>
          <a href="#" class="text-gray-300 hover:text-white transition">Terms of Service</a>
          <a href="#" class="text-gray-300 hover:text-white transition">Compliance</a>
        </div> -->
      </div>

    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
a {
  transition: color 0.2s ease;
}
</style>
