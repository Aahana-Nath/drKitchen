<script setup lang="ts">
useHead({
  title: "DrKitchen | Premium Indian Spices",
  link: [{ rel: 'canonical', href: 'https://www.drkitchen.com' }],
  meta: [
    { name: "description", content: "Premium Indian spices crafted with science, tradition and authentic flavour. Explore turmeric, garam masala, red chilli and more from DrKitchen." },
    { property: "og:title", content: "DrKitchen | Premium Indian Spices" },
    { property: "og:description", content: "Premium Indian spices preserving purity, flavour and aroma." },
    { property: "og:url", content: "https://www.drkitchen.com" },
  ]
})
</script>

<template>
  <div>
    <TheNavbar />

    <!-- Sticky hero — stays fixed while content scrolls over it -->
    <div class="sticky top-[100px] md:top-[130px] z-0">
      <TheHero />
    </div>

    <!-- Content sections scroll over the hero -->
    <div class="relative z-10">
      <!-- Sticky WhyChoose — stays fixed while content scrolls over it -->
      <div class="sticky top-[100px] md:top-[130px] z-0">
        <TheWhyChoose />
      </div>

      <!-- These sections scroll over WhyChoose -->
      <div class="relative z-10">
        <TheProductShowcase />
        <TheTestimonials />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

