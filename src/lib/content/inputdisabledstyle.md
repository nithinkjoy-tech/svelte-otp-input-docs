---
title: inputDisabledStyle
---

# inputDisabledStyle
Style of each input box when disabled.

| Type                              | Description       |
|-----------------------------------|-------------------|
| `object`                          | JS object style   |
| `tailwind class`                  | Tailwind classes  |
| `Array(object or tailwind class)` | See example 3 & 4 |
| `svelte global styling`           | See example 5     |

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
		+++isDisabled={true}
		inputDisabledStyle={{
			background: 'rgba(0, 0, 0, 0.1)',
			border: '2px solid #ccc'
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
        +++isDisabled={true}
        inputDisabledStyle="!bg-black/10 !border-2 !border-[#ccc]"+++
    />
```

### Example 3: Array of Object Style

If you want to style each input box individually, you can pass an array of object style. Also if you want any box to follow default style you can pass sparse array accordingly.

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
		+++isDisabled={true}
		inputDisabledStyle={[
            {
				background: 'rgba(0, 0, 0, 0.1)'
			},
			{
				background: 'rgba(1, 1, 0, 0.1)'
			},
			{
				background: 'rgba(0, 87, 90, 0.6)'
			},
			{
				background: 'rgba(0, 2, 68, 0.7)'
			}
		]}+++
	/>
```

### Example 4: Array of Tailwind class

If you want to style each input box individually, you can pass an array of tailwind class. Also if you want any box to follow default style you can pass sparse array accordingly.

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
		+++isDisabled={true}
		inputDisabledStyle={[
            "!bg-red-500",
            "!bg-blue-500",
            "!bg-green-500",
            "!bg-yellow-500"
		]}+++
	/>
```

### Example 5: Global Styling
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
		+++isDisabled={true}+++
	/>
	
	<style>
		+++:global(.single-otp-input:disabled) {
			background: rgba(0,0,0,0.6) !important;
		}+++
	</style>
```