<script lang="ts">
	import { page } from '$app/stores';
	import '../../app.css';
	import Link from '../../components/Link.svelte';

	$: uaLink = generateLink('ua', $page.url.pathname);
	$: enLink = generateLink('en', $page.url.pathname);

	const generateLink = (lang: string, pathname: string) => {
    const paths = pathname.split('/');
    return '/' + [lang, ...paths.slice(2)].join('/');
  }
</script>

<header>
	<Link to="/">
		<img src="/images/logo.svg" alt="passion for coding">
	</Link>
	<ul class="languages">
		<li class="language">
			<a href={uaLink} class:active={$page.params.code === 'ua'}>ua</a>
		</li>
		<li class="language">
			<a href={enLink} class:active={$page.params.code === 'en'}>en</a>
		</li>
	</ul>
</header>
<main>
  <div class="content">
    <slot />
  </div>
</main>

<style>
	header {
		background-color: var(--color-primary-10);
		padding: 20px;
		text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		max-width: 1400px;
		padding: 20px;
		margin: 0 auto;
	}
	ul.languages {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0px;
		gap: 10px;
  }
	.language a {
		text-decoration: none;
		color: var(--color-text);
	}
	.language .active {
    color: 700;
    color: var(--color-text);
		text-decoration: underline;
  }
  .language a:hover {
    text-decoration: underline;
  }

	@media screen and (max-width: 600px) {
		.content {
			padding: 10px;
		}
	}
</style>
