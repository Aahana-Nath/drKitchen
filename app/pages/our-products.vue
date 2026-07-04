<template>
  <div style="background:var(--clr-bg); min-height:100vh;">
    <TheNavbar />

    <!-- ═══════════════════════════════════════
         HERO BANNER
    ═══════════════════════════════════════ -->
    <section style="position:relative; overflow:hidden; min-height:320px; display:flex; align-items:center;">

      <!-- Full-bleed background image -->
      <img
        src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/e1d6b9df-b1ee-4c36-ac53-91ba3acedb7f_shwprl"
        alt="DrKitchen Spices"
        style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center;"
      />

      <!-- Dark gradient overlay — heavy on left for text legibility, fades out toward right -->
      <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(26,18,8,0.72) 0%, rgba(26,18,8,0.45) 45%, rgba(26,18,8,0.05) 100%); pointer-events:none;"></div>

      <!-- Text content — left side -->
      <div style="position:relative; z-index:1; max-width:1400px; width:100%; margin:0 auto; padding:64px 32px;">
        <div class="section-label" style="margin-bottom:18px; color:#D4A84B;">Our Products</div>
        <h1 style="font-family:var(--font-display); font-size:62px; font-weight:600; color:#fff; line-height:1.05; margin:0 0 4px; letter-spacing:-0.01em;">
          Pure Spices.
        </h1>
        <h1 style="font-family:var(--font-display); font-size:62px; font-weight:600; color:#fff; line-height:1.05; margin:0 0 18px; letter-spacing:-0.01em;">
          Rich Flavours.
        </h1>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
          <span style="height:1px; width:36px; background:#D4A84B; opacity:0.7; display:block;"></span>
          <svg viewBox="0 0 16 16" width="9" height="9" fill="#D4A84B" style="opacity:0.8;"><path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/></svg>
          <span style="height:1px; width:36px; background:#D4A84B; opacity:0.7; display:block;"></span>
        </div>
        <p style="font-family:var(--font-body); font-size:15px; color:rgba(255,255,255,0.80); line-height:1.8; max-width:420px; margin:0;">
          Carefully sourced. Scientifically processed.<br>
          Naturally preserved. Explore our complete<br>
          range of authentic spices.
        </p>
      </div>

    </section>

    <!-- ═══════════════════════════════════════
         CATEGORY FILTER BAR
    ═══════════════════════════════════════ -->
    <div style="background:#fff; border-bottom:1px solid rgba(181,138,58,0.14); box-shadow:0 2px 12px rgba(0,0,0,0.05); position:sticky; top:0; z-index:40;">
      <div style="max-width:1400px; margin:0 auto; padding:0 32px;">
        <div style="display:flex; align-items:center; gap:8px; overflow-x:auto; padding:14px 0; scrollbar-width:none;">

          <button
            v-for="cat in categories"
            :key="cat.label"
            @click="activeCategory = cat.label"
            :style="{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 18px',
              borderRadius: '50px',
              border: activeCategory === cat.label ? 'none' : '1.5px solid rgba(181,138,58,0.22)',
              background: activeCategory === cat.label ? 'var(--clr-dark)' : 'transparent',
              color: activeCategory === cat.label ? '#fff' : 'var(--clr-dark)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease',
              flexShrink: '0',
            }"
          >
            <span v-html="cat.icon" style="width:18px; height:18px; display:flex; align-items:center; justify-content:center;"></span>
            {{ cat.label }}
          </button>

        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════
         PRODUCTS LISTING
    ═══════════════════════════════════════ -->
    <section style="max-width:1400px; margin:0 auto; padding:36px 32px 80px;">

      <!-- Count + Sort + Filter bar -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:28px;">
        <p style="font-family:var(--font-body); font-size:14px; color:var(--clr-muted); margin:0;">
          Showing <strong style="color:var(--clr-dark);">1–{{ filteredProducts.length }}</strong> of <strong style="color:var(--clr-dark);">{{ allProducts.length }}</strong> products
        </p>
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="display:flex; align-items:center; gap:8px; border:1.5px solid rgba(181,138,58,0.22); border-radius:8px; padding:7px 14px; cursor:pointer; background:#fff;">
            <span style="font-family:var(--font-body); font-size:13px; color:var(--clr-muted);">Sort by:</span>
            <span style="font-family:var(--font-body); font-size:13px; font-weight:600; color:var(--clr-dark);">Popular</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 3.5L5 6.5L8 3.5" stroke="#5E564C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div style="display:flex; align-items:center; gap:7px; border:1.5px solid rgba(181,138,58,0.22); border-radius:8px; padding:7px 14px; cursor:pointer; background:#fff;">
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M1 1H13M3 6H11M5 11H9" stroke="#1F1B16" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span style="font-family:var(--font-body); font-size:13px; font-weight:600; color:var(--clr-dark);">Filter</span>
            <span style="width:18px; height:18px; border-radius:50%; border:1.5px solid rgba(181,138,58,0.3); display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; color:var(--clr-gold);">0</span>
          </div>
        </div>
      </div>

      <!-- Product grid — 5 columns -->
      <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:22px;">
        <NuxtLink
          v-for="product in filteredProducts"
          :key="product.name"
          :to="'/products/' + product.slug"
          class="product-card"
          style="background:#fff; border-radius:18px; border:1.5px solid rgba(181,138,58,0.18); box-shadow:0 4px 18px rgba(90,60,20,0.08); overflow:hidden; cursor:pointer; transition:transform 0.28s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.28s ease, border-color 0.28s ease; position:relative; text-decoration:none; display:block;"
          @mouseenter="(e) => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 20px 56px rgba(90,60,20,0.18)'; e.currentTarget.style.borderColor='rgba(181,138,58,0.45)'; }"
          @mouseleave="(e) => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 4px 18px rgba(90,60,20,0.08)'; e.currentTarget.style.borderColor='rgba(181,138,58,0.18)'; }"
        >
          <!-- Wishlist heart -->
          <button
            @click.stop="toggleWishlist(product.name)"
            style="position:absolute; top:12px; right:12px; z-index:2; width:34px; height:34px; border-radius:50%; background:rgba(255,255,255,0.92); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 10px rgba(0,0,0,0.12); transition:all 0.2s ease;"
          >
            <svg width="16" height="15" viewBox="0 0 14 13" fill="none">
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
          <div style="height:210px; display:flex; align-items:center; justify-content:center; padding:22px 18px 12px; background:var(--clr-bg);">
            <img
              :src="product.image"
              :alt="product.name"
              style="max-height:185px; max-width:100%; object-fit:contain; transition:transform 0.35s ease;"
              loading="lazy"
            />
          </div>

          <!-- Info -->
          <div style="padding:14px 16px 18px;">
            <p style="font-family:var(--font-body); font-size:15px; font-weight:700; color:var(--clr-dark); margin:0 0 3px; line-height:1.3;">{{ product.name }}</p>
            <p style="font-family:var(--font-body); font-size:12.5px; font-weight:400; color:var(--clr-muted); margin:0 0 5px; letter-spacing:0.2px;">{{ product.hindi }}</p>
            <p style="font-family:var(--font-body); font-size:12px; color:#999; margin:0; line-height:1.4;">{{ product.tag }}</p>
          </div>

        </NuxtLink>
      </div>

    </section>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const activeCategory = ref('All Products')
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
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/46b4bcb9-0f6b-48fe-8ded-91aed109a631_removalai_preview.png',
  },
  {
    slug: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    hindi: 'लाल मिर्च पाउडर',
    tag: 'Vibrant Colour | Bold Flavour',
    price: 105,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/dr_red_chiii_rtahdn',
  },
  {
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    hindi: 'धनिया पाउडर',
    tag: 'Aromatic | Freshly Ground',
    price: 70,
    weight: '100 g',
    category: 'Spice Powders',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/coriander.png',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala Whole',
    hindi: 'गरम मसाला साबुत',
    tag: 'Perfect Blend | Rich Aroma',
    price: 110,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/garam_masala_whole_dmf6oq',
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
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/black_pepper_moafjw',
  },
  {
    slug: 'kitchen-king',
    name: 'Kitchen King',
    hindi: 'किचन किंग',
    tag: 'Master Blend | All-Purpose',
    price: 90,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/kitchen_king.png',
  },
  {
    slug: 'garam-masala',
    name: 'Garam Masala',
    hindi: 'गरम मसाला',
    tag: 'Tangy | Zingy Flavour',
    price: 65,
    weight: '100 g',
    category: 'Masala Blends',
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/aram_masala.png',
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
    image: 'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/cumin.png',
  },
  {
    slug: 'cumin-seeds',
    name: 'Sesame Seeds',
    hindi: 'तिल',
    tag: 'Nutty | Pure | Natural',
    price: 65,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/seseme_qetljw',
  },
  {
    slug: 'cumin-seeds',
    name: 'Fenugreek Seeds',
    hindi: 'मेथी दाना',
    tag: 'Bitter | Earthy | Healthful',
    price: 55,
    weight: '100 g',
    category: 'Seeds',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/dc0214fb-771e-4173-9fb2-c0c77e08a954_xaklvh',
  },
  {
    slug: 'kitchen-king',
    name: 'Ajwain',
    hindi: 'अजवाइन',
    tag: 'Pungent | Digestive | Pure',
    price: 70,
    weight: '100 g',
    category: 'Whole Spices',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/ajwain_ehrllp',
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
]
const filteredProducts = computed(() => {
  if (activeCategory.value === 'All Products') return allProducts
  return allProducts.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
/* Hide scrollbar on category bar */
div::-webkit-scrollbar { display: none; }
</style>
