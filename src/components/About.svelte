<script>
	import Paragraph from "./Paragraph.svelte";
	import Title from "./Title.svelte";

</script>
<div class="container" id="about">
  <div class="content">
    <Title>Про нас</Title>
    <Paragraph align="center">
      Ми українська спільнота розробників, що активно розвивається. Passion for coding була заснована для об'єднання людей, щоб створити гарну атмосферу для спільного навчання. Головною  метою нашого блогу є поширення корисного контенту. Саме тут ми розповідаємо цікаве зі світу ІТ: фріланс, програмування, дизайн та інше.
    </Paragraph>
    <Paragraph align="center">
      Україномовний блог спільноти "Passion for coding" буде корисний не тільки початківцям, але й айтішникам, які уже довго у професії. Ми пишемо свої статті опираючись на багаторічний досвід в ІТ галузі. Читайте нас та примножуйте свої знання!
    </Paragraph>
  </div>
  <img class="doodle-4" src="/images/doodle-4.svg" alt="doodle">
  <img class="doodle-5" src="/images/doodle-5.svg" alt="doodle">
  <img class="doodle-6" src="/images/doodle-6.svg" alt="doodle">
  <img class="doodle-7" src="/images/doodle-7.svg" alt="doodle">
  <img class="doodle-7-reverse" src="/images/doodle-7.svg" alt="doodle">
  <img class="doodle-8" src="/images/doodle-8.svg" alt="doodle">
</div>

<style>
  .container {
    background-color: var(--color-primary);
    padding: 40px;
    position: relative;
    overflow: hidden;
  }

  .content {
    background-color: var(--color-white);
    border-radius: var(--border-radius);
    padding: 40px 40px;
    z-index: 2;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
  }

  .doodle-4 {
    position: absolute;
    top: 10%;
    left: 100px;
    z-index: 1;
  }
  .doodle-5 {
    position: absolute;
    top: 20%;
    right: 20px;
    z-index: 1;
  }
  .doodle-6 {
    position: absolute;
    top: 30%;
    left: 80px;
    transform: scale(1.5);
    z-index: 1;
  }
  .doodle-7 {
    position: absolute;
    top: 0px;
    right: 300px;
    transform: rotate(180deg);
    z-index: 1;
  }
  .doodle-7-reverse {
    position: absolute;
    bottom: 0px;
    right: 100px;
    z-index: 1;
  }
  .doodle-8 {
    position: absolute;
    top: 70%;
    left: 60px;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 30px;
    }
    .content {
      padding: 50px 40px;
    }
    .doodle-4, .doodle-5, .doodle-6, .doodle-7-reverse, .doodle-8 {
      transform: scale(0.5);
    }
    .doodle-5 {
      top: 0px;
      left: 0;
    }
    .doodle-6 {
      top: initial;
      bottom: 0px;
      left: 100px;
    }
    .doodle-7 {
      right: 50px;
      top: -40px;
      transform: scale(0.5) rotate(180deg);
    }
    .doodle-7-reverse {
      bottom: -40px;
    }
    .doodle-8 {
      left: initial;
      right: -30px;
    }
	}
  @media screen and (max-width: 500px) {
    .container {
      padding: 20px 10px;
    }
    .content {
      padding: 20px 10px;
    }
	}
</style>
