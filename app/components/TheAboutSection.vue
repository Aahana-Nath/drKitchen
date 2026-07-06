<template>
  <section class="bg-[#faf5ee]">

    <!-- HERO BANNER -->
    <div class="relative overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center">
      <!-- Full-bleed background image -->
      <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/ad3870ff-02c8-4998-a464-3b3a87e1b4aa_1_jqoh2z" alt="Spices"
        class="absolute inset-0 w-full h-full object-cover object-center" />
      <!-- Dark overlay for text legibility -->
      <div class="absolute inset-0 bg-gradient-to-r from-[rgba(15,10,5,0.85)] via-[rgba(15,10,5,0.45)] to-[rgba(15,10,5,0.15)]"></div>
      <!-- Text on top -->
      <div class="relative z-[2] max-w-xl px-5 py-10 md:px-12 lg:px-16 lg:py-16">
        <div class="flex items-center gap-2.5 mb-4">
          <span class="h-px w-8 lg:w-9 bg-[#D4A84B] opacity-90"></span>
          <p class="text-xs lg:text-[13px] font-extrabold tracking-widest text-[#D4A84B] uppercase m-0">Leadership That Inspires</p>
        </div>
        <h2 class="font-serif font-black text-white leading-none text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-5">
          The Minds Behind<br><span class="text-[#E8855A]">DrKitchen</span>
        </h2>
        <p class="text-sm lg:text-base text-white/80 leading-relaxed lg:leading-loose max-w-md mb-3 lg:mb-4">
          A blend of vision, experience and passion that drives DrKitchen towards quality, innovation and trust.
        </p>
        <p class="font-serif italic text-base lg:text-lg text-[#D4A84B] mb-4 lg:mb-5 leading-relaxed">
          Leadership rooted in values. Passion driven by purpose.
        </p>
        <div class="w-10 h-0.5 bg-[#E8855A] rounded"></div>
      </div>
    </div>

    <!-- LEADERSHIP GRID -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- CEO card (large, dark) -->
      <div class="leader-card bg-[#1c2b1a] rounded-2xl overflow-hidden flex flex-col md:flex-row min-h-[420px] lg:min-h-[480px] relative">
        <!-- Left: man photo -->
        <div class="w-full md:w-[45%] h-48 md:h-auto shrink-0 relative">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-19_at_12.04.36_xewsrm" alt="Amar Nath"
            class="w-full h-full object-cover object-top" />
        </div>
        <!-- Right: content -->
        <div class="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <p class="text-[10px] font-bold tracking-widest text-[#c8a96e] uppercase mb-1.5">From the desk of</p>
            <h3 class="font-serif text-2xl lg:text-3xl font-black text-white mb-2 leading-tight">The CEO</h3>
            <div class="w-9 h-0.5 bg-[#C73A2B] mb-3"></div>
            <div class="flex items-start gap-2 mb-4">
              <p class="font-serif italic text-base lg:text-lg text-[#c8a96e] leading-relaxed m-0">
                Turning every meal<br>into celebration
              </p>
            </div>
            <p class="text-xs lg:text-[13px] text-gray-400 leading-relaxed mb-5">
              At DrKitchen, we are committed to blending tradition with technology to deliver spices that are pure, flavourful and safe. Every product reflects our promise of quality and our passion for making your kitchen extraordinary.
            </p>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="font-extrabold text-sm lg:text-[15px] text-white mb-0.5">Amar Nath</p>
              <p class="text-xs text-[#C73A2B] font-semibold m-0">Chief Executive Officer</p>
            </div>
            <a href="#" class="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-[#C73A2B] flex items-center justify-center shrink-0">
              <i class="fas fa-arrow-right text-white text-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Right column (scrollable on desktop) -->
      <div class="flex flex-col gap-4 lg:gap-5 lg:max-h-[480px] lg:overflow-y-auto lg:pr-1.5" style="scrollbar-width:thin; scrollbar-color:#c8a96e #f0e8d8;">

        <!-- Chairman -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/vinita_eduuat" alt="Vinita Kumar"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">From the desk of</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-2 leading-tight">The Chairman</h3>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              Good food begins with great ingredients. Our mission is to honour India's rich culinary heritage and bring authentic flavours to homes across the world.
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Vinita Kumar</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Chairman, DrKitchen</p>
              </div>
              <a href="#" class="w-9 h-9 rounded-full bg-[#1c2b1a] flex items-center justify-center shrink-0">
                <i class="fas fa-arrow-right text-white text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Co-founder -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/9b02d4b5-2dd2-4642-abb1-b53ac1b83b5d_cwukmg" alt="Pankaj Kumar"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">From the desk of</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-2 leading-tight">Co-founder & Head –<br>Sales & Marketing</h3>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              Understanding our customers and delivering value is at the core of everything we do. We don't just sell spices, we build relationships.
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Pankaj Kumar</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Co-founder & Head – Sales & Marketing</p>
              </div>
              <a href="#" class="w-9 h-9 rounded-full bg-[#1c2b1a] flex items-center justify-center shrink-0">
                <i class="fas fa-arrow-right text-white text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Vijay Kumar -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/vijay_ahdwsd" alt="Vijay Kumar"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">From the desk of</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-2 leading-tight">Co-founder & Head –<br>Strategic Operations</h3>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              Naval veteran with two decades of distinguished service — bringing military precision and business acumen to lead DrKitchen's operational excellence.
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Vijay Kumar</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Co-founder & Head – Strategic Operations</p>
              </div>
              <a href="#" class="w-9 h-9 rounded-full bg-[#1c2b1a] flex items-center justify-center shrink-0">
                <i class="fas fa-arrow-right text-white text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Harpal Singh -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/4ec706b6-49b0-4252-bcba-a347aca2f81e_zftmrq" alt="Harpal Singh"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">Our Advisor</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-2 leading-tight">Chartered Accountant</h3>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              25+ years in financial management, compliance and strategic advisory — ensuring robust financial governance and sustainable growth for DrKitchen.
            </p>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Harpal Singh</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Chartered Accountant</p>
              </div>
              <a href="#" class="w-9 h-9 rounded-full bg-[#1c2b1a] flex items-center justify-center shrink-0">
                <i class="fas fa-arrow-right text-white text-xs"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- STATS BAR -->
    <div class="bg-white border-t border-[#f0e8d8]">
      <div class="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        <div v-for="(stat, i) in stats" :key="stat.label"
          class="p-4 md:p-6 lg:p-7 flex items-center gap-3 lg:gap-4 justify-center border-b lg:border-b-0"
          :class="{ 'border-r border-[#f0e8d8]': i % 2 === 0 || i < stats.length - 1, 'lg:border-r': i < stats.length - 1 }">
          <div class="w-11 h-11 lg:w-[52px] lg:h-[52px] rounded-full bg-[#1c2b1a] flex items-center justify-center shrink-0">
            <i :class="stat.icon" class="text-[#c8a96e] text-base lg:text-lg"></i>
          </div>
          <div class="text-left">
            <p class="font-serif text-xl lg:text-2xl font-black text-[#C73A2B] leading-none m-0">{{ stat.value }}</p>
            <p class="text-[10px] lg:text-[11.5px] text-gray-600 mt-0.5 leading-snug whitespace-pre-line m-0">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '25+',  label: 'Years of Expertise\nin Spices Industry', icon: 'fas fa-seedling' },
  { value: '5',    label: 'Visionary Leaders\nDriving Excellence',  icon: 'fas fa-award'    },
  { value: '100+', label: 'Dedicated\nTeam Members',                icon: 'fas fa-users'    },
  { value: '1',    label: 'Promise\nPurity, Quality & Taste',       icon: 'fas fa-heart'    },
]
</script>

<style scoped>
.leader-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}
.leader-card:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
</style>
