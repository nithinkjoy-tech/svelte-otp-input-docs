---
title: inputErrorStyle
---

# inputErrorStyle
Style of each input box

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
		+++isError={true}
		inputErrorStyle={{
			border: '1px solid red'
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
        +++isError={true}
        inputErrorStyle="!border-2 !border-red-500"+++
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
		+++isError={true}
		inputErrorStyle={[
            {
				border: '2px solid red'
			},
			{
				border: '2px solid blue'
			},
			{
				border: '2px solid green'
			},
			{
				border: '2px solid yellow'
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
		+++isError={true}
		inputErrorStyle={[
            "!text-red-500",
            "!text-blue-500",
            "!text-green-500",
            "!text-yellow-500"
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
		+++isError={true}+++
	/>
	
	<style>
		+++:global(.otp-input-error) {
			border: 2px solid blue !important;
		}+++
	</style>
```