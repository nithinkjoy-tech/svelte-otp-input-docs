---
title: containerStyles
---

# containerStyles
Style of the container, like spacing between inputs etc.

| Type           | Description      |
|----------------|------------------|
| `object`       | JS object style  |
| `tailwind class` | Tailwind classes |
| `glabal styling` | See example 3    |

### Example 1: Object Style
```svelte
	<script>
		import OtpInput from 'svelte-otp-input';
	
		let otp = $state("");
	</script>

	<OtpInput
		bind:value={otp}
		numInputs={4}
		inputType="number"
		placeholder="•"
		+++containerStyle={{
			gap: '6px',
			padding: '24px'
		}}+++
	/>
```

### Example 2: Tailwind Class
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        inputType="number"
        placeholder="•"
        +++containerStyle="!gap-6 !p-24"+++
    />
```

### Example 3: Global Styling
```svelte
	<script>
		import OtpInput from 'svelte-otp-input';
	
		let otp = $state("");
	</script>

	<OtpInput
		bind:value={otp}
		numInputs={4}
		inputType="number"
		placeholder="•"
	/>
	
	<style>
		+++:global(.otp-input-lib-container) {
			gap: 6px;
			padding: 24px;
		}+++
	</style>
```