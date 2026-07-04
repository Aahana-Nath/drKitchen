<template>
  <section style="background:var(--clr-bg3); padding:52px 0; position:relative; overflow:hidden;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-8">
        <div class="section-label" style="justify-content:center; margin-bottom:10px;">Fresh &amp; Pure</div>
        <h2 style="font-family:var(--font-display); font-size:36px; font-weight:600; color:var(--clr-dark); margin:0 0 8px; line-height:1.05;">Our Premium Products</h2>
        <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin-top:8px;">
          <span style="height:1px; width:48px; background:var(--clr-gold); opacity:0.4; display:block;"></span>
          <svg viewBox="0 0 16 16" width="10" height="10" fill="var(--clr-gold)" style="opacity:0.6;"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
          <span style="height:1px; width:48px; background:var(--clr-gold); opacity:0.4; display:block;"></span>
        </div>
      </div>

      <!-- Products grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
        <div
          v-for="product in products"
          :key="product.name"
          class="dk-card group"
          style="overflow:hidden;"
        >
          <!-- Image -->
          <div style="overflow:hidden; height:150px; position:relative; background:transparent; border-radius:14px 14px 0 0;">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-glow"
              style="width:100%; height:100%; object-fit:contain; transition:transform 0.5s ease;"
              loading="lazy"
            />
            <!-- Tag pill -->
            <span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-brand-gold/90 text-white px-2.5 py-1 rounded-full">
              {{ product.tag }}
            </span>
          </div>

          <!-- Body -->
          <div style="padding:12px 14px 14px;">
            <h3 style="font-family:var(--font-display); font-size:15px; font-weight:600; color:var(--clr-dark); margin:0 0 4px; line-height:1.3;">{{ product.name }}</h3>
            <p style="font-family:var(--font-body); font-size:12px; color:var(--clr-muted); line-height:1.6; margin:0 0 10px;">{{ product.desc }}</p>
            <NuxtLink
              :to="'/products/' + product.slug"
              style="display:block; width:100%; text-align:center; border:1px solid rgba(181,138,58,0.4); color:var(--clr-gold); background:transparent; font-family:var(--font-body); font-size:11px; font-weight:600; letter-spacing:1.5px; text-transform:uppercase; padding:7px; border-radius:8px; cursor:pointer; transition:all 0.2s ease; text-decoration:none;"
              @mouseenter="(e) => { e.currentTarget.style.background='var(--clr-accent)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor='var(--clr-accent)'; }"
              @mouseleave="(e) => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--clr-gold)'; e.currentTarget.style.borderColor='rgba(181,138,58,0.4)'; }"
            >
              View Details
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- View all -->
      <div class="text-center mt-8">
        <a href="#" class="dk-btn">
          View All Products <i class="fas fa-arrow-right" style="font-size:11px;"></i>
        </a>
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
