<script lang="ts">
	import '../app.css';
	import Footer from '../components/Footer/Footer.svelte';
	import Header from '../components/Header/Header.svelte';
</script>

<Header />
<main>
  <div class="content">
    <slot />
  </div>
</main>
<Footer />

<style>
	.content {
		max-width: 1400px;
		padding: 20px;
		margin: 0 auto;
	}

	@media screen and (max-width: 600px) {
		.content {
			padding: 10px;
		}
	}
</style>
