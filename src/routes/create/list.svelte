<script>
	import { session } from '$app/stores';
	import FetchData from "$lib/editor/FetchData.svelte";
	import { schemalist } from "$lib/editor/store";
	const handClick = () => {
		schemalist.fetchAll();
	};
	$: current = $session.schemaid ? $session.schemaid : 0;
	// import { Accordion, AccordionItem } from 'sveltestrap';
	// id,titel,info,created_at,startval,option,schema,group
	
</script>

<svelte:head>
	<title>Json-Editor</title>
</svelte:head>

<section class="container-fluid py-4">
	<h1>Json-Editor  {$session.schemaid ? $session.schemaid : ''}</h1>
	<p>
		<button class="btn btn-secondary me-1" on:click={handClick}>
			Fetch Data
		</button>
		<!-- <button class="btn btn-secondary" disabled>
			{$schemadetail.titel ? $schemadetail.titel : 'No Titel'}
			{$schemadetail.id ? $schemadetail.id : 'No Id'}
		</button> -->
	</p>
</section>
<section class="container-fluid py-4">
<FetchData let:payload>
	<nav class="list-group">
		{#each payload as d}
		  <a
			href="/editor/edit/{d.id}"
			class="list-group-item list-group-item-action"
			class:active={d.id == current}
		  >
			<h4 class="mb-0">{d.titel}</h4>
			<span>{d.info}</span>

		  </a>
		{/each}
	  </nav>
</FetchData>
</section>
