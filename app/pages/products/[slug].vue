<template>
  <div class="bg-[var(--clr-bg)] min-h-screen">
    <TheNavbar />

    <div v-if="product">

      <!-- ══════════════════════════════════════════════════
           1. HERO
      ══════════════════════════════════════════════════ -->
      <section class="relative overflow-hidden min-h-[350px] md:min-h-[450px] lg:min-h-[500px] flex items-center">

        <!-- Background: full-bleed image when heroBg is set, else cream -->
        <div v-if="product.heroBg" class="absolute inset-0">
          <img :src="product.heroBg" :alt="product.name + ' hero'" class="w-full h-full object-cover object-center" />
          <!-- Gradient: strong dark on left for legibility, fades to transparent right -->
          <div class="absolute inset-0 bg-gradient-to-r from-[rgba(15,9,3,0.88)] via-[rgba(15,9,3,0.62)] to-transparent"></div>
        </div>
        <div v-else class="absolute inset-0 bg-[var(--clr-bg)]">
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_10%_50%,rgba(181,138,58,0.07)_0%,transparent_70%)]"></div>
        </div>

        <div class="max-w-7xl w-full mx-auto px-5 md:px-8 lg:px-12 relative z-[1]">

          <!-- Left: text -->
          <div class="py-10 pb-24 md:py-12 md:pb-28 lg:pb-32">
            <!-- Eyebrow label -->
            <div class="inline-flex items-center gap-2.5 mb-3">
              <span class="h-px w-6 lg:w-7 block" :style="{ background: product.heroBg ? '#D4A84B' : 'var(--clr-gold)', opacity: '0.7' }"></span>
              <span class="font-body text-[10px] lg:text-[11px] font-bold tracking-widest uppercase" :style="{ color: product.heroBg ? '#D4A84B' : 'var(--clr-gold)' }">{{ product.category }}</span>
              <span class="h-px w-6 lg:w-7 block" :style="{ background: product.heroBg ? '#D4A84B' : 'var(--clr-gold)', opacity: '0.7' }"></span>
            </div>

            <h1 class="font-display text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-semibold leading-none mb-2 lg:mb-2.5 tracking-tight" :style="{ color: product.heroBg ? '#fff' : 'var(--clr-dark)' }">{{ product.name }}</h1>
            <p class="font-display italic text-base lg:text-xl mb-4 lg:mb-5" :style="{ color: product.heroBg ? 'rgba(255,255,255,0.80)' : 'var(--clr-muted)' }">{{ product.subtitle }}</p>
            <p class="font-body text-sm text-white/75 leading-relaxed lg:leading-loose max-w-md mb-6 lg:mb-7 whitespace-pre-line" :style="{ color: product.heroBg ? 'rgba(255,255,255,0.75)' : 'var(--clr-muted)' }">{{ product.tagline }}</p>

            <!-- 4 feature icons -->
            <div class="flex gap-4 lg:gap-5 mb-6 lg:mb-8 flex-wrap">
              <div v-for="f in product.heroFeatures" :key="f.label" class="flex flex-col items-center gap-1.5 w-14 lg:w-[70px]">
                <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[rgba(212,168,75,0.55)] flex items-center justify-center" :style="{ background: product.heroBg ? 'rgba(255,255,255,0.08)' : 'rgba(247,241,231,0.85)' }">
                  <i :class="f.icon" class="text-sm lg:text-[17px] text-[#D4A84B]"></i>
                </div>
                <span class="font-body text-[9px] lg:text-[10px] font-semibold text-center leading-tight whitespace-pre-line" :style="{ color: product.heroBg ? 'rgba(255,255,255,0.85)' : 'var(--clr-dark)' }">{{ f.label }}</span>
              </div>
            </div>

            <!-- CTA -->
            <NuxtLink to="/contact-us" class="inline-flex items-center gap-2.5 bg-[#1c2b1a] hover:bg-[#2d4228] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3 lg:px-7 lg:py-3.5 rounded-md no-underline transition-colors">
              Contact Sales <i class="fas fa-arrow-right text-[10px]"></i>
            </NuxtLink>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           2. ABOUT + WHY DRKITCHEN
      ══════════════════════════════════════════════════ -->
      <section class="px-4 md:px-8 lg:px-12 relative z-[2] -mt-16 lg:-mt-[72px]">
        <div class="max-w-7xl mx-auto bg-[#F7F1E5] rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.14)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[200px]">

          <!-- ── Left: About This Spice ── -->
          <div class="p-5 lg:p-6 relative bg-[#F7F1E5]">
            <p class="font-body text-[10px] font-bold text-[var(--clr-gold)] tracking-widest uppercase mb-1">Product Story</p>
            <h2 class="font-display text-lg lg:text-[22px] font-bold text-[var(--clr-dark)] mb-2 leading-snug">About This Spice</h2>
            <!-- Gold rule ornament -->
            <div class="flex items-center gap-2 mb-3">
              <div class="w-9 h-0.5 bg-[var(--clr-gold)] rounded"></div>
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--clr-gold)]"></span>
              <div class="w-4 h-0.5 bg-[var(--clr-gold)] opacity-40 rounded"></div>
            </div>
            <!-- Text + botanical image side-by-side -->
            <div class="flex items-start gap-0">
              <div class="flex-1 pr-3">
                <p v-for="t in product.aboutText" :key="t" class="font-body text-xs text-gray-700 leading-relaxed mb-1.5">{{ t }}</p>
              </div>
              <!-- Botanical image -->
              <img :src="product.aboutImage" :alt="product.name" class="w-24 lg:w-[130px] h-auto object-contain shrink-0" />
            </div>
          </div>

          <!-- ── Right: Why DrKitchen ── -->
          <div class="p-5 lg:p-6 bg-gradient-to-br from-[#f2e8d5] via-[#f5edde] to-[#f3ebd9] border-t lg:border-t-0 lg:border-l border-[rgba(181,138,58,0.14)]">
            <p class="font-body text-[10px] font-bold text-[var(--clr-accent)] tracking-widest uppercase mb-1">Our Promise</p>
            <h2 class="font-display text-lg lg:text-[22px] font-bold text-[var(--clr-dark)] mb-2 leading-snug">Why DrKitchen <em class="italic text-[var(--clr-accent)]">{{ product.name.split(' ')[0] }}</em>?</h2>
            <!-- Gold rule ornament -->
            <div class="flex items-center gap-2 mb-4">
              <div class="w-9 h-0.5 bg-[var(--clr-accent)] rounded"></div>
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--clr-accent)]"></span>
              <div class="w-4 h-0.5 bg-[var(--clr-accent)] opacity-40 rounded"></div>
            </div>
            <!-- 6 icons in a row -->
            <div class="flex items-start gap-2 lg:gap-1.5 justify-between flex-wrap">
              <div v-for="f in product.whyFeatures" :key="f.label" class="flex flex-col items-center gap-2 flex-1 min-w-[50px] max-w-[70px]">
                <div class="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#fff4e6] to-[#fde8cc] border-2 border-[rgba(199,58,43,0.20)] shadow-[0_4px_14px_rgba(199,58,43,0.12)] flex items-center justify-center shrink-0">
                  <i :class="f.icon" class="text-base lg:text-xl text-[var(--clr-accent)]"></i>
                </div>
                <span class="font-body text-[10px] lg:text-[11px] font-bold text-[var(--clr-dark)] text-center leading-tight whitespace-pre-line">{{ f.label }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           3. SOURCED FROM | CHARACTERISTICS | BEST USED FOR
      ══════════════════════════════════════════════════ -->
      <section class="px-4 md:px-8 lg:px-12 bg-[var(--clr-bg)] border-t border-[rgba(181,138,58,0.10)]">
        <div class="max-w-7xl mx-auto py-6 lg:py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_280px] gap-5 lg:gap-8 items-stretch">

          <!-- Sourced From -->
          <div class="relative rounded-xl overflow-hidden shadow-lg h-56 lg:h-[280px]">
            <!-- Background image -->
            <img src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/Screenshot_2026-07-04_at_12.52.53_d1p96c"
              class="absolute inset-0 w-full h-full object-cover object-center lg:object-bottom" />
            <!-- Light overlay — lighter so bg is visible -->
            <div class="absolute inset-0 bg-gradient-to-br from-[rgba(250,244,230,0.82)] via-[rgba(245,236,215,0.65)] to-[rgba(200,180,140,0.20)]"></div>
            <!-- Two-column: text left only -->
            <div class="relative z-[2] p-4 lg:p-5 max-w-[60%] lg:max-w-[44%] mt-2 lg:mt-4">
              <p class="font-body text-[9px] font-bold text-[#8b6010] tracking-widest uppercase mb-1">Sourced From</p>
              <!-- gold arrow ornament -->
              <div class="flex items-center gap-1 mb-2">
                <div class="w-6 h-px bg-[#c8a040]"></div>
                <span class="text-[#c8a040] text-xs">&#8594;</span>
              </div>
              <h3 class="font-display text-lg lg:text-xl font-extrabold text-[#1a1208] mb-1.5 leading-tight">{{ product.sourcedFrom.location }}</h3>
              <!-- second ornament -->
              <div class="flex items-center gap-1 mb-3">
                <div class="w-4 h-px bg-[#c8a040]"></div>
                <span class="text-[#c8a040] text-[10px]">&#8594;</span>
              </div>
              <p class="font-body text-[11px] text-[#3a2e1a] leading-relaxed">{{ product.sourcedFrom.desc }}</p>
            </div>
          </div>

          <!-- Product Characteristics -->
          <div class="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[rgba(181,138,58,0.10)] h-auto lg:h-[280px] overflow-hidden">
            <h3 class="font-display text-lg lg:text-xl font-bold text-[var(--clr-dark)] mb-4 lg:mb-5">Product Characteristics</h3>
            <div class="flex flex-col gap-3 lg:gap-3.5">
              <div v-for="c in product.characteristics" :key="c.name" class="flex items-center gap-3">
                <div class="flex items-center gap-1.5 w-20 lg:w-24 shrink-0">
                  <i class="fas fa-circle text-[6px] text-[var(--clr-gold)] opacity-60"></i>
                  <span class="font-body text-xs text-[var(--clr-dark)] font-medium">{{ c.name }}</span>
                </div>
                <div class="flex-1 h-2 bg-[#f0e8d8] rounded-full overflow-hidden">
                  <div :style="{ width: c.value + '%' }" class="h-full bg-gradient-to-r from-[#c8a96e] to-[#B58A3A] rounded-full transition-[width] duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Used For -->
          <div class="bg-white rounded-xl p-4 shadow-sm border border-[rgba(181,138,58,0.10)] h-auto lg:h-[280px] flex flex-col md:col-span-2 lg:col-span-1">
            <h3 class="font-display text-base lg:text-lg font-bold text-[var(--clr-dark)] mb-2.5">Best Used For</h3>
            <div class="flex-1 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-2 gap-2 overflow-hidden">
              <div v-for="item in product.bestUsedFor" :key="item.name" class="flex flex-col items-center gap-1 min-h-0">
                <div class="w-full flex-1 rounded-lg overflow-hidden shadow min-h-0 aspect-square lg:aspect-auto">
                  <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" loading="lazy" />
                </div>
                <span class="font-body text-[10px] text-gray-600 text-center leading-tight shrink-0">{{ item.name }}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           4. PAIRS WITH | PROCESS
      ══════════════════════════════════════════════════ -->
      <section class="bg-white border-t border-[rgba(181,138,58,0.10)]">
        <div class="max-w-7xl mx-auto px-4 py-6 md:px-8 lg:px-12 lg:py-9">

          <!-- Our Careful Process -->
          <div class="bg-[var(--clr-bg)] rounded-xl p-5 md:p-6 lg:p-8 lg:px-10 border border-[rgba(181,138,58,0.10)]">
            <h3 class="font-display text-lg lg:text-xl font-bold text-[var(--clr-dark)] mb-5 lg:mb-7">Our Careful Process</h3>
            <div class="flex items-start gap-0 justify-between flex-wrap">
              <template v-for="(step, idx) in product.process" :key="step.label">
                <div class="flex flex-col items-center gap-2.5 flex-1 min-w-[60px] lg:min-w-[72px]">
                  <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[rgba(181,138,58,0.35)] bg-white flex items-center justify-center shadow">
                    <i :class="step.icon" class="text-lg lg:text-xl text-[var(--clr-gold)]"></i>
                  </div>
                  <span class="font-body text-[10px] lg:text-[11px] font-semibold text-[var(--clr-dark)] text-center leading-tight whitespace-pre-line">{{ step.label }}</span>
                </div>
                <div v-if="idx < product.process.length - 1" class="hidden sm:flex items-center px-1 lg:px-2 mt-4 shrink-0">
                  <svg width="20" height="12" viewBox="0 0 18 12" fill="none"><path d="M1 6h14M11 1l5 5-5 5" stroke="#c8a96e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
              </template>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           5. NUTRITIONAL HIGHLIGHTS | GALLERY
      ══════════════════════════════════════════════════ -->
      <section class="bg-[var(--clr-bg)] border-t border-[rgba(181,138,58,0.10)]">
        <div class="max-w-7xl mx-auto px-4 py-6 md:px-8 lg:px-12 lg:py-9 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 lg:gap-10 items-start">

          <!-- Nutritional Highlights -->
          <div class="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[rgba(181,138,58,0.10)]">
            <h3 class="font-display text-lg lg:text-xl font-bold text-[var(--clr-dark)] mb-1.5">Nutritional Highlights</h3>
            <p class="font-body text-[11px] text-gray-400 mb-4">(Naturally Contains)</p>
            <div class="flex gap-3 flex-wrap">
              <div v-for="n in product.nutritional" :key="n.name" class="flex flex-col items-center gap-2 w-12 lg:w-14">
                <div class="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[rgba(181,138,58,0.28)] bg-[var(--clr-bg)] flex items-center justify-content-center">
                  <i :class="n.icon" class="text-sm lg:text-base text-[var(--clr-gold)] mx-auto"></i>
                </div>
                <span class="font-body text-[10px] font-semibold text-[var(--clr-dark)] text-center leading-tight">{{ n.name }}</span>
              </div>
            </div>
          </div>

          <!-- Product Gallery -->
          <div class="bg-white rounded-xl p-5 lg:p-6 shadow-sm border border-[rgba(181,138,58,0.10)]">
            <h3 class="font-display text-lg lg:text-xl font-bold text-[var(--clr-dark)] mb-4">Product Gallery</h3>
            <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-2.5">
              <div v-for="(img, idx) in product.gallery" :key="idx" class="rounded-lg overflow-hidden aspect-square cursor-pointer transition-transform duration-200 hover:scale-[1.04]">
                <img :src="img" :alt="'Gallery ' + (idx+1)" class="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           6. RECIPE INSPIRATION
      ══════════════════════════════════════════════════ -->
      <section class="bg-white border-t border-[rgba(181,138,58,0.10)]">
        <div class="max-w-7xl mx-auto px-4 py-6 md:px-8 lg:px-12 lg:py-9">
          <h2 class="font-display text-xl lg:text-2xl font-bold text-[var(--clr-dark)] text-center mb-5 lg:mb-6">Recipe Inspiration</h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
            <div v-for="r in product.recipes" :key="r.name" class="rounded-xl overflow-hidden relative cursor-pointer aspect-[1/1.18] transition-transform duration-200 hover:scale-[1.03]">
              <img :src="r.image" :alt="r.name" class="w-full h-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent pointer-events-none"></div>
              <p class="absolute bottom-2 inset-x-0 text-center font-body text-[11px] font-bold text-white px-1.5 pointer-events-none leading-tight">{{ r.name }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           7. FAQ | EXPLORE MORE
      ══════════════════════════════════════════════════ -->
      <section class="bg-[var(--clr-bg)] border-t border-[rgba(181,138,58,0.10)]">
        <div class="max-w-7xl mx-auto px-4 py-6 md:px-8 lg:px-12 lg:py-9 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">

          <!-- FAQ -->
          <div>
            <h2 class="font-display text-xl lg:text-[22px] font-bold text-[var(--clr-dark)] mb-4 lg:mb-5">Frequently Asked Questions</h2>
            <div class="flex flex-col gap-0 rounded-xl overflow-hidden border border-[rgba(181,138,58,0.14)] bg-white">
              <div
                v-for="(faq, idx) in product.faq"
                :key="idx"
                :class="idx < product.faq.length - 1 ? 'border-b border-[rgba(181,138,58,0.12)]' : ''"
              >
                <button
                  @click="openFaq = openFaq === idx ? -1 : idx"
                  class="w-full flex items-center justify-between py-3 px-4 lg:px-5 bg-transparent border-none cursor-pointer text-left gap-3"
                >
                  <span class="font-body text-xs lg:text-[13px] font-semibold text-[var(--clr-dark)] leading-snug">{{ faq.q }}</span>
                  <span class="w-5 h-5 lg:w-6 lg:h-6 rounded-full border border-[rgba(181,138,58,0.35)] flex items-center justify-center shrink-0 transition-transform duration-200" :style="{ transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0)' }">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M1 5h8" stroke="var(--clr-gold)" stroke-width="1.5" stroke-linecap="round"/></svg>
                  </span>
                </button>
                <div v-show="openFaq === idx" class="px-4 pb-3 lg:px-5 lg:pb-4 font-body text-xs text-gray-600 leading-relaxed lg:leading-loose">{{ faq.a }}</div>
              </div>
            </div>
          </div>

          <!-- Explore More -->
          <div>
            <h2 class="font-display text-xl lg:text-[22px] font-bold text-[var(--clr-dark)] mb-4 lg:mb-5">Explore More From DrKitchen</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-3 relative">
              <NuxtLink
                v-for="rel in related"
                :key="rel.slug"
                :to="'/products/' + rel.slug"
                class="bg-white rounded-xl border border-[rgba(181,138,58,0.14)] overflow-hidden cursor-pointer no-underline transition-all duration-200 hover:scale-[1.04] hover:shadow-lg"
              >
                <div class="h-20 lg:h-28 bg-[var(--clr-bg)] flex items-center justify-center p-2 lg:p-3">
                  <img :src="rel.image" :alt="rel.name" class="max-h-16 lg:max-h-[90px] max-w-full object-contain" loading="lazy" />
                </div>
                <div class="p-2 lg:p-2.5 text-center">
                  <p class="font-body text-[10px] lg:text-[11px] font-bold text-[var(--clr-dark)] mb-0.5 leading-tight">{{ rel.name }}</p>
                  <p class="font-body text-[9px] lg:text-[10px] text-[var(--clr-muted)]">{{ rel.hindi }}</p>
                </div>
              </NuxtLink>
              <!-- Next arrow (hidden on mobile) -->
              <button class="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#C73A2B] border-none cursor-pointer items-center justify-center shadow-lg">
                <i class="fas fa-chevron-right text-white text-xs"></i>
              </button>
            </div>
          </div>

        </div>
      </section>

      <!-- ══════════════════════════════════════════════════
           8. BOTTOM CTA BANNER
      ══════════════════════════════════════════════════ -->
      <section class="bg-[#1c2b1a] relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 py-6 md:px-8 lg:px-12 lg:py-9 flex flex-col md:flex-row items-center gap-4 lg:gap-8">
          <!-- Decorative spice image (hidden on mobile) -->
          <div class="hidden md:block w-16 h-16 lg:w-[90px] lg:h-[90px] rounded-full overflow-hidden border-[3px] border-[rgba(200,169,110,0.3)] shrink-0">
            <img src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200" alt="spices" class="w-full h-full object-cover" />
          </div>
          <!-- Text -->
          <div class="flex-1 text-center md:text-left">
            <h3 class="font-display text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 leading-tight">Looking for this product?</h3>
            <p class="font-body text-xs lg:text-[13px] text-white/60 leading-relaxed">Contact us to know where DrKitchen products are available near you.</p>
          </div>
          <!-- Buttons -->
          <div class="flex flex-wrap justify-center gap-2 lg:gap-3 shrink-0">
            <NuxtLink to="/contact-us" class="inline-flex items-center gap-2 border border-[rgba(200,169,110,0.60)] text-[#c8a96e] bg-transparent font-body text-[10px] lg:text-xs font-bold tracking-wider uppercase px-4 py-2.5 lg:px-5 lg:py-3 rounded-md no-underline transition-colors hover:bg-[rgba(200,169,110,0.15)]">
              Contact Us <i class="fas fa-arrow-right text-[10px]"></i>
            </NuxtLink>
            <NuxtLink to="/contact-us" class="inline-flex items-center gap-2 border border-white/25 text-white bg-transparent font-body text-[10px] lg:text-xs font-bold tracking-wider uppercase px-4 py-2.5 lg:px-5 lg:py-3 rounded-md no-underline transition-colors hover:bg-white/10">
              Find Distributor <i class="fas fa-arrow-right text-[10px]"></i>
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>

    <!-- 404 fallback -->
    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <p class="font-display text-2xl lg:text-3xl text-[var(--clr-dark)]">Product not found</p>
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

<style scoped>
/* Minimal scoped styles - most layout now uses Tailwind */
</style>
