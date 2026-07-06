<template>
  <section class="bg-[var(--clr-bg2)] relative overflow-hidden">

    <!-- Background image -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/e36f7d3e-7491-4fd0-a454-0738bba7a8f3.png"
        class="w-full h-full object-cover object-center"
        style="filter:blur(0.05px) brightness(0.92);"
      />
      <div class="absolute inset-0 bg-[rgba(247,241,231,0.78)]"></div>
    </div>

    <div class="max-w-6xl mx-auto px-4 py-5 md:px-8 lg:px-8 relative z-[1]">

      <!-- Eyebrow -->
      <div class="text-center mb-1.5">
        <div class="section-label justify-center">WHY CHOOSE DRKITCHEN?</div>
      </div>

      <!-- Heading -->
      <div class="text-center mb-1.5">
        <h2 class="font-display text-2xl md:text-3xl lg:text-[40px] font-bold text-[var(--clr-dark)] leading-tight m-0">Not just spices.</h2>
        <h2 class="font-display text-2xl md:text-3xl lg:text-[40px] font-bold italic text-[var(--clr-accent)] leading-tight m-0">A promise in every grain.</h2>
      </div>
      <p class="text-center text-[var(--clr-dark)] text-xs md:text-sm font-bold max-w-md mx-auto mb-3 leading-relaxed">
        At DrKitchen, every spice goes through a journey of care, science and tradition to deliver unmatched purity, aroma and flavor.
      </p>

      <!-- Features grid: left | center bowl with orbit | right -->
      <div ref="featuresRef" class="grid grid-cols-1 lg:grid-cols-[1fr_260px_1fr] items-center gap-0 mb-3">

        <!-- Left features -->
        <div class="flex flex-col gap-0 lg:pr-5">
          <div
            v-for="(f, i) in leftFeatures"
            :key="f.title"
            class="feature-card feature-card--left"
            :class="{ 'feature-card--visible': featuresVisible }"
            :style="{ transitionDelay: (i * 120) + 'ms' }"
            @mouseenter="hoveredFeature = f.title"
            @mouseleave="hoveredFeature = ''"
          >
            <div
              class="feature-icon"
              :style="{
                background: hoveredFeature === f.title ? (f.iconColor || '#c8a96e') : '#faf6ee',
                border: '1.5px solid ' + (f.iconColor || '#c8a96e') + '66',
                boxShadow: hoveredFeature === f.title ? '0 4px 16px ' + (f.iconColor || '#c8a96e') + '44' : '0 2px 8px rgba(0,0,0,0.06)',
              }"
            >
              <i :class="f.icon" class="text-base transition-colors duration-300" :style="{ color: hoveredFeature === f.title ? '#fff' : (f.iconColor || '#c8a96e') }"></i>
            </div>
            <div>
              <p class="font-serif font-extrabold text-base lg:text-lg text-[#1a1208] mb-1 m-0">{{ f.title }}</p>
              <p class="text-sm text-gray-600 leading-relaxed mb-1 m-0">{{ f.desc }}</p>
              <p v-if="f.highlight" class="text-sm font-bold text-[#8b1e10] m-0">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

        <!-- Center: bowl + orbit SVG (hidden on mobile) -->
        <div class="hidden lg:block relative w-[260px] h-[260px] shrink-0 mx-auto">

          <!-- Animated orbit ring + connector lines SVG -->
          <svg viewBox="0 0 320 320" width="260" height="260" class="absolute top-0 left-0 z-[1] pointer-events-none overflow-visible">
            <!-- Outer slow rotating ring -->
            <circle
              cx="160" cy="160" r="145"
              fill="none" stroke="#c8a96e" stroke-width="1" stroke-dasharray="4 6" opacity="0.55"
              style="transform-origin:160px 160px; animation:orbitSpin 20s linear infinite;"
            />
            <!-- Inner faster counter-rotating ring -->
            <circle
              cx="160" cy="160" r="130"
              fill="none" stroke="#8b1e10" stroke-width="0.5" stroke-dasharray="2 8" opacity="0.25"
              style="transform-origin:160px 160px; animation:orbitSpinReverse 14s linear infinite;"
            />
            <!-- Connector lines & dots -->
            <path d="M 62,53 L 42,30 L 0,30" fill="none" stroke="#8b1e10" stroke-width="1" opacity="0.65"/>
            <circle cx="62" cy="53" r="4.5" fill="#8b1e10"/>
            <path d="M 15,160 L 0,160" fill="none" stroke="#c8a96e" stroke-width="1" opacity="0.65"/>
            <circle cx="15" cy="160" r="4.5" fill="#c8a96e"/>
            <path d="M 62,267 L 42,290 L 0,290" fill="none" stroke="#5a7a50" stroke-width="1" opacity="0.65"/>
            <circle cx="62" cy="267" r="4.5" fill="#5a7a50"/>
            <path d="M 258,53 L 278,30 L 320,30" fill="none" stroke="#7a5c3a" stroke-width="1" opacity="0.65"/>
            <circle cx="258" cy="53" r="4.5" fill="#7a5c3a"/>
            <path d="M 305,160 L 320,160" fill="none" stroke="#8b1e10" stroke-width="1" opacity="0.65"/>
            <circle cx="305" cy="160" r="4.5" fill="#8b1e10"/>
            <path d="M 258,267 L 278,290 L 320,290" fill="none" stroke="#8b1e10" stroke-width="1" opacity="0.65"/>
            <circle cx="258" cy="267" r="4.5" fill="#8b1e10"/>
          </svg>

          <!-- Bowl image circle — draggable split (mouse + touch) -->
          <div
            ref="bowlRef"
            @mousedown="startDrag"
            @touchstart.prevent="startTouchDrag"
            @dragstart.prevent
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[225px] h-[225px] rounded-full overflow-hidden border-[5px] border-white shadow-[0_12px_48px_rgba(0,0,0,0.22)] z-[2] cursor-ew-resize select-none"
          >
            <img
              draggable="false"
              src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/images_1_vfkcbs"
              class="absolute top-0 left-0 w-full h-full object-cover object-center select-none pointer-events-none"
              :style="{ clipPath:`inset(0 ${100 - splitPct}% 0 0)` }"
            />
            <img
              draggable="false"
              src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/download__1_.jpeg"
              class="absolute top-0 left-0 w-full h-full object-cover object-center select-none pointer-events-none"
              :style="{ clipPath:`inset(0 0 0 ${splitPct}%)` }"
            />
            <!-- Labels -->
            <div class="absolute top-2.5 left-2.5 bg-[rgba(139,30,16,0.85)] text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide pointer-events-none">Ground</div>
            <div class="absolute top-2.5 right-2.5 bg-[rgba(26,18,8,0.75)] text-[#c8a96e] text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide pointer-events-none">Whole</div>
            <!-- Divider -->
            <div class="absolute top-0 h-full w-0.5 bg-white/85 z-[3] pointer-events-none" :style="{ left: splitPct+'%', transform:'translateX(-50%)' }">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.3)] flex items-center justify-center">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M4 2L1 5l3 3M10 2l3 3-3 3" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right features -->
        <div class="flex flex-col gap-0 lg:pl-5">
          <div
            v-for="(f, i) in rightFeatures"
            :key="f.title"
            class="feature-card feature-card--right"
            :class="{ 'feature-card--visible': featuresVisible }"
            :style="{ transitionDelay: (i * 120) + 'ms' }"
            @mouseenter="hoveredFeature = f.title"
            @mouseleave="hoveredFeature = ''"
          >
            <div
              class="feature-icon"
              :style="{
                background: hoveredFeature === f.title ? (f.iconColor || '#c8a96e') : '#faf6ee',
                border: '1.5px solid ' + (f.iconColor || '#c8a96e') + '66',
                boxShadow: hoveredFeature === f.title ? '0 4px 16px ' + (f.iconColor || '#c8a96e') + '44' : '0 2px 8px rgba(0,0,0,0.06)',
              }"
            >
              <i :class="f.icon" class="text-base transition-colors duration-300" :style="{ color: hoveredFeature === f.title ? '#fff' : (f.iconColor || '#c8a96e') }"></i>
            </div>
            <div class="text-left">
              <p class="font-serif font-extrabold text-base lg:text-lg text-[#1a1208] mb-1 m-0">{{ f.title }}</p>
              <p class="text-sm text-gray-600 leading-relaxed mb-1 m-0">{{ f.desc }}</p>
              <p v-if="f.highlight" class="text-sm font-bold text-[#8b1e10] m-0">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Quality Difference Bar -->
      <div class="bg-[#1c2318] rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[155px_1fr_120px] min-h-[60px] shadow-[0_6px_24px_rgba(0,0,0,0.18)]">

        <!-- Left text -->
        <div class="p-4 md:p-2.5 md:px-3.5 flex flex-col justify-center md:border-r border-white/[0.06]">
          <p class="text-[11px] font-semibold text-gray-200 leading-snug mb-1 tracking-wide uppercase m-0">See the DrKitchen</p>
          <p class="font-serif text-lg font-extrabold text-[#c8a96e] leading-tight mb-2 m-0">Quality Difference</p>
          <p class="font-serif italic text-xs text-gray-300 leading-relaxed m-0 hidden md:block">Try it. Taste it.<br>You'll feel it. →</p>
        </div>

        <!-- Comparison circles -->
        <div class="p-3 md:p-2 flex items-center justify-center gap-2 md:gap-1.5 flex-wrap">

          <div class="flex flex-col items-center gap-1.5">
            <p class="text-[11px] font-bold text-[#c8a96e] tracking-wider m-0 text-center">DrKitchen</p>
            <div class="w-10 h-10 rounded-full overflow-hidden border-[2.5px] border-[#c8a96e] shadow-[0_0_10px_rgba(200,169,110,0.4)]">
              <img src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200" class="w-full h-full object-cover" />
            </div>
            <div class="text-center">
              <p class="text-xs text-white m-0 leading-snug">Bold color</p>
              <p class="text-[11px] text-gray-400 m-0">Natural oils intact</p>
            </div>
          </div>

          <div class="flex flex-col items-center gap-1 -mt-3.5">
            <span class="w-6 h-6 rounded-full bg-[#2a3624] border border-[#4a5e40] flex items-center justify-center text-[8px] font-extrabold text-[#8aab7a] shrink-0">VS</span>
          </div>

          <div v-for="(comp, idx) in comparisons" :key="comp.label" class="contents">
            <div class="flex flex-col items-center gap-1.5">
              <p class="text-[11px] font-bold text-gray-300 tracking-wider m-0 text-center">Other Spices</p>
              <div
                @mouseenter="comp.hovered = true" @mouseleave="comp.hovered = false"
                class="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600 transition-all duration-300 cursor-pointer"
                :class="comp.hovered ? 'scale-110' : 'saturate-[0.3] brightness-75'"
              >
                <img :src="comp.img" class="w-full h-full object-cover" />
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-200 m-0 leading-snug">{{ comp.label }}</p>
                <p class="text-[11px] text-gray-400 m-0">{{ comp.sub }}</p>
              </div>
            </div>
            <div v-if="idx < comparisons.length - 1" class="flex flex-col items-center gap-1 -mt-3.5">
              <span class="w-6 h-6 rounded-full bg-[#2a3624] border border-[#4a5e40] flex items-center justify-center text-[8px] font-extrabold text-[#8aab7a] shrink-0">VS</span>
            </div>
          </div>
        </div>

        <!-- Right food image (hidden on mobile) -->
        <div class="hidden md:block overflow-hidden relative">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
            class="w-full h-full object-cover opacity-75"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-[#1c2318] to-transparent"></div>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const splitPct = ref(50)
const bowlRef = ref<HTMLElement | null>(null)
const featuresRef = ref<HTMLElement | null>(null)
const featuresVisible = ref(false)
const statsVisible = ref(false)
let dragging = false
let observer: IntersectionObserver | null = null

// Scroll-reveal via IntersectionObserver
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          featuresVisible.value = true
          statsVisible.value = true
        }
      })
    },
    { threshold: 0.15 }
  )
  if (featuresRef.value) observer.observe(featuresRef.value)
})

