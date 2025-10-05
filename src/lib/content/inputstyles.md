---
title: inputStyles
---

## inputStyles
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
		+++inputStyles={{
			width: '60px',
			height: '60px',
			fontSize: '28px'
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
        +++inputStyles="!w-16 !text-center !aspect-square !rounded-md !px-4 !py-3 !ring-[0.4px] !ring-gray-500"+++
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
		+++inputStyles={[
            {
                color: 'red'
            },
            {
                color: 'blue'
            },
            {
                color: 'green'
            },
            {
                color: 'yellow'
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
		+++inputStyles={[
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
	/>
	
	<style>
		+++:global(.single-otp-input) {
			color: pink !important;
		}+++
	</style>
```