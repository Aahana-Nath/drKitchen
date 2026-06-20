<template>
  <div>
    <TheNavbar />

    <!-- Wrapper is 2× hero height so sticky has room to hold the hero fixed
         while sections scroll over it -->
    <div style="position: relative; height: 170vh;">
      <div style="position: sticky; top: 0; z-index: 0;">
        <TheHero />
      </div>
    </div>

    <!-- Sections pulled up by hero height so they begin right at the hero's bottom edge,
         then slide upward covering the frozen hero as the user scrolls -->
    <div style="position: relative; z-index: 1; margin-top: -85vh;">
      <TheFeaturesBar />
      <TheWhyChoose />
      <TheProductShowcase />
      <TheTestimonials />
      <TheFooter />
    </div>
  </div>
</template>

