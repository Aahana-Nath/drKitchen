<template>
  <footer class="bg-[#1e3a5f] text-white/75">

    <!-- Main footer content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">

        <!-- Brand column -->
        <div class="sm:col-span-2">
          <!-- Logo -->
          <div class="mb-4">
            <img
              src="https://plain-apac-prod-public.komododecks.com/202606/20/PoBvjgAoMQHRPAglTlSz/image.png"
              alt="DrKitchen"
              class="h-20 lg:h-24 w-auto object-contain"
            />
          </div>

          <p class="text-white/55 text-xs lg:text-[13.5px] leading-relaxed mb-5">
            DrKitchen proudly presents India's most advanced class of spices — where natural oils are preserved, aroma remains untouched, and authenticity is non-negotiable. This is not seasoning. This is science with soul.
          </p>

          <!-- Office details -->
          <div class="space-y-1.5 mb-5">
            <p class="text-white/40 text-[11px] lg:text-[11.5px]"><span class="font-semibold text-white/60">Registered Office:</span> 958 P (LGF), Sector 47, Gurugram, Haryana – 122018</p>
            <p class="text-white/40 text-[11px] lg:text-[11.5px]"><span class="font-semibold text-white/60">Corporate Office:</span> 318, Vardhman Mall, Dwarka, Sector 19, New Delhi – 110075</p>
            <p class="text-white/40 text-[11px] lg:text-[11.5px]"><span class="font-semibold text-white/60">Branch Office:</span> Vasco, Goa</p>
            <p class="text-white/40 text-[11px] lg:text-[11.5px]"><span class="font-semibold text-white/60">CIN:</span> U46101HR2025PTC137451 &nbsp;|&nbsp; <span class="font-semibold text-white/60">FSSAI:</span> 10826999000207</p>
          </div>

          <!-- Social icons -->
          <div class="flex gap-2.5 mb-5">
            <a
              v-for="s in socials"
              :key="s.icon"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
              :style="{ background: s.bg }"
            >
              <i :class="s.icon + ' text-sm text-white'"></i>
            </a>
          </div>

          <!-- FSSAI badge -->
          <div class="flex items-center gap-3">
            <div class="rounded-sm overflow-hidden border-2 border-[#1a6b2f] bg-white flex flex-col items-center min-w-[52px]">
              <div class="bg-[#1a6b2f] w-full text-center px-1.5 py-0.5">
                <p class="text-[10px] font-black tracking-widest text-white m-0">FSSAI</p>
              </div>
              <p class="text-[8px] font-semibold text-[#1a6b2f] px-1 py-0.5 m-0">Licensed</p>
            </div>
            <div class="bg-white/10 rounded-sm px-3 py-1.5 text-center">
              <p class="text-[8px] text-white/50 tracking-widest uppercase m-0">ISO Certified</p>
              <p class="text-[11px] font-bold text-brand-gold m-0">9001:2015</p>
            </div>
          </div>
        </div>

        <!-- General Info -->
        <div>
          <h4 class="font-bold text-xs lg:text-[13px] tracking-widest uppercase mb-4 lg:mb-5 text-white/80">General Info</h4>
          <ul class="space-y-2.5 lg:space-y-3">
            <li class="flex items-start gap-2.5">
              <i class="fas fa-envelope text-brand-gold text-[11px] mt-1 shrink-0"></i>
              <a href="mailto:info@drkitchen.com" class="text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">info@drkitchen.com</a>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fas fa-phone-alt text-brand-gold text-[11px] mt-1 shrink-0"></i>
              <a href="tel:+917303269330" class="text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">+91 7303269330</a>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fas fa-globe text-brand-gold text-[11px] mt-1 shrink-0"></i>
              <a href="#" class="text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">www.drkitchen.com</a>
            </li>
            <li class="flex items-start gap-2.5">
              <i class="fab fa-whatsapp text-brand-gold text-[11px] mt-1 shrink-0"></i>
              <a href="https://wa.me/917303269330" target="_blank" rel="noopener noreferrer" class="text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">Chat on WhatsApp</a>
            </li>
          </ul>
        </div>

        <!-- My Account -->
        <div>
          <h4 class="font-bold text-xs lg:text-[13px] tracking-widest uppercase mb-4 lg:mb-5 text-white/80">My Account</h4>
          <ul class="space-y-2.5 lg:space-y-3">
            <li v-for="link in accountLinks" :key="link">
              <a href="#" class="flex items-center gap-2 text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">
                <span class="w-1 h-1 rounded-full bg-brand-gold/50 shrink-0"></span>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="font-bold text-xs lg:text-[13px] tracking-widest uppercase mb-4 lg:mb-5 text-white/80">Products</h4>
          <ul class="space-y-2.5 lg:space-y-3">
            <li v-for="link in productLinks" :key="link">
              <a href="#" class="flex items-center gap-2 text-white/55 hover:text-white text-xs lg:text-[13px] transition-colors">
                <span class="w-1 h-1 rounded-full bg-brand-gold/50 shrink-0"></span>
                {{ link }}
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-white/40 text-[11px] lg:text-[12.5px] m-0">© 2026 DrKitchen.com. All Rights Reserved.</p>
        <div class="flex flex-wrap justify-center gap-3 lg:gap-5 items-center">
          <a href="#" class="text-white/40 hover:text-white text-[11px] lg:text-[12.5px] transition-colors">Privacy Policy</a>
          <a href="#" class="text-white/40 hover:text-white text-[11px] lg:text-[12.5px] transition-colors">Terms of Service</a>
          <a href="#" class="text-white/40 hover:text-white text-[11px] lg:text-[12.5px] transition-colors">Shipping Policy</a>
          <a href="#" class="text-white/40 hover:text-white text-[11px] lg:text-[12.5px] transition-colors">Refund Policy</a>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
const socials = [
  { icon: 'fab fa-facebook-f', label: 'Facebook',  href: 'https://www.facebook.com/drkitchen.india/',        bg: '#1877F2', hover: '#0d6ae0' },
  { icon: 'fab fa-instagram',  label: 'Instagram', href: 'https://www.instagram.com/drkitchen.suradhuni/', bg: 'linear-gradient(135deg,#f58529,#dd2a7b,#8134af,#515bd4)', hover: 'linear-gradient(135deg,#e0741f,#c4206a,#6f2a99,#3d48c0)' },
  { icon: 'fab fa-x-twitter',  label: 'X / Twitter', href: 'https://x.com/drkitchenindia',                   bg: '#000000', hover: '#222222' },
  { icon: 'fab fa-youtube',    label: 'YouTube',   href: 'https://www.youtube.com/@DrKitchenindia',            bg: '#FF0000', hover: '#cc0000' },
]

const accountLinks = ['Home', 'About Us', 'Our Shop', 'Shop Detail', 'Shopping Cart', 'Checkout', 'Contact Us']
const productLinks = ['Whole Spices', 'Ground Spices', 'Blended Masalas', 'Herbs & Seeds', 'Dry Herbs', 'Gift Sets']
</script>
