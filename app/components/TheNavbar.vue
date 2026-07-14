<template>
  <header class="sticky top-0 z-50">
    <!-- Top announcement bar -->
    <div class="bg-[#1e3a5f] text-white text-[10px] sm:text-[11px] md:text-[12px] py-1.5 sm:py-2 md:py-[7px]">
      <div class="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 flex items-center justify-between gap-2">
        <div class="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 overflow-x-auto">
          <a href="tel:+919876543210" class="flex items-center gap-1.5 hover:text-brand-gold transition-colors whitespace-nowrap flex-shrink-0">
            <i class="fas fa-phone-alt text-[8px] sm:text-[9px] md:text-[10px]"></i>
            <span class="hidden sm:inline">+91 7303269330</span>
            <span class="sm:hidden">+91 7303269330</span>
          </a>
          <span class="text-white/30 hidden sm:inline">|</span>
          <a href="mailto:info@drkitchen.com" class="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors whitespace-nowrap">
            <i class="fas fa-envelope text-[8px] md:text-[10px]"></i>
            <span class="hidden md:inline">info@drkitchen.com</span>
          </a>
        </div>
        <div class="flex items-center gap-2 sm:gap-3">
          <span class="text-white/60 text-[10px] sm:text-[11px] md:text-[12px] hidden sm:inline">Follow:</span>
          <a href="#" aria-label="Facebook" class="hover:text-brand-gold transition-colors"><i class="fab fa-facebook-f text-[9px] sm:text-[10px] md:text-[11px]"></i></a>
          <a href="#" aria-label="Instagram" class="hover:text-brand-gold transition-colors"><i class="fab fa-instagram text-[9px] sm:text-[10px] md:text-[11px]"></i></a>
          <a href="#" aria-label="LinkedIn" class="hover:text-brand-gold transition-colors"><i class="fab fa-linkedin-in text-[9px] sm:text-[10px] md:text-[11px]"></i></a>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
      <div class="flex items-center h-16 sm:h-20 md:h-24 lg:h-[96px]">

        <!-- Mobile nav toggle — extreme left corner on mobile -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden flex-shrink-0 w-10 sm:w-12 h-full flex items-center justify-center bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          aria-label="Open menu"
        >
          <i class="fas text-sm sm:text-base" :class="mobileOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>

        <!-- Categories hamburger — extreme left corner on desktop -->
        <button
          @click="catOpen = !catOpen"
          class="hidden lg:flex flex-shrink-0 w-[44px] xl:w-[52px] h-full items-center justify-center bg-brand-red text-white hover:bg-brand-red-dark transition-colors"
          aria-label="Browse categories"
        >
          <i class="fas text-lg" :class="catOpen ? 'fa-times' : 'fa-bars'"></i>
        </button>

        <!-- Rest of nav inside max-width container -->
        <div class="flex-1 min-w-0">
          <div class="max-w-[1400px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex items-center gap-2 sm:gap-3 lg:gap-6 h-16 sm:h-20 md:h-24 lg:h-[96px]">

            <!-- Logo -->
            <a href="#" class="flex-shrink-0">
              <img
                src="https://plain-apac-prod-public.komododecks.com/202606/20/PoBvjgAoMQHRPAglTlSz/image.png"
                alt="DrKitchen logo"
                class="h-12 sm:h-14 md:h-16 lg:h-[88px] w-auto object-contain"
              />
            </a>

            <!-- Nav links -->
            <ul class="hidden lg:flex items-center flex-1 justify-center gap-0">
              <li v-for="link in navLinks" :key="link.label">
                <NuxtLink
                  :to="link.href"
                  class="block px-2 md:px-3 lg:px-[11px] py-1 md:py-1.5 text-sm md:text-[15px] font-medium leading-snug text-center transition-colors"
                  :class="route.path === link.href
                    ? 'text-brand-red border-b-2 border-brand-red'
                    : 'text-gray-700 hover:text-brand-red'"
                >
                  {{ link.label }}
                  <i v-if="link.dropdown" class="fas fa-chevron-down text-[7px] sm:text-[8px] md:text-[9px] ml-0.5 opacity-60"></i>
                </NuxtLink>
              </li>
            </ul>

            <!-- Search with autocomplete -->
            <div class="hidden lg:flex items-center flex-shrink-0 ml-auto relative" ref="searchWrapRef">
              <div class="flex border border-gray-200 rounded-[3px] overflow-hidden">
                <input
                  v-model="searchQuery"
                  @input="onSearchInput"
                  @keydown.enter="goToSearch"
                  @keydown.escape="closeDropdown"
                  type="text"
                  placeholder="Search spices..."
                  class="px-2 md:px-3 py-1.5 md:py-[7px] text-[12px] md:text-[13px] w-36 md:w-[200px] outline-none text-gray-600 placeholder-gray-400"
                  autocomplete="off"
                />
                <button @click="goToSearch" class="bg-brand-red text-white px-2 md:px-3 flex items-center justify-center hover:bg-brand-red-dark transition-colors">
                  <i class="fas fa-search text-[10px] md:text-[12px]"></i>
                </button>
              </div>

              <!-- Autocomplete dropdown -->
              <Transition
                enter-active-class="transition-all duration-150 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-100 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <div
                  v-if="searchResults.length > 0"
                  class="absolute top-full right-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-[0_8px_28px_rgba(0,0,0,0.14)] z-50 overflow-hidden"
                >
                  <NuxtLink
                    v-for="product in searchResults"
                    :key="product.slug"
                    :to="'/products/' + product.slug"
                    @click="closeDropdown"
                    class="flex items-center gap-3 px-3 py-2.5 hover:bg-[#FFF8F2] transition-colors no-underline group"
                  >
                    <!-- Product image -->
                    <div class="w-10 h-10 rounded-md bg-[var(--clr-card)] flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-100">
                      <img :src="product.image" :alt="product.name" class="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <!-- Text -->
                    <div class="min-w-0">
                      <p class="text-[13px] font-semibold text-gray-800 m-0 leading-snug group-hover:text-brand-red transition-colors">{{ product.name }}</p>
                      <p class="text-[10px] text-gray-400 m-0 leading-snug">{{ product.hindi }}</p>
                    </div>
                    <!-- Arrow -->
                    <i class="fas fa-chevron-right text-[9px] text-gray-300 ml-auto group-hover:text-brand-red transition-colors flex-shrink-0"></i>
                  </NuxtLink>
                </div>
              </Transition>
            </div>

          </div>
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
        <div v-show="mobileOpen" class="lg:hidden border-t border-gray-100 bg-white px-3 sm:px-4 py-2 sm:py-3 space-y-1">
          <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.href"
             @click="mobileOpen = false"
             class="block px-3 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-lg hover:bg-gray-50"
             :class="route.path === link.href ? 'text-brand-red' : 'text-gray-700'"
          >{{ link.label }}</NuxtLink>
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
        class="absolute left-0 top-full w-64 sm:w-72 md:w-80 bg-white z-40"
        style="box-shadow: 0 8px 32px rgba(0,0,0,0.18); border: 1.5px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;"
      >

        <div class="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100 bg-gray-50">
          <p class="font-bold text-[11px] sm:text-[12px] uppercase tracking-widest text-gray-500">Categories</p>
          <button @click="catOpen = false" class="text-gray-400 hover:text-gray-600 transition-colors">
            <i class="fas fa-times text-sm md:text-[13px]"></i>
          </button>
        </div>

          <div class="flex flex-col">
            <a
              v-for="cat in categories"
              :key="cat.name"
              href="#"
              class="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-100 hover:bg-brand-red/[0.04] transition-colors duration-150 group"
              @click="catOpen = false"
            >
              <div class="w-8 sm:w-10 h-8 sm:h-10 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="cat.image" :alt="cat.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-bold text-[12px] sm:text-[13px] text-gray-900 leading-tight">{{ cat.name }}</p>
                <p class="text-[10px] sm:text-[11px] text-gray-400 mt-0.5">{{ cat.sub }}</p>
              </div>
              <i class="fas fa-chevron-right text-[9px] sm:text-[10px] text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"></i>
            </a>

            <!-- Special offer row -->
            <a
              href="#"
              class="flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-brand-red/[0.06] hover:bg-brand-red/10 transition-colors duration-150 group"
              @click="catOpen = false"
            >
              <div class="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-brand-red flex items-center justify-center flex-shrink-0">
                <i class="fas fa-tag text-white text-xs sm:text-[13px]"></i>
              </div>
              <div class="flex-1">
                <p class="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-brand-red/70 mb-0.5">Save 20%</p>
                <p class="font-bold text-[12px] sm:text-[13px] text-gray-900">Special Offer</p>
              </div>
              <i class="fas fa-chevron-right text-[9px] sm:text-[10px] text-gray-300 group-hover:text-brand-red transition-colors flex-shrink-0"></i>
            </a>
          </div>
      </div>
    </Transition>

  </header>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts'

const route = useRoute()
const router = useRouter()
const mobileOpen = ref(false)
const catOpen = ref(false)

// Search autocomplete
const searchQuery = ref('')
const searchResults = ref<Array<{ slug: string; name: string; hindi: string; image: string }>>([])
const searchWrapRef = ref<HTMLElement | null>(null)

const { getSearchProducts } = useProducts()
const allProducts = getSearchProducts()

function onSearchInput() {
  const q = searchQuery.value.trim().toLowerCase()
  if (q.length < 2) {
    searchResults.value = []
    return
  }
  searchResults.value = allProducts
    .filter(p => p.name.toLowerCase().includes(q) || p.hindi.includes(q) || p.tag.toLowerCase().includes(q))
    .slice(0, 6)
    .map(p => ({ slug: p.slug, name: p.name, hindi: p.hindi, image: p.image }))
}

function goToSearch() {
  const q = searchQuery.value.trim()
  if (!q) return
  closeDropdown()
  router.push('/our-products?search=' + encodeURIComponent(q))
}

function closeDropdown() {
  searchResults.value = []
}

// Close dropdown on outside click
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (searchWrapRef.value && !searchWrapRef.value.contains(e.target as Node)) {
      closeDropdown()
    }
  })
})

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

