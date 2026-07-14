<template>
  <section class="relative overflow-hidden min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:h-[calc(100vh-130px)] bg-[#2a1810]">

    <!-- Full-bleed background image -->
    <img
      src="https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/ChatGPT_Image_Jul_13_2026_05_19_54_PM_snnlbg"
      alt="DrKitchen premium spices"
      class="absolute inset-0 w-full h-full object-cover z-0"
      fetchpriority="high"
    />

    <!-- Left-side overlay so text stays readable -->
    <div class="absolute inset-0 z-[1]"></div>

    <!-- Text content — overlaid on left, positioned lower -->
    <div class="absolute inset-0 z-[2] px-4 sm:px-6 md:px-10 lg:px-16 lg:px-24 py-6 sm:py-8 md:py-10 lg:py-10 w-full lg:w-1/2 flex flex-col justify-center fade-up">

      <!-- Section label -->
      <div class="flex items-center gap-2 sm:gap-2.5 md:gap-3 fade-up mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-bold" style="color:var(--clr-gold); font-size:clamp(0.9rem, 2.5vw, 1.2rem); letter-spacing:0.15em;">
        <span class="h-px w-12 sm:w-14 md:w-16 lg:w-20 block shrink-0" style="background:var(--clr-gold); opacity:0.7;"></span>
        <span class="shrink-0">Pure Spices. Rich Flavors.</span>
        <span class="h-px flex-1 block" style="background:var(--clr-gold); opacity:0.7; max-width:12rem;"></span>
      </div>

      <!-- Heading -->
      <h1 class="leading-[1.05] mb-3 sm:mb-4 md:mb-4 lg:mb-5 fade-up fade-up-d1" style="font-family:var(--font-display); font-weight:600; font-size:clamp(1.8rem, 6vw, 5rem); color:#1f3d1f; text-shadow:none;">
        Turns Every Meal<br>
        <span style="white-space:nowrap;">into <span style="font-family:'Parisienne',cursive; font-weight:400; color:var(--clr-accent); font-size:1.4em; text-shadow:0.5px 0.5px 0 var(--clr-accent), -0.5px 0 0 var(--clr-accent);">Celebration</span></span>
      </h1>

      <!-- Ornamental divider -->
      <div class="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mb-4 sm:mb-4 md:mb-5 lg:mb-6 fade-up fade-up-d2">
        <span class="h-px w-6 sm:w-7 md:w-8 lg:w-10 block" style="background:var(--clr-gold); opacity:0.7;"></span>
        <svg viewBox="0 0 16 16" width="12" height="12" sm-width="13" sm-height="13" md-width="14" md-height="14" fill="var(--clr-gold)" class="opacity-80 w-3 sm:w-3.5 md:w-3.5 lg:w-[14px]"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
        <span class="h-px w-6 sm:w-7 md:w-8 lg:w-10 block" style="background:var(--clr-gold); opacity:0.7;"></span>
      </div>

      <!-- Description -->
      <p class="font-body leading-relaxed lg:leading-loose mb-5 sm:mb-5 md:mb-6 lg:mb-8 max-w-sm lg:max-w-md fade-up fade-up-d2" style="color:#3d2a1a; font-size:clamp(0.9rem, 2vw, 1.05rem);">
        This is <span style="color:var(--clr-accent); font-weight:600;">DrKitchen</span>, bringing authentic flavours, rich aromas, and the joy of <span style="color:var(--clr-accent); font-weight:600;">celebration</span> to every meal.
      </p>

      <!-- CTA -->
      <NuxtLink to="/our-products" class="dk-btn fade-up fade-up-d4 self-start">
        Explore Our Products
        <i class="fas fa-arrow-right text-[9px] sm:text-[10px] md:text-[11px]"></i>
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
