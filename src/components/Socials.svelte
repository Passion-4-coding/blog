<script lang="ts">
	import Paragraph from "./Paragraph.svelte";
  import SocialIcon from "./SocialIcon.svelte";
	import Title from "./Title.svelte"; 
</script>

<div class="container" id="socials">
  <div class="content">
    <Title>Наші соцмережі</Title>
    <Paragraph align="center">
      У нас є соціальні мережі, де ти зможеш не тільки бути в курсі нових статей, а ще й читати новини, сміятись над мемами та зберігати корисні шпаргалки по програмуванню. Долучайся!
    </Paragraph>
    <div class="social">
      <SocialIcon icon="instagram" />
      <SocialIcon icon="telegram" />
      <SocialIcon icon="discord" />
    </div>
  </div>
</div>

<style>
  .container {
    padding: 50px 40px;
  }

  .social {
    display: flex;
    gap: 30px;
    margin-top: 20px;
    justify-content: center;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
  }
</style>

<!-- markup (zero or more items) goes here -->