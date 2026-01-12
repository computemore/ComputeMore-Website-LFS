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
                            <NuxtImg src="/nl-logo.png" densities="x1 x2" class="h-32 w-auto object-contain" alt="Nico Life logo" />
                        </a>
                    </div>

                    <!-- Title -->
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">NICO Life Loyalty: Engagement Process Breakdown</h2>

                    <!-- Process Steps Icons + Text (Parallel Flow with Arrows) -->
                    <ul class="relative flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-6 mt-12 w-full max-w-5xl mx-auto">
                        <!-- Step 1 -->
                        <li class="flex flex-col items-center gap-2 relative flex-1 max-w-[200px]">
                            <NuxtImg src="/Internal/Face-Logo_1.png" class="h-16 w-16" alt="Consultation" />
                            <span class="text-gray-800 font-semibold text-center">Who Are We?</span>
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
                        <li class="flex flex-col items-center gap-2 relative flex-1 max-w-[200px]">
                            <NuxtImg src="/planning.png" class="h-16 w-16" alt="Consultation & Planning Phase" />
                            <span class="text-gray-800 font-semibold text-center">Consultation & Planning Phase</span>
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
                        <li class="flex flex-col items-center gap-2 relative flex-1 max-w-[200px]">
                            <NuxtImg src="/commercial.png" class="h-16 w-16" alt="Implementation & Commercialization Phase" />
                            <span class="text-gray-800 font-semibold text-center">Implementation & Commercialization Phase</span>
                        </li>
                    </ul>

                    <!-- Parallel workflow note -->
                    <p class="mt-6 text-center text-gray-600 italic max-w-2xl mx-auto">
                        In what is to be presented below, the Consultation Phase and Program Planning & Design
                        steps occur in parallel to each other to expedite the overall engagement process. It is important to state that continual engagement and feedback loops act as a secondary quality-control mechanism, to ensure that your needs are prioritised within the project scope.
                    </p>
                </header>
            <!-- 
            </div>
        </UCard>

        <!-- Page 2: Who Are We -->
        <!-- <UCard variant="soft" class="bg-white min-h-[297mm] mb-6 p-12"> -->
            <!-- <div class="space-y-16"> -->

                <!-- Header -->
                <header class="space-y-6 text-center">
                    <!-- <div class="flex items-center justify-center">
                        <NuxtLink to="/" aria-label="ComputeMore Website Home">
                            <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain" alt="logo" />
                        </NuxtLink>
                    </div> -->
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

        <!-- Page 4: Research-Backed Value Proposition -->
        <UCard variant="soft" class="bg-white min-h-[297mm] mb-6 p-12">
            <div class="space-y-16">

                <!-- Header -->
                <header class="space-y-6 text-center">
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Research-Backed Value Proposition</h2>
                    <p class="text-gray-600 max-w-3xl mx-auto">
                        Our loyalty program design is grounded in peer-reviewed research demonstrating the measurable impact of customer retention and engagement strategies in the insurance sector.
                    </p>
                </header>

                <!-- Profit Multiplier Section with Circular Progress -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-[#002D72]" />
                        The Retention Profit Multiplier
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8 items-center">
                        <!-- Circular Progress Graph -->
                        <div class="flex flex-col items-center justify-center">
                            <div class="relative w-64 h-64">
                                <!-- Background circle -->
                                <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#e5e7eb"
                                        stroke-width="8"
                                    />
                                    <!-- Progress circle (25% minimum improvement) -->
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        fill="none"
                                        stroke="#002D72"
                                        stroke-width="8"
                                        stroke-linecap="round"
                                        stroke-dasharray="283"
                                        stroke-dashoffset="212"
                                        class="transition-all duration-1000 ease-out"
                                    />
                                    <!-- Outer progress (100% maximum improvement) -->
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="38"
                                        fill="none"
                                        stroke="#10b981"
                                        stroke-width="6"
                                        stroke-linecap="round"
                                        stroke-dasharray="239"
                                        stroke-dashoffset="0"
                                        class="transition-all duration-1000 ease-out opacity-60"
                                    />
                                </svg>
                                <!-- Center text -->
                                <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span class="text-5xl font-bold text-[#002D72]">5%</span>
                                    <span class="text-sm text-gray-600 mt-1">Retention Improvement</span>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center gap-4 text-sm">
                                <div class="flex items-center gap-2">
                                    <span class="w-4 h-4 rounded-full bg-[#002D72]"></span>
                                    <span class="text-gray-700">25% Min Profit Gain</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <span class="w-4 h-4 rounded-full bg-green-500 opacity-60"></span>
                                    <span class="text-gray-700">100% Max Profit Gain</span>
                                </div>
                            </div>
                        </div>

                        <!-- Explanation -->
                        <div class="space-y-4">
                            <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-md border border-green-100">
                                <h3 class="text-xl font-bold text-green-700 mb-3">25–100% Profitability Improvement</h3>
                                <p class="text-gray-700 leading-relaxed">
                                    Research demonstrates that a <strong>5% improvement in customer retention rates</strong> yields between <strong>25% and 100% improvement</strong> in relevant profitability measures for insurance companies.
                                </p>
                                <p class="text-sm text-gray-500 mt-4 italic">
                                    Source: Ebrahimi, Askarifar & Nikbakht (2023). "Designing and evaluating insurance customer loyalty programs for different customer groups based on their lifetime value." Journal of Financial Services Marketing.<sup>[1]</sup>
                                </p>
                            </div>

                            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 flex items-start gap-3">
                                <UIcon name="i-heroicons-light-bulb" class="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                <p class="text-gray-700 text-sm">
                                    <strong>Strategic Implication:</strong> The NICO Life loyalty platform will be designed to ensure that every feature is optimized for maximum retention and profitability impact for NICO Life and it's potential partner stores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Research Evidence Section -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-academic-cap" class="w-8 h-8 text-[#002D72]" />
                        Research Evidence & Key Metrics
                    </h2>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- Metric 1: Model Accuracy -->
                        <div class="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-purple-600 rounded-xl p-3">
                                    <UIcon name="i-heroicons-cpu-chip" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-purple-700">79.6%</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Lapse Prediction Accuracy</h4>
                            <p class="text-gray-600 text-sm">Model accuracy achieved in lapse-prediction logistic regression on a dataset of 499 policyholders.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">Casquinho (2023)<sup>[2]</sup></p>
                        </div>

                        <!-- Metric 2: Explained Variance -->
                        <div class="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-blue-600 rounded-xl p-3">
                                    <UIcon name="i-heroicons-chart-pie" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-blue-700">66.3%</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Loyalty Explained by Service</h4>
                            <p class="text-gray-600 text-sm">Customer loyalty and purchase decisions explained by promotion, price, and quality of service factors.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">PT Asuransi Jiwa Mega Life Study<sup>[7]</sup></p>
                        </div>

                        <!-- Metric 3: Sample 1,476 -->
                        <div class="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-indigo-600 rounded-xl p-3">
                                    <UIcon name="i-heroicons-users" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-indigo-700">1,476</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Customer Study Sample</h4>
                            <p class="text-gray-600 text-sm">Vietnamese life-insurance study examining determinants of customer satisfaction and loyalty.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">Vietnam Life Insurance Study<sup>[3]</sup></p>
                        </div>

                        <!-- Metric 4: Taiwan Study -->
                        <div class="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-green-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-green-600 rounded-xl p-3">
                                    <UIcon name="i-heroicons-document-text" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-green-700">432</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Taiwan Customer Study</h4>
                            <p class="text-gray-600 text-sm">Effective questionnaires analyzing satisfaction, switching cost, trust, and retention relationships.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">Taiwan Life Insurance Study<sup>[4]</sup></p>
                        </div>

                        <!-- Metric 5: 24 Companies -->
                        <div class="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-yellow-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-yellow-500 rounded-xl p-3">
                                    <UIcon name="i-heroicons-building-office-2" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-yellow-700">24</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Insurance Companies Studied</h4>
                            <p class="text-gray-600 text-sm">Empirical study examining loyalty and satisfaction as drivers of retention across insurers.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">Industry-Wide Empirical Study<sup>[5]</sup></p>
                        </div>

                        <!-- Metric 6: Solomon Experiment -->
                        <div class="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-red-100">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="bg-red-500 rounded-xl p-3">
                                    <UIcon name="i-heroicons-beaker" class="w-6 h-6 text-white" />
                                </div>
                                <span class="text-3xl font-bold text-red-600">200</span>
                            </div>
                            <h4 class="font-semibold text-gray-800 mb-2">Experimental Sample</h4>
                            <p class="text-gray-600 text-sm">Four-group Solomon experimental design testing loyalty program effectiveness on randomly selected customers.</p>
                            <p class="text-xs text-gray-400 mt-3 italic">Loyalty Program Experiment<sup>[6]</sup></p>
                        </div>
                    </div>
                </section>

                <!-- Service Quality & Trust Section -->
                <section class="space-y-8">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-shield-check" class="w-8 h-8 text-[#002D72]" />
                        Service Quality, Trust & Loyalty Connection
                    </h2>

                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- Trust Mediation -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="bg-gradient-to-r from-[#002D72] to-blue-700 p-6">
                                <div class="flex items-center gap-4">
                                    <div class="bg-white/20 rounded-xl p-3">
                                        <UIcon name="i-heroicons-hand-raised" class="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-white">Trust as Mediator</h3>
                                        <p class="text-blue-200 text-sm">Service Quality → Trust → Loyalty</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    Research with <strong>72 respondents</strong> demonstrates that trust acts as a critical mediator between service quality and customer loyalty in life insurance.
                                </p>
                                <div class="flex items-center gap-4">
                                    <div class="flex-1 text-center p-3 bg-blue-50 rounded-lg">
                                        <span class="text-2xl font-bold text-blue-700">72</span>
                                        <p class="text-xs text-gray-600">Respondents</p>
                                    </div>
                                    <UIcon name="i-heroicons-arrow-right" class="w-6 h-6 text-gray-400" />
                                    <div class="flex-1 text-center p-3 bg-green-50 rounded-lg">
                                        <UIcon name="i-heroicons-check-circle" class="w-8 h-8 text-green-600 mx-auto" />
                                        <p class="text-xs text-gray-600">Mediation Confirmed</p>
                                    </div>
                                </div>
                                <p class="text-xs text-gray-400 mt-4 italic">Venkatesan & Jacob (2019)<sup>[7]</sup></p>
                            </div>
                        </div>

                        <!-- Residual Factors -->
                        <div class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100">
                            <div class="bg-gradient-to-r from-purple-600 to-indigo-700 p-6">
                                <div class="flex items-center gap-4">
                                    <div class="bg-white/20 rounded-xl p-3">
                                        <UIcon name="i-heroicons-puzzle-piece" class="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-bold text-white">Loyalty Factor Analysis</h3>
                                        <p class="text-purple-200 text-sm">Understanding What Drives Decisions</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-700 leading-relaxed mb-4">
                                    While promotion, price, and service quality explain <strong>66.3%</strong> of loyalty variance, <strong>33.7%</strong> is attributed to other factors—highlighting opportunity for innovative engagement strategies.
                                </p>
                                <div class="flex items-center gap-4">
                                    <div class="flex-1">
                                        <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                                            <div class="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" style="width: 66.3%"></div>
                                        </div>
                                        <div class="flex justify-between text-xs text-gray-500 mt-1">
                                            <span>Service Factors: 66.3%</span>
                                            <span>Other: 33.7%</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-xs text-gray-400 mt-4 italic">PT Asuransi Jiwa Mega Life<sup>[7]</sup></p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- References -->
                <section class="space-y-4">
                    <h3 class="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2">References</h3>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-gray-600">
                        <li>Ebrahimi, A., Askarifar, K., & Nikbakht, A. (2023). "Designing and evaluating insurance customer loyalty programs for different customer groups based on their lifetime value." <em>Journal of Financial Services Marketing</em>. doi: 10.1057/s41264-023-00242-8</li>
                        <li>Casquinho, C. "Consulting Project: Boosting Customer Loyalty by Increasing Brand Engagement and Offering Value-Added Services." ProQuest Dissertations. Available: <a href="https://search.proquest.com/openview/916dce945849fb60e6a8347c5418c83e" class="text-blue-600 hover:underline">ProQuest</a></li>
                        <li>Dash, S. K., & Dash, P. K. Dr. R. K. S. M. (2018). "A Study Towards Customer Loyalty in Life Insurance." <em>International Journal of Research in Commerce and Management</em>, July 2018.</li>
                        <li>Perumalsamy, A. J. "Machine learning algorithms for customer segmentation and personalized marketing in life insurance: A comprehensive analysis." <em>Journal of Artificial Intelligence Research</em>.</li>
                        <li>Valla, M., Milhaud, X., & Olympio, A. A. (2023). "Including individual Customer Lifetime Value and competing risks in tree-based lapse management strategies." doi: 10.48550/arxiv.2307.06651</li>
                        <li>Goonetilleke, T. L. O., Lanka, S., & Caldera, H. A. (2013). "Mining Life Insurance Data for Customer Attrition Analysis." <em>Journal of Industrial and Intelligent Information</em>, 1(1), 52–58. doi: 10.12720/JIII.1.1.52-58</li>
                        <li>Venkatesan, R., & Jacob, J. (2019). "Does loyalty and satisfaction support customer retention in life insurance sector? An empirical study." <em>International Journal of Business Excellence</em>. doi: 10.1504/IJBEX.2019.101528</li>
                    </ol>
                </section>

                <!-- Footer CTA -->
                <div class="bg-gradient-to-r from-[#002D72] to-blue-800 rounded-2xl p-8 text-center text-white">
                    <h3 class="text-2xl font-bold mb-3">Evidence-Driven. Results-Focused.</h3>
                    <p class="text-blue-100 max-w-2xl mx-auto">
                        The NICO Life loyalty platform will be designed to ensure that every feature is optimized for maximum retention and profitability impact for NICO Life and it's potential partner stores.
                    </p>
                </div>
                <section class="space-y-8"></section>

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
