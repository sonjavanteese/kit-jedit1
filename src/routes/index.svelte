<script>
import { Button, Modal } from 'sveltestrap';
let open = false;
const toggle = () => (open = !open);	
const page = {
	header: "Nwp-Studio",
	sub: "Json-Editor"
}
</script>

<svelte:head>
	<title>Nwp-Start</title>
</svelte:head>


<main>
	<section class="site centered bg-light">
		<header class="p-5 round-3">
			<div class="container-fluid py-5">
				<h1 class="display-4 fw-bold">{page.header}</h1>
				<h1 class="fw-bold text-muted">{page.sub}</h1>
				<p class="col-md-8 fs-4">
					Using a series of utilities, you can create this jumbotron, 
					just like the one in previous versions of Bootstrap. 
					Check out the examples below for how you can remix and restyle it to your liking.
				</p>
				<a class="btn btn-primary btn-lg me-1" role="button" href="/editor">Start Editor</a>
				<button class="btn btn-primary btn-lg" on:click={toggle}>Toggle</button>
			</div>
		</header>
	</section>
</main>
<Modal header="Info" body size="md" isOpen={open} {toggle}>
    

                <p class="fs-4 m-0 py-4 text-center">Modal body text goes here.</p>
                <div class="d-grid mt-2">
                    <div class="btn-group" role="group" aria-label="Basic example" data-pg-collapsed> 
                        <button type="button" class="btn btn-outline-secondary">Details</button>                         

                        <button type="button" class="btn btn-outline-secondary">Edit</button>                         

                        <button type="button" class="btn btn-outline-secondary">Show</button>                         
                    </div>
                </div>                 
                                   

</Modal>


<style>
.site {
	display: flex;
    flex-direction: column;
    height: 100%;
}
.site.centered {
    justify-content: center;
}
</style>