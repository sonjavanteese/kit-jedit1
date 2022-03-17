<script>
	import '../app.scss';
	import { Navbar, Collapse, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';
	import { onMount } from 'svelte/internal';
	import { session } from '$app/stores';
	let isOpen = false;

	function handleUpdate(event) {
		isOpen = event.detail.isOpen;
	}
	onMount(() => {
		$session.schemaid = 0;
		$session.config = {
			theme: 'bootstrap4',
			iconlib: 'fontawesome4',
			prompt_before_delete: true,
			enable_array_copy: true,
			object_layout: 'normal',
			show_errors: 'interaction',
			schema: {
				type: 'object',
				description: 'JSON schema generated with JSONBuddy https://www.json-buddy.com',
				properties: {
					name: {
						type: 'string'
					}
				}
			},
			startval: {
				name: 'nwp-app'
			},
			array_controls_top: false
		};
	});
</script>

<nav class="navbar navbar-dark navbar-expand bg-primary">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Nwp-App</a>
        <button class="btn btn-primary" type="button">
            <i class="fa fa-bars" style="font-size: 22px;"></i>
        </button>
    </div>
</nav>

<slot />



<!-- <svelte:window on:keyup={ev => ev.key === 'Escape' && closeModal()}></svelte:window>
 -->
