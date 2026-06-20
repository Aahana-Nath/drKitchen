<template>
  <section class="relative overflow-hidden flex flex-col lg:flex-row lg:min-h-[580px]" style="background-color: #F5EDD8;">

    <!-- Antique map watermark (left half) -->
    <div
      class="absolute inset-y-0 left-0 w-1/2 pointer-events-none bg-center bg-cover mix-blend-multiply"
      style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Old_map_of_world_by_Ortelius%2C_1570.jpg/1280px-Old_map_of_world_by_Ortelius%2C_1570.jpg'); opacity: 0.10;"
    ></div>



    <!-- LEFT: Content column -->
    <div
      class="relative z-10 w-full lg:w-[46%] flex-shrink-0 flex items-center py-14
             px-6 sm:px-10
             lg:pl-[max(2rem,calc((100vw_-_80rem)/2+2rem))]
             lg:pr-10 xl:pr-14"
    >
      <div class="w-full max-w-[560px] space-y-4">

        <!-- OUR STORY label with arrow ornaments -->
        <div class="flex items-center gap-2">
          <svg width="30" height="12" viewBox="0 0 36 14" fill="none">
            <path d="M2 7 L10 2 L8.5 7 L10 12Z" fill="#D8A24C" opacity="0.85"/>
            <line x1="10" y1="7" x2="34" y2="7" stroke="#D8A24C" stroke-width="1.2" opacity="0.55"/>
          </svg>
          <p class="text-brand-gold text-[10px] font-black tracking-[4px] uppercase">Our Story</p>
          <svg width="30" height="12" viewBox="0 0 36 14" fill="none">
            <line x1="2" y1="7" x2="26" y2="7" stroke="#D8A24C" stroke-width="1.2" opacity="0.55"/>
            <path d="M26 7 L34 2 L35.5 7 L34 12Z" fill="#D8A24C" opacity="0.85"/>
          </svg>
        </div>

        <!-- Heading -->
        <h2 class="font-serif font-black leading-[1.05]">
          <span class="block text-[38px] lg:text-[46px] text-gray-900">A Legacy of</span>
          <span class="block text-[38px] lg:text-[46px] text-brand-red">Flavour</span>
        </h2>

        <!-- Ornamental divider -->
        <div class="flex items-center gap-3">
          <div class="h-px w-20" style="background: linear-gradient(to right, transparent, #9ca3af88);"></div>
          <svg width="24" height="12" viewBox="0 0 28 14" fill="none">
            <circle cx="14" cy="7" r="3.5" fill="#D8A24C" opacity="0.55"/>
            <circle cx="5"  cy="7" r="1.5" fill="#D8A24C" opacity="0.35"/>
            <circle cx="23" cy="7" r="1.5" fill="#D8A24C" opacity="0.35"/>
          </svg>
          <div class="h-px w-20" style="background: linear-gradient(to left, transparent, #9ca3af88);"></div>
        </div>

        <p class="text-gray-700 text-[14px] leading-relaxed">
          DrKitchen was founded with a singular mission: to bring the purest, most authentic spices from farm to table. Every batch is hand-selected, scientifically processed, and packed to preserve natural aroma and flavour.
        </p>

        <p class="text-gray-500 text-[13.5px] leading-relaxed">
          From the spice fields of Kerala to the turmeric farms of Rajasthan, we source only the finest ingredients and apply modern food science to deliver consistent quality you can taste in every meal.
        </p>

        <!-- Bullet points -->
        <div class="space-y-2.5">
          <div v-for="point in points" :key="point.text" class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-full border border-gray-400/50 flex items-center justify-center flex-shrink-0 bg-white/40">
              <i :class="point.icon + ' text-gray-800 text-[11px]'"></i>
            </span>
            <span class="text-[13px] font-semibold text-gray-800">{{ point.text }}</span>
          </div>
        </div>

        <!-- CTA -->
        <div class="pt-1">
          <a
            href="#"
            class="inline-flex items-center gap-3 text-white font-bold text-[13px] tracking-wide px-7 py-3 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            style="background-color: #a52d20; border-radius: 4px;"
          >
            Discover Our Story <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>

      </div>
    </div>

    <!-- RIGHT: Full-height wavy image -->
    <div class="hidden lg:block relative flex-1">

      <!-- Full-bleed image -->
      <div class="absolute inset-0">
        <img
          src="https://plain-apac-prod-public.komododecks.com/202606/20/3yfQ0USsplBned7dmWrI/image.png"
          alt="DrKitchen Red Chilli Powder"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <!-- Wave overlay: cream SVG shape masking the left edge -->
      <svg
        class="absolute inset-y-0 left-0 h-full pointer-events-none z-10"
        style="width: 110px;"
        viewBox="0 0 110 580"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M110,0 C40,145 40,435 110,580 L0,580 L0,0 Z" fill="#F5EDD8"/>
      </svg>

      <!-- Badge: SOURCED FROM 15+ FARMS — top right -->
      <div class="absolute top-8 right-6 bg-white rounded-lg shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 z-10">
        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-leaf text-gray-700 text-[11px]"></i>
        </div>
        <div>
          <p class="text-[8px] text-gray-400 font-bold tracking-widest uppercase">Sourced From</p>
          <p class="text-[12px] font-black text-gray-900 tracking-wide">15+ FARMS</p>
        </div>
      </div>

      <!-- Badge: SCIENTIFICALLY PROCESSED — upper-left near wave -->
      <div class="absolute top-[33%] left-[8%] bg-white rounded-lg shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 z-10">
        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-flask text-gray-700 text-[11px]"></i>
        </div>
        <div>
          <p class="text-[8px] text-gray-400 font-bold tracking-widest uppercase">Scientifically</p>
          <p class="text-[12px] font-black text-gray-900 tracking-wide">PROCESSED</p>
        </div>
      </div>

      <!-- Badge: PURE. SAFE. AUTHENTIC. — lower right -->
      <div class="absolute bottom-[30%] right-[6%] bg-white rounded-lg shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 z-10">
        <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
          <i class="fas fa-shield-alt text-gray-700 text-[11px]"></i>
        </div>
        <div>
          <p class="text-[12px] font-black text-gray-900 tracking-wide leading-snug">PURE. SAFE.<br>AUTHENTIC.</p>
        </div>
      </div>

      <!-- Badge: 25+ YEARS OF EXCELLENCE — bottom center -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center px-7 py-3.5 z-10"
        style="background-color: #1a3a5c; border: 2px solid #D8A24C;"
      >
        <p class="font-serif text-[34px] font-black leading-none" style="color: #D8A24C;">25+</p>
        <p class="text-[8px] font-semibold tracking-[3px] text-white/70 uppercase mt-0.5">Years of</p>
        <p class="text-[8px] font-semibold tracking-[3px] text-white/70 uppercase">Excellence</p>
        <div class="flex items-center justify-center gap-1.5 mt-1.5">
          <div class="h-px w-6" style="background:#D8A24C; opacity:0.5;"></div>
          <div class="w-1 h-1 rounded-full" style="background:#D8A24C; opacity:0.5;"></div>
          <div class="h-px w-6" style="background:#D8A24C; opacity:0.5;"></div>
        </div>
      </div>

    </div>

    <!-- Mobile: stacked image -->
    <div class="lg:hidden mx-4 mb-10 h-64 rounded-2xl overflow-hidden">
      <img
        src="https://plain-apac-prod-public.komododecks.com/202606/20/3yfQ0USsplBned7dmWrI/image.png"
        alt="DrKitchen Red Chilli Powder"
        class="w-full h-full object-cover object-center"
      />
    </div>

  </section>
</template>

<script setup lang="ts">
const points = [
  { text: 'Directly sourced from certified organic farms across India', icon: 'fas fa-seedling' },
  { text: 'No artificial preservatives, colours or additives',          icon: 'fas fa-flask'    },
  { text: 'Rigorous quality testing at every stage of processing',      icon: 'fas fa-award'    },
  { text: 'Sustainably grown and ethically traded with farmers',        icon: 'fas fa-leaf'     },
]
</script>
