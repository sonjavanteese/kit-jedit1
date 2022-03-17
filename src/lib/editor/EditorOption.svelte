<script>
    import { Accordion, AccordionItem } from 'sveltestrap';
	export let option = {
		theme: 'bootstrap4',
		iconlib: 'fontawesome4',
		prompt_before_delete: true,
		enable_array_copy: false,
		object_layout: 'normal',
		show_errors: 'interaction',
        compact: false,
		array_controls_top: false
	};
	$: console.log(option);
</script>



<section class="container-fluid py-2">
    <Accordion>
        <AccordionItem active header="Option">
            <article class="row gx-1 py-2">
                <div class="col-sm py-1">
                    <select class="form-select" bind:value={option.theme} aria-label="Default select example">
                        <option value="bootstrap4">Bootstrap</option>
                        <option value="html" selected>HTML</option>
                        <option value="spectre">Spectre</option>
                    </select>
                </div>
                <div class="col-sm py-1">
                    <select class="form-select" bind:value={option.iconlib} aria-label="Default select example">
                        <option value="fontawesome4">Fontawesome</option>
                        <option value={null} selected>No Icons</option>
                        <option value="spectre">Spectre</option>
                    </select>
                </div>
                <div class="col-sm py-1">
                    <select class="form-select" bind:value={option.object_layout} aria-label="Default select example">
                        <option value="normal" selected>Normal</option>
                        <option value="grid">Grid</option>
                        <option value="table">Table</option>
                    </select>
                </div>
                <div class="col-sm py-1">
                    <select class="form-select" bind:value={option.show_errors} aria-label="Default select example">
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
                    <input class="form-check-input" type="checkbox" bind:checked={option.prompt_before_delete} id="flexCheckDefault1">
                    <label class="form-check-label" for="flexCheckDefault1">
                        Del warning
                    </label>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" bind:checked={option.enable_array_copy} id="flexCheckDefault2">
                    <label class="form-check-label" for="flexCheckDefault2">
                        Copy Arr
                    </label>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" bind:checked={option.array_controls_top} id="flexCheckDefault3">
                    <label class="form-check-label" for="flexCheckDefault3">
                        Top Ctrl
                    </label>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" bind:checked={option.compact} id="flexCheckDefault4">
                    <label class="form-check-label" for="flexCheckDefault4">
                    Compact
                    </label>
                    </div>
                </div>
            </article>
        </AccordionItem>
        <AccordionItem header="Schema">
          
            <div class="py-0">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </AccordionItem>
        <AccordionItem header="StartValue">
            <div class="py-0">
                <textarea class="form-control" id="exampleFormControlTextarea2" rows="8"></textarea>
            </div>
        </AccordionItem>
      </Accordion>
	

    <!-- interaction, change, always, and never -->
	
</section>

