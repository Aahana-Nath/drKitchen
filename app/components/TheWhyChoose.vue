<template>
  <section style="background:#f5ede0; position:relative; overflow:hidden;">

    <!-- Corner spice decorations -->
    <img
      src="https://images.pexels.com/photos/4198936/pexels-photo-4198936.jpeg?auto=compress&cs=tinysrgb&w=300"
      alt=""
      style="position:absolute; top:0; left:0; width:190px; height:190px; object-fit:cover; border-radius:0 0 60% 0; opacity:0.88; pointer-events:none;"
    />
    <img
      src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=300"
      alt=""
      style="position:absolute; top:0; right:0; width:220px; height:170px; object-fit:cover; border-radius:0 0 0 60%; opacity:0.88; pointer-events:none;"
    />

    <div style="max-width:1100px; margin:0 auto; padding:28px 32px 24px;">

      <!-- Eyebrow -->
      <div style="text-align:center; margin-bottom:8px;">
        <div style="display:inline-flex; align-items:center; gap:12px;">
          <span style="display:block; height:1.5px; width:52px; background:#8b6914;"></span>
          <p style="font-size:11px; font-weight:800; letter-spacing:3px; color:#8b6914; text-transform:uppercase; white-space:nowrap;">WHY CHOOSE DRKITCHEN?</p>
          <span style="display:block; height:1.5px; width:52px; background:#8b6914;"></span>
        </div>
      </div>

      <!-- Heading -->
      <div style="text-align:center; margin-bottom:6px;">
        <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:32px; font-weight:800; color:#1a1208; line-height:1.15; margin:0;">Not just spices.</h2>
        <h2 style="font-family:'Playfair Display',Georgia,serif; font-size:32px; font-weight:800; font-style:italic; color:#8b1e10; line-height:1.15; margin:0;">A promise in every grain.</h2>
      </div>
      <p style="text-align:center; color:#666; font-size:12px; max-width:500px; margin:0 auto 20px; line-height:1.65;">
        At DrKitchen, every spice goes through a journey of care, science and<br>tradition to deliver unmatched purity, aroma and flavor.
      </p>

      <!-- Features grid: left | center bowl with orbit | right -->
      <div style="display:grid; grid-template-columns:1fr 320px 1fr; align-items:center; gap:0; margin-bottom:20px;">

        <!-- Left features -->
        <div style="display:flex; flex-direction:column; gap:0; padding-right:16px;">
          <div v-for="f in leftFeatures" :key="f.title" style="display:flex; align-items:flex-start; gap:10px; padding:10px 0;">
            <div :style="{ width:'38px', height:'38px', borderRadius:'50%', border:'1.5px solid '+(f.iconColor||'#c8a96e')+'66', background:'#faf6ee', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:'0', boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }">
              <i :class="f.icon" :style="{ fontSize:'14px', color: f.iconColor || '#c8a96e' }"></i>
            </div>
            <div>
              <p style="font-weight:800; font-size:12.5px; color:#1a1208; margin:0 0 2px; font-family:'Playfair Display',Georgia,serif;">{{ f.title }}</p>
              <p style="font-size:11px; color:#666; line-height:1.55; margin:0 0 2px;">{{ f.desc }}</p>
              <p v-if="f.highlight" style="font-size:11px; font-weight:700; color:#8b1e10; margin:0;">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

        <!-- Center: bowl + orbit SVG -->
        <div style="position:relative; width:320px; height:320px; flex-shrink:0; margin:0 auto;">

          <!-- Orbit ring + dots + bent connector lines SVG -->
          <svg viewBox="0 0 320 320" width="320" height="320" style="position:absolute; top:0; left:0; z-index:1; pointer-events:none; overflow:visible;">
            <circle cx="160" cy="160" r="145" fill="none" stroke="#c8a96e" stroke-width="0.8" stroke-dasharray="3 5" opacity="0.5"/>
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

          <!-- Bowl image circle — draggable split -->
          <div
            ref="bowlRef"
            @mousedown="startDrag"
            @dragstart.prevent
            style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:280px; height:280px; border-radius:50%; overflow:hidden; border:6px solid #fff; box-shadow:0 12px 52px rgba(0,0,0,0.2); z-index:2; cursor:ew-resize; user-select:none; -webkit-user-select:none;"
          >
            <!-- Left image: ground/blended spice -->
            <img
              draggable="false"
              src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/images.jpeg"
              :style="{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', clipPath:`inset(0 ${100 - splitPct}% 0 0)`, userSelect:'none', pointerEvents:'none' }"
            />
            <!-- Right image: whole raw spices -->
            <img
              draggable="false"
              src="https://dresma-assets.s3.us-east-2.amazonaws.com/brandagent/download__1_.jpeg"
              :style="{ position:'absolute', top:0, left:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', clipPath:`inset(0 0 0 ${splitPct}%)`, userSelect:'none', pointerEvents:'none' }"
            />
            <!-- Draggable divider line -->
            <div :style="{ position:'absolute', top:0, left:splitPct+'%', transform:'translateX(-50%)', width:'2px', height:'100%', background:'rgba(255,255,255,0.85)', zIndex:3, pointerEvents:'none' }">
              <!-- Handle knob -->
              <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:28px; height:28px; border-radius:50%; background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.3); display:flex; align-items:center; justify-content:center;">
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 5h12M4 2L1 5l3 3M10 2l3 3-3 3" stroke="#888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right features -->
        <div style="display:flex; flex-direction:column; gap:0; padding-left:16px;">
          <div v-for="f in rightFeatures" :key="f.title" style="display:flex; align-items:flex-start; flex-direction:row-reverse; gap:10px; padding:10px 0;">
            <div :style="{ width:'38px', height:'38px', borderRadius:'50%', border:'1.5px solid '+(f.iconColor||'#c8a96e')+'66', background:'#faf6ee', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:'0', boxShadow:'0 2px 8px rgba(0,0,0,0.06)' }">
              <i :class="f.icon" :style="{ fontSize:'14px', color: f.iconColor || '#c8a96e' }"></i>
            </div>
            <div style="text-align:left;">
              <p style="font-weight:800; font-size:12.5px; color:#1a1208; margin:0 0 2px; font-family:'Playfair Display',Georgia,serif;">{{ f.title }}</p>
              <p style="font-size:11px; color:#666; line-height:1.55; margin:0 0 2px;">{{ f.desc }}</p>
              <p v-if="f.highlight" style="font-size:11px; font-weight:700; color:#8b1e10; margin:0;">{{ f.highlight }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Quality Difference Bar -->
      <div style="background:#1c2318; border-radius:12px; overflow:hidden; display:grid; grid-template-columns:150px 1fr 130px; min-height:90px;">

        <!-- Left text -->
        <div style="padding:14px 16px; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:10px; font-weight:600; color:#fff; line-height:1.4; margin:0 0 2px;">See the DrKitchen</p>
          <p style="font-family:'Playfair Display',Georgia,serif; font-size:14px; font-weight:800; color:#c8a96e; line-height:1.2; margin:0 0 6px;">Quality Difference</p>
          <p style="font-family:'Playfair Display',Georgia,serif; font-style:italic; font-size:10px; color:#999; line-height:1.5; margin:0;">Try it. Taste it.<br>You'll feel it. →</p>
        </div>

        <!-- Comparison circles -->
        <div style="padding:10px 10px; display:flex; align-items:center; justify-content:center; gap:3px; border-left:1px solid rgba(255,255,255,0.07);">

          <div style="display:flex; flex-direction:column; align-items:center;">
            <p style="font-size:9px; font-weight:700; color:#c8a96e; letter-spacing:1px; margin:0 0 5px; text-align:center;">DrKitchen</p>
            <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; border:2px solid #c8a96e;">
              <img src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=200" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <p style="font-size:10px; color:#ddd; margin:5px 0 0; text-align:center; line-height:1.4;">Bold color<br><span style="color:#999; font-size:9px;">Natural oils intact</span></p>
          </div>

          <div style="padding:0 4px; margin-top:-16px;">
            <span style="width:22px; height:22px; border-radius:50%; background:#2a3624; border:1px solid #4a5e40; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:800; color:#8aab7a;">VS</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center;">
            <p style="font-size:9px; font-weight:700; color:#666; letter-spacing:1px; margin:0 0 5px; text-align:center;">Other Spices</p>
            <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; border:2px solid #444; filter:saturate(0.35) brightness(0.8);">
              <img src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <p style="font-size:10px; color:#888; margin:5px 0 0; text-align:center; line-height:1.4;">Dull color<br><span style="font-size:9px;">Loses aroma</span></p>
          </div>

          <div style="padding:0 4px; margin-top:-16px;">
            <span style="width:22px; height:22px; border-radius:50%; background:#2a3624; border:1px solid #4a5e40; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:800; color:#8aab7a;">VS</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center;">
            <p style="font-size:9px; font-weight:700; color:#666; letter-spacing:1px; margin:0 0 5px; text-align:center;">Other Spices</p>
            <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; border:2px solid #444; filter:saturate(0.3) brightness(0.75);">
              <img src="https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=200" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <p style="font-size:10px; color:#888; margin:5px 0 0; text-align:center; line-height:1.4;">Added fillers<br><span style="font-size:9px;">Low purity</span></p>
          </div>

          <div style="padding:0 4px; margin-top:-16px;">
            <span style="width:22px; height:22px; border-radius:50%; background:#2a3624; border:1px solid #4a5e40; display:flex; align-items:center; justify-content:center; font-size:8px; font-weight:800; color:#8aab7a;">VS</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center;">
            <p style="font-size:9px; font-weight:700; color:#666; letter-spacing:1px; margin:0 0 5px; text-align:center;">Other Spices</p>
            <div style="width:48px; height:48px; border-radius:50%; overflow:hidden; border:2px solid #444; filter:saturate(0.3) brightness(0.7);">
              <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200" style="width:100%; height:100%; object-fit:cover;" />
            </div>
            <p style="font-size:10px; color:#888; margin:5px 0 0; text-align:center; line-height:1.4;">High moisture<br><span style="font-size:9px;">Short shelf life</span></p>
          </div>

        </div>

        <!-- Right food image -->
        <div style="overflow:hidden;">
          <img
            src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400"
            style="width:100%; height:100%; object-fit:cover; opacity:0.8;"
          />
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const splitPct = ref(50)
const bowlRef = ref<HTMLElement | null>(null)
let dragging = false

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

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', stopDrag)
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
</script>
