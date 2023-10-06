<script lang="ts">
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<header>
	<Logo />
	<Navigation />
	<img class="doodle-1" src="/images/doodle-1.svg" alt="doodle">
	<img class="doodle-2" src="/images/doodle-2.svg" alt="doodle">
	<img class="doodle-3" src="/images/doodle-3.svg" alt="doodle">
</header>

<style>
	header {
		background-color: var(--color-primary);
		height: 127px;
		padding: 0px 80px;
		align-items: center;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		border-radius: 0px 0px var(--border-radius) var(--border-radius);
	}
	.doodle-1 {
		position: absolute;
		top: -15px;
		left: 280px;
	}
	.doodle-2 {
		position: absolute;
		bottom: 5px;
		left: 10px;
	}
	.doodle-3 {
		position: absolute;
		top: 0px;
		right: 0px;
	}
  @media screen and (max-width: 768px) {
		header {
			height: 100px;
      padding: 0px 20px;
		}
    .doodle-1 {
      width: 40px;
      top: 0px;
      left: 170px;
    }
    .doodle-2 {
      width: 18px;
      bottom: 2px;
      left: 2px;
    }
    .doodle-3 {
      width: 31px;
    }
	}
  @media screen and (max-width: 500px) {
		header {
			height: 57px;
		}
    .doodle-3 {
      width: 15px;
    }
    .doodle-2 {
      width: 14px;
      bottom: 2px;
      left: 2px;
    }
	}
</style>
