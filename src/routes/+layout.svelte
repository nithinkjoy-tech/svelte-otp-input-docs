<!-- src/routes/+layout.svelte -->
<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { ThemeToggle } from '@sveltejs/site-kit/components';
	import {theme} from '@sveltejs/site-kit/state';

</script>

<div class="app-container">
	<Sidebar currentTheme="{theme.current}"/>
	<div class="content">
		<div class="theme-toggle-container">
			<ThemeToggle />
		</div>
		<main class="main-content">
			<slot />
		</main>
	</div>
</div>

<style>
    .app-container {
        display: flex;
        min-height: 100vh;
				max-height: 100vh;
    }

    .main-content {
        flex: 1;
        padding: 60px;
				max-width: 1024px;
				margin: 0 auto;
				overflow-y: scroll;
    }

		.content {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				width: 100%;
		}

		.theme-toggle-container {
				padding: 10px;
        max-width: 1024px;
        width: 100%;
				margin: 0 auto;
		}
</style>