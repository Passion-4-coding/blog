<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.data.article.titleSeo}</title>
  <meta name="title" content={$page.data.article.titleSeo} />
  <meta name="description" content={$page.data.article.descriptionSeo} />
  <meta name="keywords" content={$page.data.article.keywordsSeo} />
  <meta property="og:url" content="https://blog.pfc.dev/{$page.params.code}/articles/{$page.data.article.slug}" />
  <meta property="og:title" content={$page.data.article.titleSeo} />
  <meta property="og:description" content={$page.data.descriptionSeo} />
  <meta property="twitter:url" content="https://blog.pfc.dev/{$page.params.code}/articles/{$page.data.article.slug}" />
  <meta property="twitter:title" content={$page.data.article.titleSeo} />
  <meta property="twitter:description" content={$page.data.article.descriptionSeo} />
  <link rel="canonical" href="https://pfc.dev/{$page.params.code}/articles/{$page.data.article.slug}" />
  <link rel="alternate" hreflang="uk" href="https://blog.pfc.dev/ua/{$page.data.article.slug}" />
  <link rel="alternate" hreflang="en" href="https://blog.pfc.dev/en/{$page.data.article.slug}" />
</svelte:head>

<div class="container">
  <div class="article">
    <h1 class="title">{$page.data.article.title}</h1>
    <div class="article-content">
      {@html $page.data.article.content}
    </div>
  </div>
</div>

<style>
  h1 {
    margin-bottom: 40px;
  }
  .article-content {
    font-size: 20px;
    line-height: 32px;
  }
  .article-content :global(strong) {
    font-weight: 600;
  }
</style>