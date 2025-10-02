<script>
	import SideBar from '$lib/Components/SideBar.svelte';
	import Content from '$lib/Components/Content.svelte';
	import { ThemeToggle } from '@sveltejs/site-kit/components';

	let activeContent = $state('Basic Usage');
</script>

<div class="docs-page">
<!--	<ThemeToggle/>-->
<!--	<SideBar bind:activeContent={activeContent} />-->
<!--	<Content activeContent={activeContent}/>-->
</div>

<style>
	.docs-page {
			display: flex;
			flex-direction: row;
	}
</style>
