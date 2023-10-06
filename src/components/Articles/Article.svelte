<script lang="ts">
	import type { IArticle } from "./types";
	import { calculateReadingTime } from "./utils";

  export let article: IArticle;
  
  console.log(article)
</script>

<a class="container" href="/articles/{article.slug}">
  <div class="author">
    <div class="avatar">
      <img src={article.author.avatar} alt={article.author.username}>
    </div>
    <div class="name">{article.author.blogname ? article.author.blogname : ""} @{article.author.username}</div>
  </div>
  <h3>{article.title}</h3>
  <div class="bottom">
    <ul class="tags">
      {#each article.tags as tag}
        <li>#{tag.name}</li>
      {/each}
    </ul>
    <div class="time">{calculateReadingTime(article.content)} хв. чит.</div>
  </div>
</a>

<style>
  .container {
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--border-radius);
    padding: 20px 20px 10px;
    text-decoration: none;
  }
  h3 {
    color: var(--color-white);
    font-size: 32px;
    font-weight: 600;
  }
  .author {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .tags {
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 28px;
    }
	}
  @media screen and (max-width: 500px) {
    .avatar {
      width: 40px;
      height: 40px;
    }
    h3 {
      font-size: 20px;
    }
    .author {
      font-size: 16px;
      gap: 5px;
    }
    .bottom {
      flex-direction: column;
    }

    .tags {
      gap: 5px;
      font-size: 16px;
    }
	}
</style>
