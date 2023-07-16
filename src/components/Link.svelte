<script lang="ts">
	import { page } from "$app/stores";

  export let to: string;
  export let external: boolean = false;
  export let disabled = false;
</script>

<a
  href={`${external ? '' : '/' + $page.params.code}${to}`}
  title={$$props.title}
  class={$$props.class}
  class:disabled={disabled}
>
  <slot />
</a>

<style>
  .disabled {
    opacity: 0.5;
    pointer-events: none;
  }
</style>