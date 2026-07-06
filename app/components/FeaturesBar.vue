<template>
  <section class="bg-[#1e3a5f] py-4 md:py-6">
    <div class="max-w-7xl mx-auto px-5 flex flex-wrap items-center justify-center md:justify-around gap-0">
      <div
        v-for="(feat, i) in features"
        :key="feat.label"
        class="flex items-center gap-2.5 md:gap-4 relative flex-[0_0_50%] md:flex-1 justify-start md:justify-center px-4 py-2.5 md:py-0"
      >
        <div class="w-9 h-9 md:w-12 md:h-12 border border-white/35 rounded-full flex items-center justify-center shrink-0">
          <i :class="feat.icon" class="text-sm md:text-lg text-white"></i>
        </div>
        <div class="flex flex-col gap-0.5">
          <p class="text-xs md:text-sm font-semibold text-white whitespace-pre-line leading-tight m-0">{{ feat.label }}</p>
          <p class="text-[10px] md:text-[11.5px] text-white/65 m-0">{{ feat.sub }}</p>
        </div>
        <div v-if="i < features.length - 1" class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-white/20"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'fas fa-truck', label: 'Fast & Reliable\nDelivery', sub: 'On time, everytime' },
  { icon: 'fas fa-shield-alt', label: 'Hygienically\nPacked', sub: 'Safe & Secure' },
  { icon: 'fas fa-medal', label: 'Trusted by\nThousands', sub: 'Quality you can trust' },
  { icon: 'fas fa-headset', label: 'Customer Support\n24/7', sub: 'We are here to help' },
]
</script>
