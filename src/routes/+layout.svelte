<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import hamburger from '$lib/assets/hamburger.svg?raw';
	import github from '$lib/assets/github.svg?raw';
	import { MediaQuery } from 'svelte/reactivity';
	import { ThemeToggle } from '@sveltejs/site-kit/components';
	import { theme } from '@sveltejs/site-kit/state';
	import { page } from '$app/stores';

	let mainContent;
	let { children } = $props();

	const isLargeScreen = new MediaQuery('(min-width: 1024px)');
	let isMobileMenuOpen = $state(false);

	// Derive whether sidebar should be visible
	let showSidebar = $derived(isLargeScreen.current || isMobileMenuOpen);

	// Derive whether overlay should be shown
	let showOverlay = $derived(!isLargeScreen.current && isMobileMenuOpen);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	$effect(() => {
		$page.url.pathname
		mainContent.scrollTo(0, 0);
	})

</script>

<div class="app-container" class:mobile-menu-open={showOverlay}>
	<div class="sidebar-wrapper" hidden={!showSidebar}>
		<Sidebar currentTheme={theme.current} {closeMobileMenu} />
	</div>

	<div class="content">
		<div class="header">
			{#if !isLargeScreen.current}
				<button
					class="hamburger-btn"
					onclick={toggleMobileMenu}
					aria-label="Toggle menu"
				>
					<div class="hamburger">
						{@html hamburger}
					</div>
				</button>
			{/if}
			<div class="header-icons-container" onclick={closeMobileMenu}>
				<a class="github-icon" href="https://github.com/nithinkjoy-tech/svelte-otp-input" target="_blank">
					{@html github}
				</a>
				<ThemeToggle />
			</div>
		</div>

		<main bind:this={mainContent} class="main-content" class:overflow-hidden={showOverlay}>
			{@render children?.()}
		</main>
	</div>

	{#if showOverlay}
		<div class="overlay" onclick={closeMobileMenu}></div>
	{/if}
</div>

<style>
    .app-container {
        display: flex;
        min-height: 100svh;
        max-height: 100svh;
    }

    .sidebar-wrapper {
        flex-shrink: 0;
    }

    /* Show sidebar by default on desktop - prevents flash */
    @media (min-width: 1024px) {
        .sidebar-wrapper {
            display: block !important;
        }
    }

    /* Default: hide sidebar on mobile with CSS */
    @media (max-width: 1023px) {
        .sidebar-wrapper {
            display: none;
        }
    }

    /* Mobile sidebar positioning when menu is open */
    .mobile-menu-open .sidebar-wrapper {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        height: 100svh;
        z-index: 3;
    }

		:global .mobile-menu-open .close-btn {
				display: block;
		}

    .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 20px;
        padding: 10px;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }

    .hamburger-btn {
        padding: 0;
        border: none;
        background: none;
        cursor: pointer;
        margin-right: auto;
    }

    /* Hide hamburger on desktop */
    @media (min-width: 1024px) {
        .hamburger-btn {
            display: none;
        }
    }

    .hamburger {
        width: 24px;
        height: 24px;
        display: block;
    }

		.hamburger :global(path) {
        stroke: var(--sk-fg-2);
    }

    .main-content {
        flex: 1;
        padding: 60px;
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        overflow-y: auto;

				@media (max-width: 600px) {
            padding: 20px;
        }
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100svh;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 2;
    }

    .overflow-hidden {
        overflow-y: hidden !important;
    }

		.header-icons-container {
				display: flex;
				align-items: center;
				gap: 10px;
		}

		.github-icon {
				width: 34px;
				height: 34px;
				cursor: pointer;
		}
</style>