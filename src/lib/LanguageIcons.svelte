<script lang="ts">
  import { base } from "$app/paths";

  const imageNames = [
    "C",
    "TypeScript",
    "NodeJS",
    "Svelte",
    "MySQL",
    "Html",
    "Java",
  ];
</script>

<div class="iconsContainer">
  {#each imageNames as name}
    <img src="{base}/icons/{name}.png" alt={name} title={name} />
  {/each}
</div>

<style>
  .iconsContainer {
    display: flex;
    flex-direction: row;
    gap: 0.75em;
    flex-wrap: wrap;
  }
  .iconsContainer > img {
    width: 2em;
    height: 2em;
    image-rendering: pixelated;
  }
</style>
