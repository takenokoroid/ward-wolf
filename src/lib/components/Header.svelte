<script>
	export let title = 'Default Title';
</script>

<!--
@component
ヘッダーコンポーネント
- Usage:
  ```tsx
  <Headers title="Word Wolf">
    ```
  -->
<header>
	<h1>{title}</h1>
</header>

<style>
	header {
		text-align: center;
		padding: 1rem;
		border-bottom: 1px solid var(--secondary-light);
	}
</style>
