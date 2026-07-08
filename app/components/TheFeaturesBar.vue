<template>
  <section class="bg-[#1e3a5f] py-6 rounded-t-3xl">
    <div class="max-w-[1400px] mx-auto px-6">
      <div class="flex items-center">
        <div
          v-for="(feat, i) in features"
          :key="feat.label"
          class="flex items-center gap-4 flex-1 justify-center relative"
        >
          <!-- Circle icon -->
          <div class="w-[48px] h-[48px] rounded-full border border-white/35 flex items-center justify-center flex-shrink-0">
            <i :class="feat.icon + ' text-white text-[18px]'"></i>
          </div>
          <!-- Text -->
          <div>
            <p class="text-white text-[13.5px] font-semibold leading-tight whitespace-pre-line">{{ feat.title }}</p>
            <p class="text-white/55 text-[11.5px] mt-0.5">{{ feat.sub }}</p>
          </div>
          <!-- Vertical separator (all but last) -->
          <div v-if="i < features.length - 1" class="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/20"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'fas fa-truck',    title: 'Fast & Reliable\nDelivery',    sub: 'On time, everytime'      },
  { icon: 'fas fa-shield-alt',title: 'Hygienically\nPacked',       sub: 'Safe & Secure'            },
  { icon: 'fas fa-medal',    title: 'Trusted by\nThousands',        sub: 'Quality you can trust'   },
  { icon: 'fas fa-headset',  title: 'Customer Support\n24/7',       sub: 'We are here to help'     },
]
</script>
