<template>
  <section class="bg-[#faf5ee]">

    <!-- HERO BANNER -->
    <div class="relative overflow-hidden min-h-[300px] md:min-h-[400px] flex items-center">
      <!-- Full-bleed background image -->
      <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/v1783507591/4a207765-d7fd-40d0-bf39-a5829ad65f1b_tej4jc.png" alt="Founder's Note"
        class="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" />
      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-[rgba(20,14,8,0.82)] via-[rgba(20,14,8,0.45)] to-transparent z-[1]"></div>
      <!-- Text on left -->
      <div class="relative z-[2] px-8 md:px-14 lg:px-20 py-10 w-full lg:w-1/2">
        <p class="text-[11px] font-bold tracking-widest text-[#c8a96e] uppercase mb-3">Meet Our Leaders</p>
        <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
          The Minds<br><em class="italic text-[#e8a87c]">Behind</em><br>DrKitchen
        </h1>
        <div class="w-10 h-0.5 bg-[#C73A2B] mb-4"></div>
        <p class="text-sm md:text-base text-white/75 leading-relaxed max-w-sm">
          DrKitchen proudly presents India's most advanced class of spices — where natural oils are preserved, aroma remains untouched, and authenticity is non-negotiable. This is not seasoning. This is science with soul.
        </p>
      </div>
    </div>

    <!-- LEADERSHIP GRID -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-6">

      <!-- CEO card (large, dark) -->
      <div class="leader-card bg-[#1c2b1a] rounded-2xl overflow-hidden flex flex-col md:flex-row relative min-h-[380px] lg:min-h-[440px] shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-[rgba(200,169,110,0.15)]">
        <!-- Left: man photo -->
        <div class="w-full md:w-[42%] h-72 md:h-auto shrink-0 relative">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-19_at_12.04.36_xewsrm" alt="Amar Nath"
            class="w-full h-full object-cover object-[center_15%] md:object-top" />
        </div>
        <!-- Right: content -->
        <div class="flex-1 p-6 md:p-8 lg:p-9 flex flex-col justify-between">
          <div>
            <p class="text-[10px] font-bold tracking-widest text-[#c8a96e] uppercase mb-1.5">From the desk of</p>
            <h3 class="font-serif text-2xl lg:text-3xl font-black text-white mb-1 leading-tight">The CEO</h3>
            <p class="text-[10px] font-semibold tracking-wide text-[#8aab7a] uppercase mb-2.5">IIM Nagpur Alumni & Strategic Leader</p>
            <div class="w-8 h-0.5 bg-[#C73A2B] mb-3"></div>
            <p class="font-serif italic text-base text-[#c8a96e] leading-relaxed mb-3">
              Turning every meal into celebration
            </p>
            <p class="text-[13px] text-gray-400 leading-relaxed mb-2.5">
              At DrKitchen, we blend tradition with technology to deliver spices that are pure, flavourful and safe. With over 25 years of experience spanning HR, Marketing and Operations, Mr. Amar Nath brings a strategic perspective to organizational leadership.
            </p>
            <p class="text-[13px] text-gray-400 leading-relaxed mb-5">
              His dynamic vision has been pivotal in driving the company's sustained growth, having delivered strategic support to 50+ clients across diverse corporate sectors.
            </p>
          </div>
          <div>
              <p class="font-extrabold text-[15px] text-white mb-0.5">Amar Nath</p>
              <p class="text-xs text-[#C73A2B] font-semibold m-0">Co-Founder & CEO</p>
          </div>
        </div>
      </div>

      <!-- Right column (scrollable on desktop) -->
      <div class="flex flex-col gap-4 lg:gap-5 lg:max-h-[480px] lg:overflow-y-auto lg:pr-1.5" style="scrollbar-width:thin; scrollbar-color:#c8a96e #f0e8d8;">

        <!-- Co-founder Pankaj -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_4px_20px_rgba(90,60,20,0.10)] border border-[rgba(181,138,58,0.20)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/9b02d4b5-2dd2-4642-abb1-b53ac1b83b5d_cwukmg" alt="Pankaj Kumar"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">From the desk of</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-1 leading-tight">Co-Founder & Head<br>Sales & Marketing</h3>
            <p class="text-[9px] font-semibold tracking-wide text-[#41543B] uppercase mb-2">25+ Years in Marketing & Operations Management</p>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              An alumnus of FORE School of Management, Mr. Pankaj Kumar specializes in strategic marketing, operational planning, process optimization, and team leadership. With a proven track record of enhancing productivity and driving sustainable business growth, he plays a key role in strengthening customer engagement and the company's long-term success.
            </p>
            <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Pankaj Kumar</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Co-Founder & Head, Sales & Marketing</p>
            </div>
          </div>
        </div>

        <!-- Vijay Kumar -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_4px_20px_rgba(90,60,20,0.10)] border border-[rgba(181,138,58,0.20)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/vijay_ahdwsd" alt="Vijay Kumar"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">From the desk of</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-1 leading-tight">Co-Founder & Head<br>Strategic Operations</h3>
            <p class="text-[9px] font-semibold tracking-wide text-[#41543B] uppercase mb-2">Naval Veteran. Shaping Strategy. Delivering Impact.</p>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              With over two decades of distinguished service in the Indian Navy (Aviation Arm), Mr. Vijay Kumar leads operational excellence and premium experience delivery. Holding a PGDBA in Operations Management from Symbiosis Centre for Distance Learning, he combines military precision with business acumen to drive consistency, efficiency, and elevated service standards.
            </p>
            <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Vijay Kumar</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Co-Founder & Head, Strategic Operations</p>
            </div>
          </div>
        </div>

        <!-- Harpal Singh -->
        <div class="leader-card bg-white rounded-2xl p-5 lg:p-7 flex flex-col sm:flex-row items-center gap-4 lg:gap-6 shadow-[0_4px_20px_rgba(90,60,20,0.10)] border border-[rgba(181,138,58,0.20)]">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/4ec706b6-49b0-4252-bcba-a347aca2f81e_zftmrq" alt="Harpal Singh"
            class="w-24 h-32 lg:w-[120px] lg:h-[148px] rounded-lg object-cover shrink-0" />
          <div class="flex-1 text-center sm:text-left">
            <p class="text-[9px] font-extrabold tracking-widest text-[#8b6914] uppercase mb-1">Our Advisor</p>
            <h3 class="font-serif text-lg lg:text-xl font-black text-[#1a1208] mb-1 leading-tight">Chartered Accountant</h3>
            <p class="text-[9px] font-semibold tracking-wide text-[#41543B] uppercase mb-2">25+ Years in Financial Management & Strategic Advisory</p>
            <div class="w-7 h-0.5 bg-[#C73A2B] mb-2.5 mx-auto sm:mx-0"></div>
            <p class="text-xs text-gray-600 leading-relaxed mb-3">
              Mr. Harpal Singh brings exceptional expertise in financial planning, risk management, regulatory compliance, and business advisory. His strategic insights and disciplined approach enable organizations to make informed financial decisions, ensuring robust financial governance and sustainable long-term stability for DrKitchen.
            </p>
            <div>
                <p class="font-extrabold text-sm text-[#1a1208] mb-0.5">Harpal Singh</p>
                <p class="text-[11px] text-[#C73A2B] font-semibold m-0">Chartered Accountant</p>
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
