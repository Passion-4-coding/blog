<script>
	import { calculateReadingTime } from "../../../components/Articles/utils";
	import Title from "../../../components/Title.svelte";
  import { format } from "date-fns";

  export let data;

  const readingTime = calculateReadingTime(data.article.content);
</script>

<svelte:head>
  <title>{data.article.titleSeo}</title>
  <meta name="title" content={data.article.titleSeo} />
  <meta name="description" content={data.article.descriptionSeo} />
  <meta name="keywords" content={data.article.keywordsSeo} />
  <meta property="og:url" content="https://pfc.dev/articles/{data.article.slug}" />
  <meta property="og:title" content={data.article.titleSeo} />
  <meta property="og:description" content={data.article.descriptionSeo} />
  <meta property="twitter:url" content="https://pfc.dev/articles/{data.article.slug}" />
  <meta property="twitter:title" content={data.article.titleSeo} />
  <meta property="twitter:description" content={data.article.descriptionSeo} />
</svelte:head>

<div class="container">
  <Title>{data.article.title}</Title>
  <div class="author">
    <div class="author-avatar">
      <img src={data.article.author.avatar} alt={data.article.author.username}>
    </div>
    <div class="author-description">
      <div class="author-name">
        {data.article.author.blogname || ""} <span class="nickname">@{data.article.author.username}</span>
      </div>
      <div class="article-info">
        {readingTime} хв. читання <span class="dot" />{format(new Date(data.article.publishedOn), "dd.MM.yyyy")}
      </div>
    </div>
  </div>
  <div class="content">
    {@html data.article.content}
  </div>
  <ul class="tags">
    {#each data.article.tags as tag}
      <li class="tag">#{tag.name}</li>
    {/each}
  </ul>
</div>

<style>
  .container {
    padding: 40px 20px;
  }

  .author {
    margin: 0px auto 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .author-avatar {
    width: 65px;
    height: 65px;
    border-radius: 50%;
    overflow: hidden;
  }

  .author-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .author-name {
    font-weight: 500;
  }

  .nickname {
    color: var(--color-secondary);
    font-weight: 700;
  }

  .article-info {
    color: #777;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .content :global(h3) {
    border-bottom: 2px solid var(--color-secondary);
    font-size: 24px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 10px;
  }

  .content :global(p) {
    font-size: 20px;
    font-weight: 400;
  }

  .content :global(pre) {
    background-color: #F2F2F2;
    padding: 20px;
    max-width: 100%;
    overflow: auto;
  }

  .dot {
    width: 9px;
    height: 9px;
    min-width: 9px;
    border-radius: 50%;
    background-color: var(--color-secondary);
  }

  .tags {
    list-style-type: none;
    padding-left: 0;
    display: flex;
    gap: 15px;
    padding-top: 20px;
  }

  .tag {
    background-color: var(--color-secondary);
    padding: 4px 6px;
    border-radius: var(--border-radius);
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    .content :global(h3) {
      font-size: 22px;
    }
    .content :global(p) {
      font-size: 18px;
    }
    .container {
      padding: 30px 10px;
    }
	}
  @media screen and (max-width: 500px) {
    .container {
      padding: 20px 0px;
    }
    .author {
      margin: 0px auto 10px;
      gap: 5px;
    }

    .author-avatar {
      width: 40px;
      height: 40px;
    }

    .author-name, .article-info {
      font-size: 14px;
    }

    .author-description {
      gap: 5px;
    }

    .tags {
      justify-content: center;
    }

    .content :global(pre) {
      padding: 5px;
    }
	}
</style>