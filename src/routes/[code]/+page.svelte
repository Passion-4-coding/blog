<script>
	import { page } from '$app/stores';
	import { format } from 'date-fns';
	import ua from 'date-fns/locale/uk';
	import Link from '../../components/Link.svelte';
</script>

		{#each $page.data.articles as article, index}
			<div class="article">
				<Link to={`/articles/${article.slug}`}>{index + 1}. {article.titleCompact}</Link>
				<div class="attributes">
					<div class="date">{format(new Date(article.publishedOn), "dd MMMM, yyyy", { locale: ua })}</div>
				</div>
			</div>
		{/each}


<style>
	.article {
		margin-bottom: 20px;
	}

	.attributes {
		color: var(--color-secondary-text);
	}

	.article :global(a) {
		color: var(--color-text);
		text-decoration: none;
		font-size: 24px;
		font-weight: 600;
	}
	.article :global(a:active) {
		color: var(--color-text);
	}
</style>
