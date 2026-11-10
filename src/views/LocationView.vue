<template>
  <div class="location-page">
    <section class="location-hero"><div class="container">
      <p class="eyebrow">Hudson Valley service area</p>
      <h1>{{ page.title }}</h1>
      <p class="lead">{{ page.intro }}</p>
      <router-link to="/contact" class="btn-primary">Get a free website leak check ↗</router-link>
    </div></section>
    <section class="section"><div class="container location-grid">
      <div><p class="eyebrow">A local-first review</p><h2 class="section-heading">A better first impression for homeowners in {{ page.name }}.</h2><p class="body-copy">When someone is comparing roofing contractors, your website should make the essentials easy to find: the work you do, the communities you serve, why a homeowner can trust you, and how to request an estimate.</p><p class="body-copy">MyHarf reviews those details alongside the practical experience of using your website on a phone. We identify specific issues and prioritize fixes rather than recommending a redesign by default.</p></div>
      <aside class="location-card"><h2>What the free check covers</h2><ul><li>Mobile usability and page clarity</li><li>Phone, email, and estimate-request paths</li><li>Core service and service-area information</li><li>Google Business Profile basics</li><li>Page titles and local search fundamentals</li></ul><router-link to="/how-it-works" class="text-link">See the process →</router-link></aside>
    </div></section>
    <section class="section section--muted"><div class="container">
      <p class="eyebrow">Who we help</p><h2 class="section-heading">Practical digital improvements for roofing businesses.</h2>
      <div class="local-cards"><article><h3>Make it easy to call</h3><p>Put clear contact options where homeowners expect them, especially on mobile.</p></article><article><h3>Explain your services</h3><p>Describe the roofing work you take on in straightforward language.</p></article><article><h3>Build confidence</h3><p>Make project photos, reviews, credentials, and next steps easy to understand—using real business information.</p></article></div>
    </div></section>
    <section class="location-cta"><div class="container"><h2>Serving roofing contractors in {{ page.name }} and nearby Hudson Valley communities.</h2><p>Start with a no-obligation review of your website. You'll get clear findings, not a generic sales pitch.</p><router-link to="/contact" class="btn-light">Request your free leak check ↗</router-link></div></section>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const pages = {
  'kingston-ny': { name: 'Kingston, NY', title: 'Website improvements for Kingston, NY roofing contractors', intro: 'MyHarf helps independent roofing contractors serving Kingston and the surrounding Hudson Valley make their websites clearer, easier to use, and more effective at turning homeowner interest into inquiries.' },
  'new-paltz-ny': { name: 'New Paltz, NY', title: 'Website improvements for New Paltz, NY roofing contractors', intro: 'A practical website and local visibility review for roofing contractors serving New Paltz. Find the friction in your mobile experience, service information, and estimate-request path.' },
  'poughkeepsie-ny': { name: 'Poughkeepsie, NY', title: 'Website improvements for Poughkeepsie, NY roofing contractors', intro: 'MyHarf works with independent roofing contractors serving Poughkeepsie to identify website issues that can make it harder for homeowners to understand services and get in touch.' }
}
const route = useRoute()
const page = computed(() => pages[route.params.city] || pages['kingston-ny'])
</script>
<style lang="scss" scoped>
.location-hero { padding: 82px 0 76px; background: $bg-light; }
.location-hero h1 { max-width: 900px; margin: 0 0 20px; color: $primary; font-size: clamp(2.35rem,5vw,4.2rem); letter-spacing: -.055em; line-height: 1.05; }
.lead { max-width: 730px; margin: 0 0 28px; color: $text-light; font-size: 1.12rem; }
.location-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 60px; align-items: start; }
.body-copy { color: $text-light; line-height: 1.75; }
.location-card { padding: 30px; background: #fff; border: 1px solid $border; border-radius: 14px; }
.location-card h2 { margin: 0 0 18px; color: $primary; font-size: 1.3rem; }
.location-card ul { display: grid; gap: 12px; margin: 0 0 20px; padding-left: 20px; color: $text-light; font-size: .9rem; }
.local-cards { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 34px; }
.local-cards article { padding: 24px; background: #fff; border: 1px solid $border; border-radius: 12px; }
.local-cards h3 { margin: 0 0 8px; color: $primary; }
.local-cards p { margin: 0; color: $text-light; font-size: .9rem; }
.location-cta { padding: 70px 0; color: #fff; background: $primary; text-align: center; }
.location-cta h2 { max-width: 760px; margin: 0 auto 14px; font-size: clamp(1.8rem,4vw,2.7rem); letter-spacing: -.04em; line-height: 1.1; }
.location-cta p { max-width: 640px; margin: 0 auto 24px; color: #d5e1e3; }
.btn-light { display: inline-flex; padding: 14px 20px; color: $primary; background: #fff; border-radius: 8px; font-weight: 800; }
@media (max-width: 760px) { .location-grid { grid-template-columns: 1fr; gap: 28px; } .local-cards { grid-template-columns: 1fr; } }
</style>
