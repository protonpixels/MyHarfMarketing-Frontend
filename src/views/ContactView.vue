<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Contact</p>
        <h1 class="headline">Let's find out what your website is costing you.</h1>
        <p class="subhead">
          No pitch, no pressure. Send us your website URL and we'll tell you the three things we'd
          fix first—on a phone, where your customers actually are. You'll get a one-page summary
          with screenshots. If nothing's broken, we'll tell you that too.
        </p>
      </div>
    </section>

    <section class="expect reveal">
      <div class="container">
        <h2 class="section-title">Here's exactly what happens next.</h2>
        <ol class="steps-list">
          <li>
            <span class="num">1</span>
            <p>You send your website URL and a sentence about your business.</p>
          </li>
          <li>
            <span class="num">2</span>
            <p>
              Within one business day, we open your site on a real phone and check three things:
              whether it loads and scrolls properly, whether your Google Business Profile is
              accurate, and whether your contact form or phone number actually works.
            </p>
          </li>
          <li>
            <span class="num">3</span>
            <p>
              You get a one-page summary with screenshots, ranked by what's likely costing you the
              most calls.
            </p>
          </li>
        </ol>
        <p class="expect-note">
          That's it. No calendar link, no "quick 15-minute call" before you've seen anything. If the
          summary is useful, we can talk about fixing it. If not, you've lost nothing.
        </p>
      </div>
    </section>

    <section class="templates reveal">
      <div class="container templates-grid">
        <div class="template-card">
          <h3>Prefer email? Here's all you need to send:</h3>
          <blockquote>
            "Hi—my name is [name], I run [business] in [town]. Our website is [URL]. We mostly do
            [roofing/landscaping/construction] for homeowners in [area]. Curious what you'd fix
            first."
          </blockquote>
          <p class="template-note">That's enough. We'll take it from there.</p>
          <a href="mailto:hello@myharf.com" class="btn-primary">Email hello@myharf.com</a>
        </div>

        <div class="template-card">
          <h3>Prefer to call? Here's what to say:</h3>
          <blockquote>
            "Hi, I saw your site—I run a [roofing/landscaping/construction] company in [town] and
            I'd like the free leak check on my website."
          </blockquote>
          <p class="template-note">
            We'll ask for your URL and a sentence about your business. The call takes about two
            minutes; the check itself happens after.
          </p>
          <a href="tel:+13292317369" class="btn-primary">Call +1 (329) 231-7369</a>
        </div>
      </div>
    </section>

    <section class="objections reveal">
      <div class="container">
        <h2 class="section-title">A few things you might be wondering:</h2>
        <div class="objection-grid">
          <div class="objection">
            <h3>"Is this just a sales call?"</h3>
            <p>
              No. The check is free and the summary is yours to keep. If you want us to fix
              something, we'll quote a fixed price. If not, no follow-up.
            </p>
          </div>
          <div class="objection">
            <h3>"We already have someone who does our website."</h3>
            <p>Good—we'll tell you what we'd fix, and you can hand it to them. No hard feelings.</p>
          </div>
          <div class="objection">
            <h3>"We're too small for an agency."</h3>
            <p>
              That's exactly who this is for. Our fees are anchored to one job's profit, not an
              agency retainer.
            </p>
          </div>
          <div class="objection">
            <h3>"What if nothing's wrong?"</h3>
            <p>Then we'll say so, and you'll have a second opinion for free.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="form" class="form-section reveal">
      <div class="container form-inner">
        <h2 class="section-title">Send us your site. We'll take it from here.</h2>
        <p class="section-sub">Three fields. That's it.</p>

        <form
          v-if="!submitted"
          class="contact-form"
          name="leak-check"
          method="POST"
          @submit.prevent="submitForm"
        >
          <p hidden>
            <label
              >Don't fill this out:
              <input name="access-key" value="fbd90412-8aa7-42a2-9c7a-392d2dc3046d"
            /></label>
          </p>
          <div class="field">
            <label for="business">Business name</label>
            <input
              id="business"
              v-model="form.business"
              name="business"
              type="text"
              required
              placeholder="e.g. ACR Construction"
            />
          </div>
          <div class="field">
            <label for="url">Website URL</label>
            <input
              id="url"
              v-model="form.url"
              type="url"
              name="url"
              required
              placeholder="https://yourbusiness.com"
            />
          </div>
          <div class="field">
            <label for="email">Email address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              required
              placeholder="you@yourbusiness.com"
            />
          </div>
          <button type="submit" class="btn-primary form-submit">Request FREE Leak Check</button>
          <p class="form-note">No spam, no newsletter, no follow-up unless you ask.</p>
        </form>

        <div v-else class="form-success">
          <h3>
            Got it. We'll open your site on a phone within one business day and send you the
            one-page summary.
          </h3>
          <p>
            If you'd rather talk first, call <a href="tel:+13292317369">+1 (329) 231-7369</a>.
            Otherwise, watch your inbox.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
