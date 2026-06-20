<template>
  <section class="category-section">
    <div class="category-section__inner">
      <!-- Section Heading -->
      <div class="category-section__heading">
        <p class="category-section__script">Shop by</p>
        <h2 class="category-section__title">CATEGORY</h2>
        <div class="category-section__leaf">
          <svg viewBox="0 0 60 20" width="60" height="20" fill="none">
            <path d="M2 10 Q15 2 30 10 Q45 18 58 10" stroke="#2c5440" stroke-width="1.5" fill="none"/>
            <circle cx="30" cy="10" r="3" fill="#2c5440"/>
          </svg>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="categories">
        <div
          v-for="cat in categories"
          :key="cat.name"
          class="category-card"
        >
          <div class="category-card__img-wrap">
            <div class="category-card__img" :style="{ background: cat.bg }">
              <!-- Bowl illustration using CSS -->
              <div class="bowl-art">
                <div class="bowl-art__inner" :style="{ background: cat.spiceColor }"></div>
              </div>
            </div>
          </div>
          <div class="category-card__body">
            <p class="category-card__name">{{ cat.name }}</p>
            <p class="category-card__sub">{{ cat.sub }}</p>
            <a href="#" class="category-card__arrow" :aria-label="`Shop ${cat.name}`">
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <!-- Special Offer Card -->
        <div class="offer-card">
          <div class="offer-card__badge">SAVE 20%</div>
          <div class="offer-card__content">
            <p class="offer-card__title"><em>Special<br>Offer</em></p>
            <a href="#" class="offer-card__btn">
              SHOP NOW <i class="fas fa-chevron-right"></i>
            </a>
          </div>
          <div class="offer-card__bg-spice"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'WHOLE SPICES',
    sub: 'Bold & Natural',
    bg: 'linear-gradient(135deg, #f5ede0 0%, #e8d5b7 100%)',
    spiceColor: '#3d2b1f',
  },
  {
    name: 'GROUND SPICES',
    sub: 'Finely Milled',
    bg: 'linear-gradient(135deg, #fce4dc 0%, #f4c0a8 100%)',
    spiceColor: '#c0392b',
  },
  {
    name: 'BLENDED MASALAS',
    sub: 'Perfectly Balanced',
    bg: 'linear-gradient(135deg, #fef6d7 0%, #f4d03f 100%)',
    spiceColor: '#d4ac0d',
  },
  {
    name: 'HERBS & SEEDS',
    sub: 'Pure & Natural',
    bg: 'linear-gradient(135deg, #f0f7ee 0%, #c8e6c9 100%)',
    spiceColor: '#8e6b3e',
  },
  {
    name: 'DRIED HERBS',
    sub: 'Aroma Locked',
    bg: 'linear-gradient(135deg, #e8f5e9 0%, #a5d6a7 100%)',
    spiceColor: '#2c5440',
  },
]
</script>

<style scoped>
.category-section {
  background: #fff;
  padding: 48px 0 40px;
}

.category-section__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 36px;
}

/* ---- Heading ---- */
.category-section__heading {
  flex-shrink: 0;
  min-width: 130px;
}

.category-section__script {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 26px;
  color: #c0392b;
  line-height: 1.1;
  margin-bottom: 2px;
}

.category-section__title {
  font-family: 'Playfair Display', serif;
  font-size: 30px;
  font-weight: 900;
  color: #1a1a1a;
  text-transform: uppercase;
  line-height: 1.1;
}

.category-section__leaf {
  margin-top: 10px;
}

/* ---- Categories grid ---- */
.categories {
  display: flex;
  gap: 14px;
  flex: 1;
  align-items: stretch;
}

/* ---- Category Card ---- */
.category-card {
  flex: 1;
  border: 1.5px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: pointer;
}

.category-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}

.category-card__img-wrap {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-card__img {
  width: 100%;
  aspect-ratio: 1 / 0.75;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Bowl artwork */
.bowl-art {
  width: 70%;
  height: 50%;
  border-radius: 0 0 50% 50%;
  border: 3px solid rgba(0,0,0,0.15);
  overflow: hidden;
  position: relative;
}

.bowl-art__inner {
  width: 100%;
  height: 100%;
  opacity: 0.85;
}

.category-card__body {
  padding: 10px 14px 14px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-card__name {
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: 0.5px;
  text-align: center;
}

.category-card__sub {
  font-size: 11px;
  color: #888;
  text-align: center;
}

.category-card__arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: 1.5px solid #ccc;
  border-radius: 50%;
  font-size: 10px;
  color: #555;
  margin: 6px auto 0;
  transition: all 0.2s;
}

.category-card__arrow:hover {
  background: #c0392b;
  border-color: #c0392b;
  color: #fff;
}

/* ---- Special Offer Card ---- */
.offer-card {
  flex-shrink: 0;
  width: 155px;
  background: #c0392b;
  border-radius: 8px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  min-height: 180px;
}

.offer-card__badge {
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: rgba(0,0,0,0.2);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  width: fit-content;
  margin-bottom: 6px;
}

.offer-card__content {
  z-index: 2;
  position: relative;
}

.offer-card__title {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 24px;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 14px;
}

.offer-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #c0392b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 8px 12px;
  border-radius: 3px;
  transition: background 0.2s;
  white-space: nowrap;
}

.offer-card__btn:hover {
  background: #f9e9e8;
}

.offer-card__bg-spice {
  position: absolute;
  bottom: -10px;
  right: -20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(0,0,0,0.12);
  z-index: 1;
}
</style>
