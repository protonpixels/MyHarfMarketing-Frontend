<template>
  <header class="site-header" :class="{ 'is-scrolled': isScrolled, 'menu-open': menuOpen }">
    <div class="container header-inner">
      <router-link to="/" class="brand" aria-label="MyHarf home" @click="closeMenu">
        <img src="@/assets/logo.png" alt="" class="brand-mark" />
        <span class="brand-copy">
          <strong>MyHarf</strong>
          <small>More calls. Less guesswork.</small>
        </span>
      </router-link>

      <nav class="desktop-nav" aria-label="Main navigation">
        <router-link to="/services">What we fix</router-link>
        <router-link to="/how-it-works">How it works</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/about">About</router-link>
      </nav>

      <router-link to="/contact" class="header-cta">Get a free leak check <span aria-hidden="true">↗</span></router-link>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-navigation"
        :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
      <router-link to="/services" @click="closeMenu">What we fix</router-link>
      <router-link to="/how-it-works" @click="closeMenu">How it works</router-link>
      <router-link to="/pricing" @click="closeMenu">Pricing</router-link>
      <router-link to="/about" @click="closeMenu">About</router-link>
      <router-link to="/contact" class="mobile-cta" @click="closeMenu">Get a free leak check</router-link>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const menuOpen = ref(false)
const isScrolled = ref(false)
const onScroll = () => { isScrolled.value = window.scrollY > 8 }
const onKeydown = event => { if (event.key === 'Escape') closeMenu() }
const closeMenu = () => { menuOpen.value = false }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky; z-index: 1000; top: 0; width: 100%; background: rgba(255,255,255,.96);
  border-bottom: 1px solid rgba(23,59,75,.09); backdrop-filter: blur(14px);
  transition: box-shadow .2s ease;
}
.site-header.is-scrolled { box-shadow: 0 8px 24px rgba(16,44,57,.08); }
.header-inner { min-height: $navheight; display: flex; align-items: center; gap: 28px; }
.brand { display: inline-flex; align-items: center; gap: 11px; flex-shrink: 0; }
.brand-mark { width: 42px; height: 42px; object-fit: contain; }
.brand-copy { display: grid; line-height: 1.15; }
.brand-copy strong { color: $primary; font-size: 1.25rem; font-weight: 850; letter-spacing: -.04em; }
.brand-copy small { margin-top: 4px; color: $text-light; font-size: .68rem; letter-spacing: .01em; }
.desktop-nav { display: flex; align-items: center; justify-content: center; gap: clamp(16px, 2.2vw, 30px); margin-left: auto; }
.desktop-nav a { color: $text-light; font-size: .9rem; font-weight: 650; transition: color .2s ease; }
.desktop-nav a:hover, .desktop-nav a.router-link-active { color: $primary; }
.header-cta { display: inline-flex; align-items: center; gap: 9px; padding: 12px 16px; color: #fff; background: $primary; border-radius: 8px; font-size: .86rem; font-weight: 750; white-space: nowrap; transition: background .2s ease, transform .2s ease; }
.header-cta:hover { color: #fff; background: $primary-dark; transform: translateY(-1px); }
.menu-toggle { display: none; width: 44px; height: 44px; padding: 10px; border: 1px solid $border; border-radius: 8px; background: #fff; cursor: pointer; }
.menu-toggle span { display: block; width: 20px; height: 2px; margin: 4px auto; background: $primary; }
.mobile-nav { display: none; }
@media (max-width: 900px) {
  .desktop-nav, .header-cta { display: none; }
  .header-inner { justify-content: space-between; }
  .menu-toggle { display: block; }
  .mobile-nav { display: flex; flex-direction: column; gap: 2px; padding: 8px 24px 20px; background: #fff; border-top: 1px solid $border; }
  .mobile-nav a { padding: 12px 4px; color: $text; font-weight: 650; }
  .mobile-nav .mobile-cta { margin-top: 8px; padding: 13px 16px; color: #fff; background: $primary; border-radius: 8px; text-align: center; }
}
@media (max-width: 480px) { .brand-mark { width: 36px; height: 36px; } .brand-copy strong { font-size: 1.15rem; } }
</style>
