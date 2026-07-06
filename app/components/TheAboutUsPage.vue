<template>
  <div style="background:#faf5ee; font-family:'Poppins',sans-serif;">

    <!-- ══════════════════════════════════════════
         HERO: OUR JOURNEY
    ══════════════════════════════════════════ -->
    <div style="width:100%; line-height:0;">
      <img src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/19b51bb4-5362-420b-b23c-455b1fb8c5c5.png" alt="Spices: A Story Older Than History"
        style="width:100%; display:block; object-fit:cover;" />
    </div>

    <!-- ══════════════════════════════════════════
         QUOTES BAR
    ══════════════════════════════════════════ -->
    <div style="position:relative; z-index:10; margin:-36px 64px 0; background:#fff; border-radius:12px; box-shadow:0 6px 28px rgba(0,0,0,0.09); border:1px solid #f0e8d8;">
      <div style="" class="about-quotes-grid">
        <div v-for="(q, i) in quotes" :key="i"
          :style="{ padding:'14px 20px 10px', borderRight: i < 3 ? '1px solid #f0e8d8' : 'none', display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'60px' }">
          <div>
            <span style="display:block; font-size:48px; line-height:1; color:#c8a96e; font-family:Georgia,serif; margin-bottom:2px; margin-top:-10px;">&ldquo;</span>
            <p style="font-family:'Playfair Display',Georgia,serif; font-size:16px; color:#333; line-height:1.6; margin:0; font-style:italic;">{{ q }}</p>
          </div>
          <span style="display:block; font-size:48px; line-height:1; color:#c8a96e; font-family:Georgia,serif; text-align:right; margin-top:0; margin-bottom:-14px;">&rdquo;</span>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         FLAVOUR THAT CHANGED TRADE
    ══════════════════════════════════════════ -->
    <div style="display:flex; align-items:stretch; min-height:440px; background:#faf5ee; padding-top:64px;">
      <!-- Left video -->
      <div style="width:46%; flex-shrink:0; padding:40px 0 40px 56px;">
        <video
          src="https://greyhound-test.s3.us-east-2.amazonaws.com/video-generation/videos/kling_video_20260625_081337_37d930f4-178237521790.mp4"
          autoplay loop muted playsinline
          style="width:100%; height:100%; object-fit:cover; border-radius:18px; display:block;"
        ></video>
      </div>
      <!-- Right text -->
      <div style="flex:1; padding:64px 72px 64px 64px; display:flex; flex-direction:column; justify-content:center;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
          <span style="height:1px; width:36px; background:#8b6914; opacity:0.7;"></span>
          <p style="font-size:11px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0;">The World Came Looking for Spice</p>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:44px; font-weight:700; color:#1a1208; line-height:1.1; margin:0 0 24px;">
          Flavour That Changed<br>Trade. And History.
        </h2>
        <p style="font-size:15px; color:#555; line-height:1.8; margin:0 0 16px; max-width:520px;">
          Spices preserved food, enabled voyages, built empires and defined wealth. Indian spices were so valuable, they were weighed against gold and demanded as tax by kings.
        </p>
        <p style="font-size:15px; color:#555; line-height:1.8; margin:0 0 24px; max-width:520px;">
          But the story is not just about demand.<br>
          It's also about control, colonisation, and a system that tried to dictate flavour.
        </p>
        <p style="font-size:18px; font-weight:700; color:#C73A2B; margin:0 0 20px;">We are here to change that.</p>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         REGIONS: ONE COUNTRY, COUNTLESS FLAVOURS
    ══════════════════════════════════════════ -->
    <div style="background:#faf5ee; padding:72px 0 56px;">
      <!-- Header row -->
      <div class="about-flavours-grid" style="gap:40px; padding:0 80px; margin-bottom:40px; align-items:end;">
        <div>
          <div style="display:flex; align-items:center; gap:10px; margin-bottom:16px;">
            <span style="height:1px; width:36px; background:#8b6914; opacity:0.7;"></span>
            <p style="font-size:11px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0;">India, a Land Defined by Flavour</p>
          </div>
          <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:46px; font-weight:700; color:#1a1208; line-height:1.1; margin:0;">
            One Country.<br>Countless Flavours.
          </h2>
        </div>
        <p style="font-size:15px; color:#555; line-height:1.8; padding-top:8px;">
          From the spice gardens of Kerala to the turmeric fields of Rajasthan, every region contributes to India's unmatched spice heritage. Explore the diversity that makes our spices extraordinary.
        </p>
      </div>
      <!-- Region cards scroll with nav arrows -->
      <div style="position:relative; padding:0 80px;">
        <!-- Left arrow -->
        <button @click="scrollRegions(-1)" style="position:absolute; left:20px; top:50%; transform:translateY(-50%); z-index:2; width:36px; height:36px; border-radius:50%; background:#fff; border:1px solid #e8ddd0; box-shadow:0 2px 8px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer;">
          <span style="font-size:14px; color:#555;">&#8249;</span>
        </button>
        <!-- Right arrow -->
        <button @click="scrollRegions(1)" style="position:absolute; right:20px; top:50%; transform:translateY(-50%); z-index:2; width:36px; height:36px; border-radius:50%; background:#fff; border:1px solid #e8ddd0; box-shadow:0 2px 8px rgba(0,0,0,0.1); display:flex; align-items:center; justify-content:center; cursor:pointer;">
          <span style="font-size:14px; color:#555;">&#8250;</span>
        </button>
        <div ref="regionsScroll" style="display:flex; gap:16px; overflow-x:auto; scrollbar-width:none; scroll-behavior:smooth;">
          <div v-for="region in regions" :key="region.name" class="region-card"
            style="flex:0 0 calc(20% - 13px); min-width:200px; border-radius:12px; overflow:hidden; background:#fff; box-shadow:0 2px 16px rgba(0,0,0,0.06); cursor:pointer; border:1px solid #f0e8d8;">
            <img :src="region.image" :alt="region.name"
              style="width:100%; height:180px; object-fit:cover; display:block;" />
            <div style="padding:16px 18px 20px;">
              <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:17px; font-weight:700; color:#1a1208; margin:0 0 8px; line-height:1.3;">{{ region.name }}</h3>
              <p style="font-size:13px; color:#666; line-height:1.65; margin:0 0 14px;">{{ region.desc }}</p>
              <div style="width:28px; height:2px; background:#c8a96e;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- ══════════════════════════════════════════
         PROMISE: SCIENCE WITH SOUL
    ══════════════════════════════════════════ -->
    <div style="position:relative; display:flex; align-items:stretch; min-height:420px; overflow:hidden;">
      <!-- Background image -->
      <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/e36f7d3e-7491-4fd0-a454-0738bba7a8f3_opusbf" alt="" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0;" />
      <!-- Warm overlay to keep text readable -->
      <div style="position:absolute; inset:0; background:rgba(247,241,231,0.45); z-index:1;"></div>
      <!-- Centered text -->
      <div style="flex:1; padding:72px 80px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; position:relative; z-index:2;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:20px;">
          <span style="height:1px; width:36px; background:#8b6914; opacity:0.7;"></span>
          <p style="font-size:11px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0;">Our Promise</p>
          <span style="height:1px; width:36px; background:#8b6914; opacity:0.7;"></span>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:44px; font-weight:700; color:#1a1208; line-height:1.1; margin:0 0 20px;">
          Science With Soul.<br>Heritage With Discipline.<br>This is <span style="color:#C73A2B;">DrKitchen.</span>
        </h2>
        <p style="font-size:15px; color:#555; line-height:1.8; max-width:560px; margin:0 0 28px;">
          India's most advanced class of spices — where natural oils are preserved, aroma remains untouched and authenticity is non-negotiable.
        </p>
        <NuxtLink to="/products" style="display:inline-flex; align-items:center; gap:8px; font-size:14px; font-weight:700; color:#C73A2B; text-decoration:none;">
          Explore Our Products
          <span style="font-size:18px;">→</span>
        </NuxtLink>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const regionsScroll = ref<HTMLElement | null>(null)
