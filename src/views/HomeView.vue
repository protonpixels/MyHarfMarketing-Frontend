<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="banner-img"></div>
      <div class="container hero-inner">
        <div class="hero-copy hero-animate">
          <p class="eyebrow">For Hudson Valley contractors</p>
          <h1 class="headline">Your website should be bringing you jobs.</h1>
          <p class="subhead">
            We find what's costing Hudson Valley contractors calls—mobile issues, Google profile
            gaps, and copy that doesn't convert—then fix it. No agency pricing. No three-vendor
            runaround.
          </p>
          <div class="hero-actions">
            <router-link to="/contact" class="btn-primary">Get a free leak check</router-link>
            <router-link to="/how-it-works" class="btn-ghost">See how it works</router-link>
          </div>
          <p class="hero-note">
            Based in New Paltz · Serving Kingston, Poughkeepsie & the Hudson Valley
          </p>
        </div>

        <div class="hero-visual hero-animate-delayed">
          <div class="visual-card">
            <div class="visual-head">
              <svg
                class="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M3 10.5 12 3l9 7.5" />
                <path d="M5 9.5V21h14V9.5" />
              </svg>
              <p class="visual-label">What we typically find</p>
            </div>
            <ul class="visual-list">
              <li>
                <span class="dot red"></span>
                <p>A mobile site that takes 6+ seconds to load. Visitors leave after 3.</p>
              </li>
              <li>
                <span class="dot red"></span>
                <p>
                  Google profile with the wrong hours. Customers call the next name on the list.
                </p>
              </li>
              <li>
                <span class="dot red"></span>
                <p>
                  18 five-star reviews, but the website shows 4.5. You're underselling yourself.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ROUTES -->
    <section class="routes reveal">
      <div class="container">
        <h2 class="section-title">Pick where to start.</h2>
        <div class="route-grid">
          <router-link to="/services" class="route-card">
            <h3>Services</h3>
            <p>
              What we actually do—and what we don't. Free leak check, fixed-price fix, optional
              monthly.
            </p>
            <span class="route-link">See services →</span>
          </router-link>
          <router-link to="/how-it-works" class="route-card">
            <h3>How it works</h3>
            <p>Three steps: free leak check, fix the leaks, optional monthly check-in.</p>
            <span class="route-link">Read the steps →</span>
          </router-link>
          <router-link to="/pricing" class="route-card">
            <h3>Pricing</h3>
            <p>Anchored to one job's profit. Free check, fixed-price fix, optional monthly.</p>
            <span class="route-link">See pricing →</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CONTACT STRIP -->
    <section class="contact reveal">
      <div class="container contact-inner">
        <h2 class="section-title">Get a free leak check</h2>
        <p class="section-sub">
          Send your website URL. We'll look at it on a phone and tell you the three things we'd fix
          first. No charge, no obligation.
        </p>
        <div class="contact-actions">
          <router-link to="/contact" class="btn-primary">Start the free leak check</router-link>
          <a href="tel:+13292317369" class="btn-ghost">Call +1 (329) 231-7369</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useReveal } from '@/composables/useReveal'
useReveal()
</script>

<style lang="scss" scoped>
.home {
  overflow-x: hidden;
}

/* HERO with onMounted animation */
.hero {
  background:
    radial-gradient(circle at 85% 15%, rgba($primary, 0.08), transparent 45%),
    linear-gradient(180deg, $bg-light 0%, #fff 100%);
  padding: 80px 0 60px;
  padding-top: $navheight;
  .banner-img {
    background-image: url('@/assets/hudson-valley.jpg');
    width: 100%;
    background-size: cover;
    background-position: bottom;
    height: 38.2vh;
    margin-bottom: 30px;
  }
  .hero-inner {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  .eyebrow {
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $primary;
    margin-bottom: 12px;
  }

  .headline {
    font-size: clamp(32px, 5vw, 52px);
    font-weight: 800;
    line-height: 1.1;
    color: $text;
    margin-bottom: 20px;
  }

  .subhead {
    font-size: 18px;
    color: $text-light;
    max-width: 560px;
    margin-bottom: 28px;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 16px;
  }

  .hero-note {
    font-size: 13px;
    color: $text-light;
  }
}

.hero-animate {
  animation: fadeUp 0.7s ease both;
}
.hero-animate-delayed {
  animation: fadeUp 0.7s ease 0.15s both;
}
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* VISUAL CARD */
.hero-visual .visual-card {
  background: #fff;
  border-radius: $radius;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
  padding: 24px;
  border: 1px solid rgba($primary, 0.08);
}

.visual-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;

  .icon {
    width: 18px;
    height: 18px;
    color: $primary;
  }

  .visual-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $text-light;
  }
}

.visual-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    gap: 10px;
    font-size: 14px;
    color: $text;
    line-height: 1.5;

    p {
      line-height: 1.5;
    }
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-top: 6px;
    flex-shrink: 0;
    background: #e53935;
  }
}

/* BUTTONS (unchanged from before) */
.btn-primary {
  display: inline-block;
  background: $primary;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 26px;
  border-radius: 30px;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
  &:hover {
    background: $primary-dark;
    transform: translateY(-2px);
  }
}
.btn-ghost {
  display: inline-block;
  background: transparent;
  color: $primary;
  font-weight: 700;
  font-size: 16px;
  padding: 14px 26px;
  border-radius: 30px;
  border: 2px solid rgba($primary, 0.25);
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
  &:hover {
    border-color: $primary;
    background: rgba($primary, 0.05);
  }
}

/* SECTION TITLES */
.section-title {
  font-size: clamp(26px, 4vw, 38px);
  font-weight: 800;
  line-height: 1.2;
  color: $text;
  margin-bottom: 14px;
}
.section-sub {
  font-size: 17px;
  color: $text-light;
  max-width: 680px;
  margin-bottom: 40px;
}

/* ROUTES */
.routes {
  padding: 60px 0 80px;
  background: #fff;

  .route-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .route-card {
    display: block;
    background: $bg-light;
    border-radius: $radius;
    padding: 28px 24px;
    border: 1px solid rgba($primary, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
    }

    h3 {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 8px;
      color: $text;
    }

    p {
      font-size: 15px;
      color: $text-light;
      margin-bottom: 14px;
    }

    .route-link {
      font-size: 14px;
      font-weight: 700;
      color: $primary;
    }
  }
}

/* CONTACT */
.contact {
  padding: 80px 0 100px;
  background: $bg-light;

  .contact-inner {
    text-align: center;

    .section-sub {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    justify-content: center;
  }
}
</style>
