<template>
    <div class="relative min-h-screen bg-white">
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/lifebg.png');"></div>

        <div class="absolute top-8 right-8 z-20">
            <NuxtLink to="/" aria-label="ComputeMore Website Home">
                <NuxtImg src="/Main-Logo_2.png" format="webp" densities="x1 x2" class="h-20 w-auto object-contain" alt="logo" />
            </NuxtLink>
        </div>

        <div
            class="absolute bottom-36 md:bottom-36 left-1/2 md:left-16 transform -translate-x-1/2 md:-translate-x-0 w-10/12 sm:w-3/4 md:max-w-lg bg-white/95 rounded-xl p-4 sm:p-6 text-[#002D72] z-20 flex flex-col gap-4 shadow-lg">
            <!-- Small logo inside overlay -->
            <!-- <NuxtImg src="/nl-logo.png" densities="x1 x2" class="w-auto object-contain" alt="logo" /> -->
            <a href="https://nico-life.com" target="_blank" rel="noopener noreferrer" aria-label="Nico Life Website">
                <NuxtImg src="/nl-logo.png" densities="x1 x2" class="w-auto object-contain" alt="logo" />
            </a>
            <h1 class="sm:text-2xl md:text-5xl font-bold leading-tight text-[#002D72]">
                Engagement<br>Process
            </h1>
            <p class="sm:text-base md:text-lg leading-relaxed text-[#002D72]">
                From consultation to launch, our end-to-end process turns collaboration into real results, partnering with clients every step of the way to drive impact.
            </p>
            <p class="sm:text-base md:text-lg text-[#002D72] mt-2">2nd January 2026</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
}
/* .deep-blue {
    color: #002D72;
}
.bg-deep-blue {
    background-color: #002D72;
}
.text-blue-600 {
    color: #1E40AF;
} */
</style>
