<script lang="ts">
  export let icon: "instagram" | "telegram" | "discord"; 
  const getIcon = () => {
    if (icon === "instagram") {
      return "/images/instagram.svg";
    }
    if (icon === "telegram") {
      return "/images/telegram.svg";
    }
    return "/images/discord.svg";
  }
  const getLink = () => {
    if (icon === "instagram") {
      return "https://instagram.com/pfc.dev?igshid=YTQwZjQ0NmI0OA==";
    }
    if (icon === "telegram") {
      return "https://t.me/pfc_ua";
    }
    return "https://discord.gg/passion-for-coding";
  }
</script>

<a class="icon" href={getLink()}>
  <img src={getIcon()} alt={icon}>
</a>

<style>
  .icon {
    width: 90px;
    height: 90px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-secondary);
  }
  @media screen and (max-width: 500px) {
    .icon {
      width: 40px;
      height: 40px;
      padding: 8px;
    }
	}
</style>

<!-- markup (zero or more items) goes here -->