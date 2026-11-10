<template>
  <div class="pricing-page">
    <section class="page-hero"><div class="container">
      <p class="eyebrow">Straightforward pricing</p>
      <h1 class="headline">Know what it costs before the work begins.</h1>
      <p class="subhead">Start with a free diagnosis. If there's something worth fixing, choose a clearly scoped project. Ongoing support is optional.</p>
    </div></section>

    <section class="section"><div class="container">
      <div class="pricing-intro"><p class="eyebrow">One-time projects</p><h2 class="section-heading">Fix the issues that are getting in the way.</h2><p class="section-intro">The exact scope is confirmed after the Leak Check. No surprise hourly billing and no work begins until you approve the quote.</p></div>
      <div class="plans-grid">
        <article class="plan"><p class="plan-kicker">Start with the essentials</p><h3>Conversion Fix Essential</h3><p class="price">$450</p><p class="price-note">One-time project</p><ul><li>Mobile usability review and priority fixes</li><li>Clear phone and contact actions</li><li>Contact form test and basic improvements</li><li>Core page title and description review</li><li>Delivery summary and recommendations</li></ul><router-link to="/contact" class="btn-secondary">Request a free check</router-link></article>
        <article class="plan featured"><span class="popular">Most comprehensive fix</span><p class="plan-kicker">Improve the full customer path</p><h3>Conversion Fix Pro</h3><p class="price">$950</p><p class="price-note">One-time project</p><ul><li>Everything in Essential</li><li>Homepage messaging and conversion copy</li><li>One focused service page or equivalent content improvement</li><li>Google Business Profile review and recommendations</li><li>Basic conversion tracking setup where supported</li><li>Before-and-after notes and handoff</li></ul><router-link to="/contact" class="btn-primary">Start with a free check</router-link></article>
        <article class="plan"><p class="plan-kicker">A broader growth foundation</p><h3>Growth System</h3><p class="price">$1,750</p><p class="price-note">One-time project · scope confirmed first</p><ul><li>Everything in Conversion Fix Pro</li><li>Additional service-area content pages</li><li>Lead capture and follow-up workflow improvements</li><li>Review request process recommendations</li><li>Analytics and measurement foundation</li><li>Documentation and handoff</li></ul><router-link to="/contact" class="btn-secondary">Discuss your project</router-link></article>
      </div>
      <p class="pricing-note">These are starting package scopes, not a promise that every platform supports every change. Your written quote will confirm deliverables, access requirements, and any third-party costs.</p>
    </div></section>

    <section class="section section--muted"><div class="container">
      <div class="pricing-intro"><p class="eyebrow">Optional monthly support</p><h2 class="section-heading">Keep the important things working.</h2><p class="section-intro">Choose ongoing support only if it makes sense for your business. No long-term contract.</p></div>
      <div class="support-grid">
        <article class="support-card"><h3>Growth Monitor</h3><p class="price">$149<span>/month</span></p><ul><li>Monthly website health and contact-form checks</li><li>Basic maintenance within the agreed scope</li><li>Google Business Profile and review presence check</li><li>Plain-English monthly summary</li></ul><router-link to="/contact" class="text-link">Ask about Growth Monitor →</router-link></article>
        <article class="support-card"><h3>Growth Monitor Pro</h3><p class="price">$299<span>/month</span></p><ul><li>Everything in Growth Monitor</li><li>Agreed content and local visibility updates</li><li>Lead-response and conversion-path checks</li><li>Review workflow assistance</li><li>Monthly conversion report and next-step recommendation</li></ul><router-link to="/contact" class="text-link">Ask about Growth Monitor Pro →</router-link></article>
      </div>
    </div></section>

    <section class="section"><div class="container faq-wrap"><div><p class="eyebrow">No surprises</p><h2 class="section-heading">A few pricing questions.</h2></div><div class="faq-list">
      <details><summary>Why is the Leak Check free?</summary><p>It's a focused first look so you can see the issues before deciding whether to spend anything.</p></details>
      <details><summary>Do I have to buy a package?</summary><p>No. The audit is yours to keep. You can use its recommendations yourself or share them with your existing provider.</p></details>
      <details><summary>Are there extra platform or software fees?</summary><p>Third-party subscriptions, hosting, premium plugins, and other external costs are not included unless a written quote explicitly says otherwise.</p></details>
      <details><summary>Can you guarantee more calls?</summary><p>No responsible provider can guarantee a specific number of leads or a search ranking. We agree on the work, make the improvements, and measure what can be measured.</p></details>
    </div></div></section>
    <section class="pricing-cta"><div class="container"><h2>Not sure which package fits?</h2><p>Start with the free Leak Check. We'll recommend only what the findings justify.</p><router-link to="/contact" class="btn-light">Get your free leak check ↗</router-link></div></section>
  </div>
