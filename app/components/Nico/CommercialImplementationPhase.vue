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

                    <!-- Title
                    <h2 class="text-3xl font-bold text-gray-800 tracking-wide">Engagement Process Breakdown</h2>

                    <!-- Process Steps Icons + Text (Parallel Flow with Arrows)
                    <!-- <ul class="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-12"> -->
                        <!-- Step 1 -->
                        <!-- <li class="flex flex-col items-center gap-2 relative"> -->
                            <!-- <NuxtImg src="/consultation.png" class="h-16 w-16" alt="Consultation" /> -->
                            <!-- <span class="text-gray-800 font-semibold text-center">Consultation Phase</span> -->
                        <!-- </li> -->

                        <!-- Connector (vertical on small screens, horizontal on md+) -->
                        <!-- <li class="flex items-center justify-center" aria-hidden="true"> -->
                            <!-- Small screens: vertical arrow -->
                            <!-- <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
                                <!-- <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->

                            <!-- md+: horizontal arrow -->
                            <!-- <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->
                        <!-- </li> -->

                        <!-- Step 2 -->
                        <!-- <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/planning.png" class="h-16 w-16" alt="Planning" />
                            <span class="text-gray-800 font-semibold text-center">Program Planning & Design</span>
                        </li> -->

                        <!-- Connector (vertical on small screens, horizontal on md+) -->
                        <!-- <li class="flex items-center justify-center" aria-hidden="true">
                            <!-- Small screens: vertical arrow
                            <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->

                            <!-- md+: horizontal arrow -->
                            <!-- <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->
                        <!-- </li> -->

                        <!-- Step 3
                        <li class="flex flex-col items-center gap-2 relative">
                            <NuxtImg src="/commercial.png" class="h-16 w-16" alt="Commercial Model" />
                            <span class="text-gray-800 font-semibold text-center">Commercial Model</span>
                        </li> -->

                        <!-- Connector (vertical on small screens, horizontal on md+)
                        <li class="flex items-center justify-center" aria-hidden="true">
                            <!-- Small screens: vertical arrow
                            <svg class="h-12 w-6 text-gray-300 animate-pulse md:hidden" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V26" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M6 26L12 32L18 26" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg> -->

                            <!-- md+: horizontal arrow -->
                            <!-- <svg class="h-6 w-20 text-gray-300 animate-pulse hidden md:block" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12H56" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                <path d="M56 6L64 12L56 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </li> -->

                        <!-- Step 4 -->
                        <!-- <li class="flex flex-col items-center gap-2">
                            <NuxtImg src="/implementation.png" class="h-16 w-16" alt="Implementation" />
                            <span class="text-gray-800 font-semibold text-center">Implementation</span>
                        </li> -->
                    <!-- </ul> -->

                    <!-- Parallel workflow note
                    <p class="mt-6 text-center text-gray-600 italic max-w-2xl mx-auto">
                        In what is to be presented below, the Consultation Phase and Program Planning & Design
                        steps occur in parallel to each other to expedite the overall engagement process. It is important to state that continual engagement and feedback loops act as a secondary quality-control mechanism, to ensure that your needs are prioritised within the project scope.
                    </p> -->
                </header>

                <!-- Consultation Phase Details -->
                <section class="space-y-16">
                    <h2 class="text-3xl font-bold text-[#002D72] border-b border-gray-300 pb-4 flex items-center gap-3">
                        <UIcon name="i-heroicons-chat-bubble-oval-left" class="w-8 h-8 text-[#002D72]" />
                        2. Implementation & Commercialization Phase
                    </h2>

                    <div class="grid gap-12">
                        <!-- 1.1 Business Consultation -->
                        <div
                            class="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
                            <NuxtImg src="/business-consultation.png" class="h-48 w-full object-cover"
                                alt="Business Consultation" />
                            <div class="p-6 flex flex-col gap-4">
                                <h3 class="text-xl font-semibold text-[#002D72] flex items-center gap-2">
                                    <UIcon name="i-heroicons-briefcase" class="w-6 h-6" /> 2.1 Development - Full "NICO Life Loyalty Platform" Build
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <!-- <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" /> -->
                                        <span> We will turn the Stage 1.2 specifications into a functional MVP codebase (backend + USSD + app) and deploy it to a staging environment. Development proceeds in parallel with Phase 2.2 to accelerate time-to-launch.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-key" class="w-5 h-5 text-green-600" />
                                        <span><strong>Actions:</strong> Infrastructure setup (cloud, DB, CI/CD), core logic implementation (rules engine + secure ledger/wallet), frontend construction (USSD + mobile UI), and bill payment/voucher redemption modules. Automated testing and security checks run on every commit.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Deliverables:</strong> MVP deployed to staging, API endpoints ready to receive NICO Life events, admin dashboard for staff to view balances/transactions, and UAT test cases for end-to-end validation.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>
                                            Duration:
                                        </strong>
                                            8 Weeks (Intermittent update meetings with client every 1 week)</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>
                                            Cost:
                                        
                                            MWK96,350,000.00</strong> – 45% upfront, 55% on completion
                                        </span>
                                    </li>
                                    <div class="space-y-4 mt-6">
                                        <div class="space-y-2">
                                            <p class="text-base font-bold text-gray-700">Key Activities in Detail (Phase 2.1)</p>
                                            <UTable :data="implementationItems" class="flex-1" />
                                        </div>

                                        <div class="space-y-2">
                                            <p class="text-base font-bold text-gray-700">Deliverables in Detail (Phase 2.1)</p>
                                            <UTable :data="implementationDeliverables" class="flex-1" />
                                        </div>

                                        <!-- <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm"> -->
                                            <!-- <p class="text-lg font-bold text-blue-900">Cost: MWK 42,000,000.00</p> -->
                                        <!-- </div> -->
                                    </div>

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
                                    <UIcon name="i-heroicons-pencil-square" class="w-6 h-6 text-[#002D72]" /> 2.2 Commercialisation & Integration
                                </h3>
                                <ul class="space-y-3 text-gray-700">
                                    <li class="flex items-center gap-2">
                                        <!-- <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" /> -->
                                        <span> We will connect the platform to partners (retail, mobile money, utilities) so points can be redeemed as vouchers, cash-out, or bill payments. The recommended strategy is to use aggregator APIs for faster delivery instead of direct POS integrations.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-key" class="w-5 h-5 text-green-600" />
                                        <span><strong>Actions:</strong> Integrate voucher aggregator APIs for retail redemption, implement mobile money B2C disbursements for cash-out, connect to utility bill-pay/token APIs, and build reconciliation + reporting for finance and operations. Train staff and prepare customer communications.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                        <span><strong>Deliverables:</strong> Production API keys/credentials, integration test reports, customer communication templates (SMS/email), and a merchant operating manual for cashiers/partners.</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                        <span><strong>Duration:</strong> ~7 Weeks (partner integration timeline; runs alongside Phase 2.1)</span>
                                    </li>
                                    <li class="flex items-center gap-2">
                                        <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-indigo-600" />
                                        <span><strong>Cost:</strong> Integration partner fees and third-party aggregator charges are not included (quoted separately).</span>
                                    </li>
                                </ul>

                                <div class="space-y-4 mt-6">
                                    <div class="space-y-2">
                                        <p class="text-base font-bold text-gray-700">Key Activities in Detail (Phase 2.2)</p>
                                        <UTable :data="integrationItems" class="flex-1" />
                                    </div>

                                    <div class="space-y-2">
                                        <p class="text-base font-bold text-gray-700">Deliverables in Detail (Phase 2.2)</p>
                                        <UTable :data="integrationDeliverables" class="flex-1" />
                                    </div>
                                </div>
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


            </div>
        </UCard>
    </UContainer>
