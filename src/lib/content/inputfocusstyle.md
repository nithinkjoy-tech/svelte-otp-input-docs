---
title: inputFocusStyle
---

## inputFocusStyles
Style of each input box when focused

| Type                              | Description      |
|-----------------------------------|------------------|
| `object`                          | JS object style  |
| `tailwind class`                  | Tailwind classes |
| `svelte global styling`           | See example 3    |

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
		+++inputFocusStyle={{
			border: '1px solid green'
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
        +++inputFocusStyle="!border !border-red-500"+++
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
		+++:global(.single-otp-input:focus) {
			border: 1px solid red !important;
		}+++
	</style>
```