<template>
  <div class="pricing">
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Pricing</p>
        <h1 class="headline">Priced against one job—not against an agency retainer.</h1>
        <p class="subhead">
          You shouldn't have to guess what marketing costs or whether it's working. Every package
          below is anchored to a simple idea: if one extra job doesn't cover the fee, it's not worth
          doing.
        </p>
      </div>
    </section>

    <section class="plans">
      <div class="container plans-grid">
        <div class="plan">
          <h3>Free Leak Check</h3>
          <p class="price">$0</p>
          <p class="price-note">Free, one page, no obligation</p>
          <ul>
            <li>Mobile site review on a real phone</li>
            <li>Google Business Profile check</li>
            <li>Contact flow and form test</li>
            <li>Response time + AI visibility check</li>
            <li>One-page summary with screenshots</li>
          </ul>
          <router-link to="/contact" class="plan-btn">Get the free leak check</router-link>
        </div>

        <div class="plan featured">
          <span class="badge">Most popular</span>
          <h3>Fix the Leaks</h3>
          <p class="price">$800–$1,500</p>
          <p class="price-note">One-time · 1–2 weeks</p>
          <ul>
            <li>Fix mobile layout and horizontal scroll</li>
            <li>Sync review widget with your Google profile</li>
            <li>Rewrite homepage and Google profile copy</li>
            <li>Add local keywords (Kingston, New Paltz, etc.)</li>
            <li>1–2 town-level service pages or FAQ page</li>
            <li>Before-and-after screenshots on delivery</li>
          </ul>
          <router-link to="/contact" class="plan-btn primary">Start with a leak check</router-link>
        </div>

        <div class="plan">
          <h3>Monthly Check-In</h3>
          <p class="price">$150–$300<span>/mo</span></p>
          <p class="price-note">No long-term commitment</p>
          <ul>
            <li>Monthly call and form report</li>
            <li>AI visibility check (do you appear?)</li>
            <li>Google profile posts and photo updates</li>
            <li>Review request reminders</li>
            <li>Fix small issues as they come up</li>
          </ul>
          <router-link to="/contact" class="plan-btn">Ask about monthly</router-link>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2 class="section-title">Common questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <h3>Why is the leak check free?</h3>
            <p>
              Because most contractors have been pitched "a new website" before and don't trust it.
              We'd rather show you the specific problems first. If it's not worth fixing, we'll tell
              you.
            </p>
          </div>
          <div class="faq-item">
            <h3>What if my site is built on Wix or Squarespace?</h3>
            <p>
              We can still fix most mobile and copy issues within the platform's editor. If the
              platform is too restrictive, we'll say so during the leak check.
            </p>
          </div>
          <div class="faq-item">
            <h3>Do you run ads?</h3>
            <p>
              Not as a first step. Ads amplify a leaky site—they don't fix it. We fix the leaks
              first, then talk about ads if it makes sense.
            </p>
          </div>
          <div class="faq-item">
            <h3>How do I know it's working?</h3>
            <p>
              You get a simple monthly report: calls, form submissions, and whether you showed up
              when we asked ChatGPT for a local recommendation. No jargon, no vanity metrics.
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

<script setup></script>
<style lang="scss" scoped>
.pricing {
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

.plans {
  padding: 40px 0 80px;

  .plans-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    align-items: stretch;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .plan {
    background: #fff;
    border: 1px solid rgba($primary, 0.12);
    border-radius: $radius;
    padding: 32px 26px;
    display: flex;
    flex-direction: column;
    position: relative;

    &.featured {
      border: 2px solid $primary;
      box-shadow: 0 18px 40px rgba($primary, 0.12);
    }

    .badge {
      position: absolute;
      top: -12px;
      left: 26px;
      background: $primary;
      color: #fff;
      font-size: 12px;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    h3 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .price {
      font-size: 34px;
      font-weight: 800;
      color: $primary;
      line-height: 1.1;

      span {
        font-size: 16px;
        font-weight: 600;
        color: $text-light;
      }
    }

    .price-note {
      font-size: 13px;
      color: $text-light;
      margin-bottom: 20px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 28px;
      flex-grow: 1;

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

    .plan-btn {
      display: block;
      text-align: center;
      padding: 12px 18px;
      border-radius: 30px;
      font-weight: 700;
      font-size: 15px;
      border: 2px solid rgba($primary, 0.25);
      color: $primary;
      transition: all 0.2s ease;

      &:hover {
        border-color: $primary;
        background: rgba($primary, 0.05);
      }

      &.primary {
        background: $primary;
        border-color: $primary;
        color: #fff;

        &:hover {
          background: $primary-dark;
        }
      }
    }
  }
}

.faq {
  padding: 60px 0 80px;
  background: $bg-light;

  .section-title {
    font-size: clamp(24px, 3.5vw, 34px);
    font-weight: 800;
    margin-bottom: 30px;
  }

  .faq-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .faq-item {
    background: #fff;
    border-radius: $radius;
    padding: 24px;
    border: 1px solid rgba($primary, 0.08);

    h3 {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 8px;
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
