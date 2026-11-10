<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <router-link to="/" class="brand" aria-label="MyHarf home">
            <img src="@/assets/logo.png" alt="" />
            <span><strong>MyHarf</strong><small>More calls. Less guesswork.</small></span>
          </router-link>
          <p>
            Practical website, conversion, and local visibility improvements for independent
            contractors across the Hudson Valley.
          </p>
          <router-link to="/contact" class="footer-cta"
            >Start with a free leak check <span aria-hidden="true">↗</span></router-link
          >
        </div>

        <div class="footer-column">
          <h2>Explore</h2>
          <router-link to="/services">What we fix</router-link>
          <router-link to="/how-it-works">How it works</router-link>
          <router-link to="/pricing">Pricing</router-link>
          <router-link to="/about">About MyHarf</router-link>
        </div>

        <div class="footer-column">
          <h2>Service area</h2>
          <router-link to="/locations/kingston-ny">Kingston</router-link>
          <router-link to="/locations/new-paltz-ny">New Paltz</router-link>
          <router-link to="/locations/poughkeepsie-ny">Poughkeepsie</router-link>
          <span>Hudson Valley, New York</span>
        </div>

        <div class="footer-column">
          <h2>Get in touch</h2>
          <a href="mailto:hello@myharf.com">hello@myharf.com</a>
          <a href="tel:+13292317369">+1 (329) 231-7369</a>
          <span>Start with a no-obligation website review.</span>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} MyHarf. All rights reserved.</p>
        <p>Built for local businesses. Based in the Hudson Valley.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.site-footer {
  padding: 68px 0 22px;
  color: #d9e3e6;
  background: #102c39;
}
.footer-main {
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1.1fr;
  gap: 44px;
  padding-bottom: 48px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 18px;
}
.brand img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: brightness(10);
}
.brand span {
  display: grid;
  line-height: 1.2;
}
.brand strong {
  color: #fff;
  font-size: 1.25rem;
}
.brand small {
  margin-top: 4px;
  color: #a9bdc4;
  font-size: 0.7rem;
}
.footer-brand > p {
  max-width: 340px;
  margin: 0 0 22px;
  color: #b7c8cd;
  font-size: 0.92rem;
}
.footer-cta {
  display: inline-flex;
  gap: 10px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 750;
}
.footer-cta:hover,
.footer-column a:hover {
  color: #f2b17e;
}
.footer-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.footer-column h2 {
  margin: 4px 0 9px;
  color: #fff;
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.footer-column a,
.footer-column span {
  color: #b7c8cd;
  font-size: 0.9rem;
  line-height: 1.5;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.13);
}
.footer-bottom p {
  margin: 0;
  color: #91aab2;
  font-size: 0.78rem;
}
@media (max-width: 850px) {
  .footer-main {
    grid-template-columns: 1.5fr 1fr;
    gap: 34px;
  }
}
@media (max-width: 560px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 30px 18px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
