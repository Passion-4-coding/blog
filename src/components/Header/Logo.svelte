<script lang="ts">
  export let inFooter = false;
</script>

<div class="logo-container" class:big={inFooter}>
  <a href="/">
		<img src="/images/logo.svg" alt="passion for coding">
	</a>
</div>

<style>
  .logo-container {
    background-color: var(--color-white);
    width: 75px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 10px;
  }
  .logo-container.big {
    transform: scale(1.5);
  }
  img {
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    .logo-container {
      width: 60px;
      height: 60px;
    }
	}
  @media screen and (max-width: 500px) {
    .logo-container {
      width: 40px;
      height: 40px;
    }
	}
</style>