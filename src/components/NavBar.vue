<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="brand">
        <img src="@/assets/logo.png" alt="MyHarf logo" class="logo" />
        <div class="text">
          <h1 class="name">MyHarf</h1>
          <h2 class="slogan">More calls. Less guesswork.</h2>
        </div>
      </router-link>

      <div class="nav-links">
        <router-link to="/how-it-works">How it works</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact" class="nav-cta">Get a free leakage scan</router-link>
      </div>

      <button class="burger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div v-if="menuOpen" class="mobile-menu">
      <router-link to="/how-it-works" @click="menuOpen = false">How it works</router-link>
      <router-link to="/pricing" @click="menuOpen = false">Pricing</router-link>
      <router-link to="/services" @click="menuOpen = false">Services</router-link>
      <router-link to="/about" @click="menuOpen = false">About</router-link>
      <router-link to="/contact" class="mobile-cta" @click="menuOpen = false"
        >Get a free leakage scan</router-link
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: $navheight;
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba($primary, 0.12);
  z-index: 1000;
}

.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  gap: 12px;
  align-items: center;

  .logo {
    max-height: 44px;
    width: auto;
  }

  .name {
    font-size: 22px;
    font-weight: 800;
    color: $primary;
    line-height: 1.2;
  }

  .slogan {
    font-size: 13px;
    font-weight: 400;
    color: $text-light;
    line-height: 1.2;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;

  a {
    font-size: 15px;
    font-weight: 600;
    color: $text;
    transition: color 0.2s ease;

    &:hover {
      color: $primary;
    }
  }

  .nav-cta {
    background: $primary;
    color: #fff;
    padding: 10px 18px;
    border-radius: 30px;
    font-weight: 700;

    &:hover {
      background: $primary-dark;
      color: #fff;
    }
  }

  @media (max-width: 860px) {
    display: none;
  }
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: $primary;
    border-radius: 2px;
  }

  @media (max-width: 860px) {
    display: flex;
  }
}

.mobile-menu {
  display: none;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 24px 20px;
    background: #fff;
    border-bottom: 1px solid rgba($primary, 0.12);

    a {
      padding: 10px 0;
      font-size: 16px;
      font-weight: 600;
      color: $text;

      &:hover {
        color: $primary;
      }
    }

    .mobile-cta {
      margin-top: 8px;
      background: $primary;
      color: #fff;
      text-align: center;
      padding: 12px;
      border-radius: 30px;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
