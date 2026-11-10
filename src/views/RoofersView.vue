<template>
  <div class="industry-page">
    <section class="industry-hero"><div class="container"><p class="eyebrow">Industry focus · Roofing contractors</p><h1>Digital improvements built around how homeowners choose a roofer.</h1><p class="lead">Your website should make it easy to understand your services, see the quality of your work, and request an estimate. MyHarf helps independent roofing businesses find and fix the friction.</p><router-link to="/contact" class="btn-primary">Get a free leak check ↗</router-link></div></section>
    <section class="section"><div class="container"><p class="eyebrow">The homeowner's journey</p><h2 class="section-heading">Answer the questions that move a homeowner closer to calling.</h2><div class="roofing-grid"><article><span>01</span><h3>What work do you do?</h3><p>Make roof repairs, replacements, inspections, and other services easy to understand—only where they reflect your actual business.</p></article><article><span>02</span><h3>Do you serve my area?</h3><p>Explain your real service area with useful, accurate location information instead of thin pages created just to repeat town names.</p></article><article><span>03</span><h3>Can I trust your work?</h3><p>Make genuine project photos, reviews, qualifications, and clear business details easy to find.</p></article><article><span>04</span><h3>How do I get an estimate?</h3><p>Keep phone numbers, forms, and next steps obvious on mobile and desktop.</p></article></div></div></section>
    <section class="section section--muted"><div class="container industry-layout"><div><p class="eyebrow">What MyHarf can improve</p><h2 class="section-heading">Start with the problems—not a predetermined redesign.</h2></div><ul><li>Mobile layout and usability fixes</li><li>Clearer homepage and service-page copy</li><li>Contact and estimate-request improvements</li><li>Google Business Profile review</li><li>Technical and on-page SEO fundamentals</li><li>Measurement and lead-follow-up foundations</li></ul></div></section>
    <section class="industry-cta"><div class="container"><h2>Let's take a look at your roofing website.</h2><p>The first review is free. You'll get three prioritized findings and a clear next step.</p><router-link to="/contact" class="btn-light">Request your free leak check ↗</router-link></div></section>
  </div>
</template>
<style lang="scss" scoped>
.industry-hero { padding: 82px 0 76px; background: $bg-light; }
.industry-hero h1 { max-width: 920px; margin: 0 0 20px; color: $primary; font-size: clamp(2.4rem,5vw,4.35rem); letter-spacing: -.06em; line-height: 1.02; }
.lead { max-width: 720px; margin: 0 0 28px; color: $text-light; font-size: 1.1rem; }
.roofing-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; margin-top: 36px; }
.roofing-grid article { padding: 27px; border: 1px solid $border; border-radius: 13px; }
.roofing-grid article > span { color: $accent; font-size: .75rem; font-weight: 900; }
.roofing-grid h3 { margin: 13px 0 8px; color: $primary; font-size: 1.2rem; }
.roofing-grid p { margin: 0; color: $text-light; font-size: .92rem; }
.industry-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
.industry-layout ul { display: grid; gap: 13px; margin: 0; padding: 0; list-style: none; }
.industry-layout li { position: relative; padding-left: 28px; color: $text; font-weight: 650; }
.industry-layout li::before { position: absolute; left: 0; color: #39816c; content: '✓'; font-weight: 900; }
.industry-cta { padding: 70px 0; color: #fff; background: $primary; text-align: center; }
.industry-cta h2 { margin: 0 0 12px; font-size: clamp(1.9rem,4vw,2.8rem); letter-spacing: -.04em; }
.industry-cta p { margin: 0 0 24px; color: #d5e1e3; }
.btn-light { display: inline-flex; padding: 14px 20px; color: $primary; background: #fff; border-radius: 8px; font-weight: 800; }
@media (max-width: 700px) { .roofing-grid, .industry-layout { grid-template-columns: 1fr; gap: 20px; } }
</style>
