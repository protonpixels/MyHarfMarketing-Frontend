<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <NavBar />
  <main id="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss">
.skip-link {
  position: fixed; z-index: 2000; top: 10px; left: 10px; padding: 10px 14px;
  color: #fff; background: #173b4b; border-radius: 8px; transform: translateY(-150%);
}
.skip-link:focus { transform: translateY(0); }
</style>