function scrollRegions(dir: number) {
  if (regionsScroll.value) {
    regionsScroll.value.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }
}
const quotes = [
  'Before maps were drawn, ships followed fragrance.',
  'Pepper was once used as currency.',
  'India was known by aroma before it was known by borders.',
  'Spices were knowledge before they were ingredients.',
]

const regions = [
  {
    name: 'Kerala',
    desc: 'The first spice kingdom. Pepper, cardamom, cinnamon, clove and more.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Tamil Nadu & Karnataka',
    desc: 'Earth, heat and balance. Turmeric, Byadgi chillies and timeless spices.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Andhra Pradesh & Telangana',
    desc: 'The fire belt of India. Guntur chillies and bold flavours that define heat.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Gemini_Generated_Image_ogle2uogle2uogle_t3uagp',
  },
  {
    name: 'Gujarat & Rajasthan',
    desc: 'Precision spices. Jeera, coriander, fennel & methi.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Gemini_Generated_Image_yi95ynyi95ynyi95_z98uot',
  },
  {
    name: 'The North',
    desc: 'Depth and warmth. Himalayan cardamom and mountain turmeric.',
    image: 'https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Garhwal_Himal_from_Camels_Back__5281754856_yzrdgi',
  },
]

</script>

<style scoped>
.region-card {
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.region-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 32px rgba(0,0,0,0.12);
}

.about-quotes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.about-flavours-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .about-quotes-grid {
    grid-template-columns: 1fr 1fr;
  }
  .about-flavours-grid {
    grid-template-columns: 1fr;
    padding: 0 20px !important;
  }
}

@media (max-width: 480px) {
  .about-quotes-grid {
    grid-template-columns: 1fr;
  }
}</style>
