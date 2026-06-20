<template>
  <section class="hero">
    <div class="hero__content">
      <p class="hero__eyebrow">PURE SPICES. RICH FLAVORS.</p>
      <h1 class="hero__title">
        SPICES THAT<br>
        <span class="hero__title--red">TELL A STORY</span>
      </h1>
      <div class="hero__divider">
        <span class="hero__divider-line"></span>
        <svg class="hero__divider-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#c0392b" stroke-width="1.5">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/>
        </svg>
        <span class="hero__divider-line"></span>
      </div>
      <p class="hero__desc">
        DrKitchen is not just a spice brand — it is born out of
        history, science, and respect. Crafted to bring purity,
        flavor, and aroma to every kitchen.
      </p>
      <div class="hero__badges">
        <div class="hero__badge">
          <span class="hero__badge-icon"><i class="fas fa-leaf"></i></span>
          <span class="hero__badge-label">100% Natural<br>No Preservatives</span>
        </div>
        <div class="hero__badge">
          <span class="hero__badge-icon"><i class="fas fa-flask"></i></span>
          <span class="hero__badge-label">Scientifically<br>Processed</span>
        </div>
        <div class="hero__badge">
          <span class="hero__badge-icon"><i class="fas fa-award"></i></span>
          <span class="hero__badge-label">Premium<br>Quality</span>
        </div>
        <div class="hero__badge">
          <span class="hero__badge-icon"><i class="fas fa-seedling"></i></span>
          <span class="hero__badge-label">Sourced with<br>Care</span>
        </div>
      </div>
      <a href="#" class="hero__cta">
        EXPLORE OUR PRODUCTS
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>

    <div class="hero__image-wrap">
      <!-- Spice bowl collage using CSS + placeholder -->
      <div class="hero__spice-collage">
        <div class="hero__spice-bg">
          <!-- Spice bowls rendered via CSS art -->
          <div class="spice-bowl spice-bowl--black-pepper"></div>
          <div class="spice-bowl spice-bowl--red-chili"></div>
          <div class="spice-bowl spice-bowl--cardamom"></div>
          <div class="spice-bowl spice-bowl--turmeric"></div>
          <div class="spice-bowl spice-bowl--coriander"></div>
          <div class="spice-bowl spice-bowl--cloves"></div>
        </div>
        <div class="hero__badge-stamp">
          <div class="stamp">
            <p class="stamp__top">CELEBRATING</p>
            <div class="stamp__icon"><i class="fas fa-mortar-pestle"></i></div>
            <p class="stamp__bottom">FLAVOR &amp; TRADITION</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 480px;
  background: linear-gradient(105deg, #faf6ef 55%, #e8d5b7 100%);
  overflow: hidden;
  position: relative;
}

/* ---- Content side ---- */
.hero__content {
  flex: 0 0 50%;
  padding: 56px 48px 56px 60px;
  z-index: 2;
}

.hero__eyebrow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #777;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.hero__title {
  font-family: 'Playfair Display', serif;
  font-size: 56px;
  font-weight: 900;
  line-height: 1.05;
  color: #1a1a1a;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.hero__title--red {
  color: #c0392b;
}

.hero__divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 14px 0;
}

.hero__divider-line {
  display: block;
  width: 50px;
  height: 1.5px;
  background: #c0392b;
  opacity: 0.5;
}

.hero__desc {
  font-size: 14px;
  line-height: 1.8;
  color: #555;
  max-width: 380px;
  margin-bottom: 22px;
}

/* Badges */
.hero__badges {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.hero__badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero__badge-icon {
  width: 36px;
  height: 36px;
  border: 1.5px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #2c5440;
  flex-shrink: 0;
}

.hero__badge-label {
  font-size: 11px;
  line-height: 1.5;
  color: #444;
  font-weight: 500;
}

/* CTA */
.hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #c0392b;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 14px 28px;
  border-radius: 3px;
  transition: background 0.2s;
}

.hero__cta:hover {
  background: #a93226;
}

/* ---- Image side ---- */
.hero__image-wrap {
  flex: 0 0 50%;
  position: relative;
  height: 480px;
  overflow: hidden;
}

.hero__spice-collage {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #2c1a0e 0%, #5a2d0c 40%, #8b4513 70%, #3d1c0a 100%);
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0;
}

.hero__spice-bg {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

/* Individual spice bowls */
.spice-bowl {
  border-radius: 50%;
  width: 110px;
  height: 55px;
  position: absolute;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
}

.spice-bowl--black-pepper {
  background: radial-gradient(ellipse at 40% 30%, #5a5a5a 0%, #1a1a1a 70%);
  width: 130px; height: 65px;
  top: 30px; left: 20px;
}
.spice-bowl--red-chili {
  background: radial-gradient(ellipse at 40% 30%, #e74c3c 0%, #922b21 70%);
  width: 140px; height: 70px;
  top: 20px; left: 170px;
}
.spice-bowl--cardamom {
  background: radial-gradient(ellipse at 40% 30%, #7dcea0 0%, #1e8449 70%);
  width: 120px; height: 60px;
  top: 10px; right: 30px;
}
.spice-bowl--turmeric {
  background: radial-gradient(ellipse at 40% 30%, #f4d03f 0%, #d4ac0d 70%);
  width: 150px; height: 75px;
  bottom: 80px; left: 30px;
}
.spice-bowl--coriander {
  background: radial-gradient(ellipse at 40% 30%, #d4ac0d 0%, #9a7d0a 70%);
  width: 125px; height: 62px;
  bottom: 90px; left: 190px;
}
.spice-bowl--cloves {
  background: radial-gradient(ellipse at 40% 30%, #8e4a1c 0%, #4a2008 70%);
  width: 130px; height: 65px;
  bottom: 60px; right: 20px;
}

/* Stamp badge */
.hero__badge-stamp {
  position: absolute;
  bottom: 40px;
  right: 55px;
  z-index: 5;
}

.stamp {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(255,255,255,0.92);
  border: 2px solid #c0392b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
}

.stamp__top,
.stamp__bottom {
  font-size: 7.5px;
  font-weight: 700;
  color: #c0392b;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  line-height: 1.2;
}

.stamp__icon {
  font-size: 22px;
  color: #1e3a5f;
}
</style>
