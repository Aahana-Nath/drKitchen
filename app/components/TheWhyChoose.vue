<template>
  <section style="background:var(--clr-bg2); position:relative; overflow:hidden;">

    <!-- Background image -->
    <div style="position:absolute; inset:0; z-index:0;">
      <img
        src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/e36f7d3e-7491-4fd0-a454-0738bba7a8f3.png"
        style="width:100%; height:100%; object-fit:cover; object-position:center; filter:blur(0.05px) brightness(0.92);"
      />
      <div style="position:absolute; inset:0; background:rgba(247,241,231,0.78);"></div>
    </div>

    <div style="max-width:1100px; margin:0 auto; padding:20px 32px 16px; position:relative; z-index:1;">

      <!-- Eyebrow -->
      <div style="text-align:center; margin-bottom:6px;">
        <div class="section-label" style="justify-content:center;">WHY CHOOSE DRKITCHEN?</div>
      </div>

      <!-- Heading -->
      <div style="text-align:center; margin-bottom:6px;">
        <h2 style="font-family:var(--font-display); font-size:40px; font-weight:700; color:var(--clr-dark); line-height:1.1; margin:0;">Not just spices.</h2>
        <h2 style="font-family:var(--font-display); font-size:40px; font-weight:700; font-style:italic; color:var(--clr-accent); line-height:1.1; margin:0;">A promise in every grain.</h2>
      </div>
      <p style="text-align:center; color:var(--clr-dark); font-size:13px; font-weight:700; max-width:540px; margin:0 auto 14px; line-height:1.6;">
        At DrKitchen, every spice goes through a journey of care, science and tradition to deliver unmatched purity, aroma and flavor.
      </p>

      <!-- Features grid: left | center bowl with orbit | right -->
      <div ref="featuresRef" style="display:grid; grid-template-columns:1fr 260px 1fr; align-items:center; gap:0; margin-bottom:12px;">

        <!-- Left features -->
        <div style="display:flex; flex-direction:column; gap:0; padding-right:20px;">
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
                transition: 'all 0.3s ease'
              }"
            >
              <i :class="f.icon" :style="{ fontSize:'16px', color: hoveredFeature === f.title ? '#fff' : (f.iconColor || '#c8a96e'), transition:'color 0.3s' }"></i>
            </div>
            <div>
              <p style="font-weight:800; font-size:18px; color:#1a1208; margin:0 0 4px; font-family:'Playfair Display',Georgia,serif;">{{ f.title }}</p>
              <p style="font-size:14px; color:#666; line-height:1.6; margin:0 0 4px;">{{ f.desc }}</p>
              <p v-if="f.highlight" style="font-size:14px; font-weight:700; color:#8b1e10; margin:0;">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

        <!-- Center: bowl + orbit SVG -->
        <div style="position:relative; width:260px; height:260px; flex-shrink:0; margin:0 auto;">

          <!-- Animated orbit ring + connector lines SVG -->
          <svg viewBox="0 0 320 320" width="260" height="260" style="position:absolute; top:0; left:0; z-index:1; pointer-events:none; overflow:visible;">
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
            style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:225px; height:225px; border-radius:50%; overflow:hidden; border:5px solid #fff; box-shadow:0 12px 48px rgba(0,0,0,0.22); z-index:2; cursor:ew-resize; user-select:none; -webkit-user-select:none;"
          >
            <img
              draggable="false"
              src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/images_1_vfkcbs"
              :style="{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', clipPath:`inset(0 ${100 - splitPct}% 0 0)`, userSelect:'none', pointerEvents:'none' }"
            />
            <img
              draggable="false"
              src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/download__1_.jpeg"
              :style="{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', clipPath:`inset(0 0 0 ${splitPct}%)`, userSelect:'none', pointerEvents:'none' }"
            />
            <!-- Labels -->
            <div style="position:absolute; top:10px; left:10px; background:rgba(139,30,16,0.85); color:#fff; font-size:11px; font-weight:700; padding:3px 9px; border-radius:20px; letter-spacing:0.5px; pointer-events:none;">Ground</div>
            <div style="position:absolute; top:10px; right:10px; background:rgba(26,18,8,0.75); color:#c8a96e; font-size:11px; font-weight:700; padding:3px 9px; border-radius:20px; letter-spacing:0.5px; pointer-events:none;">Whole</div>
            <!-- Divider -->
            <div :style="{ position:'absolute', top:0, left:splitPct+'%', transform:'translateX(-50%)', width:'2px', height:'100%', background:'rgba(255,255,255,0.85)', zIndex:3, pointerEvents:'none' }">
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:30px; height:30px; border-radius:50%; background:#fff; box-shadow:0 2px 12px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M4 2L1 5l3 3M10 2l3 3-3 3" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right features -->
        <div style="display:flex; flex-direction:column; gap:0; padding-left:20px;">
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
                transition: 'all 0.3s ease'
              }"
            >
              <i :class="f.icon" :style="{ fontSize:'16px', color: hoveredFeature === f.title ? '#fff' : (f.iconColor || '#c8a96e'), transition:'color 0.3s' }"></i>
            </div>
            <div style="text-align:left;">
              <p style="font-weight:800; font-size:18px; color:#1a1208; margin:0 0 4px; font-family:'Playfair Display',Georgia,serif;">{{ f.title }}</p>
              <p style="font-size:14px; color:#666; line-height:1.6; margin:0 0 4px;">{{ f.desc }}</p>
              <p v-if="f.highlight" style="font-size:14px; font-weight:700; color:#8b1e10; margin:0;">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Quality Difference Bar -->
      <div style="background:#1c2318; border-radius:12px; overflow:hidden; display:grid; grid-template-columns:155px 1fr 120px; min-height:60px; box-shadow:0 6px 24px rgba(0,0,0,0.18);">

        <!-- Left text -->
        <div style="padding:10px 14px; display:flex; flex-direction:column; justify-content:center; border-right:1px solid rgba(255,255,255,0.06);">
          <p style="font-size:11px; font-weight:600; color:#eee; line-height:1.4; margin:0 0 3px; letter-spacing:0.5px; text-transform:uppercase;">See the DrKitchen</p>
          <p style="font-family:'Playfair Display',Georgia,serif; font-size:18px; font-weight:800; color:#c8a96e; line-height:1.2; margin:0 0 8px;">Quality Difference</p>
          <p style="font-family:'Playfair Display',Georgia,serif; font-style:italic; font-size:12px; color:#ddd; line-height:1.5; margin:0;">Try it. Taste it.<br>You'll feel it. →</p>
        </div>

        <!-- Comparison circles -->
        <div style="padding:8px 14px; display:flex; align-items:center; justify-content:center; gap:6px;">

          <div style="display:flex; flex-direction:column; align-items:center; gap:5px;">
            <p style="font-size:11px; font-weight:700; color:#c8a96e; letter-spacing:1px; margin:0; text-align:center;">DrKitchen</p>
            <div style="width:40px; height:40px; border-radius:50%; overflow:hidden; border:2.5px solid #c8a96e; box-shadow:0 0 10px rgba(200,169,110,0.4);">
              <img src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <div style="text-align:center;">
              <p style="font-size:12px; color:#fff; margin:0; line-height:1.4;">Bold color</p>
              <p style="font-size:11px; color:#bbb; margin:0;">Natural oils intact</p>
            </div>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center; gap:3px; margin-top:-14px;">
            <span style="width:24px; height:24px; border-radius:50%; background:#2a3624; border:1px solid #4a5e40; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:800; color:#8aab7a; flex-shrink:0;">VS</span>
          </div>

          <div v-for="(comp, idx) in comparisons" :key="comp.label" style="display:contents;">
            <div style="display:flex; flex-direction:column; align-items:center; gap:5px;">
              <p style="font-size:11px; font-weight:700; color:#ddd; letter-spacing:1px; margin:0; text-align:center;">Other Spices</p>
              <div
                @mouseenter="comp.hovered = true" @mouseleave="comp.hovered = false"
                :style="{ width:'40px', height:'40px', borderRadius:'50%', overflow:'hidden', border:'2px solid #444', filter: comp.hovered ? 'none' : 'saturate(0.3) brightness(0.75)', transition:'filter 0.35s ease, transform 0.25s ease', cursor:'pointer', transform: comp.hovered ? 'scale(1.08)' : 'scale(1)' }">
                <img :src="comp.img" style="width:100%; height:100%; object-fit:cover;" />
              </div>
              <div style="text-align:center;">
                <p style="font-size:12px; color:#eee; margin:0; line-height:1.4;">{{ comp.label }}</p>
                <p style="font-size:11px; color:#bbb; margin:0;">{{ comp.sub }}</p>
              </div>
            </div>
            <div v-if="idx < comparisons.length - 1" style="display:flex; flex-direction:column; align-items:center; gap:3px; margin-top:-14px;">
              <span style="width:24px; height:24px; border-radius:50%; background:#2a3624; border:1px solid #4a5e40; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:800; color:#8aab7a; flex-shrink:0;">VS</span>
            </div>
          </div>
        </div>

        <!-- Right food image -->
        <div style="overflow:hidden; position:relative;">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
            style="width:100%; height:100%; object-fit:cover; opacity:0.75;"
          />
          <div style="position:absolute; inset:0; background:linear-gradient(to right, #1c2318 0%, transparent 40%);"></div>
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
.feature-card--visible { opacity: 1 !important; transform: translateX(0) !important; }
.feature-card:hover { background: rgba(255,255,255,0.72); box-shadow: 0 4px 20px rgba(0,0,0,0.07); }
.feature-card--right > div:last-child { text-align: left; }

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
