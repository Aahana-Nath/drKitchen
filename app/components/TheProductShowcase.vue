<template>
  <section class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-brand-gold text-[11px] font-black tracking-[4px] uppercase mb-3">Fresh & Pure</p>
        <h2 class="font-serif text-4xl lg:text-5xl font-black text-gray-900">Our Premium Products</h2>
        <div class="flex items-center justify-center gap-3 mt-4">
          <span class="h-px w-14 bg-brand-red/25"></span>
          <svg viewBox="0 0 16 16" width="12" height="12" fill="#C73A2B" class="opacity-60">
            <path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/>
          </svg>
          <span class="h-px w-14 bg-brand-red/25"></span>
        </div>
      </div>

      <!-- Products grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
        <div
          v-for="product in products"
          :key="product.name"
          class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
        >
          <!-- Image -->
          <div class="overflow-hidden h-52 relative bg-brand-beige">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <!-- Tag pill -->
            <span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-brand-gold/90 text-white px-2.5 py-1 rounded-full">
              {{ product.tag }}
            </span>
          </div>

          <!-- Body -->
          <div class="p-5">
            <h3 class="font-bold text-[15px] text-gray-900 mb-1.5">{{ product.name }}</h3>
            <p class="text-[13px] text-gray-500 leading-relaxed mb-4">{{ product.desc }}</p>
            <button
              class="w-full text-center border border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white font-semibold text-[13px] py-2.5 rounded-full transition-all duration-200"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <!-- View all -->
      <div class="text-center mt-12">
        <a href="#"
           class="inline-flex items-center gap-2.5 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-bold text-[13px] tracking-wider uppercase px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg"
        >
          View All Products <i class="fas fa-arrow-right text-xs"></i>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const products = [
  {
    name: 'Turmeric Powder',
    desc: 'Pure golden turmeric from Erode farms. Rich in curcumin for colour and health.',
    tag: 'Bestseller',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/turmeric.png',
  },
  {
    name: 'Red Chilli Powder',
    desc: 'Fiery Byadagi & Kashmiri blend. Deep colour, authentic heat, aromatic finish.',
    tag: 'Popular',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/red_chili.png',
  },
  {
    name: 'Coriander Powder',
    desc: 'Fresh ground from premium Rajasthani dhaniya seeds. Earthy and aromatic.',
    tag: 'New',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/coriander.png',
  },
  {
    name: 'Garam Masala',
    desc: "A perfectly balanced blend of 14 whole spices. India's most loved seasoning.",
    tag: 'Bestseller',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/garam_masala.png',
  },
  {
    name: 'Kitchen King',
    desc: 'The all-purpose masala blend for every dish. Rich, bold and deeply aromatic.',
    tag: 'Premium',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/kitchen_king.png',
  },
  {
    name: 'Cumin Seeds',
    desc: 'Hand-cleaned Rajasthani jeera. Rich in essential oils, warm and nutty.',
    tag: 'Pure',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/jeera.png',
  },
]
</script>
