<template>
  <div>

    <!-- Hero Section -->
    <section class="relative overflow-hidden h-64 md:h-96 lg:h-[480px]">
      <img
        src="https://res.cloudinary.com/dvtf1ckaf/image/upload/f_auto,q_auto/993a91e0-314d-4eca-ad26-069aa1877c2f_kal92h"
        alt="Contact DrKitchen"
        class="w-full h-full object-cover object-[center_40%]"
      />
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-r from-[rgba(31,27,22,0.85)] via-[rgba(31,27,22,0.35)] to-transparent"></div>

      <!-- Hero text -->
      <div class="absolute inset-0 flex items-center px-5 md:px-12 lg:px-20">
        <div>
          <div class="section-label mb-4 lg:mb-5 text-white/75">Get In Touch</div>
          <h1 class="font-display text-3xl md:text-5xl lg:text-[68px] font-semibold text-white leading-none mb-4 lg:mb-5">
            We'd love to<br>
            <em class="italic text-[var(--clr-gold-lt)]">hear</em> from you
          </h1>
          <div class="flex items-center gap-2.5 mb-4 lg:mb-5">
            <span class="h-px w-9 bg-[var(--clr-gold)] opacity-60 block"></span>
            <span class="h-px w-2 bg-[var(--clr-gold)] opacity-40 block"></span>
          </div>
          <p class="font-body text-sm lg:text-base text-white/70 max-w-md leading-relaxed">
            Whether you have a question, feedback, or business enquiry,<br class="hidden md:block">our team is here to help you with the freshest support.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-[var(--clr-bg)] py-10 md:py-14 lg:py-16">

      <div class="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        <!-- Left: Contact Info -->
        <div>
          <div class="section-label mb-4">Reach Us</div>
          <h2 class="font-display text-2xl md:text-3xl lg:text-[42px] font-semibold text-[#1a1a1a] mb-6 lg:mb-8 leading-tight">Get In Touch</h2>

          <div class="flex flex-col gap-5">
            <div v-for="item in contactItems" :key="item.label" class="flex items-start gap-4">
              <div class="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center shrink-0 bg-[#8B1A1A]">
                <i :class="item.icon" class="text-sm text-white"></i>
              </div>
              <div>
                <p class="font-body text-xs lg:text-sm font-semibold tracking-wider uppercase text-[#1a1a1a] mb-1.5">{{ item.label }}</p>
                <p class="font-body text-sm lg:text-base text-[#1a1a1a] leading-relaxed m-0" v-html="item.value"></p>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="mt-8 lg:mt-10 p-5 lg:p-6 bg-[var(--clr-card)] rounded-2xl border border-[rgba(181,138,58,0.12)]">
            <h3 class="font-display text-xl lg:text-2xl font-semibold text-[#1a1a1a] mb-4">Business Hours</h3>
            <div class="flex flex-col gap-3">
              <div class="flex justify-between items-center pb-3 border-b border-[rgba(181,138,58,0.1)]">
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-full bg-[#8B1A1A] flex items-center justify-center">
                    <i class="fas fa-clock text-[11px] text-white"></i>
                  </div>
                  <span class="font-body text-sm lg:text-[15px] font-semibold text-[#1a1a1a]">Monday – Saturday</span>
                </div>
                <span class="font-body text-sm lg:text-[15px] text-[#1a1a1a]">9:00 AM – 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-2.5">
                  <div class="w-7 h-7 rounded-full bg-[#8B1A1A] flex items-center justify-center">
                    <i class="fas fa-calendar-times text-[11px] text-white"></i>
                  </div>
                  <span class="font-body text-sm lg:text-[15px] font-semibold text-gray-500">Sunday</span>
                </div>
                <span class="font-body text-sm lg:text-[15px] text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Map + Form stacked -->
        <div class="flex flex-col gap-6 lg:gap-8">

          <!-- Map -->
          <div class="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-[rgba(181,138,58,0.1)]">
            <div class="px-5 pt-5 lg:px-6 lg:pt-5 bg-[var(--clr-card)]">
              <h3 class="font-display text-lg lg:text-xl font-semibold text-[var(--clr-dark)] mb-4">Find Us Here</h3>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7!2d77.07!3d28.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e5b46a0001%3A0x1!2sSector+47%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="200"
              class="block border-none"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <!-- Contact Form -->
          <div class="bg-[var(--clr-card)] rounded-2xl p-6 lg:p-7 shadow-[var(--shadow-card)] border border-[rgba(181,138,58,0.1)]">
            <h3 class="font-display text-xl lg:text-2xl font-semibold text-[var(--clr-dark)] mb-1.5">Send Us a Message</h3>
            <p class="font-body text-xs lg:text-[13px] text-[var(--clr-muted)] mb-5 lg:mb-6">We'll get back to you within 24 hours.</p>

            <form @submit.prevent="submitForm" class="flex flex-col gap-3 lg:gap-3.5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-3.5">
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="Your Name"
                  required
                  class="w-full px-3.5 py-2.5 lg:py-3 border border-[rgba(181,138,58,0.25)] rounded-lg font-body text-sm text-[var(--clr-dark)] bg-[var(--clr-bg)] outline-none transition-colors focus:border-[var(--clr-gold)]"
                />
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="Your Email"
                  required
                  class="w-full px-3.5 py-2.5 lg:py-3 border border-[rgba(181,138,58,0.25)] rounded-lg font-body text-sm text-[var(--clr-dark)] bg-[var(--clr-bg)] outline-none transition-colors focus:border-[var(--clr-gold)]"
                />
              </div>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                class="w-full px-3.5 py-2.5 lg:py-3 border border-[rgba(181,138,58,0.25)] rounded-lg font-body text-sm text-[var(--clr-dark)] bg-[var(--clr-bg)] outline-none transition-colors focus:border-[var(--clr-gold)]"
              />
              <textarea
                v-model="form.message"
                placeholder="Your Message"
                rows="4"
                required
                class="w-full px-3.5 py-2.5 lg:py-3 border border-[rgba(181,138,58,0.25)] rounded-lg font-body text-sm text-[var(--clr-dark)] bg-[var(--clr-bg)] outline-none transition-colors resize-y focus:border-[var(--clr-gold)]"
              ></textarea>
              <button type="submit" class="dk-btn self-start">
                Send Message <i class="fas fa-arrow-right text-[11px]"></i>
              </button>
            </form>

            <!-- Success message -->
            <div v-if="submitted" class="mt-4 p-3.5 bg-[rgba(65,84,59,0.08)] border border-[rgba(65,84,59,0.2)] rounded-lg flex items-center gap-2.5">
              <i class="fas fa-check-circle text-[var(--clr-green)] text-base"></i>
              <p class="font-body text-sm text-[var(--clr-green)] font-medium m-0">Thank you! We'll be in touch soon.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Bottom Features Bar -->
    <section class="bg-[var(--clr-dark)] py-8 lg:py-10">
      <div class="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        <div v-for="feat in bottomFeatures" :key="feat.label" class="flex items-center gap-3.5">
          <div class="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[rgba(181,138,58,0.3)] flex items-center justify-center shrink-0">
            <i :class="feat.icon" class="text-base text-[var(--clr-gold)]"></i>
          </div>
          <div>
            <p class="font-body text-xs lg:text-[13px] font-semibold text-white mb-0.5">{{ feat.label }}</p>
            <p class="font-body text-[11px] lg:text-xs text-white/45 m-0">{{ feat.sub }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

function submitForm() {
  submitted.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const contactItems = [
  {
    icon: 'fas fa-building',
    label: 'Registered Office',
    value: '958 P (LGF), Sector 47, Gurugram, Haryana – 122018',
  },
  {
    icon: 'fas fa-briefcase',
    label: 'Corporate Office',
    value: '318, Vardhman Mall, Dwarka, Sector 19, Pocket-1, New Delhi – 110075',
  },
  {
    icon: 'fas fa-map-marker-alt',
    label: 'Branch Office',
    value: 'Vasco, Goa',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: '<a href="mailto:info@drkitchen.com" style="color:var(--clr-accent); text-decoration:none;">info@drkitchen.com</a>',
  },
  {
    icon: 'fas fa-phone-alt',
    label: 'Phone',
    value: '<a href="tel:+917303269330" style="color:var(--clr-accent); text-decoration:none;">+91 7303269330</a>',
  },
  {
    icon: 'fas fa-globe',
    label: 'Website',
    value: '<a href="https://www.drkitchen.com" style="color:var(--clr-accent); text-decoration:none;">www.drkitchen.com</a>',
  },
  {
    icon: 'fas fa-id-card',
    label: 'CIN',
    value: 'U46101HR2025PTC137451',
  },
  {
    icon: 'fas fa-shield-alt',
    label: 'FSSAI License Number',
    value: '10826999000207',
  },
]

const bottomFeatures = [
  { icon: 'fas fa-leaf',     label: 'Pure & Natural',         sub: 'No preservatives, no artificial additives.' },
  { icon: 'fas fa-flask',    label: 'Scientifically Processed', sub: 'Modern technology to preserve natural oils.' },
  { icon: 'fas fa-award',    label: 'Premium Quality',        sub: 'Carefully sourced, rigorously tested.' },
  { icon: 'fas fa-seedling', label: 'Sourced with Care',      sub: 'From certified farms across India.' },
]
</script>