// Mouse drag
function startDrag(e: MouseEvent) {
  e.preventDefault()
  dragging = true
  onMove(e)
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', stopDrag)
}

function onMove(e: MouseEvent) {
  if (!dragging || !bowlRef.value) return
  const rect = bowlRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
  splitPct.value = Math.round((x / rect.width) * 100)
}

function stopDrag() {
  dragging = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', stopDrag)
}

// Touch drag
function startTouchDrag(e: TouchEvent) {
  dragging = true
  onTouchMove(e)
  window.addEventListener('touchmove', onTouchMove, { passive: false })
  window.addEventListener('touchend', stopDrag)
}

function onTouchMove(e: TouchEvent) {
  if (!dragging || !bowlRef.value) return
  e.preventDefault()
  const touch = e.touches[0]
  const rect = bowlRef.value.getBoundingClientRect()
  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width))
  splitPct.value = Math.round((x / rect.width) * 100)
}

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', stopDrag)
  window.removeEventListener('touchmove', onTouchMove)
  window.removeEventListener('touchend', stopDrag)
  observer?.disconnect()
})

const leftFeatures = [
  {
    icon: 'fas fa-leaf',
    iconColor: '#8b1e10',
    title: 'Carefully Sourced',
    desc: 'Handpicked from the best farms across India and the world.',
    highlight: 'We choose only the finest.',
  },
  {
    icon: 'fas fa-flask',
    iconColor: '#c8a96e',
    title: 'Scientifically Processed',
    desc: 'Advanced cleaning, sorting and sterilization to lock in purity',
    highlight: 'without losing nature.',
  },
  {
    icon: 'fas fa-seedling',
    iconColor: '#5a7a50',
    title: 'Pure & Natural',
    desc: 'No artificial colors. No additives. No fillers.',
    highlight: 'Just 100% real spices.',
  },
]

