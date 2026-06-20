<template>
  <section class="py-20 lg:py-28 bg-brand-beige">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-14">
        <p class="text-brand-gold text-[11px] font-black tracking-[4px] uppercase mb-3">Customer Stories</p>
        <h2 class="font-serif text-4xl lg:text-5xl font-black text-gray-900">What Our Customers Say</h2>
        <p class="text-gray-500 text-base mt-4 max-w-xl mx-auto">
          Over 10,000 happy kitchens across India trust DrKitchen every day.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="t in testimonials"
          :key="t.name"
          class="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
        >
          <!-- Quote icon -->
          <div class="text-brand-red/15 font-serif text-7xl font-black leading-none mb-2 select-none">"</div>

          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <i v-for="n in 5" :key="n" class="fas fa-star text-brand-gold text-sm"></i>
          </div>

          <!-- Review text -->
          <p class="text-gray-600 text-[14.5px] leading-relaxed flex-1 italic">
            "{{ t.review }}"
          </p>

          <!-- Divider -->
          <div class="h-px bg-gray-100 my-6"></div>

          <!-- Customer -->
          <div class="flex items-center gap-3">
            <img
              :src="t.image"
              :alt="t.name"
              class="w-12 h-12 rounded-full object-cover ring-2 ring-brand-gold/30"
            />
            <div>
              <p class="font-bold text-[14px] text-gray-900">{{ t.name }}</p>
              <p class="text-[12px] text-gray-400">{{ t.location }}</p>
            </div>
            <div class="ml-auto">
              <span class="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full">
                <i class="fas fa-check-circle text-[10px]"></i> Verified
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name:     'Priya Sharma',
    location: 'Delhi, India',
    review:   'DrKitchen spices have completely transformed my cooking. The turmeric is so fresh and aromatic — nothing like the supermarket brands. My family noticed the difference immediately.',
    image:    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
  {
    name:     'Rahul Mehta',
    location: 'Mumbai, India',
    review:   'The garam masala is absolutely divine. I can literally smell the difference the moment I open the packet. This is what authentic Indian cooking tastes like.',
    image:    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    name:     'Ananya Krishnan',
    location: 'Bangalore, India',
    review:   "I switched to DrKitchen 6 months ago and haven't looked back. Quality is consistent across every order and the delivery is always on time. Highly recommended!",
    image:    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
  },
]
</script>
