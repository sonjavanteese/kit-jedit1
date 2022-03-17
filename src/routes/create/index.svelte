<script>
	import JsonEdit from "$lib/editor/JsonEdit.svelte";
	import { session } from '$app/stores';
	let editore = false;
	$: console.log("Editor Start", $session.config, $session.schemaid)
	$: if ($session.config) {
		editore = true;
	}
	
	// import { Accordion, AccordionItem } from 'sveltestrap';
</script>

<svelte:head>
	<title>Json-Editor</title>
</svelte:head>

<section class="container-fluid py-4">
	<h1>Json-Editor</h1>
</section>
<hr>
<section class="container-fluid py-4">
	{#if editore}
	<JsonEdit bind:options={$session.config} />
	{/if}
</section>
