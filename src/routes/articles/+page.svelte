<script>
	import Article from "../../components/Articles/Article.svelte";
  import Title from "../../components/Title.svelte";

  export let data;
</script>

<svelte:head>
  <title>Усі статті | Українська Спільнота Розробників | Passion for coding</title>
  <meta name="title" content="Усі статті | Українська Спільнота Розробників | Passion for coding">
  <meta name="description" content="Passion for coding - українська спільнота для програмістів. Статті на тему програмування українською. Починай вивчати вже сьогодні.">
  <meta name="keywords" content="спільнота розробників, українська спільнота, україномовний контент, програмування, кодування, навчання, співпраця, Passion for coding">
  <meta property="og:title" content="Усі статті | Українська Спільнота Розробників | Passion for coding">
  <meta property="og:description" content="Passion for coding - українська спільнота для програмістів. Статті на тему програмування українською. Починай вивчати вже сьогодні.">
  <meta property="twitter:title" content="Усі статті | Українська Спільнота Розробників | Passion for coding">
  <meta property="twitter:description" content="Passion for coding - українська спільнота для програмістів. Статті на тему програмування українською. Починай вивчати вже сьогодні.">	
	<meta property="og:url" content="https://pfc.dev/articles">
  <meta property="twitter:url" content="https://pfc.dev/articles">
</svelte:head>

<div class="container">
  <Title>Статті</Title>
  <div class="articles">
    {#each data.articles as article}
      <Article article={article} />
    {/each}
  </div>
</div>

<style>
  .container {
    padding: 40px 20px;
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
</style>

<!-- markup (zero or more items) goes here -->