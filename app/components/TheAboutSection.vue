<template>
  <section style="background:#faf5ee;">

    <!-- HERO BANNER -->
    <div style="position:relative; overflow:hidden; min-height:400px; display:flex; align-items:center;">
      <!-- Full-bleed background image -->
      <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/ad3870ff-02c8-4998-a464-3b3a87e1b4aa_1_jqoh2z" alt="Spices"
        style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center;" />
      <!-- Dark overlay for text legibility -->
      <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(15,10,5,0.72) 0%, rgba(15,10,5,0.45) 55%, rgba(15,10,5,0.15) 100%);"></div>
      <!-- Text on top -->
      <div style="position:relative; z-index:2; padding:64px 72px; max-width:620px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:18px;">
          <span style="height:1px; width:36px; background:#D4A84B; opacity:0.9;"></span>
          <p style="font-size:13px; font-weight:800; letter-spacing:3px; color:#D4A84B; text-transform:uppercase; margin:0;">Leadership That Inspires</p>
        </div>
        <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:62px; font-weight:900; color:#fff; line-height:1.05; margin:0 0 20px;">
          The Minds Behind<br><span style="color:#E8855A;">DrKitchen</span>
        </h2>
        <p style="font-size:16px; color:rgba(255,255,255,0.82); line-height:1.75; max-width:460px; margin:0 0 16px;">
          A blend of vision, experience and passion that drives DrKitchen towards quality, innovation and trust.
        </p>
        <p style="font-family:'Playfair Display',Georgia,serif; font-style:italic; font-size:18px; color:#D4A84B; margin:0 0 22px; line-height:1.6;">
          Leadership rooted in values. Passion driven by purpose.
        </p>
        <div style="width:40px; height:2.5px; background:#E8855A; border-radius:2px;"></div>
      </div>
    </div>

    <!-- LEADERSHIP GRID -->
    <div style="max-width:1280px; margin:0 auto; padding:48px 32px 64px; display:grid; grid-template-columns:1fr 1fr; gap:24px;">

      <!-- CEO card (large, dark) -->
      <div class="leader-card" style="background:#1c2b1a; border-radius:16px; overflow:hidden; display:flex; min-height:480px; position:relative;">
        <!-- Left: man photo -->
        <div style="width:45%; flex-shrink:0; position:relative;">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/WhatsApp_Image_2026-06-19_at_12.04.36_xewsrm" alt="Amar Nath"
            style="width:100%; height:100%; object-fit:cover; object-position:top center; display:block;" />
        </div>
        <!-- Right: content -->
        <div style="flex:1; padding:44px 36px; display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <p style="font-size:10px; font-weight:700; letter-spacing:3px; color:#c8a96e; text-transform:uppercase; margin:0 0 6px;">From the desk of</p>
            <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:30px; font-weight:900; color:#fff; margin:0 0 10px; line-height:1.15;">The CEO</h3>
            <div style="width:36px; height:2px; background:#C73A2B; margin-bottom:14px;"></div>
            <div style="display:flex; align-items:flex-start; gap:8px; margin:0 0 16px;">
              <p style="font-family:'Playfair Display',Georgia,serif; font-style:italic; font-size:17px; color:#c8a96e; line-height:1.6; margin:0;">
                Turning every meal<br>into celebration
              </p>
              <!-- Botanical flourish SVG: olive branch sprig (matches reference) -->
              <svg width="64" height="32" viewBox="0 0 64 32" fill="none" style="flex-shrink:0; margin-top:28px; opacity:0.85;">
                <!-- main curved branch stem -->
                <path d="M2 28 C10 24, 20 18, 32 14 C44 10, 54 8, 62 6" stroke="#c8a96e" stroke-width="1.2" stroke-linecap="round" fill="none"/>
                <!-- leaf 1 – lower left -->
                <ellipse cx="12" cy="22" rx="5" ry="2.2" transform="rotate(-30 12 22)" stroke="#c8a96e" stroke-width="1" fill="none"/>
                <line x1="12" y1="22" x2="9" y2="26" stroke="#c8a96e" stroke-width="0.8" stroke-linecap="round"/>
                <!-- leaf 2 – mid-left -->
                <ellipse cx="22" cy="17" rx="5" ry="2.2" transform="rotate(-35 22 17)" stroke="#c8a96e" stroke-width="1" fill="none"/>
                <line x1="22" y1="17" x2="19" y2="21" stroke="#c8a96e" stroke-width="0.8" stroke-linecap="round"/>
                <!-- leaf 3 – centre -->
                <ellipse cx="34" cy="12" rx="5" ry="2.2" transform="rotate(-38 34 12)" stroke="#c8a96e" stroke-width="1" fill="none"/>
                <line x1="34" y1="12" x2="31" y2="16" stroke="#c8a96e" stroke-width="0.8" stroke-linecap="round"/>
                <!-- leaf 4 – mid-right -->
                <ellipse cx="46" cy="9" rx="5" ry="2.2" transform="rotate(-20 46 9)" stroke="#c8a96e" stroke-width="1" fill="none"/>
                <line x1="46" y1="9" x2="44" y2="13" stroke="#c8a96e" stroke-width="0.8" stroke-linecap="round"/>
                <!-- leaf 5 – far right -->
                <ellipse cx="57" cy="6" rx="4.5" ry="2" transform="rotate(-15 57 6)" stroke="#c8a96e" stroke-width="1" fill="none"/>
                <line x1="57" y1="6" x2="55" y2="10" stroke="#c8a96e" stroke-width="0.8" stroke-linecap="round"/>
              </svg>
            </div>
            <p style="font-size:13px; color:#bbb; line-height:1.75; margin:0 0 24px;">
              At DrKitchen, we are committed to blending tradition with technology to deliver spices that are pure, flavourful and safe. Every product reflects our promise of quality and our passion for making your kitchen extraordinary.
            </p>
          </div>
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div>
              <p style="font-weight:800; font-size:15px; color:#fff; margin:0 0 2px;">Amar Nath</p>
              <p style="font-size:12px; color:#C73A2B; margin:0; font-weight:600;">Chief Executive Officer</p>
            </div>
            <a href="#" style="width:42px; height:42px; border-radius:50%; background:#C73A2B; display:flex; align-items:center; justify-content:center; text-decoration:none; flex-shrink:0;">
              <i class="fas fa-arrow-right" style="color:#fff; font-size:14px;"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Right column (scrollable) -->
      <div style="display:flex; flex-direction:column; gap:20px; height:480px; overflow-y:auto; padding-right:6px; scrollbar-width:thin; scrollbar-color:#c8a96e #f0e8d8;">

        <!-- Chairman -->
        <div class="leader-card" style="background:#fff; border-radius:16px; padding:28px 32px; display:flex; align-items:center; gap:24px; box-shadow:0 2px 16px rgba(0,0,0,0.06);">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/vinita_eduuat" alt="Vinita Kumar"
            style="width:120px; height:148px; border-radius:10px; object-fit:cover; flex-shrink:0;" />
          <div style="flex:1;">
            <p style="font-size:9px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0 0 4px;">From the desk of</p>
            <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:20px; font-weight:900; color:#1a1208; margin:0 0 8px; line-height:1.2;">The Chairman</h3>
            <div style="width:28px; height:2px; background:#C73A2B; margin-bottom:10px;"></div>
            <p style="font-size:12.5px; color:#666; line-height:1.65; margin:0 0 12px;">
              Good food begins with great ingredients. Our mission is to honour India's rich culinary heritage and bring authentic flavours to homes across the world.
            </p>
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <p style="font-weight:800; font-size:13.5px; color:#1a1208; margin:0 0 1px;">Vinita Kumar</p>
                <p style="font-size:11px; color:#C73A2B; margin:0; font-weight:600;">Chairman, DrKitchen</p>
              </div>
              <a href="#" style="width:38px; height:38px; border-radius:50%; background:#1c2b1a; display:flex; align-items:center; justify-content:center; text-decoration:none; flex-shrink:0;">
                <i class="fas fa-arrow-right" style="color:#fff; font-size:13px;"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Co-founder -->
        <div class="leader-card" style="background:#fff; border-radius:16px; padding:28px 32px; display:flex; align-items:center; gap:24px; box-shadow:0 2px 16px rgba(0,0,0,0.06);">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/9b02d4b5-2dd2-4642-abb1-b53ac1b83b5d_cwukmg" alt="Pankaj Kumar"
            style="width:120px; height:148px; border-radius:10px; object-fit:cover; flex-shrink:0;" />
          <div style="flex:1;">
            <p style="font-size:9px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0 0 4px;">From the desk of</p>
            <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:20px; font-weight:900; color:#1a1208; margin:0 0 8px; line-height:1.2;">Co-founder & Head –<br>Sales & Marketing</h3>
            <div style="width:28px; height:2px; background:#C73A2B; margin-bottom:10px;"></div>
            <p style="font-size:12.5px; color:#666; line-height:1.65; margin:0 0 12px;">
              Understanding our customers and delivering value is at the core of everything we do. We don't just sell spices, we build relationships.
            </p>
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <p style="font-weight:800; font-size:13.5px; color:#1a1208; margin:0 0 1px;">Pankaj Kumar</p>
                <p style="font-size:11px; color:#C73A2B; margin:0; font-weight:600;">Co-founder & Head – Sales & Marketing</p>
              </div>
              <a href="#" style="width:38px; height:38px; border-radius:50%; background:#1c2b1a; display:flex; align-items:center; justify-content:center; text-decoration:none; flex-shrink:0;">
                <i class="fas fa-arrow-right" style="color:#fff; font-size:13px;"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Vijay Kumar -->
        <div class="leader-card" style="background:#fff; border-radius:16px; padding:28px 32px; display:flex; align-items:center; gap:24px; box-shadow:0 2px 16px rgba(0,0,0,0.06);">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/vijay_ahdwsd" alt="Vijay Kumar"
            style="width:120px; height:148px; border-radius:10px; object-fit:cover; flex-shrink:0;" />
          <div style="flex:1;">
            <p style="font-size:9px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0 0 4px;">From the desk of</p>
            <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:20px; font-weight:900; color:#1a1208; margin:0 0 8px; line-height:1.2;">Co-founder & Head –<br>Strategic Operations</h3>
            <div style="width:28px; height:2px; background:#C73A2B; margin-bottom:10px;"></div>
            <p style="font-size:12.5px; color:#666; line-height:1.65; margin:0 0 12px;">
              Naval veteran with two decades of distinguished service — bringing military precision and business acumen to lead DrKitchen's operational excellence.
            </p>
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <p style="font-weight:800; font-size:13.5px; color:#1a1208; margin:0 0 1px;">Vijay Kumar</p>
                <p style="font-size:11px; color:#C73A2B; margin:0; font-weight:600;">Co-founder & Head – Strategic Operations</p>
              </div>
              <a href="#" style="width:38px; height:38px; border-radius:50%; background:#1c2b1a; display:flex; align-items:center; justify-content:center; text-decoration:none; flex-shrink:0;">
                <i class="fas fa-arrow-right" style="color:#fff; font-size:13px;"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Harpal Singh -->
        <div class="leader-card" style="background:#fff; border-radius:16px; padding:28px 32px; display:flex; align-items:center; gap:24px; box-shadow:0 2px 16px rgba(0,0,0,0.06);">
          <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/4ec706b6-49b0-4252-bcba-a347aca2f81e_zftmrq" alt="Harpal Singh"
            style="width:120px; height:148px; border-radius:10px; object-fit:cover; flex-shrink:0;" />
          <div style="flex:1;">
            <p style="font-size:9px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; margin:0 0 4px;">Our Advisor</p>
            <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:20px; font-weight:900; color:#1a1208; margin:0 0 8px; line-height:1.2;">Chartered Accountant</h3>
            <div style="width:28px; height:2px; background:#C73A2B; margin-bottom:10px;"></div>
            <p style="font-size:12.5px; color:#666; line-height:1.65; margin:0 0 12px;">
              25+ years in financial management, compliance and strategic advisory — ensuring robust financial governance and sustainable growth for DrKitchen.
            </p>
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <p style="font-weight:800; font-size:13.5px; color:#1a1208; margin:0 0 1px;">Harpal Singh</p>
                <p style="font-size:11px; color:#C73A2B; margin:0; font-weight:600;">Chartered Accountant</p>
              </div>
              <a href="#" style="width:38px; height:38px; border-radius:50%; background:#1c2b1a; display:flex; align-items:center; justify-content:center; text-decoration:none; flex-shrink:0;">
                <i class="fas fa-arrow-right" style="color:#fff; font-size:13px;"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- STATS BAR -->
    <div style="background:#fff; border-top:1px solid #f0e8d8;">
      <div style="padding:0 48px; display:grid; grid-template-columns:repeat(4,1fr);">
        <div v-for="(stat, i) in stats" :key="stat.label"
          :style="{ padding:'28px 16px', textAlign:'center', borderRight: i < stats.length-1 ? '1px solid #f0e8d8' : 'none', display:'flex', alignItems:'center', gap:'16px', justifyContent:'center' }">
          <div style="width:52px; height:52px; border-radius:50%; background:#1c2b1a; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
            <i :class="stat.icon" style="color:#c8a96e; font-size:18px;"></i>
          </div>
          <div style="text-align:left;">
            <p style="font-family:'Playfair Display',Georgia,serif; font-size:26px; font-weight:900; color:#C73A2B; margin:0; line-height:1;">{{ stat.value }}</p>
            <p style="font-size:11.5px; color:#666; margin:2px 0 0; line-height:1.4; white-space:pre-line;">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '25+',  label: 'Years of Expertise\nin Spices Industry', icon: 'fas fa-seedling' },
  { value: '5',    label: 'Visionary Leaders\nDriving Excellence',  icon: 'fas fa-award'    },
  { value: '100+', label: 'Dedicated\nTeam Members',                icon: 'fas fa-users'    },
  { value: '1',    label: 'Promise\nPurity, Quality & Taste',       icon: 'fas fa-heart'    },
]
</script>

<style scoped>
.leader-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
}
.leader-card:hover {
  transform: scale(1.025);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
</style>
