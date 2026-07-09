<template>
  <section class="relative overflow-hidden h-[calc(100vh-130px)] bg-[#2a1810]">

    <!-- Full-bleed background image -->
    <img
      src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/ddcce667-71e0-4927-b5e6-a6fefe61f9df_pm3ofl"
      alt="DrKitchen premium spices"
      class="absolute inset-0 w-full h-full object-cover z-0"
      fetchpriority="high"
    />

    <!-- Left-side overlay so text stays readable -->
    <div class="absolute inset-0 bg-gradient-to-r from-[rgba(20,14,8,0.85)] via-[rgba(20,14,8,0.55)] to-transparent z-[1]"></div>

    <!-- Text content — overlaid on left, positioned lower -->
    <div class="absolute inset-0 z-[2] px-5 py-8 md:px-10 lg:px-16 lg:py-10 w-full lg:w-1/2 flex flex-col justify-center fade-up">

      <!-- Section label -->
      <div class="section-label fade-up mb-4 lg:mb-6 text-white/70">Pure Spices. Rich Flavors.</div>

      <!-- Heading -->
      <h1 class="font-display font-semibold text-white leading-[0.9] mb-4 lg:mb-5 tracking-tight text-[clamp(2.5rem,10vw,6rem)] fade-up fade-up-d1" style="text-shadow:0 2px 20px rgba(0,0,0,0.3);">
        SPICES<br>
        <em class="italic text-[#e8a87c]">THAT TELL</em><br>
        A STORY
      </h1>

      <!-- Ornamental divider -->
      <div class="flex items-center gap-2.5 mb-5 lg:mb-6 fade-up fade-up-d2">
        <span class="h-px w-8 lg:w-10 bg-white/40 block"></span>
        <svg width="120" height="14" viewBox="0 0 120 14" fill="none" class="w-20 lg:w-[120px]">
          <path d="M0 7 Q15 2, 30 7 Q45 12, 60 7 Q75 2, 90 7 Q105 12, 120 7" stroke="rgba(255,255,255,0.5)" stroke-width="1" fill="none"/>
          <circle cx="60" cy="7" r="2.5" fill="rgba(255,255,255,0.55)"/>
          <circle cx="30" cy="7" r="1.5" fill="rgba(255,255,255,0.35)"/>
          <circle cx="90" cy="7" r="1.5" fill="rgba(255,255,255,0.35)"/>
        </svg>
        <span class="h-px w-8 lg:w-10 bg-white/40 block"></span>
      </div>

      <!-- Description -->
      <p class="font-body text-sm lg:text-base leading-relaxed lg:leading-loose text-white/80 mb-6 lg:mb-8 max-w-sm lg:max-w-md fade-up fade-up-d2" style="text-shadow:0 1px 8px rgba(0,0,0,0.3);">
        DrKitchen is not just a spice brand — it is born out of history, science, and respect. Crafted to bring purity, flavor, and aroma to every kitchen.
      </p>

      <!-- Feature badges -->
      <div class="flex flex-wrap items-start gap-3 lg:gap-5 mb-8 lg:mb-9 fade-up fade-up-d3">
        <div v-for="f in features" :key="f.label" class="flex items-center gap-2 lg:gap-2.5 shrink-0">
          <div class="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/35 flex items-center justify-center shrink-0 bg-white/[0.08]">
            <i :class="f.icon" class="text-xs lg:text-sm text-white/85"></i>
          </div>
          <div class="leading-tight">
            <p class="text-[11px] lg:text-xs font-semibold text-white m-0">{{ f.label }}</p>
            <p class="text-[10px] text-white/60 m-0">{{ f.sub }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <NuxtLink to="/our-products" class="dk-btn fade-up fade-up-d4 self-start">
        Explore Our Products
        <i class="fas fa-arrow-right text-[11px]"></i>
      </NuxtLink>

    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'fas fa-leaf',     label: '100% Natural',   sub: 'No Preservatives', color: '#41543B' },
  { icon: 'fas fa-flask',    label: 'Scientifically', sub: 'Processed',        color: '#8C2D21' },
  { icon: 'fas fa-award',    label: 'Premium',        sub: 'Quality',          color: '#8C2D21' },
  { icon: 'fas fa-seedling', label: 'Sourced with',   sub: 'Care',             color: '#41543B' },
]
</script>
