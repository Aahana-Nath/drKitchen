<template>
  <section class="bg-white py-5">
    <div class="max-w-[1200px] mx-auto px-6 pl-0">
      <div class="flex items-stretch gap-3">

        <!-- Heading column -->
        <div class="flex-shrink-0 w-[160px] mr-3 flex flex-col justify-center">
          <p class="font-serif italic text-brand-red text-[22px] leading-tight">Shop by</p>
          <p class="font-serif font-black text-gray-900 text-[23px] leading-tight uppercase tracking-wide">CATEGORY</p>
          <div class="mt-3">
            <svg viewBox="0 0 90 22" width="90" height="22" fill="none">
              <path d="M4 11 Q22 3 45 11 Q68 19 86 11" stroke="#1a3a5c" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <circle cx="45" cy="11" r="3" fill="#1a3a5c"/>
              <circle cx="20" cy="8" r="1.5" fill="#1a3a5c" fill-opacity="0.4"/>
              <circle cx="70" cy="14" r="1.5" fill="#1a3a5c" fill-opacity="0.4"/>
            </svg>
          </div>
        </div>

        <!-- Product cards -->
        <div
          v-for="cat in categories"
          :key="cat.name"
          class="flex-1 border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 bg-white"
        >
          <!-- Image -->
          <div class="h-[120px] overflow-hidden bg-gray-50">
            <img
              :src="cat.image"
              :alt="cat.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <!-- Body -->
          <div class="px-2.5 pt-2 pb-2.5 border-t border-gray-100">
            <p class="font-bold text-[11px] uppercase text-gray-900 tracking-wide mb-0.5">{{ cat.name }}</p>
            <div class="flex items-center justify-between mt-1">
              <p class="text-[10px] text-gray-400">{{ cat.sub }}</p>
              <div class="w-[20px] h-[20px] rounded-full border border-gray-300 group-hover:border-brand-red group-hover:bg-brand-red flex items-center justify-center transition-all duration-200">
                <i class="fas fa-chevron-right text-[8px] text-gray-400 group-hover:text-white transition-colors"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Special Offer card -->
        <div class="flex-shrink-0 w-[130px] bg-brand-red rounded-xl p-4 flex flex-col justify-between relative overflow-hidden cursor-pointer">
          <div class="relative z-10">
            <p class="text-[9px] font-black uppercase tracking-widest text-white/80 mb-1.5">SAVE 20%</p>
            <p class="font-serif font-bold italic text-white text-[20px] leading-[1.15]">Special<br>Offer</p>
          </div>
          <a
            href="#"
            class="relative z-10 mt-3 inline-flex items-center gap-1.5 bg-white text-brand-red text-[10px] font-bold py-[6px] px-2.5 rounded-[3px] hover:bg-gray-50 transition-colors w-fit"
          >
            SHOP NOW <i class="fas fa-chevron-right text-[9px]"></i>
          </a>
          <!-- decorative circle -->
          <div class="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-black/10 pointer-events-none"></div>
          <div class="absolute top-0 right-0 w-16 h-16 rounded-full bg-black/[0.06] pointer-events-none -translate-y-8 translate-x-4"></div>
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
  },
  {
    name: 'GROUND SPICES',
    sub:  'Finely Milled',
    image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'BLENDED MASALAS',
    sub:  'Perfectly Balanced',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'HERBS & SEEDS',
    sub:  'Pure & Natural',
    image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'DRIED HERBS',
    sub:  'Aroma Locked',
    image: 'https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]
</script>
