<script lang="ts">
	import Logo from "../Header/Logo.svelte";
	import SocialIcon from "../SocialIcon.svelte";
	import FooterDoodles from "./FooterDoodles.svelte";

</script>

<div class="container">
  <picture>
    <source srcset="/images/footer-cat-d.webp, /images/footer-cat-t.webp 768w, /images/footer-cat-m.webp 500w" type="image/webp" />
    <source srcset="/images/footer-cat-d.avif, /images/footer-cat-t.avif 768w, /images/footer-cat-m.avif 500w" type="image/avif" />
    <source srcset="/images/footer-cat-d.jpg, /images/footer-cat-t.jpg 768w, /images/footer-cat-m.jpg 500w" />
    <img class="cat" width="774" height="735" src="/images/footer-cat-d.jpg" alt="footer cat" fetchpriority="low" />
  </picture>
  <footer>
    <picture>
      <source srcset="/images/paws-d.webp, /images/paws-t.webp 768w, /images/paws-m.webp 500w" type="image/webp" />
      <source srcset="/images/paws-d.avif, /images/paws-t.avif 768w, /images/paws-m.avif 500w" type="image/avif" />
      <source srcset="/images/paws-d.jpg, /images/paws-t.jpg 768w, /images/paws-m.jpg 500w" />
      <img class="paws" width="665" height="105" src="/images/paws-d.jpg" alt="footer cat paws" fetchpriority="low" />
    </picture>
    <div class="content">
      <Logo inFooter />
      <a href="mailto:alex@pfc.dev" class="mail">alex@pfc.dev</a>
      <nav>
        <a href="#about">Про нас</a>
        <hr />
        <a href="#articles">Статті</a>
      </nav>
      <div class="social">
        <SocialIcon icon="instagram" />
        <SocialIcon icon="telegram" />
        <SocialIcon icon="discord" />
      </div>
    </div>
    <FooterDoodles />
  </footer>
</div>

<style>
  .container {
    padding-top: 330px;
    position: relative;
    overflow: hidden;
  }
  .cat {
    position: absolute;
    z-index: 1;
    top: 0px;
    left: 100px;
    right: 0px;
    margin: 0 auto;
    max-width: 600px;
    height: auto;
  }
  .paws {
    position: absolute;
    z-index: 1;
    top: -10px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    height: auto;
  }
  footer {
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
    border-bottom: 3px solid transparent;
    font-size: 24px;
    font-weight: 600;
  }
  .mail {
    margin: 40px 0px 10px;
  }
  .content {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  a:hover {
    border-bottom: 3px solid var(--color-secondary);
  }
  hr {
    border: none;
    border-left: 2px solid var(--color-secondary);
  }
  nav {
    display: flex;
    gap: 10px;
  }
  .social {
    display: flex;
    gap: 30px;
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    .container {
      padding-top: 180px;
    }
    .cat {
      max-width: 400px;
      left: 50px;
    }
    footer {
      padding: 30px 10px 50px;
    }
    a {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      padding-top: 140px;
    }
    .cat {
      max-width: 300px;
      left: 30px;
    }
    footer {
      padding: 30px 20px 40px;
    }
    a {
      font-size: 18px;
    }
    nav {
      flex-direction: column;
      gap: 5px;
    }

    a {
      border-bottom: 2px solid var(--color-secondary);
    }

    a:hover {
      border-bottom: 2px solid var(--color-secondary);
    }

    hr {
      display: none;
    }
  }
</style>