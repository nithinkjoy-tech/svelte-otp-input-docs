<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let sideBarItems = [
		{ category: 'General', items: ['Basic Usage'] },
		{ category: 'Value & Binding', items: ['inputType', 'bind:value', 'bind:this', 'bind:inputRef', 'setValue'] },
		{
			category: 'Layout & Structure',
			items: ['separator', 'group', 'groupSeparator']
		},
		{
			category: 'Appearance & Styles',
			items: [
				'containerStyles',
				'inputStyles',
				'inputFocusStyle',
				'inputErrorStyle',
				'inputDisabledStyle',
				'stylePriority'
			]
		},
		{
			category: 'Behavior & Accessibility',
			items: [
				'shouldAutoFocus',
				'placeholder',
				'isError',
				'isDisabled',
				'restrictPaste'
			]
		},
		{
			category: 'Events & Callbacks',
			items: [
				'onComplete',
				'onEnter',
				'onInput',
				'onFocus',
				'onBlur',
				'onPaste',
				'keyDown',
			]
		}
	];

	import logo from '$lib/assets/svelte-otp-input-logo.png';
	import close from '$lib/assets/close.svg?raw';

	let {currentTheme, closeMobileMenu } = $props();
	let activeContent = $derived($page.url.pathname.split('/').pop());

	// Helper function to convert item to URL slug
	function itemToSlug(item='') {
		return item
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');
	}

	// Handle navigation
	function handleNavigation(item) {
		const slug = itemToSlug(item);
		goto(`/${slug}`);
		activeContent = item;
		closeMobileMenu?.();
	}
</script>

<div class="sidebar">
	<span class="close-btn" onclick={closeMobileMenu}>
		<span class="close">
			{@html close}
		</span>
	</span>
	<div>
		<img src={logo} class="svelte-otp-input-logo" alt="OTP Input Logo" />
		{#each sideBarItems as { category, items }}
			<div class="category">
				<h3>{category}</h3>
				<ul>
					{#each items as item}
						<li>
							<a
								role="menuitem"
								tabindex="-1"
								href="/docs/{itemToSlug(item)}"
								class:active={itemToSlug(activeContent) === itemToSlug(item)}
								style:color={currentTheme === 'dark' ? '#CBCCCE' : ''}
								onclick={(e) => {
									e.preventDefault();
									handleNavigation(item);
								}}>{item}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>

<style>
	.heading {
		font-size: 60px;
		font-weight: 600;
		color: #f96743;
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.svelte-otp-input-logo {
		width: 224px;
		height: 100px;
		margin-bottom: 20px;
		border-radius: 24px;
	}

	.sidebar {
		position: relative;
		width: 360px;
		height: 100vh;
		overflow-y: auto;
		padding: 34px;
		font-family: Arial, sans-serif;
		background-color: var(--sk-bg-1);
	}
	.sidebar h2 {
		color: #6c757d;
		font-size: 16px;
		margin-bottom: 10px;
	}
	.sidebar ul {
		list-style: none;
		padding: 0;
	}
	.sidebar ul li {
		color: #6c757d;
		cursor: pointer;
	}
	.sidebar ul li a {
		width: 100%;
		display: inline-block;
		padding: 8px 0;
		text-decoration: none;
		color: #6c757d;
	}
	.sidebar ul li a.active {
		color: #6c33ff;
		background: linear-gradient(135deg, rgba(108, 51, 255, 0.2) 0%, rgba(108, 51, 255, 0.1) 100%);
		padding: 8px 0;
		padding-left: 8px;
		border-radius: 4px;
		display: block;
	}
	.category {
		margin-top: 15px;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 10px;
		width: 24px;
		height: 24px;
		cursor: pointer;
	}

	.close-btn {
		display: none;
	}

	.close-btn :global(path) {
		stroke: var(--sk-fg-2);
		fill: var(--sk-fg-2);
	}
</style>
