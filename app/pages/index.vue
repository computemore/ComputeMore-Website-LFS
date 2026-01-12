<template>
  <!-- Hero Section -->
  <div>
    <!-- HERO SECTION -->
    <div class="relative w-full -mt-16 sm:-mt-20 md:mt-0">
      <section 
        class="relative text-white min-h-[85vh] sm:h-[90vh] md:h-[85vh] lg:h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-top md:bg-center px-4 sm:px-6"
        style="background-image: url('/hero.png');"
      >
        <!-- gradient background (bottom layer) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/25 to-black/5 pointer-events-none"></div>

        <!-- noise overlay (middle layer) -->
        <div class="absolute inset-0 z-20 pointer-events-none opacity-10 md:opacity-20 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <!-- NEW: bottom fade into next section -->
        <div class="absolute inset-x-0 bottom-0 h-32 md:h-48 lg:h-60 bg-gradient-to-b from-transparent to-blue-500/100 pointer-events-none z-10"></div>

        <!-- text (top layer) -->
        <div class="relative z-30 text-center max-w-xl sm:max-w-3xl md:max-w-5xl">
          <h1 class="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight">
            Advancing the Future of Corporate Technology in Africa
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl opacity-95 mb-6 leading-relaxed max-w-3xl mx-auto">
            Enterprise solutions engineered for scalability, security, and performance in the ever-expanding digital ecosystem
          </p>
          <NuxtLink to="/contact">
            <UButton 
              class="px-5 py-3 text-base sm:text-base md:text-lg lg:text-xl bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              color="secondary">Contact Us
            </UButton>
          </NuxtLink>
        </div>
      </section>
    </div>

    <!-- ABOUT SECTION -->
    <section 
      class="py-18 sm:py-12 md:py-18 lg:py-24 relative bg-gradient-to-b from-blue-500/100 via-blue-400/50 via-blue-200/15 to-white dark:to-gray-900"
    >
      <!-- pulsating noise overlay (like hero) -->
      <div class="absolute inset-0 z-10 pointer-events-none opacity-10 md:opacity-15 animate-pulse bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <!-- NEW: bottom fade into next section -->
      <div class="absolute inset-x-0 bottom-0 h-24 md:h-32 lg:h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>

      <div class="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6">
        <div>
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight text-white">
            Who We Are
          </h2>
          <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-100 mb-6 leading-relaxed max-w-3xl mx-auto text-white">
            We are a corporate technology powerhouse specializing in enterprise automation, cloud architecture, AI solutions, and next-gen infrastructure systems.
          </p>
          <NuxtLink to="/about">
            <UButton 
              class="px-5 py-3 text-base sm:text-base md:text-lg lg:text-xl bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              color="secondary">Learn More
            </UButton>
          </NuxtLink>
        </div>

        <div class="rounded-2xl overflow-hidden shadow-xl">
          <img src="/circuit.jpg" />
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white dark:bg-gray-900">
      <div class="text-center mb-16">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Our Services
        </h2>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <UCard v-for="service in services" :key="service.title" class="p-6 text-center">
          <component :is="service.icon" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p class="opacity-70 text-sm">{{ service.description }}</p>
        </UCard>
      </div>
    </section>

    <!-- CLIENT SLIDER -->
    <section class="py-18 sm:py-12 md:py-18 lg:py-24 bg-white dark:bg-gray-900">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Trusted by Global Leaders
        </h2>
        <p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-85 mb-6 leading-relaxed max-w-3xl mx-auto">
          Our technology powers and is backed by world‑class organizations
        </p>
      </div>
      <div class="overflow-hidden whitespace-nowrap relative w-full">
        <div class="flex gap-16 animate-slide py-8">
          <div class="flex gap-16 animate-slide">
            <a 
              v-for="logo in images"
              :key="logo.src"
              :href="logo.href || '#'"
              class="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                :src="logo.src" 
                :alt="logo.alt || 'partner logo'" 
                class="h-24 w-auto opacity-70 hover:opacity-100 transition"
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM SECTION -->
    <section class="py-24 bg-gradient-to-br to-blue-600 via-blue-700 from-green-500 text-white">
      <div class="text-center mb-16">
        <h2 class="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight text-white">
          Leadership Team
        </h2>
      </div>

      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        <div
          v-for="member in team"
          :key="member.name"
          class="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl"
        >
          <img :src="member.image" class="w-full rounded-xl shadow-lg mb-4" />
          <h3 class="text-lg font-semibold text-white">{{ member.name }}</h3>
          <p class="text-sm opacity-90 mb-2">{{ member.role }}</p>

          <div class="flex justify-center gap-4 text-gray-200">
            <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank" class="hover:text-white">Twitter</a>
            <a v-if="member.social.linkedin" :href="member.social.linkedin" target="_blank" class="hover:text-white">LinkedIn</a>
            <a v-if="member.social.github" :href="member.social.github" target="_blank" class="hover:text-white">GitHub</a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { UButton, UCard } from "#components";
import { Cpu, Cloud, ShieldCheck, BarChart3, Layers, Database} from "lucide-vue-next";
import NewsLetter from "~/components/App/NewsLetter.vue";

useHead({
  title: 'ComputeMore Africa Technologies — Home',
  meta: [
    { name: 'description', content: 'ComputeMore builds tools that simplify workflows and help businesses thrive.' },
    { property: 'og:title', content: 'ComputeMore Africa Technologies' },
    { property: 'og:description', content: 'ComputeMore builds tools that simplify workflows and help businesses thrive.' }
  ]
})

