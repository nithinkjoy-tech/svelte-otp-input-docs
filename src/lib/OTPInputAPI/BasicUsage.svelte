<script>
	import OtpInput from 'svelte-otp-input';

	let value = $state("");
</script>

<div class="markdown-content">
	<OtpInput
		bind:value
		numInputs={4}
	/>
</div>

<style>
    .markdown-content {
        /* Add your markdown styling */
    }
</style>