<script>
	import { page } from '$app/stores';
	import FetchDetail from "$lib/editor/FetchDetail.svelte";
	import Selectrow from './_selectrow.svelte';
	import { schemadetail } from "$lib/editor/store";
	let params = $page.params;
	schemadetail.fetchDet(params.id);
	// import { Accordion, AccordionItem } from 'sveltestrap';
	
	
</script>

<svelte:head>
	<title>Detail</title>
</svelte:head>


<section class="container-fluid py-4">
<FetchDetail let:payload>
	<Selectrow obj={payload} />
</FetchDetail>
</section>
