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
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">NICO Life Loyalty: Consultation Phase</h2>

                    <!-- Parallel workflow note -->
                    <p class="mt-6 text-center text-gray-600 italic max-w-2xl mx-auto">
                        In what is to be presented below, the Consultation Phase and Program Planning & Design
                        steps occur in parallel to each other to expedite the overall engagement process. It is important to state that continual engagement and feedback loops act as a secondary quality-control mechanism, to ensure that your needs are prioritised within the project scope.
                    </p>
                </header>

                <!-- Consultation Phase Details -->
                <section class="space-y-16">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-chat-bubble-oval-left" class="w-8 h-8 text-[#002D72]" />
                        1. Consultation & Planning Phase
                    </h2>

                    <div class="grid gap-12">
                        <!-- 1.1 Business Consultation -->
                        <div
                            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <NuxtImg src="/business-consultation.png" class="h-48 w-full object-cover"
                                alt="Business Consultation" />
                            <div class="p-6 flex flex-col gap-4">
                                <h3 class="text-xl font-semibold text-[#002D72] flex items-center gap-2">
                                    <UIcon name="i-heroicons-briefcase" class="w-6 h-6" /> 1.1 Business Consultation
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <!-- <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" /> -->
                                        <span> We shall conduct daily meetings with the NICO Life Team to establish a
                                            deeper understanding of the project. Both technical and business teams will be involved from NICO Life to understand core business logic, internal data privacy policies and practical requirements for the project context. We shall then present a detailed <strong>Plan of Action</strong>, Set-up <strong>Communication Channels</strong>, and Proceed to Phase 1.2.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-key" class="w-5 h-5 text-green-600" />
                                        <span><strong>Actions:</strong> Meetings with NICO Life Team to establish a
                                            deeper understanding of the project.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Deliverables:</strong> Process Mapping, Functional Specifications and User Stories, and Client-Developer Communication Channels Set-up, </span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>
                                            Duration:
                                        </strong>
                                            1 Week (Daily meetings with both technical and business teams)</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>
                                            Cost:
                                        
                                            MWK10,750,000.00</strong> – 45% upfront, 55% on completion
                                        </span>
                                    </li>
                                </ul>
                                <div class="mt-4 flex gap-2 flex-wrap">
                                    <span
                                        class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-check" class="w-4 h-4" /> Approved Output
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> Timeline
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-4 h-4" /> Budget
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- 1.2 Program Planning & Design -->
                        <div
                            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <NuxtImg src="/program-planning.png" class="h-48 w-full object-cover"
                                alt="Program Planning" />
                            <div class="p-6 flex flex-col gap-4">
                                <h3 class="text-xl font-semibold text-[#002D72] flex items-center gap-2">
                                    <UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-[#002D72]" /> 1.2 Program Planning & System
                                    Design
                                </h3>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <!-- <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" /> -->
                                        <span> We will translate the business and functional requirements into a technical architectural blueprint encompassing three layers: Regulatory & Compliance Research, Technical System Design for business logic and data storage, and Security Architecture Design to protect sensitive KYC information through the entire data lifecycle. Thus, ensuring that the system complies with financial regulations (PCI-DSS and RBM if necessary), KYC design and MACRA data privacy laws, while detailing exactly how the cashback and/or voucher engine will operate in parallel with Phase 2.</span>
                                    </li>
                                        <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-key" class="w-5 h-5 text-green-600" />
                                        <span><strong>Actions:</strong> Continue communications and meetings with NICO Life, Cold outreach to potential partners for interest in integrating and Preliminary design and development.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Output:</strong> Data Flow Mapping, Operational Design Manual, Technical Architecture Document and System Requirements Specification (Polished requirements).</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>Duration:</strong> 4 weeks</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>Cost: MWK43,827,500.00 </strong>– 45% upfront, 55% on completion</span>
                                    </li>
                                </ul>
                                <div class="mt-4 flex gap-2 flex-wrap">
                                    <span
                                        class="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-check" class="w-4 h-4" /> Approved Output
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-clock" class="w-4 h-4" /> Timeline
                                    </span>
                                    <span
                                        class="flex items-center gap-1 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-4 h-4" /> Budget
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
