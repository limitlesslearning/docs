<script>
	const { children } = $props()
	// Root-relative (includes Vite/SvelteKit base) so the swap stays correct
	// after client-side navigations. $app/paths `base` is not exported in this Kit version.
	const logoInk = `${import.meta.env.BASE_URL}brand/mark-ink.svg`
	const logoInverse = `${import.meta.env.BASE_URL}brand/mark-inverse.svg`
</script>

<svelte:head>
	<!-- Sveltepress only accepts one logo URL. Swap ink/inverse with the theme class
	     (html.dark) so the mark stays visible on both backgrounds. -->
	{@html `<style>
		img.logo {
			width: 32px;
			height: 32px;
			padding-inline-start: 32px;
			box-sizing: border-box;
			background: url("${logoInk}") no-repeat left center / 32px 32px;
		}
		html.dark img.logo {
			background-image: url("${logoInverse}");
		}
	</style>`}
</svelte:head>

<!-- Leave this. Or you can add more content for your custom layout -->
{@render children?.()}
