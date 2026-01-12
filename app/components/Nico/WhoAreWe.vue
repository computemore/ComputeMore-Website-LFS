<template>
    <UContainer class="m-2">
        <UCard variant="soft" class="bg-white min-h-[297mm] mb-6  p-12">
            <div class="space-y-20">

                <!-- Header -->
                <header class="space-y-6 text-center relative">
                    <!-- Logo -->
                    <div class="flex items-center justify-center gap-6">
                        <NuxtLink to="/" aria-label="ComputeMore Website Home">
                            <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain" alt="logo" />
                        </NuxtLink>

                        <a href="https://nico-life.com" target="_blank" rel="noopener noreferrer" aria-label="Nico Life Website">
                            <NuxtImg src="/nl-logo.png" densities="x1 x2" class="h-16 w-auto object-contain" alt="Nico Life logo" />
                        </a>
                    </div>

                    <!-- Title -->
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Engagement Process Breakdown</h2>

                    <!-- Process Steps Icons + Text (Parallel Flow with Arrows) -->
                    <ul class="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-12">
                        <!-- Step 1 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/consultation.png" class="h-16 w-16" alt="Consultation" />
                            <span class="text-gray-800 font-semibold text-center">Consultation Phase</span>
                        </li>

                        <!-- Connector (vertical on small screens, horizontal on md+) -->
                        <li class="flex items-center justify-center" aria-hidden="true">
                            <!-- Small screens: vertical arrow -->
                            <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <!-- md+: horizontal arrow -->
                            <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>

                        <!-- Step 2 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/planning.png" class="h-16 w-16" alt="Planning" />
                            <span class="text-gray-800 font-semibold text-center">Program Planning & Design</span>
                        </li>

                        <!-- Connector (vertical on small screens, horizontal on md+) -->
                        <li class="flex items-center justify-center" aria-hidden="true">
                            <!-- Small screens: vertical arrow -->
                            <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <!-- md+: horizontal arrow -->
                            <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>

                        <!-- Step 3 -->
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/commercial.png" class="h-16 w-16" alt="Commercial Model" />
                            <span class="text-gray-800 font-semibold text-center">Commercial Model</span>
                        </li>

                        <!-- Connector (vertical on small screens, horizontal on md+) -->
                        <li class="flex items-center justify-center" aria-hidden="true">
                            <!-- Small screens: vertical arrow -->
                            <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <!-- md+: horizontal arrow -->
                            <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li>

                        <!-- Step 4 -->
                        <li class="flex flex-col items-center gap-2">
                            <NuxtImg src="/implementation.png" class="h-16 w-16" alt="Implementation" />
                            <span class="text-gray-800 font-semibold text-center">Implementation</span>
                        </li>
                    </ul>

                    <!-- Parallel workflow note -->
                    <p class="mt-6 text-center text-gray-600 italic max-w-2xl mx-auto">
                        In what is to be presented below, the Consultation Phase and Program Planning & Design
                        steps occur in parallel to each other to expedite the overall engagement process. It is important to state that continual engagement and feedback loops act as a secondary quality-control mechanism, to ensure that your needs are prioritised within the project scope.
                    </p>
                </header>

        <!-- Page 2: Who Are We -->
        <UCard variant="soft" class="bg-white min-h-[297mm] mb-6 p-12">
            <div class="space-y-16">

                <!-- Header -->
                <header class="space-y-6 text-center">
                    <div class="flex items-center justify-center">
                        <NuxtLink to="/" aria-label="ComputeMore Website Home">
                            <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain" alt="logo" />
                        </NuxtLink>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Who Are We?</h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        ComputeMore is a full-service technology powerhouse headquartered in Malawi, delivering innovative solutions across software development, business intelligence, networking, and IT outsourcing. Our team combines deep technical expertise with strategic business acumen to drive digital transformation.
                    </p>
                </header>

                <!-- Strategic Advantages Section -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-rocket-launch" class="w-8 h-8 text-[#002D72]" />
                        Strategic Advantages & Competitive Edge
                    </h2>

                    <div class="grid md:grid-cols-2 gap-6">
                        <!-- Advantage 1 -->
                        <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-blue-600 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-cloud" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">End-to-end Development with Managed DevOps</h4>
                                    <p class="text-gray-600 mt-1">Access to cloud and dedicated deployment environments with continuous integration and delivery pipelines.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 2 -->
                        <div class="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-indigo-600 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-device-phone-mobile" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">Multimodal Programming Expertise</h4>
                                    <p class="text-gray-600 mt-1">Proficiency in web, mobile, desktop, and embedded systems development across multiple platforms.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 3 -->
                        <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-purple-600 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-cog-8-tooth" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">Full-Service Technology Powerhouse</h4>
                                    <p class="text-gray-600 mt-1">Integrated development, business intelligence, networking, and IT outsourcing under one roof.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 4 -->
                        <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-green-600 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-user-group" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">High-Value Access & Networks</h4>
                                    <p class="text-gray-600 mt-1">Founders' strategic ties fast-track adoption, partnerships, and funding opportunities.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 5 -->
                        <div class="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-yellow-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-yellow-500 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-arrows-pointing-out" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">Agile & Scalable Model</h4>
                                    <p class="text-gray-600 mt-1">Easily adaptable methodologies across industries and geographies for rapid delivery.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 6 -->
                        <div class="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-red-100">
                            <div class="flex items-start gap-4">
                                <div class="bg-red-500 rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-scale" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">Deep Technical & Legal Expertise</h4>
                                    <p class="text-gray-600 mt-1">Strong balance of innovation and compliance ensuring regulatory adherence.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Advantage 7 (Full Width) -->
                        <div class="md:col-span-2 bg-gradient-to-br from-[#002D72]/10 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#002D72]/20">
                            <div class="flex items-start gap-4">
                                <div class="bg-[#002D72] rounded-xl p-3 shrink-0">
                                    <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800 text-lg">Localized Impact</h4>
                                    <p class="text-gray-600 mt-1">Tailored solutions designed for Malawi's unique infrastructure, policies, and socio-economic context – ensuring relevance and sustainability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Technical Infrastructure Section -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-server-stack" class="w-8 h-8 text-[#002D72]" />
                        Technical Infrastructure & Experience
                    </h2>

                    <div class="grid md:grid-cols-3 gap-4">
                        <!-- Backend -->
                        <div class="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <h4 class="font-semibold text-[#002D72] mb-3 flex items-center gap-2">
                                <UIcon name="i-heroicons-cpu-chip" class="w-5 h-5" />
                                Backend
                            </h4>
                            <ul class="space-y-2 text-gray-700 text-sm">
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    C# .NET Core with RESTful APIs
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    ASP.NET Identity (Auth)
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    RabbitMQ (Message Queuing)
                                </li>
                            </ul>
                        </div>

                        <!-- Frontend -->
                        <div class="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <h4 class="font-semibold text-[#002D72] mb-3 flex items-center gap-2">
                                <UIcon name="i-heroicons-window" class="w-5 h-5" />
                                Frontend
                            </h4>
                            <ul class="space-y-2 text-gray-700 text-sm">
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                                    React.js (Dynamic UIs)
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Vue.js (Dashboards & Viz)
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Nuxt 3 (SSR & SEO)
                                </li>
                            </ul>
                        </div>

                        <!-- Data & Cloud -->
                        <div class="bg-gray-50 rounded-xl p-5 border border-gray-200">
                            <h4 class="font-semibold text-[#002D72] mb-3 flex items-center gap-2">
                                <UIcon name="i-heroicons-cloud-arrow-up" class="w-5 h-5" />
                                Data & Cloud
                            </h4>
                            <ul class="space-y-2 text-gray-700 text-sm">
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    PostgreSQL (RDBMS)
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Redis (Caching & Sessions)
                                </li>
                                <li class="flex items-center gap-2">
                                    <span class="w-2 h-2 bg-purple-500 rounded-full"></span>
                                    Microsoft Azure (Hosting)
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Integration Note -->
                    <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-center gap-3">
                        <UIcon name="i-heroicons-puzzle-piece" class="w-6 h-6 text-blue-600 shrink-0" />
                        <p class="text-gray-700 text-sm">
                            <strong>Third-Party Integrations:</strong> PayChangu (Payments), Airtel Money API, TNM Mpamba, and custom partner APIs for seamless ecosystem connectivity.
                        </p>
                    </div>
                </section>

            </div>
        </UCard>

        <!-- Page 3: Team Leads -->
        <UCard variant="soft" class="bg-white min-h-[297mm] mb-6 p-12">
            <div class="space-y-16">

                <!-- Header -->
                <header class="space-y-6 text-center">
                    <div class="flex items-center justify-center">
                        <NuxtLink to="/" aria-label="ComputeMore Website Home">
                            <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain" alt="logo" />
                        </NuxtLink>
                    </div>
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Meet Our Leadership Team</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        A dedicated team of professionals combining technical excellence with business acumen to deliver exceptional results.
                    </p>
                </header>

                <!-- Team Section -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-users" class="w-8 h-8 text-[#002D72]" />
                        Team Leads
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Lead Engineer -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative">
                                <NuxtImg src="/Team/zikani.jpeg" class="h-64 w-full object-cover object-top" alt="Zikani Nyirenda Mwase" />
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Lead Engineer</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col gap-3">
                                <h3 class="text-xl font-bold text-gray-800">Zikani Nyirenda Mwase</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    Over 10 years of experience in Frontend and Backend Design. A prolific contributor with 400+ repositories on GitHub, specializing in scalable architectures and modern development practices.
                                </p>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-code-bracket" class="w-4 h-4" /> 400+ GitHub Repos
                                    </span>
                                    <span class="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> 10+ Years
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Chief Innovation Officer -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative">
                                <NuxtImg src="/Team/paul.jpeg" class="h-64 w-full object-cover object-top" alt="Paul Namalomba" />
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Chief Innovation Officer</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col gap-3">
                                <h3 class="text-xl font-bold text-gray-800">Paul Namalomba</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    4 years of hands-on experience in C++, C# ASP.NET, PostgreSQL, Redis, and Backend Engine development. Drives innovation with 25+ repositories showcasing cutting-edge solutions.
                                </p>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-code-bracket" class="w-4 h-4" /> 25+ GitHub Repos
                                    </span>
                                    <span class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> 4 Years
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Legal -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative">
                                <NuxtImg src="/Team/andy.jpeg" class="h-64 w-full object-cover object-top" alt="Andy Kewo" />
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <span class="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Legal Counsel</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col gap-3">
                                <h3 class="text-xl font-bold text-gray-800">Andy Kewo</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    4 years of legal experience with Sauti Lawyers, specializing in corporate law, regulatory compliance, and contract negotiations. Ensures all operations meet legal and ethical standards.
                                </p>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-scale" class="w-4 h-4" /> Sauti Lawyers
                                    </span>
                                    <span class="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> 4 Years
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Finance -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="relative">
                                <NuxtImg src="/Team/chadwick.jpg" class="h-64 w-full object-cover object-top" alt="Chadwick Chihana" />
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Finance Lead</span>
                                </div>
                            </div>
                            <div class="p-6 flex flex-col gap-3">
                                <h3 class="text-xl font-bold text-gray-800">Chadwick Chihana</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    2 years of experience as an Auditor, bringing financial rigor and transparency to all operations. Manages budgeting, financial reporting, and fiscal compliance.
                                </p>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-calculator" class="w-4 h-4" /> Audit Background
                                    </span>
                                    <span class="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> 2 Years
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Footer Note -->
                <div class="bg-gradient-to-r from-[#002D72] to-blue-800 rounded-2xl p-8 text-center text-white">
                    <h3 class="text-2xl font-bold mb-3">Ready to Partner with Us?</h3>
                    <p class="text-blue-100 max-w-2xl mx-auto">
                        Our team is committed to delivering excellence at every stage of your project. Let's build something extraordinary together.
                    </p>
                </div>

            </div>
        </UCard>
    </UContainer>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
/* Animate arrows connecting steps */
@keyframes pulse {

    0%,
    100% {
        opacity: 0.6;
        transform: scaleX(1);
    }

    50% {
        opacity: 1;
        transform: scaleX(1.05);
    }
}

.animate-pulse {
    animation: pulse 1.2s infinite ease-in-out;
}
</style>