const services = [
  {
    title: "AI Automation",
    description: "Transform operations with intelligent automation at enterprise scale.",
    icon: Cpu
  },
  {
    title: "Cloud Architecture",
    description: "Secure, scalable cloud-native infrastructure built for global deployment.",
    icon: Cloud
  },
  {
    title: "Cybersecurity",
    description: "Enterprise-grade protection, compliance, and risk mitigation.",
    icon: ShieldCheck
  },
  {
    title: "Business Intelligence",
    description:
      "Data-driven insights, dashboards, and reporting for strategic decision-making.",
    icon: BarChart3
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize systems, optimize workflows, and accelerate enterprise innovation.",
    icon: Layers
  },
  {
    title: "Data Engineering",
    description:
      "Build scalable pipelines, warehouses, and data platforms for enterprise analytics.",
    icon: Database
  }
];



// const images = [
//   '/ecoride.png',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
//   '/ecoride.png',
//   '/zoho.jpg',
//   '/ictam.png',
//   '/SRS.svg',
//   '/yoco.jpg',
// ]

const images = [
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/namecheap.png', href: 'https://www.namecheap.com/', alt: 'Namecheap' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/namecheap.png', href: 'https://www.namecheap.com/', alt: 'Namecheap' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/namecheap.png', href: 'https://www.namecheap.com/', alt: 'Namecheap' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' },
  { src: '/ecoride.png', href: 'https://ecoridemw.com/', alt: 'Ecoride' },
  { src: '/namecheap.png', href: 'https://www.namecheap.com/', alt: 'Namecheap' },
  { src: '/ictam.png', href: 'https://mis.ictam.org.mw/', alt: 'ICTAM' },
  { src: '/SRS.png', href: 'https://opensrs.com/', alt: 'SRS' },
  { src: '/yoco.png', href: 'https://www.yoco.com/za/', alt: 'Yoco' },
  { src: '/zoho.png', href: 'https://www.zoho.com', alt: 'Zoho' }
];

const team = [
  {
    name: "Christina Namalomba",
    role: "Business Development Manager",
    image: "/team/tina.jpeg",
    bio: "Christina leads client acquisition and partnership development, driving revenue growth through strategic market analysis, stakeholder engagement, and tailored business solutions.",
    social: { linkedin: "https://linkedin.com/christinamnamalomba" }
  },
  {
    name: "Gift Chimangeni",
    role: "AI Projects & Data Architecture Manager",
    image: "/team/gift.jpeg",
    bio: "Gift oversees AI project delivery and data architecture design, ensuring scalable, high-performance data systems that support advanced analytics, machine learning, and business intelligence initiatives.",
    social: { linkedin: "https://linkedin.com/gift-chimangeni" }
  },
  {
    name: "Paul Namalomba",
    role: "Chief Innovation Officer & Lead Backend Engineer",
    image: "/team/paul.jpg",
    bio: "Paul drives innovation strategy and leads backend engineering, designing robust, secure, and scalable systems that power mission-critical applications and emerging digital solutions.",
    social: {
      linkedin: "https://linkedin.com/paulnamalomba",
      github: "https://paulnamalomba.github.io"
    }
  },
  {
    name: "Emma Malonda",
    role: "Data Science Manager & Lead Data Analyst",
    image: "/team/emma.jpeg",
    bio: "Emma leads data science and analytics initiatives, transforming complex datasets into actionable insights through advanced modeling, statistical analysis, and data-driven reporting.",
    social: { linkedin: "https://linkedin.com/emma-malonda" }
  },
  {
    name: "Chadwick Chihana",
    role: "Finance Manager",
    image: "/team/chadwick.jpg",
    bio: "Chadwick manages financial planning, budgeting, and compliance, providing strategic financial oversight to support sustainable growth, operational efficiency, and informed decision-making.",
    social: { linkedin: "https://linkedin.com/chadwick-chihana-796b33154" }
  },
  {
    name: "Andy Kewo",
    role: "Legal Manager",
    image: "/team/andy.jpeg",
    bio: "Andy oversees legal and regulatory matters, ensuring organizational compliance, contract governance, and risk mitigation across all business operations.",
    social: { linkedin: "https://linkedin.com/andy-kewo-550550242" }
  },
  {
    name: "Diana Nguluwe",
    role: "Digital Marketing Manager",
    image: "/team/diana.jpg",
    bio: "Diana leads digital marketing strategy, managing brand presence, campaigns, and audience engagement across digital channels to drive visibility, growth, and customer acquisition.",
    social: { linkedin: "linkedin.com/in/diane-nguluwe-6b4763289" }
  },
  {
    name: "Dylan Chigowo",
    role: "Operations Manager",
    image: "/team/dylan.jpg",
    bio: "Dylan oversees day-to-day operations, optimizing processes, coordinating teams, and ensuring efficient service delivery aligned with organizational objectives.",
    social: { linkedin: "linkedin.com/in/dylan-chigowo-4a2441256" }
  }
];

</script>

<style scoped>
@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-slide {
  width: max-content; /* content-based width for seamless scroll */
  display: flex;
  animation: slide 40s linear infinite;
}

.animate-slide > .flex {
  display: flex;
  gap: 4rem; /* spacing between logos */
}

.animate-slide img {
  display: block; /* prevents inline whitespace creating gaps */
}

</style>
