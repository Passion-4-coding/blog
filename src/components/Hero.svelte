<script>
	import Paragraph from "./Paragraph.svelte";

</script>
<div class="container">
  <div class="content">
    <h1>Привіт</h1>
    <Paragraph>
      У нашому блозі ти можеш знайти багато корисної та цікавої інформації для розробників, яка допоможе піднятися по кар’єрним сходинкам. Тож швиденько заварюй смачний чай та знайомся з нашим блогом.
    </Paragraph>
    <Paragraph>
      Бажаємо гарного читання
    </Paragraph>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    background-image: url(/images/hero-cat-d.jpg);
    height: 500px;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 100% 0px;
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
      padding-top: 40px;
      height: 600px;
      background-repeat: no-repeat;
      background-position: right 300px;
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
      padding-top: 20px;
      height: 500px;
    }
    h1 {
      font-size: 28px;
      font-weight: 600;
      margin: 0px 0px 15px;
    }
	}
</style>
