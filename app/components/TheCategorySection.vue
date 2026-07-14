<template>
  <section class="bg-white py-4 md:py-5 lg:py-6 overflow-x-auto md:overflow-visible">
    <div class="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      <div class="flex items-stretch gap-2 md:gap-3 min-w-min md:min-w-full">

        <!-- Heading column -->
        <div class="flex-shrink-0 w-24 sm:w-28 md:w-32 mr-1 md:mr-2 flex flex-col justify-center">
          <p class="font-serif italic text-brand-red text-base sm:text-lg md:text-xl lg:text-[22px] leading-tight">Shop by</p>
          <p class="font-serif font-black text-gray-900 text-base sm:text-lg md:text-xl lg:text-[23px] leading-tight uppercase tracking-wide">CATEGORY</p>
          <div class="mt-2 md:mt-3">
            <svg viewBox="0 0 90 22" width="90" height="22" fill="none">
              <path d="M4 11 Q22 3 45 11 Q68 19 86 11" stroke="#1a3a5c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <circle cx="45" cy="11" r="3" fill="#1a3a5c"/>
              <circle cx="20" cy="8" r="1.5" fill="#1a3a5c" fill-opacity="0.4"/>
              <circle cx="70" cy="14" r="1.5" fill="#1a3a5c" fill-opacity="0.4"/>
            </svg>
          </div>
        </div>

        <!-- Product cards -->
        <NuxtLink
          v-for="cat in categories"
          :key="cat.name"
          :to="`/our-products?category=${cat.productCategory}`"
          class="flex-1 md:flex-1 min-w-[140px] md:min-w-0 border border-gray-200 rounded-lg md:rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 bg-white"
        >
          <!-- Image -->
          <div class="h-20 sm:h-24 md:h-28 lg:h-[120px] overflow-hidden bg-gray-50">
            <img
              :src="cat.image"
              :alt="cat.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <!-- Body -->
          <div class="px-2 sm:px-2.5 pt-1.5 pb-1.5 md:px-2.5 md:pt-2 md:pb-2.5 border-t border-gray-100">
            <p class="font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase text-gray-900 tracking-wide mb-0.5">{{ cat.name }}</p>
            <div class="flex items-center justify-between mt-1">
              <p class="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 truncate">{{ cat.sub }}</p>
              <div class="w-4 h-4 md:w-5 md:h-5 rounded-full border border-gray-300 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-all duration-200 flex-shrink-0 ml-1">
                <i class="fas fa-chevron-right text-[6px] md:text-[8px] text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
            </div>
          </div>
        </NuxtLink>

        <!-- Special Offer card -->
        <div class="flex-shrink-0 w-28 sm:w-32 md:w-36 lg:w-32 bg-brand-red rounded-lg md:rounded-xl p-3 md:p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer">
          <div class="relative z-10">
            <p class="text-[7px] sm:text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/80 mb-1">SAVE 20%</p>
            <p class="font-serif font-bold italic text-white text-sm sm:text-base md:text-lg lg:text-[20px] leading-[1.15]">Special<br>Offer</p>
          </div>
          <a
            href="#"
            class="relative z-10 mt-2 md:mt-3 inline-flex items-center gap-1 bg-white text-brand-red text-[8px] sm:text-[9px] md:text-[10px] font-bold py-1 px-2 md:py-[6px] md:px-2.5 rounded-[3px] hover:bg-gray-50 transition-colors w-fit whitespace-nowrap"
          >
            SHOP NOW <i class="fas fa-chevron-right text-[7px] md:text-[9px]"></i>
          </a>
          <!-- decorative circle -->
          <div class="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 md:w-28 h-16 md:h-28 rounded-full bg-black/10 pointer-events-none"></div>
          <div class="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 rounded-full bg-black/[0.06] pointer-events-none -translate-y-6 md:-translate-y-8 translate-x-2 md:translate-x-4"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'WHOLE SPICES',
    sub:  'Bold & Natural',
    image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCategory: 'Whole Spices',
  },
  {
    name: 'GROUND SPICES',
    sub:  'Finely Milled',
    image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCategory: 'Spice Powders',
  },
  {
    name: 'BLENDED MASALAS',
    sub:  'Perfectly Balanced',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCategory: 'Masala Blends',
  },
  {
    name: 'HERBS & SEEDS',
    sub:  'Pure & Natural',
    image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCategory: 'Seeds',
  },
]
</script>
