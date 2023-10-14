<script>
	import Header from '../lib/components/Header.svelte';
</script>

<Header title="Word Wolf" />
<main>
	<slot />
</main>

<style>
	main {
		/* 中央寄せ */
		display: flex;
		justify-content: center;
		/*余白*/
		padding: 1rem;
	}
</style>
