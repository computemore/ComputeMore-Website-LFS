<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center">

        <component :is="currentStep.component" class="w-full min-h-screen" />

        <div class="absolute bottom-8 flex gap-4 mt-4 mb-2">
            <UButton size="sm" color="text-[#002D72]" variant="outline" v-if="currentStepIndex > 0" @click="prevStep"
                class="px-6 py-3 text-[#002D72] sm:text-base md:text-lg rounded-lg hover:bg-gray-400 transition flex items-center gap-2">
                <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
                Previous
            </UButton>

            <UButton size="lg" color="neutral" variant="solid" v-if="currentStepIndex < steps.length - 1"
                @click="nextStep"
                class="px-6 py-3 bg-[#002D72] text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                <span v-if="currentStepIndex === 0" class="flex items-center gap-2 sm:text-base md:text-lg">
                    <UIcon name="i-heroicons-play" class="w-5 h-5" />
                    Start
                </span>


                <span v-else class="flex items-center gap-2 sm:text-base md:text-lg">
                    Next
                    <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
                </span>
            </UButton>
            <UModal fullscreen title="NICO Life Loyalty System">
                <UButton size="lg" color="neutral" variant="outline"
                    class="px-6 py-3 bg-white text-[#002D72] rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
                    <span class="flex items-center gap-2 sm:text-base md:text-lg">
                        <UIcon name="i-heroicons-play" class="w-5 h-5" />
                        Watch Demo
                    </span>
                </UButton>
                <template #body>
                    <VideoPlayer/>
                </template>
            </UModal>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import EngagementCover from '~/components/Nico/EngagementCover.vue'
import ConsultationPhase from '~/components/Nico/ConsultationPhase.vue'
import CommercialImplementationPhase from '~/components/Nico/CommercialImplementationPhase.vue'
import VideoPlayer from '~/components/Nico/VideoPlayer.vue'

definePageMeta({
    layout: 'life'
})

const steps = [
    { id: 1, name: 'Cover', component: EngagementCover },
    { id: 2, name: 'Consultation & Planning/Design', component: ConsultationPhase },
    { id: 3, name: 'Implementation & Commercialization', component: CommercialImplementationPhase }
]

const route = useRoute()
const router = useRouter()

function parseStepQueryValue(value) {
    if (Array.isArray(value)) value = value[0]
    if (typeof value !== 'string') return null
    const parsed = Number.parseInt(value, 10)
    return Number.isFinite(parsed) ? parsed : null
}

function clampStepIndex(index) {
    return Math.min(Math.max(index, 0), steps.length - 1)
}

const initialStep = parseStepQueryValue(route.query.step) ?? 1
const currentStepIndex = ref(clampStepIndex(initialStep - 1))

const currentStep = computed(() => steps[currentStepIndex.value])

watch(
    () => route.query.step,
    (next) => {
        const step = parseStepQueryValue(next)
        if (!step) return

        const nextIndex = clampStepIndex(step - 1)
        if (nextIndex !== currentStepIndex.value) currentStepIndex.value = nextIndex
    }
)

watch(
    currentStepIndex,
    (index) => {
        const desiredStep = index + 1
        const currentStep = parseStepQueryValue(route.query.step)
        if (currentStep === desiredStep) return

        router.replace({
            query: {
                ...route.query,
                step: String(desiredStep),
            },
        })
    },
    { immediate: true }
)

function nextStep() {
    if (currentStepIndex.value < steps.length - 1) currentStepIndex.value++
}

function prevStep() {
    if (currentStepIndex.value > 0) currentStepIndex.value--
}
</script>
