<script lang="ts">
	import { page } from "$app/stores";
  import hljs from 'highlight.js';
  import typescript from 'highlight.js/lib/languages/typescript.js';
  import 'highlight.js/styles/github.css';
	import { onMount } from "svelte";

  hljs.registerLanguage('typescript', typescript);

  let container: HTMLDivElement;
  
  onMount(() => {
    const codes = container.querySelectorAll('pre');
    codes.forEach(el => {
      hljs.highlightElement(el);
    });
  })
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

<div class="container" bind:this={container}>
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
  .article-content :global(pre) {
    background-color: #F2F2F2;
    padding: 12px;
    max-width: 100%;
    overflow: auto;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    .article-content {
      font-size: 16px;
      line-height: 24px;
    }
	}
</style>