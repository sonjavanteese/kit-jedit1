<script>
  import CheatSheetCard from "$lib/CheatSheetCard.svelte";
  import { cheatSheet } from "./cheat-sheet.js";
</script>

<svelte:head>
	<title>Svelte-Cheatsheet</title>
</svelte:head>


<section>

  <div class="row row-cols-3 p-2 g-2">
    {#each cheatSheet as item}
    <div class="col">
      <CheatSheetCard {...item} />
    </div>
  {/each}
  </div>

</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
  section :global(.card) {
    margin-left: 10px;
    margin-bottom: 10px;
    flex: 1;
  }
  @media (max-width: 960px) {
    section > :global(.card) {
      max-width: 95%;
    }
  }
</style>
