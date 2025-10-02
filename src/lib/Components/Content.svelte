<script>
	import BasicUsage from '$lib/OTPInputAPI/BasicUsage.svelte';
	import BindValue from '$lib/OTPInputAPI/bindValue.svelte';

	let { activeContent } = $props()

	const componentMap = {
		'Basic Usage': BasicUsage,
		'bind:value': BindValue,
	}

	let CurrentComponent = $derived(componentMap[activeContent])
</script>

<div class="container">
	{#if CurrentComponent}
		<CurrentComponent />
	{:else}
		<div>Component for "{activeContent}" not found</div>
	{/if}
</div>

<style>
	.container {
			margin: 0 auto;
			padding: 32px;
	}
</style>