useReveal()

const submitted = ref(false)
const form = reactive({
  business: '',
  url: '',
  email: '',
})

async function submitForm() {
  const formData = new FormData(document.querySelector('.contact-form'))
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    submitted.value = true
  } catch (error) {
    alert('Something went wrong. Please email hello@myharf.com directly.')
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
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
    max-width: 700px;
  }
}

.section-title {
  font-size: clamp(24px, 3.5vw, 34px);
  font-weight: 800;
  margin-bottom: 20px;
}

.section-sub {
  font-size: 17px;
  color: $text-light;
  margin-bottom: 32px;
}

/* EXPECT */
.expect {
  padding: 60px 0;

  .steps-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 760px;
    margin-bottom: 24px;

    li {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }

    .num {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba($primary, 0.1);
      color: $primary;
      font-weight: 800;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2px;
    }

    p {
      font-size: 16px;
      color: $text-light;
      line-height: 1.7;
    }
  }

  .expect-note {
    font-size: 15px;
    color: $text-light;
    background: $bg-light;
    border-left: 4px solid $primary;
    padding: 16px 20px;
    border-radius: 0 12px 12px 0;
    max-width: 760px;
  }
}

/* TEMPLATES */
.templates {
  padding: 40px 0 60px;

  .templates-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .template-card {
    background: #fff;
    border: 1px solid rgba($primary, 0.12);
    border-radius: $radius;
    padding: 28px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 18px;
      font-weight: 800;
      line-height: 1.4;
    }

    blockquote {
      background: $bg-light;
      border-radius: 12px;
      padding: 16px;
      font-size: 15px;
      color: $text;
      line-height: 1.6;
      font-style: italic;
      border-left: 3px solid $primary;
    }

    .template-note {
      font-size: 14px;
      color: $text-light;
    }

    .btn-primary {
      align-self: flex-start;
      margin-top: 4px;
    }
  }
}

/* OBJECTIONS */
.objections {
  padding: 60px 0;
  background: $bg-light;

  .objection-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .objection {
    background: #fff;
    border-radius: $radius;
    padding: 24px;
    border: 1px solid rgba($primary, 0.08);

    h3 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 8px;
      color: $text;
    }

    p {
      font-size: 15px;
      color: $text-light;
      line-height: 1.6;
    }
  }
}

/* FORM */
.form-section {
  padding: 60px 0 100px;
  background: #fff;

  .form-inner {
    max-width: 560px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 14px;
      font-weight: 600;
      color: $text;
    }

    input {
      font-size: 16px;
      padding: 12px 14px;
      border: 1px solid rgba($primary, 0.2);
      border-radius: 10px;
      outline: none;
      transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

      &:focus {
        border-color: $primary;
        box-shadow: 0 0 0 3px rgba($primary, 0.12);
      }
    }
  }

  .form-submit {
    margin-top: 6px;
    width: 100%;
    border: none;
    cursor: pointer;
  }

  .form-note {
    font-size: 13px;
    color: $text-light;
    text-align: center;
  }

  .form-success {
    background: rgba($primary, 0.06);
    border: 1px solid rgba($primary, 0.15);
    border-radius: $radius;
    padding: 28px 24px;

    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    p {
      font-size: 15px;
      color: $text-light;

      a {
        color: $primary;
        font-weight: 600;
      }
    }
  }
}

/* BUTTONS */
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
