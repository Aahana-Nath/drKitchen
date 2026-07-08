<template>
  <div class="bg-[#faf5ee] font-body">

    <!-- ══════════════════════════════════════════
         HERO: OUR JOURNEY
    ══════════════════════════════════════════ -->
    <div class="w-full leading-[0]">
      <img src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/19b51bb4-5362-420b-b23c-455b1fb8c5c5.png" alt="Spices: A Story Older Than History"
        class="w-full block object-cover" />
    </div>

    <!-- ══════════════════════════════════════════
         QUOTES BAR
    ══════════════════════════════════════════ -->
    <div class="relative z-10 -mt-4 md:-mt-9 mx-2 md:mx-16 bg-white rounded-xl shadow-[0_6px_28px_rgba(0,0,0,0.09)] border border-[#f0e8d8]">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="(q, i) in quotes" :key="i"
          class="p-3 md:p-5 flex flex-col justify-between min-h-[60px] md:min-h-[80px] border-b sm:border-b-0 last:border-b-0"
          :class="{ 'sm:border-r border-[#f0e8d8]': i < 3, 'lg:border-r': i < 3 }">
          <div>
            <span class="block text-3xl md:text-5xl leading-none text-[#c8a96e] font-serif -mt-1 md:-mt-2 mb-0.5">&ldquo;</span>
            <p class="font-serif text-xs md:text-base text-gray-800 leading-relaxed m-0 italic">{{ q }}</p>
          </div>
          <span class="block text-3xl md:text-5xl leading-none text-[#c8a96e] font-serif text-right -mb-2 md:-mb-3">&rdquo;</span>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         FLAVOUR THAT CHANGED TRADE
    ══════════════════════════════════════════ -->
    <div class="flex flex-col lg:flex-row items-stretch min-h-[400px] lg:min-h-[440px] bg-[#faf5ee] pt-10 lg:pt-16">
      <!-- Left video -->
      <div class="w-full lg:w-[46%] shrink-0 px-4 lg:px-0 lg:pl-14 pb-6 lg:py-10">
        <video
          src="https://greyhound-test.s3.us-east-2.amazonaws.com/video-generation/videos/kling_video_20260625_081337_37d930f4-178237521790.mp4"
          autoplay loop muted playsinline
          class="w-full h-64 lg:h-full object-cover rounded-2xl block"
        ></video>
      </div>
      <!-- Right text -->
      <div class="flex-1 px-6 lg:px-16 py-8 lg:py-16 flex flex-col justify-center">
        <div class="flex items-center gap-2.5 mb-5">
          <span class="h-px w-9 bg-[#8b6914] opacity-70"></span>
          <p class="text-[11px] font-extrabold tracking-[3px] text-[#8b6914] uppercase m-0">The World Came Looking for Spice</p>
        </div>
        <h2 class="font-serif text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a1208] leading-tight mb-5 lg:mb-6">
          Flavour That Changed<br>Trade. And History.
        </h2>
        <p class="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-loose mb-4 max-w-lg">
          Spices preserved food, enabled voyages, built empires and defined wealth. Indian spices were so valuable, they were weighed against gold and demanded as tax by kings.
        </p>
        <p class="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-loose mb-5 lg:mb-6 max-w-lg">
          But the story is not just about demand.<br>
          It's also about control, colonisation, and a system that tried to dictate flavour.
        </p>
        <p class="text-base lg:text-lg font-bold text-[#C73A2B] mb-5">We are here to change that.</p>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         REGIONS: ONE COUNTRY, COUNTLESS FLAVOURS
    ══════════════════════════════════════════ -->
    <div class="bg-[#faf5ee] py-12 lg:py-[72px] lg:pb-14">
      <!-- Header row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 px-4 md:px-8 lg:px-20 mb-8 lg:mb-10 items-end">
        <div>
          <div class="flex items-center gap-2.5 mb-4">
            <span class="h-px w-9 bg-[#8b6914] opacity-70"></span>
            <p class="text-[11px] font-extrabold tracking-[3px] text-[#8b6914] uppercase m-0">India, a Land Defined by Flavour</p>
          </div>
          <h2 class="font-serif text-3xl md:text-4xl lg:text-[46px] font-bold text-[#1a1208] leading-tight m-0">
            One Country.<br>Countless Flavours.
          </h2>
        </div>
        <p class="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-loose pt-2">
          From the spice gardens of Kerala to the turmeric fields of Rajasthan, every region contributes to India's unmatched spice heritage. Explore the diversity that makes our spices extraordinary.
        </p>
      </div>
      <!-- Region cards scroll with nav arrows -->
      <div class="relative px-4 md:px-8 lg:px-20">
        <!-- Left arrow -->
        <button @click="scrollRegions(-1)" class="hidden md:flex absolute left-2 lg:left-5 top-1/2 -translate-y-1/2 z-[2] w-9 h-9 rounded-full bg-white border border-[#e8ddd0] shadow-md items-center justify-center cursor-pointer">
          <span class="text-sm text-gray-600">&#8249;</span>
        </button>
        <!-- Right arrow -->
        <button @click="scrollRegions(1)" class="hidden md:flex absolute right-2 lg:right-5 top-1/2 -translate-y-1/2 z-[2] w-9 h-9 rounded-full bg-white border border-[#e8ddd0] shadow-md items-center justify-center cursor-pointer">
          <span class="text-sm text-gray-600">&#8250;</span>
        </button>
        <div ref="regionsScroll" class="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
          <div v-for="region in regions" :key="region.name" class="region-card flex-shrink-0 w-[280px] sm:w-[240px] lg:w-[calc(20%-13px)] min-w-[200px] rounded-xl overflow-hidden bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] cursor-pointer border border-[#f0e8d8]">
            <img :src="region.image" :alt="region.name"
              class="w-full h-44 lg:h-[180px] object-cover block" />
            <div class="p-4 lg:px-[18px] lg:py-5">
              <h3 class="font-serif text-base lg:text-[17px] font-bold text-[#1a1208] mb-2 leading-snug">{{ region.name }}</h3>
              <p class="text-xs lg:text-[13px] text-gray-600 leading-relaxed mb-3">{{ region.desc }}</p>
              <div class="w-7 h-0.5 bg-[#c8a96e]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ══════════════════════════════════════════
         PROMISE: SCIENCE WITH SOUL
    ══════════════════════════════════════════ -->
    <div class="relative flex items-stretch min-h-[360px] lg:min-h-[420px] overflow-hidden">
      <!-- Background image -->
      <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/e36f7d3e-7491-4fd0-a454-0738bba7a8f3_opusbf" alt="" class="absolute inset-0 w-full h-full object-cover object-center z-0" />
      <!-- Warm overlay to keep text readable -->
      <div class="absolute inset-0 bg-[rgba(247,241,231,0.45)] z-[1]"></div>
      <!-- Centered text -->
      <div class="flex-1 px-6 py-12 lg:px-20 lg:py-[72px] flex flex-col items-center justify-center text-center relative z-[2]">
        <div class="flex items-center gap-2.5 mb-5">
          <span class="h-px w-9 bg-[#8b6914] opacity-70"></span>
          <p class="text-[11px] font-extrabold tracking-[3px] text-[#8b6914] uppercase m-0">Our Promise</p>
          <span class="h-px w-9 bg-[#8b6914] opacity-70"></span>
        </div>
        <h2 class="font-serif text-2xl md:text-4xl lg:text-[44px] font-bold text-[#1a1208] leading-tight mb-5">
          Science With Soul.<br>Heritage With Discipline.<br>This is <span class="text-[#C73A2B]">DrKitchen.</span>
        </h2>
        <p class="text-sm lg:text-[15px] text-gray-600 leading-relaxed lg:leading-loose max-w-xl mb-6 lg:mb-7">
          India's most advanced class of spices — where natural oils are preserved, aroma remains untouched and authenticity is non-negotiable.
        </p>
        <NuxtLink to="/products" class="inline-flex items-center gap-2 text-sm font-bold text-[#C73A2B] no-underline">
          Explore Our Products
          <span class="text-lg">→</span>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const regionsScroll = ref<HTMLElement | null>(null)
