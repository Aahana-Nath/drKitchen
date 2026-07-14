<template>
  <section class="bg-[var(--clr-bg2)] relative overflow-hidden py-6 sm:py-8 md:py-10 lg:py-[72px] px-3 sm:px-4 md:px-6 lg:px-8">

    <!-- Header -->
    <div class="text-center mb-6 sm:mb-7 md:mb-8 lg:mb-9">
      <h2 class="font-display text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-semibold text-[var(--clr-dark)] leading-tight mb-1.5">
        What Our<br><span class="text-[#C73A2B]">Customers Say</span>
      </h2>
      <!-- Ornamental divider -->
      <div class="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 my-2.5 sm:my-3">
        <span class="block h-px w-8 sm:w-9 md:w-10 lg:w-12 bg-[#c8a96e] opacity-70"></span>
        <svg width="12" height="12" sm-width="14" sm-height="14" md-width="16" md-height="16" viewBox="0 0 16 16" fill="#c8a96e" class="opacity-80 w-3 sm:w-3.5 md:w-4 lg:w-4">
          <path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/>
        </svg>
        <span class="block h-px w-8 sm:w-9 md:w-10 lg:w-12 bg-[#c8a96e] opacity-70"></span>
      </div>
      <p class="text-xs sm:text-sm md:text-[15px] text-gray-500 m-0">Real feedback from happy DrKitchen customers</p>
    </div>

    <!-- Testimonial cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-7 max-w-7xl mx-auto">
      <div
        v-for="t in testimonials"
        :key="t.name"
        class="dk-card flex flex-col overflow-hidden"
      >
        <!-- Card content -->
        <div class="p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
          <!-- Stars -->
          <div class="flex gap-0.5 mb-2 sm:mb-2.5">
            <span v-for="n in 5" :key="n" class="text-xs sm:text-sm md:text-base text-[#d4a017] leading-none">★</span>
          </div>
          <!-- Title -->
          <p class="font-display text-xs sm:text-sm md:text-base lg:text-[17px] font-semibold text-[var(--clr-dark)] mb-2 sm:mb-2.5 leading-snug">{{ t.title }}</p>
          <!-- Review -->
          <div class="flex-1 relative">
            <span class="text-xl sm:text-2xl md:text-3xl leading-[0.7] text-[#C73A2B] font-serif block mb-0.5 opacity-85">&ldquo;</span>
            <p class="font-body text-[10px] sm:text-xs md:text-sm text-[var(--clr-muted)] leading-relaxed m-0">{{ t.review }}</p>
            <span class="text-xl sm:text-2xl md:text-3xl leading-[0.7] text-[#C73A2B] font-serif block text-right mt-0.5 opacity-85">&rdquo;</span>
          </div>
        </div>
        <!-- Reviewer -->
        <div class="px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-3 lg:py-4 flex items-center gap-2 sm:gap-2.5 border-t border-[#f5ede0]">
          <div class="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#c8a96e]">
            <img v-if="t.image" :src="t.image" :alt="t.name" class="w-full h-full object-cover" />
            <div v-else class="w-full h-full bg-[#c8a96e] flex items-center justify-center">
              <i class="fas fa-user text-xs sm:text-sm md:text-base lg:text-lg text-white"></i>
            </div>
          </div>
          <div>
            <p class="font-serif text-xs sm:text-sm md:text-[15px] font-bold text-[#1a1208] mb-0.5">{{ t.name }}</p>
            <p class="text-[9px] sm:text-[10px] md:text-xs text-gray-500 m-0 flex items-center gap-0.5">
              <i class="fas fa-map-marker-alt text-[#C73A2B] text-[8px] sm:text-[9px]"></i>
              {{ t.location }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name:     'Shivani Srivastava',
    location: 'Mumbai',
    title:    'Authentic Taste & Fresh Aroma',
    review:   'DrKitchen spices have added rich aroma, freshness and authentic taste to my everyday cooking. The quality is excellent, the flavours feel natural, and every dish turns out more delicious. I truly enjoy using DrKitchen spices in my kitchen.',
    image:    'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/WhatsApp_Image_2026-06-27_at_12.25.29.jpeg',
  },
  {
    name:     'Geeta Ambastha',
    location: 'Gurgaon',
    title:    'The Real Difference in Every Dish',
    review:   'The quality of DrKitchen spices is excellent. They add beautiful colour, freshness, and authentic flavour to my food. I especially appreciate the purity and the aroma, which make home-cooked meals even more enjoyable.',
    image:    'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/nani.jpeg',
  },
  {
    name:     'Ananya Sharma',
    location: 'Delhi, India',
    title:    'Consistent Quality, Every Order',
    review:   "I switched to DrKitchen 6 months ago and haven't looked back. Quality is consistent across every order and the delivery is always on time. Highly recommended!",
    image:    '',
  },
]
</script>
