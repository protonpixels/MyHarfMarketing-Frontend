<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color: $text;
  background: #fff;
  max-width: 100vw;
  min-height: 100vh;
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  max-width: 100vw;
  min-height: 100vh;
}

a,
a:hover,
a:visited {
  color: inherit;
  text-decoration: none;
}

img,
svg {
  display: block;
  max-width: 100%;
}

.container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
}
</style>
