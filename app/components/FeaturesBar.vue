<template>
  <section class="features-bar">
    <div class="features-bar__inner">
      <div
        v-for="(feat, i) in features"
        :key="feat.label"
        class="feature"
      >
        <div class="feature__icon">
          <i :class="feat.icon"></i>
        </div>
        <div class="feature__text">
          <p class="feature__label">{{ feat.label }}</p>
          <p class="feature__sub">{{ feat.sub }}</p>
        </div>
        <div v-if="i < features.length - 1" class="feature__sep"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  { icon: 'fas fa-truck', label: 'Fast & Reliable\nDelivery', sub: 'On time, everytime' },
  { icon: 'fas fa-shield-alt', label: 'Hygienically\nPacked', sub: 'Safe & Secure' },
  { icon: 'fas fa-medal', label: 'Trusted by\nThousands', sub: 'Quality you can trust' },
  { icon: 'fas fa-headset', label: 'Customer Support\n24/7', sub: 'We are here to help' },
]
</script>

<style scoped>
.features-bar {
  background: #1e3a5f;
  padding: 24px 0;
}

.features-bar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.feature {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  flex: 1;
  justify-content: center;
}

.feature__icon {
  width: 48px;
  height: 48px;
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  flex-shrink: 0;
}

.feature__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.feature__label {
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
  white-space: pre-line;
  line-height: 1.3;
}

.feature__sub {
  font-size: 11.5px;
  color: rgba(255,255,255,0.65);
}

.feature__sep {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.2);
}
</style>
