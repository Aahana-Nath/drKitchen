<template>
  <header class="sticky top-0 z-50">
    <!-- Top announcement bar -->
    <div class="bg-[#1e3a5f] text-white text-[12px] py-[7px]">
      <div class="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <a href="tel:+919876543210" class="flex items-center gap-2 hover:text-brand-gold transition-colors">
            <i class="fas fa-phone-alt text-[10px]"></i>
            +91 98765 43210
          </a>
          <span class="text-white/30">|</span>
          <a href="mailto:info@drkitchen.com" class="hidden sm:flex items-center gap-2 hover:text-brand-gold transition-colors">
            <i class="fas fa-envelope text-[10px]"></i>
            info@drkitchen.com
          </a>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-white/60 text-[12px]">Follow us:</span>
          <a href="#" aria-label="Facebook" class="hover:text-brand-gold transition-colors"><i class="fab fa-facebook-f text-[11px]"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-brand-gold transition-colors"><i class="fab fa-instagram text-[11px]"></i></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-brand-gold transition-colors"><i class="fab fa-linkedin-in text-[11px]"></i></a>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div class="max-w-[1400px] mx-auto px-0 sm:px-0">
        <div class="flex items-center h-[96px] gap-6">

          <!-- Categories hamburger button — flush to left edge -->
          <button
            @click="catOpen = !catOpen"
            class="flex-shrink-0 w-9 h-full flex items-center justify-center bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
            aria-label="Browse categories"
          >
            <i class="fas text-[15px]" :class="catOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>

          <!-- Logo -->
          <a href="#" class="flex-shrink-0 pl-4">
            <img
              src="https://plain-apac-prod-public.komododecks.com/202606/20/PoBvjgAoMQHRPAglTlSz/image.png"
              alt="DrKitchen logo"
              class="h-[88px] w-auto object-contain"
            />
          </a>

          <!-- Nav links -->
          <ul class="hidden lg:flex items-center flex-1 justify-center gap-0">
            <li v-for="link in navLinks" :key="link.label">
              <NuxtLink
                :to="link.href"
                class="block px-[11px] py-1.5 text-[15px] font-medium leading-snug text-center transition-colors"
                :class="route.path === link.href
                  ? 'text-brand-red border-b-2 border-brand-red'
                  : 'text-gray-700 hover:text-brand-red'"
              >
                {{ link.label }}
                <i v-if="link.dropdown" class="fas fa-chevron-down text-[9px] ml-0.5 opacity-60"></i>
              </NuxtLink>
            </li>
          </ul>

          <!-- Search + Cart -->
          <div class="hidden lg:flex items-center gap-2.5 flex-shrink-0 ml-auto xl:ml-0 pr-6">
            <div class="flex border border-gray-200 rounded-[3px] overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                class="px-3 py-[7px] text-[13px] w-[165px] outline-none text-gray-600 placeholder-gray-400"
              />
              <button class="bg-brand-red text-white px-3 flex items-center justify-center hover:bg-brand-red-dark transition-colors">
                <i class="fas fa-search text-[12px]"></i>
              </button>
            </div>
            <button class="relative text-gray-600 hover:text-brand-red transition-colors border border-gray-200 rounded-[3px] w-9 h-9 flex items-center justify-center">
              <i class="fas fa-shopping-cart text-[15px]"></i>
              <span class="absolute -top-1.5 -right-1.5 bg-brand-red text-white text-[9px] font-black w-[16px] h-[16px] rounded-full flex items-center justify-center leading-none">0</span>
            </button>
          </div>

          <!-- Mobile nav toggle -->
          <button @click="mobileOpen = !mobileOpen" class="lg:hidden ml-auto p-2 text-gray-700">
            <i class="fas text-lg" :class="mobileOpen ? 'fa-times' : 'fa-bars'"></i>
          </button>
        </div>
      </div>

      <!-- Mobile nav menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-show="mobileOpen" class="lg:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-1">
          <a v-for="link in navLinks" :key="link.label" href="#"
             class="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-gray-50"
             :class="route.path === link.href ? 'text-brand-red' : 'text-gray-700'"
          >{{ link.label }}</a>
        </div>
      </Transition>
    </nav>

    <!-- Backdrop: separate from dropdown so blur doesn't affect panel edges -->
    <Transition enter-active-class="transition-opacity duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition-opacity duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="catOpen" class="fixed inset-0 z-30 backdrop-blur-sm bg-white/10" @click="catOpen = false"></div>
    </Transition>

    <!-- Categories slide-down drawer -->
    <Transition
      enter-active-class="transition-all duration-250 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-180 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-show="catOpen"
        class="absolute left-0 top-full w-[280px] bg-white z-40"
        style="box-shadow: 0 8px 32px rgba(0,0,0,0.18); border: 1.5px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;"
      >

        <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
          <p class="font-bold text-[12px] uppercase tracking-widest text-gray-500">Categories</p>
          <button @click="catOpen = false" class="text-gray-400 hover:text-gray-600 transition-colors">
            <i class="fas fa-times text-[13px]"></i>
          </button>
        </div>

          <div class="flex flex-col">
            <a
              v-for="cat in categories"
              :key="cat.name"
              href="#"
              class="flex items-center gap-4 px-4 py-3 border-b border-gray-100 hover:bg-brand-red/[0.04] transition-colors duration-150 group"
              @click="catOpen = false"
            >
              <div class="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-[13px] text-gray-900 leading-tight">{{ cat.name }}</p>
                <p class="text-[11px] text-gray-400 mt-0.5">{{ cat.sub }}</p>
              </div>
              <i class="fas fa-chevron-right text-[10px] text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"></i>
            </a>

            <!-- Special offer row -->
            <a
              href="#"
              class="flex items-center gap-4 px-4 py-3 bg-brand-red/[0.06] hover:bg-brand-red/10 transition-colors duration-150 group"
              @click="catOpen = false"
            >
              <div class="w-10 h-10 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                <i class="fas fa-tag text-white text-[13px]"></i>
              </div>
              <div class="flex-1">
                <p class="text-[9px] font-black uppercase tracking-widest text-brand-red/70 mb-0.5">Save 20%</p>
                <p class="font-bold text-[13px] text-gray-900">Special Offer</p>
              </div>
              <i class="fas fa-chevron-right text-[10px] text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"></i>
            </a>
          </div>
      </div>
    </Transition>

  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const mobileOpen = ref(false)
const catOpen = ref(false)

const navLinks = [
  { label: 'Home',           href: '/',         dropdown: false },
  { label: 'About Us',       href: '/about-us',  dropdown: false },
  { label: "Founder's Note", href: '/about',     dropdown: false },
  { label: 'Our Products',   href: '/our-products', dropdown: true  },
  { label: 'Contact Us',     href: '/contact-us', dropdown: false },
]

const categories = [
  { name: 'Whole Spices',    sub: 'Bold & Natural',       image: 'https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Ground Spices',   sub: 'Finely Milled',        image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Blended Masalas', sub: 'Perfectly Balanced',   image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Herbs & Seeds',   sub: 'Pure & Natural',       image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Dried Herbs',     sub: 'Aroma Locked',         image: 'https://images.pexels.com/photos/793765/pexels-photo-793765.jpeg?auto=compress&cs=tinysrgb&w=200' },
]
</script>

