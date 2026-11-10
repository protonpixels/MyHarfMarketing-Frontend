<template>
  <div class="services-page">
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Services</p>
        <h1 class="headline">What we actually do—and what we don't.</h1>
        <p class="subhead">
          Most contractors have been pitched "a new website" before and it didn't bring them more
          calls. We start with a diagnosis, fix what's actually broken, and show you the numbers. If
          nothing's broken, we'll tell you that too.
        </p>
      </div>
    </section>

    <section class="core reveal">
      <div class="container">
        <h2 class="section-title">The core offer: a free leak check.</h2>
        <p class="section-sub">
          This is where every relationship starts. No pitch, no pressure. We open your site on a
          real phone and tell you the three things we'd fix first.
        </p>
        <div class="core-grid">
          <div class="core-card">
            <span class="core-num">01</span>
            <h3>Mobile experience</h3>
            <p>
              Does the page scroll sideways? Is the phone number one tap away? Does the form
              actually submit?
            </p>
          </div>
          <div class="core-card">
            <span class="core-num">02</span>
            <h3>Google Business Profile</h3>
            <p>
              Are the hours correct? Are there photos of real work? Are reviews replied to? Do you
              show up when locals search?
            </p>
          </div>
          <div class="core-card">
            <span class="core-num">03</span>
            <h3>Response and AI visibility</h3>
            <p>
              We fill out your form once to see how fast you reply. We ask ChatGPT for a local
              recommendation to see if you appear.
            </p>
          </div>
        </div>
        <p class="core-note">
          You get a one-page summary with screenshots, ranked by what's likely costing you the most
          calls. No charge. If nothing's broken, we'll say so.
        </p>
      </div>
    </section>

    <section class="paid reveal">
      <div class="container">
        <h2 class="section-title">If you want us to fix it.</h2>
        <p class="section-sub">
          Fixed price, quoted before we start. Typical fixes below—we only take on what we can
          actually deliver.
        </p>
        <div class="paid-grid">
          <div class="paid-card">
            <h3>Mobile & technical fixes</h3>
            <ul>
              <li>Horizontal scroll and layout issues</li>
              <li>Click-to-call phone number</li>
              <li>Contact form that actually submits</li>
              <li>Review widget synced with your real Google rating</li>
            </ul>
          </div>
          <div class="paid-card">
            <h3>Copy that makes people call</h3>
            <ul>
              <li>Homepage headline and subhead rewrite</li>
              <li>Service page copy in plain language</li>
              <li>Google Business Profile description</li>
              <li>Local keywords (town + service) in the right places</li>
            </ul>
          </div>
          <div class="paid-card">
            <h3>Local visibility basics</h3>
            <ul>
              <li>1–2 town-level service pages</li>
              <li>FAQ page so AI search can find you</li>
              <li>Google profile photos and weekly posts</li>
              <li>Review request template for past customers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="monthly reveal">
      <div class="container monthly-inner">
        <div class="monthly-copy">
          <h2 class="section-title">Optional: keep it working.</h2>
          <p>
            After the fix, some contractors want someone to keep an eye on it. The monthly check-in
            is simple: we test the form, update the Google profile, and send you a one-page report
            with three numbers—calls, form submissions, and whether you showed up when we asked
            ChatGPT for a local recommendation.
          </p>
          <p>
            No long-term contract. Cancel anytime. The point is to show you whether it's working—not
            to lock you in.
          </p>
        </div>
        <div class="monthly-card">
          <p class="monthly-label">Growth Monitor options</p>
          <p class="monthly-price">$149–$299<span>/mo</span></p>
          <ul>
            <li>Form and phone test</li>
            <li>Google profile post + photo update</li>
            <li>Review request reminder</li>
            <li>One-page report: calls, forms, AI visibility</li>
          </ul>
          <router-link to="/contact" class="btn-primary">Ask about monthly</router-link>
        </div>
      </div>
    </section>

    <section class="not-offered reveal">
      <div class="container">
        <h2 class="section-title">What we don't do.</h2>
        <p class="section-sub">Being clear about this saves both of us time.</p>
        <div class="not-grid">
          <div class="not-card">
            <h3>Ad management</h3>
            <p>
              We don't run Google or Meta ads. Ads amplify a leaky site—they don't fix it. We fix
              the leaks first.
            </p>
          </div>
          <div class="not-card">
            <h3>Full website redesigns</h3>
            <p>
              You usually don't need one. We fix the specific things costing you calls, not rebuild
              from scratch.
            </p>
          </div>
          <div class="not-card">
            <h3>Ongoing SEO retainers</h3>
            <p>
              We're not a monthly SEO agency. If you want that, we'll tell you honestly and point
              you elsewhere.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <h2>Start with the free leak check.</h2>
        <p>Send your website URL. We'll tell you the three things we'd fix first—no charge.</p>
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
.services-page {
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
    max-width: 700px;
  }
}

