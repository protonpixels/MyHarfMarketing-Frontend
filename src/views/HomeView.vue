<template>
  <div class="home">
    <section class="hero">
      <div class="hero-photo" aria-hidden="true"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <p class="eyebrow">For Hudson Valley roofing contractors</p>
          <h1>Your website should be bringing you <em>jobs.</em></h1>
          <p class="hero-lede">We find the website and Google visibility issues that make homeowners hesitate or move on—and help you fix the ones that matter.</p>
          <div class="hero-actions">
            <router-link to="/contact" class="btn-primary">Get your free leak check <span aria-hidden="true">↗</span></router-link>
            <router-link to="/how-it-works" class="btn-secondary">See how it works</router-link>
          </div>
          <div class="hero-reassurance"><span class="check">✓</span> No obligation <span class="separator">·</span> Clear recommendations <span class="separator">·</span> No agency retainer</div>
        </div>

        <aside class="audit-card" aria-label="What the free leak check reviews">
          <div class="audit-card-top"><span class="status-dot"></span><span>THE MYHARF LEAK CHECK</span><span class="audit-label">FREE</span></div>
          <h2>Find the friction between a homeowner and a phone call.</h2>
          <ul>
            <li><span class="audit-icon">01</span><span><strong>Mobile experience</strong><small>Can a homeowner use your site on their phone?</small></span></li>
            <li><span class="audit-icon">02</span><span><strong>Contact path</strong><small>Is it obvious how to call or request an estimate?</small></span></li>
            <li><span class="audit-icon">03</span><span><strong>Local trust & visibility</strong><small>Does your online presence answer the right questions?</small></span></li>
          </ul>
          <div class="audit-card-bottom"><span>One-page summary</span><span>3 prioritized findings</span><span>Screenshots</span></div>
        </aside>
      </div>
      <div class="hero-bottom"><div class="container"><span>LOCAL KNOW-HOW</span><span>TECHNICAL FIXES</span><span>PLAIN-ENGLISH REPORTING</span><span>ONE POINT OF CONTACT</span></div></div>
    </section>

    <section class="section problem-section">
      <div class="container two-col">
        <div>
          <p class="eyebrow">The problem</p>
          <h2 class="section-heading">Good work deserves a website that doesn't get in the way.</h2>
        </div>
        <div class="problem-copy">
          <p>You can do excellent roofing work and still lose the next job before anyone speaks to you. A slow mobile page, a hard-to-find phone number, unclear service information, or an unanswered inquiry can create unnecessary friction.</p>
          <p>MyHarf looks at the experience from a homeowner's point of view, identifies the practical issues, and gives you a prioritized plan—not a pitch for a complete rebuild.</p>
        </div>
      </div>
      <div class="container issue-grid">
        <article class="issue-card"><span>01 / MOBILE</span><h3>Hard to use on a phone</h3><p>Important information is buried, buttons are difficult to tap, or the page feels awkward on a small screen.</p></article>
        <article class="issue-card"><span>02 / CONTACT</span><h3>Too much friction to reach you</h3><p>Homeowners have to hunt for your number, guess what happens after a form, or repeat information.</p></article>
        <article class="issue-card"><span>03 / TRUST</span><h3>Not enough reasons to choose you</h3><p>Your services, service area, project experience, and next step aren't clear when someone compares local options.</p></article>
      </div>
    </section>

    <section class="section section--muted approach-section">
      <div class="container">
        <div class="section-top">
          <div><p class="eyebrow">A practical way forward</p><h2 class="section-heading">Find the leak. Fix what matters. Keep an eye on it.</h2></div>
          <p class="section-intro">Start with a useful diagnosis. Decide what to fix. Keep support optional and transparent.</p>
        </div>
        <div class="steps-grid">
          <article class="step-card"><span class="step-number">01</span><h3>Free Leak Check</h3><p>A focused review of your website and online presence, with three prioritized findings and screenshots.</p><router-link to="/contact" class="text-link">Request your check →</router-link></article>
          <article class="step-card"><span class="step-number">02</span><h3>Fixed-price improvements</h3><p>Choose the changes that make sense. Get a clear scope and price before any work begins.</p><router-link to="/services" class="text-link">Explore what we fix →</router-link></article>
          <article class="step-card"><span class="step-number">03</span><h3>Optional ongoing support</h3><p>Keep the important parts working with practical monitoring and updates—without a long-term lock-in.</p><router-link to="/pricing" class="text-link">See pricing →</router-link></article>
        </div>
      </div>
    </section>

    <section class="section services-section">
      <div class="container">
        <p class="eyebrow">What we look at</p>
        <h2 class="section-heading">Small fixes can remove big obstacles.</h2>
        <p class="section-intro">The right work depends on what your business needs. We don't recommend changes just to make a checklist longer.</p>
        <div class="service-grid">
          <article class="service-card"><div class="service-symbol">↗</div><h3>Mobile & website usability</h3><p>Responsive layout, readable content, clear calls to action, and fast paths to contact.</p></article>
          <article class="service-card"><div class="service-symbol">◎</div><h3>Local search basics</h3><p>Useful service and location information, page titles, and a consistent business presence.</p></article>
          <article class="service-card"><div class="service-symbol">✳</div><h3>Google Business Profile</h3><p>Review key business details, categories, service information, photos, and customer trust signals.</p></article>
          <article class="service-card"><div class="service-symbol">✓</div><h3>Lead capture & follow-up</h3><p>Test forms and contact paths, clarify what happens next, and improve measurement where possible.</p></article>
        </div>
        <div class="center-action"><router-link to="/services" class="btn-secondary">Explore all services</router-link></div>
      </div>
    </section>

    <section class="section sample-section">
      <div class="container sample-layout">
        <div><p class="eyebrow">A clear deliverable</p><h2 class="section-heading">You'll know what we'd fix—and why.</h2><p class="section-intro">The free check isn't a vague score or an automated sales funnel. It's a concise, human-reviewed summary of the issues we can actually see, ranked by practical importance.</p><router-link to="/how-it-works" class="text-link">See what happens next →</router-link></div>
        <div class="report-preview">
          <div class="report-top"><span>MYHARF / WEBSITE LEAK CHECK</span><span>EXAMPLE FORMAT</span></div>
          <div class="report-title"><span>Review summary</span><strong>3 findings to investigate</strong></div>
          <div class="finding"><span class="finding-number">01</span><div><strong>Make the phone number easier to reach</strong><p>Example finding · Mobile contact path</p></div><span class="priority">HIGH</span></div>
          <div class="finding"><span class="finding-number">02</span><div><strong>Clarify the services and areas served</strong><p>Example finding · Page content</p></div><span class="priority medium">MED</span></div>
          <div class="finding"><span class="finding-number">03</span><div><strong>Check the estimate request flow</strong><p>Example finding · Form usability</p></div><span class="priority">HIGH</span></div>
          <p class="report-footnote">Illustrative sample only—not a real customer audit.</p>
        </div>
      </div>
    </section>

    <section class="section audience-section section--muted">
      <div class="container audience-layout">
        <div><p class="eyebrow">Built for local operators</p><h2 class="section-heading">A practical partner, not another agency retainer.</h2><p class="section-intro">MyHarf is designed around independent roofing businesses that want clear answers, useful improvements, and direct communication.</p></div>
        <ul class="audience-list"><li><span>✓</span> You want to know what's wrong before spending money.</li><li><span>✓</span> You prefer a clear scope and fixed price.</li><li><span>✓</span> You need your website to work well on a phone.</li><li><span>✓</span> You want to speak directly with the person doing the work.</li></ul>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container faq-layout">
        <div><p class="eyebrow">Good questions</p><h2 class="section-heading">Before you get started.</h2><p class="section-intro">No pressure and no complicated sales process. Here's what to expect.</p></div>
        <div class="faq-list">
          <details><summary>Is the Leak Check really free?</summary><p>Yes. The initial review and one-page summary are free and come with no obligation to buy anything.</p></details>
          <details><summary>Do I need a new website?</summary><p>Usually, the first step is to understand what's already there. We focus on practical improvements and will tell you if a larger rebuild appears necessary.</p></details>
          <details><summary>Will you guarantee more calls or higher Google rankings?</summary><p>No. Search rankings and customer decisions depend on factors outside any one provider's control. We focus on the issues we can inspect, improve, and measure.</p></details>
          <details><summary>Who is MyHarf for?</summary><p>MyHarf is initially focused on independent roofing contractors serving homeowners across the Hudson Valley.</p></details>
        </div>
      </div>
    </section>

    <section class="closing-cta">
      <div class="container closing-inner"><p class="eyebrow">Start with a second set of eyes</p><h2>Find out what's getting between your website and the next customer.</h2><p>Send us your website. We'll review it and share the three things we'd look at first.</p><router-link to="/contact" class="btn-light">Get your free leak check <span aria-hidden="true">↗</span></router-link><small>No obligation. No hard sell. Just a useful starting point.</small></div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