</template>

<script setup>
const implementationItems = [
    { id: 1, item: 'Infrastructure & platform configuration: deploy AWS/Azure environment; set up Kubernetes clusters or serverless functions.' },
    { id: 2, item: 'Database implementation: provision PostgreSQL (high-performance transactional ledger) and Redis (USSD sessions) and configure encryption-at-rest keys.' },
    { id: 3, item: 'CI/CD pipeline and DevOps: automated tests and security checks on every commit, scalable deployment post-commit.' },
    { id: 4, item: 'Rules engine: listen for “Policy Premium Paid” events, we will need either raw data regualarly mounted or API-level access to NICO Life dataset and calculate points earned (e.g., thresholds/percentages).'},
    { id: 5, item: 'Wallet/ledger service: secure balances, transaction history, and audit trail.' },
    { id: 6, item: 'USSD menu: *${900}# <- Custom-Shortcode to be acquired. We develop the flow (check balance, redeem voucher, pay bills).' },
    { id: 7, item: 'Mobile app (Flutter): transaction history, store locator, digital card display.' },
    { id: 8, item: 'Bill payment module: convert points to bill-pay requests for utilities (ESCOM/Water Boards) via aggregator/prepaid token APIs.' }
]

const implementationDeliverables = [
    { id: 1, item: 'MVP codebase deployed to a staging environment (backend + USSD + app).' },
    { id: 2, item: 'API gateway/endpoints live and ready to receive NICO Life data.' },
    { id: 3, item: 'Admin dashboard for staff: user balances and transaction logs.' },
    { id: 4, item: 'UAT test cases (50+ scenarios) for validation and sign-off.' }
]

const integrationItems = [
    { id: 1, item: 'Retail integration (Chipiku/Spar): integrate a voucher aggregator API to generate redemption codes (avoid direct POS integration initially).' },
    { id: 2, item: 'Mobile money integration (Airtel Money / TNM Mpamba): implement B2C disbursement (“cash out”) flows.' },
    { id: 3, item: 'Utility integration (ESCOM / Water Boards): connect to bill-pay / prepaid token APIs and deliver tokens via SMS.' },
    { id: 4, item: 'Reconciliation & reporting: automated reports for finance (weekly partner settlement summaries).' },
    { id: 5, item: 'Operational readiness: staff training for support and escalation processes.' },
    { id: 6, item: 'Customer communications: SMS/email templates for welcome, points earned, redemption success.' }
]

const integrationDeliverables = [
    { id: 1, item: 'Signed API keys and production credentials for partners/aggregators.' },
    { id: 2, item: 'Integration test reports proving end-to-end transactions (e.g., app → Airtel Money payout).' },
    { id: 3, item: 'Customer communication plan and templates (SMS/email designs).' },
    { id: 4, item: 'Merchant operating manual (1-page) for cashiers/partner staff.' }
]
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