.section-title {
  font-size: clamp(24px, 3.5vw, 34px);
  font-weight: 800;
  margin-bottom: 14px;
}

.section-sub {
  font-size: 16px;
  color: $text-light;
  max-width: 680px;
  margin-bottom: 32px;
}

/* CORE */
.core {
  padding: 60px 0;

  .core-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .core-card {
    background: #fff;
    border: 1px solid rgba($primary, 0.12);
    border-radius: $radius;
    padding: 28px 24px;

    .core-num {
      display: inline-block;
      font-size: 13px;
      font-weight: 800;
      color: $primary;
      background: rgba($primary, 0.08);
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 14px;
    }

    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 15px;
      color: $text-light;
      line-height: 1.6;
    }
  }

  .core-note {
    font-size: 15px;
    color: $text-light;
    background: $bg-light;
    border-left: 4px solid $primary;
    padding: 16px 20px;
    border-radius: 0 12px 12px 0;
    max-width: 760px;
  }
}

/* PAID */
.paid {
  padding: 60px 0;
  background: $bg-light;

  .paid-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .paid-card {
    background: #fff;
    border-radius: $radius;
    padding: 28px 24px;
    border: 1px solid rgba($primary, 0.08);

    h3 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 14px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        font-size: 15px;
        color: $text-light;
        padding-left: 20px;
        position: relative;
        line-height: 1.5;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $primary;
          font-weight: 700;
        }
      }
    }
  }
}

/* MONTHLY */
.monthly {
  padding: 60px 0;

  .monthly-inner {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .monthly-copy {
    p {
      font-size: 16px;
      color: $text-light;
      line-height: 1.7;
      margin-bottom: 14px;
    }
  }

  .monthly-card {
    background: #fff;
    border: 2px solid $primary;
    border-radius: $radius;
    padding: 28px 24px;
    box-shadow: 0 18px 40px rgba($primary, 0.12);

    .monthly-label {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: $text-light;
      margin-bottom: 8px;
    }

    .monthly-price {
      font-size: 32px;
      font-weight: 800;
      color: $primary;
      margin-bottom: 18px;

      span {
        font-size: 15px;
        font-weight: 600;
        color: $text-light;
      }
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 22px;

      li {
        font-size: 15px;
        color: $text-light;
        padding-left: 20px;
        position: relative;

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: $primary;
          font-weight: 700;
        }
      }
    }
  }
}

/* NOT OFFERED */
.not-offered {
  padding: 60px 0 80px;
  background: $bg-light;

  .not-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .not-card {
    background: #fff;
    border-radius: $radius;
    padding: 24px;
    border: 1px solid rgba(0, 0, 0, 0.06);

    h3 {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    p {
      font-size: 15px;
      color: $text-light;
      line-height: 1.6;
    }
  }
}

/* CTA BAND */
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

/* SHARED BUTTON */
.btn-primary {
  display: inline-block;
  background: $primary;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 22px;
  border-radius: 30px;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background: $primary-dark;
    transform: translateY(-1px);
  }
}
</style>
