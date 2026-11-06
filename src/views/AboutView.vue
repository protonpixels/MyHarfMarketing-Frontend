<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <div class="bio">
          <p class="eyebrow">About</p>
          <h1 class="headline">I'm local, I build the site, and I write the words.</h1>
          <p class="subhead">
            Most contractors get pitched by an agency with a salesperson, a designer, and a
            copywriter—three people, three invoices, and no one who actually understands the work.
            I'm one person who does all three.
          </p>
        </div>
        <img src="@/assets/founder-img.jpg" alt="" class="founder-img" />
      </div>
    </section>

    <section class="story">
      <div class="container story-grid">
        <div class="story-copy">
          <h2>Why I started MyHarf</h2>
          <p>
            I'm a full-stack engineer who also writes copy. I've spent years building software and
            studying marketing, and I kept seeing the same thing: local businesses with great work
            and terrible online presence. Their site doesn't work on a phone, their Google profile
            has the wrong hours, and their copy sounds like everyone else's.
          </p>
          <p>
            Big agencies won't touch them—too small. Cheap freelancers build a site and disappear. I
            wanted to be the person in between: local, accountable, and able to fix the specific
            things that cost a contractor jobs.
          </p>
          <p>
            I'm based in New Paltz. I work with contractors across the Hudson Valley. I start every
            relationship with a free leak check, because I'd rather show you the problem than sell
            you a solution you don't need.
          </p>
        </div>
        <div class="story-card">
          <h3>What I bring</h3>
          <ul>
            <li>
              <strong>Engineering.</strong> I can read the code, fix the mobile layout, and sync the
              review widget—not just talk about it.
            </li>
            <li>
              <strong>Copywriting.</strong> I write the words that make a homeowner pick up the
              phone.
            </li>
            <li>
              <strong>Local SEO.</strong> I know how Kingston, New Paltz, and Poughkeepsie customers
              search.
            </li>
            <li><strong>One point of contact.</strong> No handoffs, no three-vendor runaround.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="values">
      <div class="container">
        <h2 class="section-title">How I work</h2>
        <div class="values-grid">
          <div class="value-card">
            <h3>Diagnose first</h3>
            <p>
              I don't quote a project before I've looked at your site on a phone. The leak check is
              free, and it's the most useful thing I do.
            </p>
          </div>
          <div class="value-card">
            <h3>Fix the leak, not the whole pipe</h3>
            <p>
              You don't need a redesign. You need the three things that are costing you calls
              fixed—fast and without a big invoice.
            </p>
          </div>
          <div class="value-card">
            <h3>Show the numbers</h3>
            <p>
              Every month you get a simple report: calls, form submissions, Google profile views. If
              it's not working, you'll know.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-band">
      <div class="container">
        <h2>Want to see what I'd fix first?</h2>
        <p>
          Send your website URL. I'll take a look on a phone and tell you the three things I'd
          fix—no charge.
        </p>
        <router-link to="/contact" class="btn-primary">Get a free leak check</router-link>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.about {
  padding-top: $navheight;
}

.page-hero {
  padding: 80px 0 40px;
  background: linear-gradient(180deg, $bg-light 0%, #fff 100%);

  .container {
    display: flex;
    gap: 30px;

    @media (max-width: 860px) {
      flex-direction: column;
      .founder-img {
        max-width: 61.8%;
        margin: 0 auto;
        margin-top: 60px;
      }
    }
  }
  .founder-img {
    max-width: 38.2%;
    border-radius: 30px;
    box-shadow: 0 3px 30px 3px rgba($color: $primary, $alpha: 0.5);
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

.story {
  padding: 60px 0 80px;

  .story-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 48px;
    align-items: start;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }

  .story-copy {
    h2 {
      font-size: clamp(24px, 3.5vw, 34px);
      font-weight: 800;
      margin-bottom: 18px;
    }

    p {
      font-size: 16px;
      color: $text-light;
      margin-bottom: 16px;
      line-height: 1.7;
    }
  }

  .story-card {
    background: $bg-light;
    border-radius: $radius;
    padding: 28px 24px;
    border: 1px solid rgba($primary, 0.08);

    h3 {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 16px;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;

      li {
        font-size: 15px;
        color: $text-light;
        padding-left: 18px;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: $primary;
        }

        strong {
          color: $text;
        }
      }
    }
  }
}

.values {
  padding: 60px 0 80px;
  background: $bg-light;

  .section-title {
    font-size: clamp(24px, 3.5vw, 34px);
    font-weight: 800;
    margin-bottom: 30px;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  }

  .value-card {
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
