<template>
    <UContainer class="m-2">
        <UCard variant="soft" class="min-h-[297mm] p-12 mb-4 bg-white">
            <div class="space-y-12">
                <!-- Logo -->
                <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-24 w-auto object-contain"
                    alt="Ecoride" />

                <!-- Implementation Section -->
                <section class="space-y-6">
                    <div class="p-8 rounded-2xl border border-gray-200 transition-shadow">
                        <h2
                            class="text-2xl font-bold text-blue-600 border-b border-gray-300 pb-3 flex items-center gap-2">
                            <UIcon name="i-heroicons-cog" class="w-6 h-6" /> 2. Program Implementation
                        </h2>
                        <div class="space-y-3 mt-4 text-gray-700">
                            <p class="flex items-center gap-2">
                                <UIcon name="i-heroicons-check" class="w-5 h-5 text-green-600" />
                                <strong>Output:</strong> Program construction and implementation, developed in parallel
                                with ongoing engagement with key stakeholders (including Escom, relevant Water
                                Boards and relevant Vendors as well as a viable Financial Institution for Wallets).
                            </p>
                            <p class="flex items-center gap-2">
                                <UIcon name="i-heroicons-clock" class="w-5 h-5 text-yellow-600" />
                                <strong>Estimated completion time:</strong> Approximately 7 weeks (indicative, and
                                subject to stakeholder engagement timelines; finalised during the Commercial Model
                                phase).
                            </p>
                            <p class="flex items-center gap-2">
                                <UIcon name="i-heroicons-currency-dollar" class="w-5 h-5 text-blue-600" />
                                <strong>Third-party services:</strong> Any third-party costs, approvals, studies, or
                                services required from external stakeholders or service providers (including Escom,
                                Water Boards, consultants, or regulators) will be contracted and paid for directly by
                                NICO Life, we can talk to them  on Behalf of NICO Life.
                            </p>
                        </div>


                        <!-- Cost Table -->
                        <div class="space-y-4 mt-6">
                            <UTable loading loading-color="primary" loading-animation="carousel"
                                :data="implementationItems" class="flex-1" />

                            <div class="bg-blue-50 p-4 rounded-lg border border-blue-200 shadow-sm">
                                <p class="text-lg font-bold text-blue-900">Cost: MWK 42,000,000.00</p>
                            </div>
                        </div>

                        <!-- Notes -->
                        <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                <UIcon name="i-heroicons-exclamation-triangle" class="w-5 h-5 text-yellow-600" /> Note:
                            </h3>
                            <ul class="space-y-2 list-disc pl-5 text-gray-700">
                                <li>All prices exclude VAT</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </UCard>
    </UContainer>
</template>

<script setup>
const implementationItems = [
    { id: 1, item: 'IT Platform configuration' },
    { id: 2, item: 'Integration provisions (limited to Computemore Africa Tech related integrations, 3rd party integration costs are not included)' },
    { id: 3, item: 'Benefit partner negotiations and set up' },
    { id: 4, item: 'Reporting templates' },
    { id: 5, item: 'Set-up rules, data feeds, all requirements' },
    { id: 6, item: 'Customer communication plan, Rewards schedule, FAQs' },
    { id: 7, item: 'Staff training support (material & time)' }
]
</script>
