<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let { children } = $props();

	$effect(() => {
	// Redirect root to basic-usage
		if ($page.url.pathname === '/' || $page.url.pathname === '') {
		goto('/basic-usage', { replaceState: true });
	}
});
</script>

{@render children?.()}