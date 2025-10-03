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
      import OtpInput, { setValue } from 'svelte-otp-input';
      
      let otp = $state("");
    </script>
    
    <OtpInput
      bind:value={otp}
      numInputs={4}
    />
    
    <button onclick={() => setValue("")}>Clear</button>
```