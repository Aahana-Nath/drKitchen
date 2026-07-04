<template>
  <div style="background:var(--clr-bg); min-height:100vh;">
    <TheNavbar />

    <div v-if="product">

      <!-- ══════════════════════════════════════════════════
           1. HERO
      ══════════════════════════════════════════════════ -->
      <section style="position:relative; overflow:hidden; min-height:500px; display:flex; align-items:center;">

        <!-- Background: full-bleed image when heroBg is set, else cream -->
        <div v-if="product.heroBg" style="position:absolute; inset:0;">
          <img :src="product.heroBg" :alt="product.name + ' hero'" style="width:100%; height:100%; object-fit:cover; object-position:center;" />
          <!-- Gradient: strong dark on left for legibility, fades to transparent right -->
          <div style="position:absolute; inset:0; background:linear-gradient(to right, rgba(15,9,3,0.82) 0%, rgba(15,9,3,0.62) 35%, rgba(15,9,3,0.18) 62%, rgba(15,9,3,0.0) 100%);"></div>
        </div>
        <div v-else style="position:absolute; inset:0; background:var(--clr-bg);">
          <div style="position:absolute; inset:0; background:radial-gradient(ellipse 80% 70% at 10% 50%, rgba(181,138,58,0.07) 0%, transparent 70%);"></div>
        </div>

        <div style="max-width:1280px; width:100%; margin:0 auto; padding:0 48px; position:relative; z-index:1;">

          <!-- Left: text -->
          <div style="padding:52px 0 120px;">
            <!-- Eyebrow label -->
            <div style="display:inline-flex; align-items:center; gap:10px; margin-bottom:14px;">
              <span style="height:1px; width:28px; display:block;" :style="{ background: product.heroBg ? '#D4A84B' : 'var(--clr-gold)', opacity: '0.7' }"></span>
              <span :style="{ fontFamily:'var(--font-body)', fontSize:'11px', fontWeight:'700', letterSpacing:'4px', textTransform:'uppercase', color: product.heroBg ? '#D4A84B' : 'var(--clr-gold)' }">{{ product.category }}</span>
              <span style="height:1px; width:28px; display:block;" :style="{ background: product.heroBg ? '#D4A84B' : 'var(--clr-gold)', opacity: '0.7' }"></span>
            </div>

            <h1 :style="{ fontFamily:'var(--font-display)', fontSize:'58px', fontWeight:'600', color: product.heroBg ? '#fff' : 'var(--clr-dark)', lineHeight:'1.05', margin:'0 0 10px', letterSpacing:'-0.01em' }">{{ product.name }}</h1>
            <p :style="{ fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'20px', color: product.heroBg ? 'rgba(255,255,255,0.80)' : 'var(--clr-muted)', margin:'0 0 20px', fontWeight:'400' }">{{ product.subtitle }}</p>
            <p :style="{ fontFamily:'var(--font-body)', fontSize:'14px', color: product.heroBg ? 'rgba(255,255,255,0.75)' : 'var(--clr-muted)', lineHeight:'1.85', maxWidth:'420px', margin:'0 0 28px', whiteSpace:'pre-line' }">{{ product.tagline }}</p>

            <!-- 4 feature icons -->
            <div style="display:flex; gap:20px; margin-bottom:32px; flex-wrap:wrap;">
              <div v-for="f in product.heroFeatures" :key="f.label" style="display:flex; flex-direction:column; align-items:center; gap:6px; width:70px;">
                <div :style="{ width:'48px', height:'48px', borderRadius:'50%', border:'1.5px solid rgba(212,168,75,0.55)', display:'flex', alignItems:'center', justifyContent:'center', background: product.heroBg ? 'rgba(255,255,255,0.08)' : 'rgba(247,241,231,0.85)', backdropFilter: product.heroBg ? 'blur(4px)' : 'none' }">
                  <i :class="f.icon" style="font-size:17px; color:#D4A84B;"></i>
                </div>
                <span :style="{ fontFamily:'var(--font-body)', fontSize:'10px', fontWeight:'600', color: product.heroBg ? 'rgba(255,255,255,0.85)' : 'var(--clr-dark)', textAlign:'center', lineHeight:'1.3', whiteSpace:'pre-line' }">{{ f.label }}</span>
              </div>
            </div>

            <!-- CTA -->
            <NuxtLink to="/contact-us"
              style="display:inline-flex; align-items:center; gap:10px; background:#1c2b1a; color:#fff; font-family:var(--font-body); font-size:12px; font-weight:700; letter-spacing:2px; text-transform:uppercase; padding:14px 28px; border-radius:6px; text-decoration:none; transition:background 0.2s ease;"
              @mouseenter="(e) => e.currentTarget.style.background='#2d4228'"
              @mouseleave="(e) => e.currentTarget.style.background='#1c2b1a'"
            >
              Contact Sales <i class="fas fa-arrow-right" style="font-size:10px;"></i>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           2. ABOUT + WHY DRKITCHEN
      ══════════════════════════════════════════════════ -->
      <section style="background:transparent; padding:0 48px; position:relative; z-index:2; margin-top:-72px;">
        <div style="max-width:1280px; margin:0 auto; background:#F7F1E5; border-radius:16px; box-shadow:0 8px 40px rgba(0,0,0,0.14); overflow:hidden; display:grid; grid-template-columns:1fr 1fr; position:relative; min-height:200px;">

          <!-- ── Left: About This Spice ── -->
          <div style="padding:22px 28px; position:relative; background:#F7F1E5;">
            <p style="font-family:var(--font-body); font-size:10px; font-weight:700; color:var(--clr-gold); letter-spacing:3px; text-transform:uppercase; margin:0 0 4px;">Product Story</p>
            <h2 style="font-family:var(--font-display); font-size:22px; font-weight:700; color:var(--clr-dark); margin:0 0 8px; line-height:1.2;">About This Spice</h2>
            <!-- Gold rule ornament -->
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:14px;">
              <div style="width:36px; height:2px; background:var(--clr-gold); border-radius:2px;"></div>
              <span style="width:6px; height:6px; border-radius:50%; background:var(--clr-gold);"></span>
              <div style="width:16px; height:2px; background:var(--clr-gold); opacity:0.4; border-radius:2px;"></div>
            </div>
            <!-- Text + botanical image side-by-side -->
            <div style="display:flex; align-items:flex-start; gap:0;">
              <div style="flex:1; padding-right:14px;">
                <p v-for="t in product.aboutText" :key="t" style="font-family:var(--font-body); font-size:12.5px; color:#444; line-height:1.75; margin:0 0 7px;">{{ t }}</p>
              </div>
              <!-- Botanical image -->
              <img
                :src="product.aboutImage"
                :alt="product.name"
                style="width:130px; height:150px; object-fit:contain; flex-shrink:0;"
              />
            </div>
          </div>

          <!-- ── Right: Why DrKitchen ── -->
          <div style="padding:22px 28px; background:linear-gradient(135deg,#f2e8d5 0%,#f5edde 60%,#f3ebd9 100%); border-left:1px solid rgba(181,138,58,0.14);">
            <p style="font-family:var(--font-body); font-size:10px; font-weight:700; color:var(--clr-accent); letter-spacing:3px; text-transform:uppercase; margin:0 0 4px;">Our Promise</p>
            <h2 style="font-family:var(--font-display); font-size:22px; font-weight:700; color:var(--clr-dark); margin:0 0 8px; line-height:1.2;">Why DrKitchen <em style="font-style:italic; color:var(--clr-accent);">{{ product.name.split(' ')[0] }}</em>?</h2>
            <!-- Gold rule ornament -->
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:18px;">
              <div style="width:36px; height:2px; background:var(--clr-accent); border-radius:2px;"></div>
              <span style="width:6px; height:6px; border-radius:50%; background:var(--clr-accent);"></span>
              <div style="width:16px; height:2px; background:var(--clr-accent); opacity:0.4; border-radius:2px;"></div>
            </div>
            <!-- 6 icons in a single row -->
            <div style="display:flex; align-items:flex-start; gap:6px; justify-content:space-between;">
              <div v-for="f in product.whyFeatures" :key="f.label" style="display:flex; flex-direction:column; align-items:center; gap:8px; flex:1; min-width:0;">
                <div style="width:56px; height:56px; border-radius:50%; background:linear-gradient(145deg,#fff4e6,#fde8cc); border:2px solid rgba(199,58,43,0.20); box-shadow:0 4px 14px rgba(199,58,43,0.12); display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                  <i :class="f.icon" style="font-size:20px; color:var(--clr-accent);"></i>
                </div>
                <span style="font-family:var(--font-body); font-size:11px; font-weight:700; color:var(--clr-dark); text-align:center; line-height:1.35; white-space:pre-line;">{{ f.label }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           3. SOURCED FROM | CHARACTERISTICS | BEST USED FOR
      ══════════════════════════════════════════════════ -->
      <section style="background:var(--clr-bg); border-top:1px solid rgba(181,138,58,0.10); padding:0 48px;">
        <div style="max-width:1280px; margin:0 auto; padding:36px 0; display:grid; grid-template-columns:1fr 1fr 280px; gap:32px; align-items:stretch;">

          <!-- Sourced From -->
          <div style="position:relative; border-radius:14px; overflow:hidden; box-shadow:0 2px 16px rgba(0,0,0,0.10); height:280px;">
            <!-- Background image -->
            <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Screenshot_2026-07-04_at_12.52.53_d1p96c"
              style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center bottom;" />
            <!-- Light overlay — lighter so bg is visible -->
            <div style="position:absolute; inset:0; background:linear-gradient(to bottom right, rgba(250,244,230,0.82) 0%, rgba(245,236,215,0.65) 60%, rgba(200,180,140,0.20) 100%);"></div>
            <!-- Two-column: text left only -->
            <div style="position:relative; z-index:2; padding:18px 20px 20px; max-width:44%; margin-top:16px;">
              <p style="font-family:var(--font-body); font-size:9px; font-weight:700; color:#8b6010; letter-spacing:3px; text-transform:uppercase; margin:0 0 3px;">Sourced From</p>
              <!-- gold arrow ornament -->
              <div style="display:flex; align-items:center; gap:4px; margin-bottom:8px;">
                <div style="width:24px; height:1.5px; background:#c8a040;"></div>
                <span style="color:#c8a040; font-size:12px;">&#8594;</span>
              </div>
              <h3 style="font-family:'Playfair Display',Georgia,serif; font-size:20px; font-weight:800; color:#1a1208; margin:0 0 6px; line-height:1.15;">{{ product.sourcedFrom.location }}</h3>
              <!-- second ornament -->
              <div style="display:flex; align-items:center; gap:4px; margin-bottom:12px;">
                <div style="width:16px; height:1.5px; background:#c8a040;"></div>
                <span style="color:#c8a040; font-size:10px;">&#8594;</span>
              </div>
              <p style="font-family:var(--font-body); font-size:11px; color:#3a2e1a; line-height:1.65; margin:0;">{{ product.sourcedFrom.desc }}</p>
            </div>
          </div>

          <!-- Product Characteristics -->
          <div style="background:#fff; border-radius:14px; padding:22px 24px; box-shadow:0 2px 16px rgba(0,0,0,0.05); border:1px solid rgba(181,138,58,0.10); height:280px; overflow:hidden;">
            <h3 style="font-family:var(--font-display); font-size:20px; font-weight:700; color:var(--clr-dark); margin:0 0 20px;">Product Characteristics</h3>
            <div style="display:flex; flex-direction:column; gap:14px;">
              <div v-for="c in product.characteristics" :key="c.name" style="display:flex; align-items:center; gap:14px;">
                <div style="display:flex; align-items:center; gap:6px; width:96px; flex-shrink:0;">
                  <i class="fas fa-circle" style="font-size:6px; color:var(--clr-gold); opacity:0.6;"></i>
                  <span style="font-family:var(--font-body); font-size:12.5px; color:var(--clr-dark); font-weight:500;">{{ c.name }}</span>
                </div>
                <div style="flex:1; height:8px; background:#f0e8d8; border-radius:99px; overflow:hidden;">
                  <div :style="{ width: c.value + '%', height: '100%', background: 'linear-gradient(to right, #c8a96e, #B58A3A)', borderRadius: '99px', transition: 'width 0.8s ease' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Used For -->
          <div style="background:#fff; border-radius:14px; padding:16px; box-shadow:0 2px 16px rgba(0,0,0,0.05); border:1px solid rgba(181,138,58,0.10); height:280px; display:flex; flex-direction:column;">
            <h3 style="font-family:var(--font-display); font-size:18px; font-weight:700; color:var(--clr-dark); margin:0 0 10px;">Best Used For</h3>
            <div style="flex:1; display:grid; grid-template-columns:1fr 1fr; grid-template-rows:1fr 1fr; gap:8px; overflow:hidden;">
              <div v-for="item in product.bestUsedFor" :key="item.name" style="display:flex; flex-direction:column; align-items:center; gap:4px; min-height:0;">
                <div style="width:100%; flex:1; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.10); min-height:0;">
                  <img :src="item.image" :alt="item.name" style="width:100%; height:100%; object-fit:cover;" loading="lazy" />
                </div>
                <span style="font-family:var(--font-body); font-size:10px; color:#555; text-align:center; line-height:1.2; flex-shrink:0;">{{ item.name }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           4. PAIRS WITH | PROCESS
      ══════════════════════════════════════════════════ -->
      <section style="background:#fff; border-top:1px solid rgba(181,138,58,0.10);">
        <div style="max-width:1280px; margin:0 auto; padding:36px 48px; display:grid; grid-template-columns:320px 1fr; gap:40px; align-items:start;">

          <!-- Pairs Beautifully With -->
          <div style="background:var(--clr-bg); border-radius:14px; padding:24px 22px; border:1px solid rgba(181,138,58,0.10);">
            <h3 style="font-family:var(--font-display); font-size:20px; font-weight:700; color:var(--clr-dark); margin:0 0 18px;">Pairs Beautifully With</h3>
            <div style="display:flex; gap:14px; flex-wrap:wrap;">
              <div v-for="p in product.pairsWith" :key="p.name" style="display:flex; flex-direction:column; align-items:center; gap:6px; width:52px;">
                <div style="width:52px; height:52px; border-radius:50%; overflow:hidden; border:2px solid rgba(181,138,58,0.22); box-shadow:0 3px 10px rgba(0,0,0,0.10);">
                  <img :src="p.image" :alt="p.name" style="width:100%; height:100%; object-fit:cover;" loading="lazy" />
                </div>
                <span style="font-family:var(--font-body); font-size:10px; color:#555; text-align:center; line-height:1.2;">{{ p.name }}</span>
              </div>
            </div>
          </div>

          <!-- Our Careful Process -->
          <div style="background:var(--clr-bg); border-radius:14px; padding:24px 22px; border:1px solid rgba(181,138,58,0.10);">
            <h3 style="font-family:var(--font-display); font-size:20px; font-weight:700; color:var(--clr-dark); margin:0 0 20px;">Our Careful Process</h3>
            <div style="display:flex; align-items:flex-start; gap:0; overflow-x:auto; padding-bottom:4px;">
              <template v-for="(step, idx) in product.process" :key="step.label">
                <div style="display:flex; flex-direction:column; align-items:center; gap:8px; min-width:72px; flex-shrink:0;">
                  <div style="width:48px; height:48px; border-radius:50%; border:1.5px solid rgba(181,138,58,0.35); background:#fff; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.07);">
                    <i :class="step.icon" style="font-size:17px; color:var(--clr-gold);"></i>
                  </div>
                  <span style="font-family:var(--font-body); font-size:10px; font-weight:600; color:var(--clr-dark); text-align:center; line-height:1.3; white-space:pre-line;">{{ step.label }}</span>
                </div>
                <div v-if="idx < product.process.length - 1" style="display:flex; align-items:center; padding:0 4px; margin-top:12px; flex-shrink:0;">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h14M11 1l5 5-5 5" stroke="#c8a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </template>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           5. NUTRITIONAL HIGHLIGHTS | GALLERY
      ══════════════════════════════════════════════════ -->
      <section style="background:var(--clr-bg); border-top:1px solid rgba(181,138,58,0.10);">
        <div style="max-width:1280px; margin:0 auto; padding:36px 48px; display:grid; grid-template-columns:300px 1fr; gap:40px; align-items:start;">

          <!-- Nutritional Highlights -->
          <div style="background:#fff; border-radius:14px; padding:24px 22px; box-shadow:0 2px 16px rgba(0,0,0,0.05); border:1px solid rgba(181,138,58,0.10);">
            <h3 style="font-family:var(--font-display); font-size:20px; font-weight:700; color:var(--clr-dark); margin:0 0 6px;">Nutritional Highlights</h3>
            <p style="font-family:var(--font-body); font-size:11px; color:#999; margin:0 0 18px;">(Naturally Contains)</p>
            <div style="display:flex; gap:14px; flex-wrap:wrap;">
              <div v-for="n in product.nutritional" :key="n.name" style="display:flex; flex-direction:column; align-items:center; gap:7px; width:54px;">
                <div style="width:46px; height:46px; border-radius:50%; border:1.5px solid rgba(181,138,58,0.28); background:var(--clr-bg); display:flex; align-items:center; justify-content:center;">
                  <i :class="n.icon" style="font-size:16px; color:var(--clr-gold);"></i>
                </div>
                <span style="font-family:var(--font-body); font-size:10px; font-weight:600; color:var(--clr-dark); text-align:center; line-height:1.3;">{{ n.name }}</span>
              </div>
            </div>
          </div>

          <!-- Product Gallery -->
          <div style="background:#fff; border-radius:14px; padding:24px 22px; box-shadow:0 2px 16px rgba(0,0,0,0.05); border:1px solid rgba(181,138,58,0.10);">
            <h3 style="font-family:var(--font-display); font-size:20px; font-weight:700; color:var(--clr-dark); margin:0 0 16px;">Product Gallery</h3>
            <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:10px;">
              <div v-for="(img, idx) in product.gallery" :key="idx" style="border-radius:10px; overflow:hidden; aspect-ratio:1; cursor:pointer; transition:transform 0.2s ease;"
                @mouseenter="(e) => e.currentTarget.style.transform='scale(1.04)'"
                @mouseleave="(e) => e.currentTarget.style.transform='scale(1)'"
              >
                <img :src="img" :alt="'Gallery ' + (idx+1)" style="width:100%; height:100%; object-fit:cover;" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           6. RECIPE INSPIRATION
      ══════════════════════════════════════════════════ -->
      <section style="background:#fff; border-top:1px solid rgba(181,138,58,0.10);">
        <div style="max-width:1280px; margin:0 auto; padding:36px 48px;">
          <h2 style="font-family:var(--font-display); font-size:24px; font-weight:700; color:var(--clr-dark); text-align:center; margin:0 0 22px;">Recipe Inspiration</h2>
          <div style="display:grid; grid-template-columns:repeat(6,1fr); gap:12px;">
            <div v-for="r in product.recipes" :key="r.name" style="border-radius:12px; overflow:hidden; position:relative; cursor:pointer; aspect-ratio:0.85; transition:transform 0.25s ease;"
              @mouseenter="(e) => e.currentTarget.style.transform='scale(1.03)'"
              @mouseleave="(e) => e.currentTarget.style.transform='scale(1)'"
            >
              <img :src="r.image" :alt="r.name" style="width:100%; height:100%; object-fit:cover;" loading="lazy" />
              <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%); pointer-events:none;"></div>
              <p style="position:absolute; bottom:8px; left:0; right:0; text-align:center; font-family:var(--font-body); font-size:11px; font-weight:700; color:#fff; padding:0 6px; pointer-events:none; line-height:1.3;">{{ r.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           7. FAQ | EXPLORE MORE
      ══════════════════════════════════════════════════ -->
      <section style="background:var(--clr-bg); border-top:1px solid rgba(181,138,58,0.10);">
        <div style="max-width:1280px; margin:0 auto; padding:36px 48px; display:grid; grid-template-columns:400px 1fr; gap:48px; align-items:start;">

          <!-- FAQ -->
          <div>
            <h2 style="font-family:var(--font-display); font-size:22px; font-weight:700; color:var(--clr-dark); margin:0 0 18px;">Frequently Asked Questions</h2>
            <div style="display:flex; flex-direction:column; gap:0; border-radius:12px; overflow:hidden; border:1px solid rgba(181,138,58,0.14); background:#fff;">
              <div
                v-for="(faq, idx) in product.faq"
                :key="idx"
                :style="{ borderBottom: idx < product.faq.length - 1 ? '1px solid rgba(181,138,58,0.12)' : 'none' }"
              >
                <button
                  @click="openFaq = openFaq === idx ? -1 : idx"
                  style="width:100%; display:flex; align-items:center; justify-content:space-between; padding:14px 18px; background:transparent; border:none; cursor:pointer; text-align:left; gap:12px;"
                >
                  <span style="font-family:var(--font-body); font-size:13px; font-weight:600; color:var(--clr-dark); line-height:1.4;">{{ faq.q }}</span>
                  <span style="width:22px; height:22px; border-radius:50%; border:1.5px solid rgba(181,138,58,0.35); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:transform 0.2s ease;" :style="{ transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0)' }">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="var(--clr-gold)" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                </button>
                <div v-show="openFaq === idx" style="padding:0 18px 14px; font-family:var(--font-body); font-size:12.5px; color:#666; line-height:1.75;">{{ faq.a }}</div>
              </div>
            </div>
          </div>

          <!-- Explore More -->
          <div>
            <h2 style="font-family:var(--font-display); font-size:22px; font-weight:700; color:var(--clr-dark); margin:0 0 18px;">Explore More From DrKitchen</h2>
            <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:12px; position:relative;">
              <NuxtLink
                v-for="rel in related"
                :key="rel.slug"
                :to="'/products/' + rel.slug"
                style="background:#fff; border-radius:12px; border:1.5px solid rgba(181,138,58,0.14); overflow:hidden; cursor:pointer; text-decoration:none; transition:transform 0.22s ease, box-shadow 0.22s ease;"
                @mouseenter="(e) => { e.currentTarget.style.transform='scale(1.04)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(90,60,20,0.13)'; }"
                @mouseleave="(e) => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='none'; }"
              >
                <div style="height:110px; background:var(--clr-bg); display:flex; align-items:center; justify-content:center; padding:12px;">
                  <img :src="rel.image" :alt="rel.name" style="max-height:90px; max-width:100%; object-fit:contain;" loading="lazy" />
                </div>
                <div style="padding:8px 10px 10px; text-align:center;">
                  <p style="font-family:var(--font-body); font-size:11px; font-weight:700; color:var(--clr-dark); margin:0 0 2px; line-height:1.3;">{{ rel.name }}</p>
                  <p style="font-family:var(--font-body); font-size:10px; color:var(--clr-muted); margin:0;">{{ rel.hindi }}</p>
                </div>
              </NuxtLink>
              <!-- Next arrow -->
              <button style="position:absolute; right:-18px; top:50%; transform:translateY(-50%); width:34px; height:34px; border-radius:50%; background:#C73A2B; border:none; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(140,45,33,0.30);">
                <i class="fas fa-chevron-right" style="color:#fff; font-size:12px;"></i>
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           8. BOTTOM CTA BANNER
      ══════════════════════════════════════════════════ -->
      <section style="background:#1c2b1a; position:relative; overflow:hidden;">
        <div style="max-width:1280px; margin:0 auto; padding:36px 48px; display:flex; align-items:center; gap:32px;">
          <!-- Decorative spice image -->
          <div style="width:90px; height:90px; border-radius:50%; overflow:hidden; border:3px solid rgba(200,169,110,0.3); flex-shrink:0;">
            <img src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200" alt="spices" style="width:100%; height:100%; object-fit:cover;" />
          </div>
          <!-- Text -->
          <div style="flex:1;">
            <h3 style="font-family:var(--font-display); font-size:26px; font-weight:700; color:#fff; margin:0 0 6px; line-height:1.2;">Looking for this product?</h3>
            <p style="font-family:var(--font-body); font-size:13px; color:rgba(255,255,255,0.60); margin:0; line-height:1.6;">Contact us to know where DrKitchen products are available near you.</p>
          </div>
          <!-- Buttons -->
          <div style="display:flex; gap:12px; flex-shrink:0;">
            <NuxtLink to="/contact-us" style="display:inline-flex; align-items:center; gap:8px; border:1.5px solid rgba(200,169,110,0.60); color:#c8a96e; background:transparent; font-family:var(--font-body); font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:12px 22px; border-radius:6px; text-decoration:none; transition:all 0.2s ease;"
              @mouseenter="(e) => { e.currentTarget.style.background='rgba(200,169,110,0.15)'; }"
              @mouseleave="(e) => { e.currentTarget.style.background='transparent'; }"
            >
              Contact Us <i class="fas fa-arrow-right" style="font-size:10px;"></i>
            </NuxtLink>
            <NuxtLink to="/contact-us" style="display:inline-flex; align-items:center; gap:8px; border:1.5px solid rgba(255,255,255,0.25); color:#fff; background:transparent; font-family:var(--font-body); font-size:12px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; padding:12px 22px; border-radius:6px; text-decoration:none; transition:all 0.2s ease;"
              @mouseenter="(e) => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; }"
              @mouseleave="(e) => { e.currentTarget.style.background='transparent'; }"
            >
              Find Distributor <i class="fas fa-arrow-right" style="font-size:10px;"></i>
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>

    <!-- 404 fallback -->
    <div v-else style="min-height:60vh; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:16px;">
      <p style="font-family:var(--font-display); font-size:32px; color:var(--clr-dark);">Product not found</p>
      <NuxtLink to="/our-products" class="dk-btn">View All Products</NuxtLink>
    </div>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getProduct, getRelated } = useProducts()

const product = computed(() => getProduct(route.params.slug as string))
const related = computed(() => product.value ? getRelated(product.value.relatedSlugs) : [])

const openFaq = ref(-1)

useHead(() => ({
  title: product.value ? `${product.value.name} — DrKitchen` : 'Product — DrKitchen',
  meta: [{ name: 'description', content: product.value?.tagline ?? '' }],
}))
</script>
