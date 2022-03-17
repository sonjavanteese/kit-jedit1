<script>
  import FetchData from "./FetchData.svelte";
  import ListItem from "./ListItem.svelte";

</script>

<section {...$$restProps}>
    <nav class="flex-bar mb-4">
   
    </nav>
    <FetchData let:payload>
      <ListItem items={payload} />
    </FetchData>
</section>

<style>
  section {
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
  }
</style>