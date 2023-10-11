<script>
	import Paragraph from "./Paragraph.svelte";

</script>
<div class="container">
  <div class="content">
    <h1>Вітаємо в айтішному україномовному блозі "Passion for coding"</h1>
    <Paragraph>
      Тут ти можеш знайти багато корисної та цікавої інформації для розробників, яка допоможе піднятися по кар’єрним сходинкам. Тож швиденько заварюй смачний чай і починай знайомство з якісним україномовним контентом.
    </Paragraph>
    <Paragraph>
      Бажаємо гарного читання!
    </Paragraph>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    background-image: url(/images/hero-cat-d.jpg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right 0px;
    padding: 40px 0px;
  }
  :global(.avif) .container {
    background-image: url(/images/hero-cat-d.avif);
  }
  :global(.webp) .container {
    background-image: url(/images/hero-cat-d.webp);
  }
  .content {
    max-width: 510px;
    padding-left: 80px;
  }
  h1 {
    font-size: 32px;
    font-weight: 600;
    margin: 0px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    .container {
      background-image: url(/images/hero-cat-t.jpg);
      justify-content: center;
      align-items: flex-start;
      padding: 30px 0px 40vw;
      background-position: right 400px;
    }
    :global(.avif) .container {
      background-image: url(/images/hero-cat-t.avif);
    }
    :global(.webp) .container {
      background-image: url(/images/hero-cat-t.webp);
    }
    .content {
      text-align: center;
      max-width: 90%;
      padding-left: 0px;
    }
	}
  @media screen and (max-width: 500px) {
    .container {
      background-image: url(/images/hero-cat-m.jpg);
      padding: 30px 0px 30vw;
      background-position: right 300px;
    }
    .content {
      max-width: 100%;
    }
    :global(.avif) .container {
      background-image: url(/images/hero-cat-m.avif);
    }
    :global(.webp) .container {
      background-image: url(/images/hero-cat-m.webp);
    }
    h1 {
      font-size: 24px;
      font-weight: 600;
      margin: 0px 0px 15px;
    }
	}
</style>
