<script lang="ts">
	import Title from "../Title.svelte";
  import Article from "./Article.svelte";
  import type { IArticle } from "./types";

  export let articles: IArticle[];
</script>

<div class="container" id="articles">
  <Title>Статті</Title>
  <div class="articles">
    {#each articles as article}
      <Article article={article} />
    {/each}
  </div>
  <a href="/articles">Переглянути усі <img src="/images/arrow-right.svg" alt="arrow right"></a>
</div>

<style>
  .articles {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .container {
    padding: 40px;
  }

  a {
    display: inline-flex;
    align-items: center;
    color: #777;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    margin-top: 20px;
    gap: 10px;
  }

  a:hover {
    border-bottom: 3px solid var(--color-secondary);
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 30px;
    }
    .articles {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    .container {
      padding: 20px 0px;
    }
    .articles {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
