<template>
  <section class="bg-[var(--clr-card)] py-8 sm:py-10 md:py-12 lg:py-14 relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-6 sm:mb-7 md:mb-8">
        <div class="section-label justify-center mb-2 sm:mb-2.5">Fresh &amp; Pure</div>
        <h2 class="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--clr-dark)] mb-1 md:mb-2 leading-snug">Our Premium Products</h2>
        <div class="flex items-center justify-center gap-2 sm:gap-2.5 mt-2">
          <span class="h-px w-8 sm:w-10 md:w-12 bg-[var(--clr-gold)] opacity-40 block"></span>
          <svg viewBox="0 0 16 16" width="9" height="9" sm-width="10" sm-height="10" fill="var(--clr-gold)" class="opacity-60 w-2.5 sm:w-2.5 md:w-2.5"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
          <span class="h-px w-8 sm:w-10 md:w-12 bg-[var(--clr-gold)] opacity-40 block"></span>
        </div>
      </div>

      <!-- Products grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <div
          v-for="product in products"
          :key="product.name"
          class="dk-card group overflow-hidden"
        >
          <!-- Image -->
          <div class="overflow-hidden h-20 sm:h-24 md:h-28 lg:h-[150px] relative rounded-t-lg sm:rounded-t-xl flex items-center justify-center px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-glow w-[105%] h-[105%] object-contain transition-transform duration-500 mix-blend-multiply"
              loading="lazy"
            />
            <!-- Tag pill -->
            <span class="absolute top-1.5 sm:top-2 md:top-3 left-1.5 sm:left-2 md:left-3 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] font-bold uppercase tracking-wider bg-brand-gold/90 text-white px-1.5 sm:px-2 py-0.5 md:px-2.5 md:py-1 rounded-full">
              {{ product.tag }}
            </span>
          </div>

          <!-- Body -->
          <div class="p-2 sm:p-2.5 md:p-3 lg:p-3.5">
            <h3 class="font-display text-xs sm:text-sm md:text-[15px] font-semibold text-[var(--clr-dark)] mb-0.5 md:mb-1 leading-snug">{{ product.name }}</h3>
            <p class="font-body text-[9px] sm:text-[10px] md:text-xs text-[var(--clr-muted)] leading-relaxed mb-1.5 sm:mb-2 md:mb-2.5 line-clamp-2">{{ product.desc }}</p>
            <NuxtLink
              :to="'/products/' + product.slug"
              class="block w-full text-center border border-[var(--clr-accent)] text-[var(--clr-accent)] bg-white font-body text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] font-semibold tracking-wider uppercase py-1 sm:py-1.5 md:py-2 rounded-lg transition-all duration-200 hover:bg-[var(--clr-accent)] hover:text-white hover:border-[var(--clr-accent)] no-underline"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View all -->
      <div class="text-center mt-5 sm:mt-6 md:mt-8">
        <NuxtLink to="/our-products" class="dk-btn">
          View All Products <i class="fas fa-arrow-right text-[9px] sm:text-[10px] md:text-[11px]"></i>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    desc: 'Pure golden turmeric from Erode farms. Rich in curcumin for colour and health.',
    tag: 'Bestseller',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/46b4bcb9-0f6b-48fe-8ded-91aed109a631_removalai_preview-removebg-preview_z2ylnf',
  },
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    desc: 'Fiery Byadagi & Kashmiri blend. Deep colour, authentic heat, aromatic finish.',
    tag: 'Popular',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/e2ba5fd7-0f54-4e4b-adf1-fa9b6682f740_removalai_preview_wfqaat',
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    desc: 'Fresh ground from premium Rajasthani dhaniya seeds. Earthy and aromatic.',
    tag: 'New',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/ad60a436-6d22-4b90-b9bf-dd17213aaeeb_removalai_preview_zol6tk',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    desc: "A perfectly balanced blend of 14 whole spices. India's most loved seasoning.",
    tag: 'Bestseller',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/f70c278c-8f8b-4e30-a4e8-4033ede3de4c_removalai_preview_wh4gwr',
  },
  {
    slug: 'kitchen-king',
    name: 'Kitchen King',
    desc: 'The all-purpose masala blend for every dish. Rich, bold and deeply aromatic.',
    tag: 'Premium',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/9118a7dc-248c-41c2-b451-e7718861ba50_removalai_preview_dqxqj3',
  },
  {
    slug: 'cumin-seeds',
    name: 'Cumin Seeds',
    desc: 'Hand-cleaned Rajasthani jeera. Rich in essential oils, warm and nutty.',
    tag: 'Pure',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/b4c7e9b4-d02a-48b1-a29d-a8c7e90db0c8_removalai_preview_ictfw6',
  },
]
</script>