const rightFeatures = [
  {
    icon: 'fas fa-wind',
    iconColor: '#7a5c3a',
    title: 'Aroma Locked',
    desc: 'Our low-temperature grinding technology preserves the natural oils and',
    highlight: 'rich aroma.',
  },
  {
    icon: 'fas fa-shield-alt',
    iconColor: '#8b1e10',
    title: 'Hygienically Packed',
    desc: 'Packed in food-grade, moisture-proof pouches to ensure safety, freshness',
    highlight: 'and long shelf life.',
  },
  {
    icon: 'fas fa-heart',
    iconColor: '#8b1e10',
    title: 'Trusted by Thousands',
    desc: 'Loved by 10,000+ happy customers for quality you can taste and trust you can feel.',
    highlight: '',
  },
]

const hoveredFeature = ref('')

const stats = [
  { display: '10K+', label: 'Happy Customers' },
  { display: '100%', label: 'Natural Ingredients' },
  { display: '0',    label: 'Artificial Additives' },
  { display: '50+',  label: 'Spice Variants' },
]

const comparisons = reactive([
  { img: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200', label: 'Dull color', sub: 'Loses aroma', hovered: false },
  { img: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=200', label: 'Added fillers', sub: 'Low purity', hovered: false },
  { img: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200', label: 'High moisture', sub: 'Short shelf life', hovered: false },
])
</script>

<style>
@keyframes orbitSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes orbitSpinReverse { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.55s ease, transform 0.55s ease, background 0.3s, box-shadow 0.3s;
}
.feature-card--left { transform: translateX(-28px); }
.feature-card--right { transform: translateX(28px); flex-direction: row-reverse; }
.feature-card--visible { opacity: 1; transform: translateX(0); }
.feature-card:hover { background: rgba(255,255,255,0.72); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

@media (max-width: 1024px) {
  .feature-card--right {
    flex-direction: row;
  }
}
</style>
