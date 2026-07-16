<script setup lang="ts">
useHead({
  title: 'Our Products | DrKitchen',
  link: [{ rel: 'canonical', href: 'https://www.drkitchen.com/our-products' }],
  meta: [
    { name: 'description', content: 'Explore DrKitchen\'s full range of premium Indian spices — turmeric, red chilli, coriander, garam masala, cumin and more.' },
    { property: 'og:title', content: 'Our Products | DrKitchen' },
    { property: 'og:url', content: 'https://www.drkitchen.com/our-products' },
  ]
})
</script>

<template>
  <div class="bg-[var(--clr-bg)] min-h-screen">
    <TheNavbar />

    <!-- ═══════════════════════════════════════
         HERO BANNER
    ═══════════════════════════════════════ -->
    <section class="relative overflow-hidden min-h-[240px] md:min-h-[320px] flex items-center">

      <!-- Full-bleed background image -->
      <img
        src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/e1d6b9df-b1ee-4c36-ac53-91ba3acedb7f_shwprl"
        alt="DrKitchen Spices"
        class="absolute inset-0 w-full h-full object-cover object-center"
      />

      <!-- Dark gradient overlay — heavy on left for text legibility, fades out toward right -->
      <div class="absolute inset-0 bg-gradient-to-r from-[rgba(26,18,8,0.85)] via-[rgba(26,18,8,0.45)] to-[rgba(26,18,8,0.05)] pointer-events-none"></div>

      <!-- Text content — left side -->
      <div class="relative z-[1] max-w-7xl w-full mx-auto px-5 py-10 md:px-8 lg:py-16">
        <div class="section-label mb-4 text-[#D4A84B]">Our Products</div>
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-none mb-1 tracking-tight">
          Pure Spices.
        </h1>
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-none mb-4 tracking-tight">
          Rich Flavours.
        </h1>
        <div class="flex items-center gap-2.5 mb-4 lg:mb-5">
          <span class="h-px w-9 bg-[#D4A84B] opacity-70 block"></span>
          <svg viewBox="0 0 16 16" width="9" height="9" fill="#D4A84B" class="opacity-80"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
          <span class="h-px w-9 bg-[#D4A84B] opacity-70 block"></span>
        </div>
        <p class="font-body text-sm lg:text-[15px] text-white/80 leading-relaxed lg:leading-loose max-w-md">
          Carefully sourced. Scientifically processed.<br class="hidden md:block">
          Naturally preserved. Explore our complete<br class="hidden md:block">
          range of authentic spices.
        </p>
      </div>

    </section>

    <!-- ═══════════════════════════════════════
         CATEGORY FILTER BAR
    ═══════════════════════════════════════ -->
    <div class="bg-white border-b border-[rgba(181,138,58,0.14)] shadow-sm sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 md:px-8">
        <div class="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">

          <button
            v-for="cat in categories"
            :key="cat.label"
            @click="activeCategory = cat.label"
            class="flex items-center gap-1.5 px-4 py-2 rounded-full font-body text-xs md:text-[13px] font-semibold whitespace-nowrap transition-all shrink-0"
            :class="activeCategory === cat.label ? 'bg-[var(--clr-dark)] text-white border-transparent' : 'border border-[rgba(181,138,58,0.22)] text-[var(--clr-dark)]'"
          >
            <span v-html="cat.icon" class="w-4 h-4 flex items-center justify-center"></span>
            {{ cat.label }}
          </button>

        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════
         PRODUCTS LISTING
    ═══════════════════════════════════════ -->
    <section class="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 py-6 sm:py-8 md:py-10 lg:pb-20">

      <!-- Count + Sort + Filter bar -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-5 sm:mb-6 lg:mb-7">
        <p class="font-body text-xs sm:text-sm text-[var(--clr-muted)] m-0">
          Showing <strong class="text-[var(--clr-dark)]">1–{{ filteredProducts.length }}</strong> of <strong class="text-[var(--clr-dark)]">{{ allProducts.length }}</strong> products
        </p>
        <div class="flex items-center gap-2">
          <div class="hidden md:flex items-center gap-2 border border-[rgba(181,138,58,0.22)] rounded-lg px-2.5 sm:px-3 py-1 md:py-1.5 cursor-pointer bg-white">
            <span class="font-body text-xs text-[var(--clr-muted)]">Sort by:</span>
            <span class="font-body text-xs font-semibold text-[var(--clr-dark)]">Popular</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="#5E564C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="hidden md:flex items-center gap-1.5 border border-[rgba(181,138,58,0.22)] rounded-lg px-2.5 sm:px-3 py-1 md:py-1.5 cursor-pointer bg-white">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 1H13M3 6H11M5 11H9" stroke="#1F1B16" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span class="font-body text-xs font-semibold text-[var(--clr-dark)]">Filter</span>
            <span class="w-3.5 h-3.5 rounded-full border border-[rgba(181,138,58,0.3)] flex items-center justify-center text-[9px] font-bold text-[var(--clr-gold)]">0</span>
          </div>
        </div>
      </div>

      <!-- Product grid -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <NuxtLink
          v-for="product in filteredProducts"
          :key="product.name"
          :to="'/products/' + product.slug"
          class="product-card bg-white rounded-lg sm:rounded-2xl border border-[rgba(181,138,58,0.18)] shadow-[0_4px_18px_rgba(90,60,20,0.08)] overflow-hidden relative block no-underline transition-all hover:scale-105 md:hover:scale-[1.03] hover:shadow-[0_20px_56px_rgba(90,60,20,0.18)] hover:border-[rgba(181,138,58,0.45)]"
        >
          <!-- Wishlist heart -->
          <button
            @click.stop="toggleWishlist(product.name)"
            class="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 z-[2] w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border-none cursor-pointer flex items-center justify-center shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-all"
          >
            <svg width="14" height="13" viewBox="0 0 14 13" fill="none">
              <path
                d="M7 12S1 8.5 1 4.5C1 2.567 2.567 1 4.5 1C5.612 1 6.607 1.528 7 2.3C7.393 1.528 8.388 1 9.5 1C11.433 1 13 2.567 13 4.5C13 8.5 7 12 7 12Z"
                :fill="wishlist.includes(product.name) ? '#8C2D21' : 'none'"
                :stroke="wishlist.includes(product.name) ? '#8C2D21' : '#aaa'"
                stroke-width="1.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <!-- Product image -->
          <div class="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-[210px] flex items-center justify-center px-2.5 sm:px-3 md:px-4 py-2 sm:py-3">
            <img
              :src="product.image"
              :alt="product.name"
              class="max-h-full max-w-full object-contain transition-transform mix-blend-multiply"
              loading="lazy"
            />
          </div>

          <!-- Info -->
          <div class="p-2 sm:p-2.5 md:p-4">
            <p class="font-body text-xs sm:text-sm md:text-[15px] font-bold text-[var(--clr-dark)] mb-0.5 md:mb-1 leading-snug">{{ product.name }}</p>
            <p class="font-body text-[9px] sm:text-[10px] text-[var(--clr-muted)] mb-0.5 md:mb-1 tracking-wide">{{ product.hindi }}</p>
            <p class="font-body text-[8px] sm:text-[10px] text-gray-400 m-0 leading-snug">{{ product.tag }}</p>
          </div>

        </NuxtLink>
      </div>

    </section>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Premium Indian Spices | DrKitchen",
  meta: [
    { name: "description", content: "Explore turmeric powder, garam masala, red chilli powder, coriander powder, cumin seeds and premium Indian spice blends from DrKitchen." },
    { property: "og:title", content: "Premium Indian Spices | DrKitchen" },
    { property: "og:description", content: "Explore our complete range of authentic premium Indian spices." },
    { property: "og:url", content: "https://www.drkitchen.com/our-products" },
  ]
})