function scrollRegions(dir: number) {
  if (regionsScroll.value) {
    regionsScroll.value.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }
}
const quotes = [
  'Before maps were drawn, ships followed fragrance.',
  'Pepper was once used as currency.',
  'India was known by aroma before it was known by borders.',
  'Spices were knowledge before they were ingredients.',
]

const regions = [
  {
    name: 'Kerala',
    desc: 'The first spice kingdom. Pepper, cardamom, cinnamon, clove and more.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tamil Nadu & Karnataka',
    desc: 'Earth, heat and balance. Turmeric, Byadgi chillies and timeless spices.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Andhra Pradesh & Telangana',
    desc: 'The fire belt of India. Guntur chillies and bold flavours that define heat.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Gemini_Generated_Image_ogle2uogle2uogle_t3uagp',
  },
  {
    name: 'Gujarat & Rajasthan',
    desc: 'Precision spices. Jeera, coriander, fennel & methi.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Gemini_Generated_Image_yi95ynyi95ynyi95_z98uot',
  },
  {
    name: 'The North',
    desc: 'Depth and warmth. Himalayan cardamom and mountain turmeric.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Garhwal_Himal_from_Camels_Back__5281754856_yzrdgi',
  },
]

</script>

<style scoped>
.region-card {
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.region-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0,0,0,0.12);
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
