<template>
  <section style="position:relative; background-color:#f4ead8; overflow:hidden; min-height:85vh; display:flex; align-items:center">

    <!-- SVG filter: distressed stamp texture on heading -->
    <svg width="0" height="0" style="position:absolute;pointer-events:none">
      <defs>
        <filter id="stamp" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.055" numOctaves="4" seed="7" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
    </svg>

    <!-- Image: absolutely covers right 65%, mask-image fades its LEFT edge into the parchment bg -->
    <img
      src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=1400"
      alt="DrKitchen premium spices"
      style="position:absolute; top:0; right:0; bottom:0; width:68%; height:100%; object-fit:cover; object-position:left center;
             -webkit-mask-image:linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.6) 18%, black 28%);
             mask-image:linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 8%, rgba(0,0,0,0.6) 18%, black 28%);"
    />

    <!-- Text content -->
    <div style="position:relative; z-index:2; padding:44px 56px; width:48%">

      <!-- Eyebrow -->
      <p style="font-size:13px; font-weight:600; letter-spacing:2.5px; color:#8a7555; text-transform:uppercase; margin-bottom:16px">
        PURE SPICES. RICH FLAVORS.
      </p>

      <!-- Distressed heading -->
      <div style="filter:url(#stamp); margin-bottom:12px">
        <h1 style="font-family:'Playfair Display',Georgia,serif; font-weight:900; line-height:0.95; white-space:nowrap">
          <span style="display:block; font-size:72px; color:#1a1208; letter-spacing:-0.5px">SPICES THAT</span>
          <span style="display:block; font-size:72px; color:#8b1e10; letter-spacing:-0.5px; margin-left:10px">TELL A STORY</span>
        </h1>
      </div>

      <!-- Divider -->
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px">
        <span style="display:block; height:1px; flex:1; max-width:60px; background:#8a7555; opacity:0.4"></span>
        <span style="font-size:15px; color:#7a6040; opacity:0.75; letter-spacing:-2px; line-height:1">❧❦</span>
        <span style="display:block; height:1px; flex:1; max-width:60px; background:#8a7555; opacity:0.4"></span>
      </div>

      <!-- Description -->
      <p style="color:#555; font-size:17px; line-height:1.75; max-width:420px; margin-bottom:24px">
        DrKitchen is not just a spice brand — it is born out of
        history, science, and respect. Crafted to bring purity,
        flavor, and aroma to every kitchen.
      </p>

      <!-- Feature badges row -->
      <div style="display:flex; align-items:flex-start; gap:18px; margin-bottom:28px; flex-wrap:nowrap">
        <div v-for="f in features" :key="f.label" style="display:flex; align-items:center; gap:8px; flex-shrink:0">
          <div :style="{ width:'40px', height:'40px', borderRadius:'50%', border:'1.5px solid '+f.color+'55', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:'0', background:f.color+'18' }">
            <i :class="f.icon" :style="{ fontSize:'13px', color:f.color }"></i>
          </div>
          <div style="line-height:1.3">
            <p style="font-size:12px; font-weight:700; color:#1a1a1a">{{ f.label }}</p>
            <p style="font-size:10.5px; color:#888">{{ f.sub }}</p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <a href="#" style="display:inline-flex; align-items:center; gap:10px; background:#8b1e10; color:#fff; font-size:12.5px; font-weight:700; letter-spacing:1.8px; text-transform:uppercase; padding:13px 26px; border-radius:3px; text-decoration:none">
        EXPLORE OUR PRODUCTS
        <i class="fas fa-chevron-right" style="font-size:10px"></i>
      </a>

    </div>

    <!-- Circular stamp badge -->
    <div style="position:absolute; bottom:20%; right:9%; width:112px; height:112px; border-radius:50%; background:rgba(255,255,255,0.93); border:1.5px solid rgba(255,255,255,0.8); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; box-shadow:0 6px 24px rgba(0,0,0,0.22); z-index:3">
      <p style="font-size:6.5px; font-weight:900; letter-spacing:1.8px; color:#8b1e10; text-transform:uppercase; line-height:1; text-align:center">CELEBRATING</p>
      <i class="fas fa-mortar-pestle" style="font-size:22px; color:#1e3a5f; margin:3px 0"></i>
      <p style="font-size:6px; font-weight:900; letter-spacing:1.4px; color:#8b1e10; text-transform:uppercase; line-height:1.4; text-align:center">FLAVOR &amp;<br>TRADITION</p>
    </div>

  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'fas fa-leaf',     label: '100% Natural',   sub: 'No Preservatives', color: '#2d6a4f' },
  { icon: 'fas fa-flask',    label: 'Scientifically', sub: 'Processed',        color: '#8b1e10' },
  { icon: 'fas fa-award',    label: 'Premium',        sub: 'Quality',          color: '#8b1e10' },
  { icon: 'fas fa-seedling', label: 'Sourced with',   sub: 'Care',             color: '#2d6a4f' },
]
</script>
