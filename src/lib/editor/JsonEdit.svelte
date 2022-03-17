<script>
    import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	// import { supabase } from '../db';
	// const dispatch = createEventDispatcher();

	let jc_form;
	let jsoncreator;
	let loading = true;
	export let options = {};

	const handleCreatorChange = () => {
		let value = jsoncreator.getValue();
		console.log('Editor Change', value);
	};

	const handleCreatorReady = () => {
		console.log('Creator is ready!');
	};

	export const initCreator = () => {
		if (jsoncreator) {
			jsoncreator.destroy();
		}
		jsoncreator = new JSONEditor(jc_form, options);
		jsoncreator.on('ready', handleCreatorReady);
		jsoncreator.on('change', handleCreatorChange);
		loading = false;
	};
	onMount(async () => {
		if (options.schema) {
			initCreator();
		}
	});
	onDestroy(() => {
		if (jsoncreator) {
			jsoncreator.destroy();
		}
	});
    
</script>


<section {...$$restProps}>
	<div id="json-editor-form" bind:this={jc_form} />
</section>

{#if loading}
	<article>
		<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</article>
{/if}

<style>
	article {
		flex: 1;
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
