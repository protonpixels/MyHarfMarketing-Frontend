<template>
  <div class="how-page">
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">How it works</p>
        <h1 class="headline">Leak check first. Fix the leak. Show the numbers.</h1>
        <p class="subhead">
          No long proposal, no retainer before we've found anything. Three steps, and you can stop
          after the first one if it's not a fit.
        </p>
      </div>
    </section>

    <section class="steps">
      <div class="container">
        <div class="step reveal">
          <div class="step-marker">01</div>
          <div class="step-body">
            <h2>Free leak check (30–60 minutes of my time)</h2>
            <p>
              Send me your website URL. I open it on a real phone—not a narrow desktop window—and
              check three things: whether the page scrolls sideways or feels broken on mobile,
              whether your Google Business Profile is accurate and complete, and whether your
              contact form and phone number actually work.
            </p>
            <p>
              I also fill out your form once to see how fast you reply, and ask ChatGPT for a local
              recommendation to see if you appear. You get a one-page summary with screenshots,
              ranked by what's costing you the most calls. No charge. If nothing is broken, I'll
              tell you that too.
            </p>
          </div>
        </div>

        <div class="step reveal">
          <div class="step-marker">02</div>
          <div class="step-body">
            <h2>Fix the leaks (1–2 weeks)</h2>
            <p>
              If you want me to fix what I found, I quote a fixed price before starting. Typical
              fixes: mobile layout and horizontal scroll, syncing the review widget with your actual
              Google rating, rewriting the homepage and Google profile copy so it speaks to local
              homeowners, and adding the keywords people actually search (like "roofer Kingston
              NY").
            </p>
            <p>
              When it makes sense, I also add one or two town-level service pages or an FAQ page so
              Google and AI search can find you. When I'm done, you get before-and-after
              screenshots. You can check it on your own phone.
            </p>
          </div>
        </div>

        <div class="step reveal">
          <div class="step-marker">03</div>
          <div class="step-body">
            <h2>Monthly check-in (optional)</h2>
            <p>
              If you want me to keep it working, I check the site and Google profile once a month,
              update photos, respond to review reminders, and send you a simple report: how many
              calls and form submissions came in, and whether you showed up when I asked ChatGPT for
              a local recommendation. No jargon, no vanity metrics.
            </p>
            <p>
              No long-term contract. Cancel anytime. The point is to show you whether it's
              working—not to lock you in.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="what-you-get reveal">
      <div class="container">
        <h2 class="section-title">What you actually get</h2>
        <div class="get-grid">
          <div class="get-card">
            <h3>A one-page leak check</h3>
            <p>
              Three problems, ranked by how many calls they're likely costing you, with screenshots.
            </p>
          </div>
          <div class="get-card">
            <h3>A fixed-price quote</h3>
            <p>No hourly billing, no surprise invoices. You know the price before I start.</p>
          </div>
          <div class="get-card">
            <h3>Before-and-after proof</h3>
            <p>
              Screenshots of the mobile page, the review widget, and the Google profile—before and
              after.
            </p>
          </div>
          <div class="get-card">
            <h3>A simple monthly report</h3>
            <p>Calls, form submissions, and AI visibility. One page, plain language.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <h2>Step one is free.</h2>
        <p>
          Send your website URL. I'll tell you the three things I'd fix first—no charge, no
          obligation.
        </p>
        <router-link to="/contact" class="btn-primary">Get a free leak check</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
useReveal()
</script>

<style lang="scss" scoped>
.how-page {
  padding-top: $navheight;
}

.page-hero {
  padding: 80px 0 40px;
  background: linear-gradient(180deg, $bg-light 0%, #fff 100%);

  .eyebrow {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $primary;
    margin-bottom: 12px;
  }

  .headline {
    font-size: clamp(30px, 4.5vw, 46px);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 18px;
    max-width: 760px;
  }

  .subhead {
    font-size: 17px;
    color: $text-light;
    max-width: 680px;
  }
}

.steps {
  padding: 60px 0 40px;

  .step {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 24px;
    padding: 36px 0;
    border-bottom: 1px solid rgba($primary, 0.1);

    &:last-child {
      border-bottom: none;
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }

  .step-marker {
    font-size: 36px;
    font-weight: 800;
    color: rgba($primary, 0.25);
    line-height: 1;

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }

  .step-body {
    h2 {
      font-size: clamp(22px, 3vw, 28px);
      font-weight: 800;
      margin-bottom: 12px;
    }

    p {
      font-size: 16px;
      color: $text-light;
      line-height: 1.7;
      margin-bottom: 12px;
      max-width: 720px;
    }
  }
}

.what-you-get {
  padding: 60px 0 80px;
  background: $bg-light;

  .section-title {
    font-size: clamp(24px, 3.5vw, 34px);
    font-weight: 800;
    margin-bottom: 30px;
  }

  .get-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  }

  .get-card {
    background: #fff;
    border-radius: $radius;
    padding: 28px 24px;
    border: 1px solid rgba($primary, 0.08);

    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      color: $text-light;
    }
  }
}

.cta-band {
  padding: 80px 0;
  background: $primary;
  color: #fff;
  text-align: center;

  h2 {
    font-size: clamp(24px, 3.5vw, 34px);
    font-weight: 800;
    margin-bottom: 12px;
  }

  p {
    font-size: 17px;
    opacity: 0.9;
    margin-bottom: 24px;
  }

  .btn-primary {
    display: inline-block;
    background: #fff;
    color: $primary;
    font-weight: 700;
    padding: 14px 28px;
    border-radius: 30px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>
