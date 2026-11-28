<script lang="ts">
	import { onMount } from 'svelte'

	let { data } = $props()
	const root = import.meta.env.BASE_URL.replace(/\/$/, '')
	let href = $derived(`${root}${data.to}`)

	onMount(() => {
		location.replace(href)
	})
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0;url={href}" />
	<link rel="canonical" href={href} />
	<title>Moved to the Klados Handbook</title>
</svelte:head>

<p>This page has moved to the <a href={href}>Klados Handbook</a>.</p>
