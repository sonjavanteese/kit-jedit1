<script>
	import {supabase} from '$lib/db';
	import { schemalist } from '$lib/editor/store';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';
	import { Accordion, AccordionItem } from 'sveltestrap';
	const updateData = async () => {
		try {
			const { data, error: err } = await supabase
			.from('json_editor')
			.update({ titel: obj.titel, info: obj.info, startval: obj.startval, option: obj.option, schema: obj.schema, group: obj.group })
			.eq('id', obj.id);
			if (data) {
				alert("Update succeed!")
			}
		} catch (error) {
			console.error("Error", error)
		}
		finally {
			schemalist.fetchAll();
		}
	};
	export let obj = {
		id: null,
		titel: null,
		info: null,
		startval: null,
		option: null,
		schema: null,
		group: null
	};
	const setEditorOps = () => {
		if (obj.id && obj.titel) {
			//  id,titel,info,created_at,startval,option,schema,group
			$session.schemaid = obj.id;
			$session.config = obj.option;
			$session.config.schema = obj.schema;
			$session.config.startval = obj.startval;
			goto('/editor');
		}	
	};
	
</script>

<div {...$$restProps}>
	<Accordion>
		<AccordionItem active header="Details">
			<div class="py-2">
				<label for="exampleInput1" class="form-label">Titel</label>
				<input
					value={obj.titel}
					type="text"
					class="form-control"
					id="exampleInput1"
					placeholder="... titel"
					on:blur={(e) => {
						obj.titel = e.currentTarget.value;
					}}
				/>
			</div>
			<div class="py-2">
				<label for="textarea1" class="form-label">Info</label>
				<textarea on:blur={(e) => {
					obj.info = e.currentTarget.value;
				}} class="form-control" id="textarea1" rows="3">{obj.info}</textarea>
			</div>
		</AccordionItem>
		<AccordionItem header="Option">
			<article class="row gx-1 py-2">
				<div class="col-sm py-1">
					<select
						class="form-select"
						bind:value={obj.option.theme}
						aria-label="Default select example"
					>
						<option value="bootstrap4">Bootstrap</option>
						<option value="html" selected>HTML</option>
						<option value="spectre">Spectre</option>
					</select>
				</div>
				<div class="col-sm py-1">
					<select
						class="form-select"
						bind:value={obj.option.iconlib}
						aria-label="Default select example"
					>
						<option value="fontawesome4">Fontawesome</option>
						<option value={null} selected>No Icons</option>
						<option value="spectre">Spectre</option>
					</select>
				</div>
				<div class="col-sm py-1">
					<select
						class="form-select"
						bind:value={obj.option.object_layout}
						aria-label="Default select example"
					>
						<option value="normal" selected>Normal</option>
						<option value="grid">Grid</option>
						<option value="table">Table</option>
					</select>
				</div>
				<div class="col-sm py-1">
					<select
						class="form-select"
						bind:value={obj.option.show_errors}
						aria-label="Default select example"
					>
						<option value="interaction" selected>interaction</option>
						<option value="change">Change</option>
						<option value="always">Always</option>
						<option value="never">Never</option>
					</select>
				</div>
			</article>
			<article class="row gx-1 py-2">
				<div class="col-sm">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							bind:checked={obj.option.prompt_before_delete}
							id="flexCheckDefault1"
						/>
						<label class="form-check-label" for="flexCheckDefault1"> Del warning </label>
					</div>
				</div>
				<div class="col-sm">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							bind:checked={obj.option.enable_array_copy}
							id="flexCheckDefault2"
						/>
						<label class="form-check-label" for="flexCheckDefault2"> Copy Arr </label>
					</div>
				</div>
				<div class="col-sm">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							bind:checked={obj.option.array_controls_top}
							id="flexCheckDefault3"
						/>
						<label class="form-check-label" for="flexCheckDefault3"> Top Ctrl </label>
					</div>
				</div>
				<div class="col-sm">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							bind:checked={obj.option.compact}
							id="flexCheckDefault4"
						/>
						<label class="form-check-label" for="flexCheckDefault4"> Compact </label>
					</div>
				</div>
			</article>
		</AccordionItem>
		<AccordionItem header="Schema">
			<div class="py-0">
				<textarea on:blur={(e) => {
					try {
						obj.schema = JSON.parse(e.currentTarget.value);
					} catch (error) {
						console.error("Error", error)
					}
				}} class="form-control" rows="8">{JSON.stringify(obj.schema, null, 2)}</textarea>
			</div>
		</AccordionItem>
		<AccordionItem header="StartValue">
			<div class="py-0">
				<textarea on:blur={(e) => {
					try {
						obj.startval = JSON.parse(e.currentTarget.value);
					} catch (error) {
						console.error("Error", error)
					}
				}} class="form-control" id="exampleFormControlTextarea2" rows="8"
					>{JSON.stringify(obj.startval, null, 2)}</textarea
				>
			</div>
		</AccordionItem>
	</Accordion>
</div>
<nav class="container-fluid flex-bar py-2">
	<button class="btn btn-primary me-1" on:click={updateData}>Update Schema</button>
	<button class="btn btn-primary" on:click={setEditorOps}>Set Store</button>
</nav>
