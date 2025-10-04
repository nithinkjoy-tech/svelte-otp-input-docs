---
title: Basic Usage
---

# Svelte OTP Input

A flexible and customizable OTP (One-Time Password) input component that **supports Svelte 5+**.

## Installation

```bash
npm install svelte-otp-input
```

## Basic Usage

```svelte
    <script>
        import OtpInput, { setValue, inputRef } from 'svelte-otp-input';
    
        let otp = $state("");
    
        function clearOTP() {
            setValue("");
            inputRef[0].focus();
        }
    </script>

	<OtpInput
		bind:value={otp}
		numInputs={4}
		inputType="number"
		placeholder="•"
		containerStyle={{
			gap: '6px',
			padding: '24px'
		}}
		inputStyles={{
			width: '60px',
			height: '60px',
			fontSize: '28px'
		}}
		inputFocusStyle={{
			border: '2px solid #3B82F6'
		}}
	/>
	
	<button onclick={clearOTP}>Clear</button>
```