<script lang="ts">
  export let align: "left" | "center" = "left";
</script>

<p class:center={align === "center"}>
  <slot />
</p>

<style>
  p {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 10px;
  }

  p.center {
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 18px;
      margin-bottom: 6px;
      font-weight: 500;
    }
	}
</style>