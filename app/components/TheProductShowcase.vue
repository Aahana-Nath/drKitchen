<template>
  <section class="bg-[var(--clr-bg3)] py-10 md:py-14 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-6 md:mb-8">
        <div class="section-label justify-center mb-2.5">Fresh &amp; Pure</div>
        <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--clr-dark)] mb-2 leading-none">Our Premium Products</h2>
        <div class="flex items-center justify-center gap-2.5 mt-2">
          <span class="h-px w-10 md:w-12 bg-[var(--clr-gold)] opacity-40 block"></span>
          <svg viewBox="0 0 16 16" width="10" height="10" fill="var(--clr-gold)" class="opacity-60"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
          <span class="h-px w-10 md:w-12 bg-[var(--clr-gold)] opacity-40 block"></span>
        </div>
      </div>

      <!-- Products grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
        <div
          v-for="product in products"
          :key="product.name"
          class="dk-card group overflow-hidden"
        >
          <!-- Image -->
          <div class="overflow-hidden h-28 md:h-36 lg:h-[150px] relative bg-transparent rounded-t-xl">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-glow w-full h-full object-contain transition-transform duration-500"
              loading="lazy"
            />
            <!-- Tag pill -->
            <span class="absolute top-2 md:top-3 left-2 md:left-3 text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-brand-gold/90 text-white px-2 py-0.5 md:px-2.5 md:py-1 rounded-full">
              {{ product.tag }}
            </span>
          </div>

          <!-- Body -->
          <div class="p-3 md:p-3.5">
            <h3 class="font-display text-sm md:text-[15px] font-semibold text-[var(--clr-dark)] mb-1 leading-snug">{{ product.name }}</h3>
            <p class="font-body text-[11px] md:text-xs text-[var(--clr-muted)] leading-relaxed mb-2 md:mb-2.5 line-clamp-2">{{ product.desc }}</p>
            <NuxtLink
              :to="'/products/' + product.slug"
              class="block w-full text-center border border-[rgba(181,138,58,0.4)] text-[var(--clr-gold)] bg-transparent font-body text-[10px] md:text-[11px] font-semibold tracking-wider uppercase py-1.5 md:py-2 rounded-lg transition-all duration-200 hover:bg-[var(--clr-accent)] hover:text-white hover:border-[var(--clr-accent)] no-underline"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View all -->
      <div class="text-center mt-6 md:mt-8">
        <NuxtLink to="/our-products" class="dk-btn">
          View All Products <i class="fas fa-arrow-right text-[11px]"></i>
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
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/46b4bcb9-0f6b-48fe-8ded-91aed109a631_removalai_preview.png',
  },
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    desc: 'Fiery Byadagi & Kashmiri blend. Deep colour, authentic heat, aromatic finish.',
    tag: 'Popular',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/red_chili.png',
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    desc: 'Fresh ground from premium Rajasthani dhaniya seeds. Earthy and aromatic.',
    tag: 'New',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/coriander.png',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    desc: "A perfectly balanced blend of 14 whole spices. India's most loved seasoning.",
    tag: 'Bestseller',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/aram_masala.png',
  },
  {
    slug: 'kitchen-king',
    name: 'Kitchen King',
    desc: 'The all-purpose masala blend for every dish. Rich, bold and deeply aromatic.',
    tag: 'Premium',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/kitchen_king.png',
  },
  {
    slug: 'cumin-seeds',
    name: 'Cumin Seeds',
    desc: 'Hand-cleaned Rajasthani jeera. Rich in essential oils, warm and nutty.',
    tag: 'Pure',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/cumin.png',
  },
]
</script>
