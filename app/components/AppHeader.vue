<template>
  <header class="site-header">
    <!-- Top bar -->
    <div class="top-bar">
      <div class="top-bar__inner">
        <div class="top-bar__contacts">
          <a href="tel:+917303269330" class="top-bar__link">
            <i class="fas fa-phone-alt"></i>
            +91 7303269330
          </a>
          <span class="top-bar__sep">|</span>
          <a href="mailto:info@drkitchen.com" class="top-bar__link">
            <i class="fas fa-envelope"></i>
            info@drkitchen.com
          </a>
        </div>
        <div class="top-bar__social">
          <span class="top-bar__follow">Follow us:</span>
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="main-nav">
      <div class="main-nav__inner">
        <!-- Logo -->
        <div class="logo">
          <div class="logo__box">
            <span class="logo__dr">Dr</span><span class="logo__kitchen">Kitchen</span>
            <span class="logo__tm">TM</span>
          </div>
          <p class="logo__tagline">Turns every meal into celebration</p>
        </div>

        <!-- Nav links -->
        <ul class="nav-links">
          <li><a href="#" class="nav-links__item nav-links__item--active">Home</a></li>
          <li><a href="#" class="nav-links__item">About Us</a></li>
          <li><a href="#" class="nav-links__item">From the desk of<br>the Chairman</a></li>
          <li class="nav-links__has-dropdown">
            <a href="#" class="nav-links__item">
              Our Products
              <i class="fas fa-chevron-down nav-links__chevron"></i>
            </a>
          </li>
          <li><a href="#" class="nav-links__item">Founders</a></li>
          <li><a href="#" class="nav-links__item">Archives</a></li>
          <li><a href="#" class="nav-links__item">Contact Us</a></li>
        </ul>

        <!-- Search + Cart -->
        <div class="nav-actions">
          <div class="search-box">
            <input type="text" placeholder="Search products..." class="search-box__input" />
            <button class="search-box__btn" aria-label="Search">
              <i class="fas fa-search"></i>
            </button>
          </div>
          <button class="cart-btn" aria-label="Cart">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-btn__badge">0</span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* ---- Top Bar ---- */
.top-bar {
  background: #1e3a5f;
  color: #fff;
  font-size: 13px;
  padding: 6px 0;
}

.top-bar__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-bar__contacts {
  display: flex;
  align-items: center;
  gap: 10px;
}

.top-bar__link {
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
}

.top-bar__link i {
  font-size: 12px;
}

.top-bar__sep {
  color: rgba(255,255,255,0.5);
}

.top-bar__social {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-bar__follow {
  font-size: 13px;
}

.top-bar__social a {
  color: #fff;
  font-size: 14px;
  transition: opacity 0.2s;
}

.top-bar__social a:hover {
  opacity: 0.7;
}

/* ---- Main Nav ---- */
.main-nav {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 0;
}

.main-nav__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}

/* ---- Logo ---- */
.logo {
  flex-shrink: 0;
}

.logo__box {
  display: flex;
  align-items: flex-start;
  position: relative;
  background: #c0392b;
  padding: 4px 10px 4px 8px;
  border-radius: 4px;
  line-height: 1;
}

.logo__dr {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -1px;
}

.logo__kitchen {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.5px;
}

.logo__tm {
  font-size: 10px;
  color: #fff;
  vertical-align: super;
  margin-left: 2px;
  font-weight: 600;
}

.logo__tagline {
  font-size: 11px;
  color: #c0392b;
  font-style: italic;
  margin-top: 3px;
  padding-left: 2px;
  white-space: nowrap;
}

/* ---- Nav Links ---- */
.nav-links {
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2px;
  flex: 1;
}

.nav-links__item {
  font-size: 13.5px;
  font-weight: 500;
  color: #222;
  padding: 6px 10px;
  white-space: nowrap;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 1.3;
}

.nav-links__item:hover {
  color: #c0392b;
}

.nav-links__item--active {
  color: #c0392b;
  border-bottom: 2px solid #c0392b;
  padding-bottom: 4px;
}

.nav-links__chevron {
  font-size: 10px;
  margin-left: 2px;
}

.nav-links__has-dropdown {
  position: relative;
}

/* ---- Nav Actions ---- */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.search-box {
  display: flex;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.search-box__input {
  border: none;
  outline: none;
  padding: 7px 12px;
  font-size: 13px;
  width: 160px;
  font-family: var(--font-sans);
  color: #555;
}

.search-box__input::placeholder {
  color: #aaa;
}

.search-box__btn {
  background: #c0392b;
  color: #fff;
  border: none;
  padding: 7px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.search-box__btn:hover {
  background: #a93226;
}

.cart-btn {
  position: relative;
  background: none;
  border: 1.5px solid #ddd;
  border-radius: 4px;
  padding: 7px 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: border-color 0.2s;
}

.cart-btn:hover {
  border-color: #c0392b;
  color: #c0392b;
}

.cart-btn__badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #c0392b;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