const route = useRoute()
const activeCategory = ref('All Products')

// Watch route query parameter for category changes
watch(() => route.query.category, (newCategory) => {
  if (newCategory) {
    activeCategory.value = newCategory as string
  }
}, { immediate: true })

const wishlist = ref<string[]>([])

function toggleWishlist(name: string) {
  const idx = wishlist.value.indexOf(name)
  if (idx === -1) wishlist.value.push(name)
  else wishlist.value.splice(idx, 1)
}

const categories = [
  {
    label: 'All Products',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/><rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/><rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/><rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`,
  },
  {
    label: 'Spice Powders',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 14h6l1-8H4l1 8z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M6 6V4a2 2 0 0 1 4 0v2" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M6 9.5h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  },
  {
    label: 'Whole Spices',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><ellipse cx="8" cy="9" rx="5" ry="4" stroke="currentColor" stroke-width="1.3"/><path d="M8 5C8 5 9.5 2 12 1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M8 5C8 5 6 2.5 5 1" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  },
  {
    label: 'Masala Blends',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.5" stroke="currentColor" stroke-width="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  },
  {
    label: 'Seeds',
    icon: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><ellipse cx="5" cy="8" rx="2" ry="3.5" stroke="currentColor" stroke-width="1.3"/><ellipse cx="11" cy="6" rx="1.8" ry="3" stroke="currentColor" stroke-width="1.3" transform="rotate(20 11 6)"/><circle cx="8" cy="12" r="1.5" stroke="currentColor" stroke-width="1.3"/></svg>`,
  },
]

