<script lang="ts">
	import About from '../components/About.svelte';
	import ArticlesList from '../components/Articles/ArticlesList.svelte';
	import Goals from '../components/Goals.svelte';
	import Hero from '../components/Hero.svelte';
	import Socials from '../components/Socials.svelte';

	export let data;
</script>

<svelte:head>
  <title>Українська Спільнота Розробників | Passion for coding</title>
  <meta name="title" content="Українська Спільнота Розробників | Passion for coding">
  <meta name="description" content="Passion for coding - українська спільнота для програмістів, зосереджена на створенні позитивної атмосфери для навчання та співпраці. Приєднуйтесь до нас сьогодні!">
  <meta name="keywords" content="спільнота розробників, українська спільнота, україномовний контент, програмування, кодування, навчання, співпраця, Passion for coding">
  <meta property="og:title" content="Українська Спільнота Розробників | Passion for coding">
  <meta property="og:description" content="Passion for coding - українська спільнота для програмістів, зосереджена на створенні позитивної атмосфери для навчання та співпраці. Приєднуйтесь до нас сьогодні!">
  <meta property="twitter:title" content="Українська Спільнота Розробників | Passion for coding">
  <meta property="twitter:description" content="Passion for coding - українська спільнота для програмістів, зосереджена на створенні позитивної атмосфери для навчання та співпраці. Приєднуйтесь до нас сьогодні!">	
	<meta property="og:url" content="https://pfc.dev">
  <meta property="twitter:url" content="https://pfc.dev">
</svelte:head>

<Hero />
<About />
<Goals />
<Socials />
<ArticlesList articles={data.articles} />

<style>

</style>