</template>
<style lang="scss" scoped>
.pricing-page { padding-top: 0; }
.page-hero { padding: 78px 0 48px; background: $bg-light; }
.headline { max-width: 800px; margin: 0 0 17px; color: $primary; font-size: clamp(2.3rem, 5vw, 4rem); font-weight: 850; letter-spacing: -.055em; line-height: 1.04; }
.subhead { max-width: 690px; margin: 0; color: $text-light; font-size: 1.08rem; }
.pricing-intro { max-width: 720px; margin-bottom: 34px; }
.plans-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; align-items: stretch; }
.plan { position: relative; display: flex; flex-direction: column; padding: 30px 25px; border: 1px solid $border; border-radius: 15px; background: #fff; }
.plan.featured { border: 2px solid $primary; box-shadow: 0 18px 45px rgba(23,59,75,.1); }
.popular { position: absolute; top: -13px; left: 24px; padding: 5px 11px; color: #fff; background: $primary; border-radius: 4px; font-size: .68rem; font-weight: 800; text-transform: uppercase; letter-spacing: .08em; }
.plan-kicker { margin: 0 0 9px; color: $accent; font-size: .7rem; font-weight: 850; letter-spacing: .1em; text-transform: uppercase; }
.plan h3 { min-height: 56px; margin: 0 0 14px; color: $primary; font-size: 1.3rem; line-height: 1.25; }
.price { margin: 0; color: $primary; font-size: 2.4rem; font-weight: 850; letter-spacing: -.05em; line-height: 1; }
.price span { font-size: 1rem; letter-spacing: 0; }
.price-note { margin: 8px 0 20px; color: $text-light; font-size: .78rem; }
.plan ul, .support-card ul { display: grid; gap: 11px; margin: 0 0 25px; padding: 0; list-style: none; flex: 1; }
.plan li, .support-card li { position: relative; padding-left: 21px; color: $text-light; font-size: .87rem; line-height: 1.5; }
.plan li::before, .support-card li::before { position: absolute; left: 0; color: #39816c; content: '✓'; font-weight: 900; }
.plan .btn-primary, .plan .btn-secondary { width: 100%; }
.pricing-note { max-width: 900px; margin: 22px 0 0; color: $text-light; font-size: .78rem; }
.support-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
.support-card { display: flex; flex-direction: column; padding: 30px; background: #fff; border: 1px solid $border; border-radius: 14px; }
.support-card h3 { margin: 0 0 15px; color: $primary; font-size: 1.35rem; }
.support-card .price { margin-bottom: 23px; }
.support-card .text-link { margin-top: auto; }
.faq-wrap { display: grid; grid-template-columns: .8fr 1.2fr; gap: 60px; }
.faq-list details { padding: 18px 0; border-bottom: 1px solid $border; }
.faq-list details:first-child { border-top: 1px solid $border; }
.faq-list summary { color: $primary; font-weight: 750; cursor: pointer; }
.faq-list p { color: $text-light; font-size: .9rem; }
.pricing-cta { padding: 72px 0; color: #fff; background: $primary; text-align: center; }
.pricing-cta h2 { margin: 0 0 10px; font-size: clamp(1.8rem,4vw,2.7rem); letter-spacing: -.04em; }
.pricing-cta p { margin: 0 0 23px; color: #d5e1e3; }
.btn-light { display: inline-flex; padding: 14px 20px; color: $primary; background: #fff; border-radius: 8px; font-weight: 800; }
@media (max-width: 900px) { .plans-grid { grid-template-columns: 1fr 1fr; } .plan:last-child { grid-column: 1 / -1; } }
@media (max-width: 650px) { .plans-grid, .support-grid, .faq-wrap { grid-template-columns: 1fr; } .plan:last-child { grid-column: auto; } }
</style>
