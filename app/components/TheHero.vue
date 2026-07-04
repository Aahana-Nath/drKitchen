<template>
  <section style="position:relative; overflow:hidden; min-height:70vh; display:flex; align-items:center;">

    <!-- Full-bleed background image -->
    <img
      src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/2b7bbc1d-ca8c-4435-bf40-87d509330a89.png"
      alt="DrKitchen premium spices"
      style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; z-index:0;"
    />

    <!-- Left-side overlay so text stays readable -->
    <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(20,14,8,0.72) 0%, rgba(20,14,8,0.55) 40%, rgba(20,14,8,0.15) 65%, transparent 100%); z-index:1;"></div>

    <!-- Text content — overlaid on left -->
    <div class="fade-up" style="position:relative; z-index:2; padding:56px 64px; width:52%;">

      <!-- Section label -->
      <div class="section-label fade-up" style="margin-bottom:24px; color:rgba(255,255,255,0.7);">Pure Spices. Rich Flavors.</div>

      <!-- Heading -->
      <h1 class="fade-up fade-up-d1" style="font-family:var(--font-display); font-size:96px; font-weight:600; color:#fff; line-height:0.9; margin:0 0 20px; letter-spacing:-1px; text-shadow:0 2px 20px rgba(0,0,0,0.3);">
        SPICES<br>
        <em style="font-style:italic; color:#e8a87c;">THAT TELL</em><br>
        A STORY
      </h1>

      <!-- Ornamental divider -->
      <div class="fade-up fade-up-d2" style="display:flex; align-items:center; gap:10px; margin-bottom:22px;">
        <span style="height:1px; width:40px; background:rgba(255,255,255,0.4); display:block;"></span>
        <svg width="120" height="14" viewBox="0 0 120 14" fill="none">
          <path d="M0 7 Q15 2, 30 7 Q45 12, 60 7 Q75 2, 90 7 Q105 12, 120 7" stroke="rgba(255,255,255,0.5)" stroke-width="1" fill="none"/>
          <circle cx="60" cy="7" r="2.5" fill="rgba(255,255,255,0.55)"/>
          <circle cx="30" cy="7" r="1.5" fill="rgba(255,255,255,0.35)"/>
          <circle cx="90" cy="7" r="1.5" fill="rgba(255,255,255,0.35)"/>
        </svg>
        <span style="height:1px; width:40px; background:rgba(255,255,255,0.4); display:block;"></span>
      </div>

      <!-- Description -->
      <p class="fade-up fade-up-d2" style="font-family:var(--font-body); font-size:16px; line-height:1.85; max-width:400px; color:rgba(255,255,255,0.8); margin-bottom:32px; text-shadow:0 1px 8px rgba(0,0,0,0.3);">
        DrKitchen is not just a spice brand — it is born out of history, science, and respect. Crafted to bring purity, flavor, and aroma to every kitchen.
      </p>

      <!-- Feature badges -->
      <div class="fade-up fade-up-d3" style="display:flex; align-items:flex-start; gap:20px; margin-bottom:36px; flex-wrap:nowrap;">
        <div v-for="f in features" :key="f.label" style="display:flex; align-items:center; gap:9px; flex-shrink:0;">
          <div :style="{ width:'38px', height:'38px', borderRadius:'50%', border:'1px solid rgba(255,255,255,0.35)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:'0', background:'rgba(255,255,255,0.08)' }">
            <i :class="f.icon" style="font-size:13px; color:rgba(255,255,255,0.85);"></i>
          </div>
          <div style="line-height:1.3;">
            <p style="font-size:12px; font-weight:600; color:#fff; margin:0;">{{ f.label }}</p>
            <p style="font-size:10px; color:rgba(255,255,255,0.6); margin:0;">{{ f.sub }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <a href="#" class="dk-btn fade-up fade-up-d4">
        Explore Our Products
        <i class="fas fa-arrow-right" style="font-size:11px;"></i>
      </a>

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