const allProducts = [
  {
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    hindi: 'हल्दी पाउडर',
    tag: '100% Natural | Rich in Curcumin',
    price: 95,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/46b4bcb9-0f6b-48fe-8ded-91aed109a631_removalai_preview-removebg-preview_z2ylnf',
  },
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    hindi: 'लाल मिर्च पाउडर',
    tag: 'Vibrant Colour | Bold Flavour',
    price: 105,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/e2ba5fd7-0f54-4e4b-adf1-fa9b6682f740_removalai_preview_wfqaat',
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    hindi: 'धनिया पाउडर',
    tag: 'Aromatic | Freshly Ground',
    price: 70,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/ad60a436-6d22-4b90-b9bf-dd17213aaeeb_removalai_preview_zol6tk',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala Whole',
    hindi: 'गरम मसाला साबुत',
    tag: 'Perfect Blend | Rich Aroma',
    price: 110,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/slazzer-preview-rcz8i_m5qrkg',
  },
  {
    slug: 'cumin-seeds',
    name: 'Cumin Powder',
    hindi: 'जीरा पाउडर',
    tag: 'Strong Aroma | Natural Oils',
    price: 80,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/cumin_powder_ps3tqk',
  },
  {
    slug: 'kitchen-king',
    name: 'Black Pepper Whole',
    hindi: 'काली मिर्च साबुत',
    tag: 'Bold | Pungent | Pure',
    price: 160,
    weight: '100 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/black_pepper-removebg-preview_mszflu',
  },
  {
    slug: 'kitchen-king',
    name: 'Kitchen King',
    hindi: 'किचन किंग',
    tag: 'Master Blend | All-Purpose',
    price: 90,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/9118a7dc-248c-41c2-b451-e7718861ba50_removalai_preview_dqxqj3',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    hindi: 'गरम मसाला',
    tag: 'Tangy | Zingy Flavour',
    price: 65,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/f70c278c-8f8b-4e30-a4e8-4033ede3de4c_removalai_preview_wh4gwr',
  },
  {
    slug: 'garam-masala',
    name: 'Cardamom Green',
    hindi: 'हरी इलायची',
    tag: 'Fragrant | Premium Grade',
    price: 280,
    weight: '50 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/elaichi_whole_upyyli',
  },
  {
    slug: 'cumin-seeds',
    name: 'Cumin Seeds',
    hindi: 'जीरा साबुत',
    tag: 'Rich Oils | Warm & Nutty',
    price: 90,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/b4c7e9b4-d02a-48b1-a29d-a8c7e90db0c8_removalai_preview_ictfw6',
  },
  {
    slug: 'cumin-seeds',
    name: 'Sesame Seeds',
    hindi: 'तिल',
    tag: 'Nutty | Pure | Natural',
    price: 65,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/chicken_masala-removebg-preview_nhbcav',
  },
  {
    slug: 'cumin-seeds',
    name: 'Fenugreek Seeds',
    hindi: 'मेथी दाना',
    tag: 'Bitter | Earthy | Healthful',
    price: 55,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/dc0214fb-771e-4173-9fb2-c0c77e08a954-Picsart-BackgroundRemover_lmgph7',
  },
  {
    slug: 'kitchen-king',
    name: 'Ajwain',
    hindi: 'अजवाइन',
    tag: 'Pungent | Digestive | Pure',
    price: 70,
    weight: '100 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/ajwain-removebg-preview_pr6yex',
  },
  {
    slug: 'kitchen-king',
    name: 'Jaifal Whole',
    hindi: 'जायफल',
    tag: 'Warm | Woody | Aromatic',
    price: 160,
    weight: '100 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/jaifal_iubulg',
  },
  {
    slug: 'kitchen-king',
    name: 'Chicken Masala',
    hindi: 'चिकन मसाला',
    tag: 'Bold | Smoky | Restaurant Style',
    price: 120,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/chicken_masala_lotwaz',
  },
  {
    slug: 'yellow-mustard',
    name: 'Yellow Mustard',
    hindi: 'पीली सरसों',
    tag: 'Mild | Tangy | Pure',
    price: 60,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/yellow_mustard_-removebg-preview_yyuyyz',
  },
  {
    slug: 'dry-red-chili',
    name: 'Dry Red Chili',
    hindi: 'सूखी लाल मिर्च',
    tag: 'Fiery | Whole | Natural',
    price: 80,
    weight: '100 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/a17qsguq/image/upload/f_auto,q_auto/slazzer-preview-y03vb_zq7utp',
  },
]
const filteredProducts = computed(() => {
  if (activeCategory.value === 'All Products') return allProducts
  return allProducts.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
/* Hide scrollbar */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { scrollbar-width: none; }
</style>
