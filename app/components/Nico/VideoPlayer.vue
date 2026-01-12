<template>
  <div class="flex flex-col gap-6">
    <div class="flex justify-center space-x-4">
      <button 
        type="button"
        @click="activeVideo = 'web'"
        :class="[
          'px-6 py-2 rounded-full font-semibold transition-all duration-200 ring-1 ring-inset',
          activeVideo === 'web' 
            ? 'bg-[#002D72] text-white ring-[#002D72] shadow-md' 
            : 'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50'
        ]"
      >
        Web Demo
      </button>
      <button 
        type="button"
        @click="activeVideo = 'ussd'"
        :class="[
          'px-6 py-2 rounded-full font-semibold transition-all duration-200 ring-1 ring-inset',
          activeVideo === 'ussd' 
            ? 'bg-[#002D72] text-white ring-[#002D72] shadow-md' 
            : 'bg-white text-slate-600 ring-slate-200 hover:bg-slate-50'
        ]"
      >
        USSD Demo
      </button>
    </div>

    <div class="w-full max-w-full overflow-hidden">
      <video-player
        :key="activeVideo"
        class="video-player vjs-big-play-centered w-full max-w-full aspect-video bg-black rounded-lg overflow-hidden ring-1 ring-slate-900/10 shadow-xl"
        :src="videoSrc"
        crossorigin="anonymous"
        playsinline
        controls
        :volume="0.6"
        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
        @mounted="handleMounted"
        @ready="handleEvent($event)"
        @play="handleEvent($event)"
        @pause="handleEvent($event)"
        @ended="handleEvent($event)"
        @loadeddata="handleEvent($event)"
        @waiting="handleEvent($event)"
        @playing="handleEvent($event)"
        @canplay="handleEvent($event)"
        @canplaythrough="handleEvent($event)"
        @timeupdate="handleEvent(player?.currentTime())"
      />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, shallowRef, ref, computed } from 'vue'
  import { VideoPlayer } from '@videojs-player/vue'
  import videojs from 'video.js'
  import 'video.js/dist/video-js.css'
  import { useRuntimeConfig } from '#app'

  type VideoJsPlayer = ReturnType<typeof videojs>

  export default defineComponent({
    name: 'vue-basic-player-example',
    title: 'Basic player (Vue)',
    url: import.meta.url,
    components: {
      VideoPlayer
    },
    setup() {
      const runtimeConfig = useRuntimeConfig()
      const player = shallowRef<VideoJsPlayer>()
      const activeVideo = ref<'web' | 'ussd'>('web')

      const videoSrc = computed(() => {
        const base = String(runtimeConfig.public?.videosBaseUrl || '').replace(/\/+$/, '')
        const path = activeVideo.value === 'web' ? '/videos/Tuts.mp4' : '/videos/Tuts2.mp4'
        return base ? `${base}${path}` : path
      })

      const handleMounted = (payload: any) => {
        player.value = payload.player
      }

      const handleEvent = (log: any) => {
        // console.log('Basic player event', log)
      }

      return { player, handleMounted, handleEvent, activeVideo, videoSrc }
    }
  })
</script>

<style scoped>
  /* Video.js may inject inline widths; force it to respect the page container. */
  :deep(.video-js) {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
  }

  :deep(.video-js video) {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
  }
</style>

