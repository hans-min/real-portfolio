<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import 'chota';
		import { onMount } from 'svelte';

		onMount(() => {
			function reveal() {
				var reveals = document.querySelectorAll(".fadeIn");
				
				for (var i = 0; i < reveals.length; i++) {
					var windowHeight = window.innerHeight;
					var elementTop = reveals[i].getBoundingClientRect().top;
					var elementVisible = 128;

					if (elementTop < windowHeight - elementVisible) {
						reveals[i].classList.add("onScreen");
					} 
				}
			}

			window.addEventListener("scroll", reveal);
			reveal();
		});
</script>

<div class="container">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}
</style>
