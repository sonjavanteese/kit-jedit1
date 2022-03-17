<script>
	import { session } from '$app/stores';
	import FetchData from '$lib/editor/FetchData.svelte';
	import { schemalist } from '$lib/editor/store';
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
	<p>
		<button class="btn btn-secondary me-1" on:click={handClick}> Fetch Data </button>
	</p>
	<FetchData let:payload>
		<nav class="list-group">
			{#each payload as d}
				<a
					href="/editor/edit/{d.id}"
					class="list-group-item list-group-item-action"
					class:active={d.id == current}
				>
					<div class="d-flex justify-content-between align-items-start">
						<span class="fs-5">{d.titel}</span>
						<span class="badge bg-primary">{d.id}</span>
					</div>
					<div>
						<span class="text-muted">{d.info}</span>
					</div>
				</a>
			{/each}
		</nav>
	</FetchData>
</section>
