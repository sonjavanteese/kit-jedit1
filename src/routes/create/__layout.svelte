<script>
import { Nav, NavItem, NavLink } from 'sveltestrap';
import { page, session } from '$app/stores';
	
</script>

<header class="container-fluid">
	<Nav tabs>
		<NavItem>
		<NavLink href="/editor" active={$page.url.pathname === '/editor'}>Editor <small>{$session.schemaid ? $session.schemaid : ''}</small></NavLink>
		</NavItem>
		<NavItem>
		<NavLink href="/editor/list" active={$page.url.pathname === '/editor/list'}>List</NavLink>
		</NavItem>
		<NavItem>
			<NavLink href="/editor" disabled active={$page.url.pathname.includes('/editor/edit')}>Editor</NavLink>
		</NavItem>
	</Nav>
</header>


<slot />





<!-- <svelte:window on:keyup={ev => ev.key === 'Escape' && closeModal()}></svelte:window>
 -->