<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <div class="brand">
          <img src="@/assets/logo.png" alt="MyHarf logo" class="logo" />
          <div>
            <p class="name">MyHarf</p>
            <p class="slogan">More calls. Less guesswork.</p>
          </div>
        </div>
        <p class="blurb">
          Website fixes, copy, and local SEO for Hudson Valley contractors. Based in New Paltz.
        </p>
      </div>

      <div class="footer-col">
        <h4>Pages</h4>
        <router-link to="/how-it-works">How it works</router-link>
        <router-link to="/pricing">Pricing</router-link>
        <router-link to="/about">About</router-link>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <a href="tel:+13292317369">+1 (329) 231-7369</a>
        <a href="mailto:info@myharf.com">hello@myharf.com</a>
      </div>

      <div class="footer-col">
        <h4>Service area</h4>
        <p>New Paltz · Kingston · Poughkeepsie · Newburgh · Hudson Valley</p>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} MyHarf. All rights reserved.</p>
      <router-link to="/#contact">Get a free leak check →</router-link>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  background: #0b1220;
  color: #cfd6e6;
  padding: 60px 0 24px;
  margin-top: 0;

  .footer-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    gap: 32px;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    @media (max-width: 860px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;

    .logo {
      max-height: 36px;
    }
    .name {
      font-size: 18px;
      font-weight: 800;
      color: #fff;
      line-height: 1.2;
    }
    .slogan {
      font-size: 12px;
      color: #9aa6bd;
    }
  }

  .blurb {
    font-size: 14px;
    line-height: 1.6;
    color: #9aa6bd;
    max-width: 320px;
  }

  .footer-col {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #fff;
      margin-bottom: 4px;
    }

    a,
    p {
      font-size: 14px;
      color: #cfd6e6;
      transition: color 0.2s ease;
    }

    a:hover {
      color: #fff;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    font-size: 13px;
    color: #8b96ab;

    a {
      color: #cfd6e6;

      &:hover {
        color: #fff;
      }
    }

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 8px;
      text-align: center;
    }
  }
}
</style>