let observer
onMounted(() => {
  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    })
  }, { threshold: 0.12 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
onUnmounted(() => observer?.disconnect())
</script>

<style lang="scss" scoped>
.hero { position: relative; overflow: hidden; padding: clamp(64px, 8vw, 104px) 0 0; background: #f3f6f5; }
.hero-photo { position: absolute; inset: 0 0 auto; height: 100%; opacity: .11; background: linear-gradient(90deg, #f3f6f5 0%, rgba(243,246,245,.92) 48%, rgba(243,246,245,.68) 100%), url('@/assets/hudson-valley.jpg') center 45% / cover; }
.hero-layout { position: relative; display: grid; grid-template-columns: 1.1fr .9fr; gap: clamp(36px, 6vw, 84px); align-items: center; padding-bottom: 78px; }
.hero-copy h1 { max-width: 690px; margin: 0 0 22px; color: $primary; font-size: clamp(3rem, 6.3vw, 5.5rem); font-weight: 850; letter-spacing: -.065em; line-height: .99; }
.hero-copy h1 em { color: $accent; font-style: normal; }
.hero-lede { max-width: 590px; margin: 0; color: $text-light; font-size: clamp(1.05rem, 1.7vw, 1.22rem); line-height: 1.7; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.hero-reassurance { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin-top: 20px; color: $text-light; font-size: .79rem; }
.check { color: #24836f; font-weight: 900; }.separator { color: #9eabad; }
.audit-card { padding: clamp(24px, 3vw, 34px); background: #fff; border: 1px solid #e1e8e7; border-radius: 18px; box-shadow: 0 24px 65px rgba(23,59,75,.11); }
.audit-card-top { display: flex; align-items: center; gap: 9px; color: $text-light; font-size: .67rem; font-weight: 850; letter-spacing: .12em; }
.status-dot { width: 8px; height: 8px; background: #3c9a7d; border-radius: 50%; }
.audit-label { margin-left: auto; padding: 4px 8px; color: #28745f; background: #e7f4ef; border-radius: 4px; }
.audit-card h2 { max-width: 390px; margin: 22px 0 20px; color: $primary; font-size: clamp(1.45rem, 2.5vw, 1.9rem); letter-spacing: -.035em; line-height: 1.2; }
.audit-card ul { display: grid; gap: 0; margin: 0; padding: 0; list-style: none; }
.audit-card li { display: flex; gap: 14px; padding: 16px 0; border-top: 1px solid #edf0ef; }
.audit-icon { display: grid; width: 34px; height: 34px; flex: 0 0 34px; place-items: center; color: $primary; background: #edf3f2; border-radius: 8px; font-size: .75rem; font-weight: 850; }
.audit-card li strong, .audit-card li small { display: block; }
.audit-card li strong { color: $text; font-size: .92rem; }
.audit-card li small { margin-top: 3px; color: $text-light; font-size: .78rem; line-height: 1.5; }
.audit-card-bottom { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; padding-top: 16px; border-top: 1px solid #edf0ef; }
.audit-card-bottom span { padding: 6px 9px; color: #49616a; background: #f3f6f5; border-radius: 5px; font-size: .68rem; font-weight: 700; }
.hero-bottom { position: relative; background: $primary; }
.hero-bottom .container { display: flex; justify-content: space-between; gap: 20px; padding-block: 17px; }
.hero-bottom span { color: #d5e1e3; font-size: .67rem; font-weight: 800; letter-spacing: .13em; }
.two-col, .section-top, .sample-layout, .audience-layout, .faq-layout { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(34px, 7vw, 100px); align-items: start; }
.problem-copy p { margin: 0 0 16px; color: $text-light; }
.issue-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-top: 46px; }
.issue-card { padding: 25px; border: 1px solid $border; border-radius: 13px; }
.issue-card > span { color: $accent; font-size: .7rem; font-weight: 850; letter-spacing: .12em; }
.issue-card h3 { margin: 17px 0 8px; color: $primary; font-size: 1.15rem; letter-spacing: -.02em; }
.issue-card p, .service-card p, .step-card p { margin: 0; color: $text-light; font-size: .92rem; }
.section-top { margin-bottom: 40px; }
.steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
.step-card { padding: 29px; background: #fff; border: 1px solid $border; border-radius: 13px; }
.step-number { color: $accent; font-size: .8rem; font-weight: 900; letter-spacing: .1em; }
.step-card h3 { margin: 17px 0 9px; color: $primary; font-size: 1.3rem; }
.step-card p { min-height: 90px; margin-bottom: 20px; }
.service-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-top: 38px; }
.service-card { padding: 24px; background: #fff; border: 1px solid $border; border-radius: 13px; }
.service-symbol { display: grid; width: 39px; height: 39px; place-items: center; color: $primary; background: #edf3f2; border-radius: 10px; font-size: 1.2rem; font-weight: 800; }
.service-card h3 { margin: 17px 0 8px; color: $primary; font-size: 1.05rem; line-height: 1.3; }
.center-action { display: flex; justify-content: center; margin-top: 32px; }
.sample-layout { align-items: center; }
.sample-layout .text-link { display: inline-block; margin-top: 22px; }
.report-preview { padding: 26px; background: #fff; border: 1px solid $border; border-radius: 14px; box-shadow: 0 20px 55px rgba(23,59,75,.08); }
.report-top { display: flex; justify-content: space-between; gap: 10px; color: $text-light; font-size: .6rem; font-weight: 850; letter-spacing: .1em; }
.report-top span:last-child { color: #a26b3c; }
.report-title { display: flex; flex-direction: column; gap: 4px; margin: 25px 0 14px; }
.report-title span { color: $text-light; font-size: .8rem; }
.report-title strong { color: $primary; font-size: 1.35rem; }
.finding { display: flex; align-items: center; gap: 12px; padding: 15px 0; border-top: 1px solid #edf0ef; }
.finding-number { color: #9aabae; font-size: .8rem; font-weight: 850; }
.finding div { flex: 1; }
.finding strong { color: $text; font-size: .83rem; }
.finding p { margin: 3px 0 0; color: $text-light; font-size: .7rem; }
.priority { padding: 4px 7px; color: #a34e37; background: #fff0eb; border-radius: 4px; font-size: .62rem; font-weight: 850; }
.priority.medium { color: #8a6b2d; background: #fff6df; }
.report-footnote { margin: 12px 0 0; color: #8a999d; font-size: .68rem; }
.audience-list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
.audience-list li { display: flex; gap: 12px; align-items: flex-start; color: $text; font-weight: 650; }
.audience-list li span { display: grid; width: 24px; height: 24px; flex: 0 0 24px; place-items: center; color: #267c68; background: #e0f1eb; border-radius: 50%; font-size: .8rem; }
.faq-list details { padding: 19px 0; border-bottom: 1px solid $border; }
.faq-list details:first-child { border-top: 1px solid $border; }
.faq-list summary { color: $primary; font-weight: 750; cursor: pointer; }
.faq-list details p { margin: 12px 0 0; color: $text-light; font-size: .92rem; }
.closing-cta { padding: clamp(68px, 9vw, 112px) 0; color: #fff; background: $primary; text-align: center; }
.closing-inner { max-width: 800px; }
.closing-cta .eyebrow { color: #f2b17e; }
.closing-cta h2 { margin: 0 auto 17px; font-size: clamp(2.2rem, 5vw, 3.8rem); letter-spacing: -.05em; line-height: 1.05; }
.closing-cta p:not(.eyebrow) { max-width: 610px; margin: 0 auto 26px; color: #d5e1e3; font-size: 1.05rem; }
.btn-light { display: inline-flex; min-height: 51px; align-items: center; gap: 10px; padding: 13px 22px; color: $primary; background: #fff; border-radius: 8px; font-weight: 800; }
.btn-light:hover { color: $primary; background: #f8e8dc; }
.closing-cta small { display: block; margin-top: 15px; color: #b9cbd0; font-size: .75rem; }
@media (max-width: 950px) {
  .hero-layout { grid-template-columns: 1fr; max-width: 760px; }
  .audit-card { max-width: 620px; }
  .service-grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 760px) {
  .two-col, .section-top, .sample-layout, .audience-layout, .faq-layout { grid-template-columns: 1fr; gap: 24px; }
  .issue-grid, .steps-grid { grid-template-columns: 1fr; }
  .step-card p { min-height: 0; }
  .hero-bottom .container { flex-wrap: wrap; justify-content: flex-start; gap: 10px 22px; }
}
@media (max-width: 520px) {
  .hero-actions { align-items: stretch; flex-direction: column; }
  .hero-actions > * { width: 100%; }
  .hero-reassurance { gap: 7px; }
  .service-grid { grid-template-columns: 1fr; }
  .report-preview { padding: 18px; }
}
</style>
