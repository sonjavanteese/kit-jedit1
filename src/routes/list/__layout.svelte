<script>
import { Nav, NavItem, NavLink } from 'sveltestrap';
import { page, session } from '$app/stores';
import {fade} from 'svelte/transition';	
</script>
<!-- <svelte:head>
	<script src="./lib/jsoneditor.js"></script>
</svelte:head> -->

<header class="pt-3">
	<Nav tabs class="nav-fillx">
		<NavItem class="ms-2">
		<NavLink href="/editor" active={$page.url.pathname === '/editor'}>Editor <small>{$session.schemaid ? $session.schemaid : ''}</small></NavLink>
		</NavItem>
		<NavItem>
		<NavLink href="/editor/list" active={$page.url.pathname === '/editor/list'}>Schema List</NavLink>
		</NavItem>
		{#if $page.url.pathname.includes('/editor/edit')}
		<span transition:fade={{duration: 200}}>
		<NavItem>	
				<NavLink href="/editor" disabled active>Details</NavLink>			
		</NavItem>
		</span>
		{/if}
	</Nav>
</header>
{#key $page.url.pathname}
<main in:fade={{duration: 400}}>
<slot />
</main>
{/key}



<!-- <svelte:window on:keyup={ev => ev.key === 'Escape' && closeModal()}></svelte:window>
 -->