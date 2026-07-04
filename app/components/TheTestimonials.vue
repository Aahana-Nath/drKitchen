<template>
  <section style="background:var(--clr-bg2); padding:72px 80px; position:relative; overflow:hidden;">

    <!-- Header -->
    <div style="text-align:center; margin-bottom:28px;">
      <h2 style="font-family:var(--font-display); font-size:42px; font-weight:600; color:var(--clr-dark); line-height:1.15; margin:0 0 6px;">
        What Our<br><span style="color:#C73A2B;">Customers Say</span>
      </h2>
      <!-- Ornamental divider -->
      <div style="display:flex; align-items:center; justify-content:center; gap:10px; margin:14px 0 12px;">
        <span style="display:block; height:1px; width:48px; background:#c8a96e; opacity:0.7;"></span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#c8a96e" style="opacity:0.8;">
          <path d="M8 0L9.8 5.5H16L11 8.9L12.9 14.5L8 11.1L3.1 14.5L5 8.9L0 5.5H6.2Z"/>
        </svg>
        <span style="display:block; height:1px; width:48px; background:#c8a96e; opacity:0.7;"></span>
      </div>
      <p style="font-size:15px; color:#777; margin:0;">Real feedback from happy DrKitchen customers</p>
    </div>

    <!-- Testimonial cards -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:28px; max-width:1200px; margin:0 auto;">
      <div
        v-for="t in testimonials"
        :key="t.name"
        style="background:var(--clr-card); border-radius:var(--radius-card); overflow:hidden; box-shadow:var(--shadow-card); border:1px solid rgba(181,138,58,0.12); display:flex; flex-direction:column;"
      >
        <!-- Card content -->
        <div style="padding:20px 22px 14px; flex:1; display:flex; flex-direction:column;">
          <!-- Stars -->
          <div style="display:flex; gap:3px; margin-bottom:10px;">
            <span v-for="n in 5" :key="n" style="font-size:16px; color:#d4a017; line-height:1;">★</span>
          </div>
          <!-- Title -->
          <p style="font-family:var(--font-display); font-size:17px; font-weight:600; color:var(--clr-dark); margin:0 0 10px; line-height:1.3;">{{ t.title }}</p>
          <!-- Review -->
          <div style="flex:1; position:relative;">
            <span style="font-size:32px; line-height:0.7; color:#C73A2B; font-family:Georgia,serif; display:block; margin-bottom:4px; opacity:0.85;">&ldquo;</span>
            <p style="font-family:var(--font-body); font-size:13.5px; color:var(--clr-muted); line-height:1.75; margin:0;">{{ t.review }}</p>
            <span style="font-size:32px; line-height:0.7; color:#C73A2B; font-family:Georgia,serif; display:block; text-align:right; margin-top:4px; opacity:0.85;">&rdquo;</span>
          </div>
        </div>
        <!-- Reviewer -->
        <div style="padding:12px 22px 18px; display:flex; align-items:center; gap:10px; border-top:1px solid #f5ede0;">
          <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; flex-shrink:0; border:2px solid #c8a96e;">
            <img v-if="t.image" :src="t.image" :alt="t.name" style="width:100%; height:100%; object-fit:cover;" />
            <div v-else style="width:100%; height:100%; background:#c8a96e; display:flex; align-items:center; justify-content:center;">
              <i class="fas fa-user" style="font-size:18px; color:#fff;"></i>
            </div>
          </div>
          <div>
            <p style="font-family:'Playfair Display',Georgia,serif; font-size:15px; font-weight:700; color:#1a1208; margin:0 0 2px;">{{ t.name }}</p>
            <p style="font-size:12px; color:#888; margin:0; display:flex; align-items:center; gap:4px;">
              <i class="fas fa-map-marker-alt" style="color:#C73A2B; font-size:10px;"></i>
              {{ t.location }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name:     'Shivani Srivastava',
    location: 'Mumbai',
    title:    'Authentic Taste & Fresh Aroma',
    review:   'DrKitchen spices have added rich aroma, freshness and authentic taste to my everyday cooking. The quality is excellent, the flavours feel natural, and every dish turns out more delicious. I truly enjoy using DrKitchen spices in my kitchen.',
    image:    'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/WhatsApp_Image_2026-06-27_at_12.25.29.jpeg',
  },
  {
    name:     'Geeta Ambastha',
    location: 'Gurgaon',
    title:    'The Real Difference in Every Dish',
    review:   'The quality of DrKitchen spices is excellent. They add beautiful colour, freshness, and authentic flavour to my food. I especially appreciate the purity and the aroma, which make home-cooked meals even more enjoyable.',
    image:    'https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/nani.jpeg',
  },
  {
    name:     'Ananya Sharma',
    location: 'Delhi, India',
    title:    'Consistent Quality, Every Order',
    review:   "I switched to DrKitchen 6 months ago and haven't looked back. Quality is consistent across every order and the delivery is always on time. Highly recommended!",
    image:    '',
  },
]
</script>
