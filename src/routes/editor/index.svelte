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


{#if editore}
<JsonEdit class="container-fluid py-4" bind:options={$session.config} />
{/if}

