---
title: setValue
---

# setValue

### Explicitly Setting Value
Import and use `setValue` method to set the value of the input. `otp` value variable is made readonly to prevent unintended updates.

```svelte
    <script>
        import OtpInput, { +++setValue+++, inputRef} from 'svelte-otp-input';
    
        let otp = $state("");
    
        function clearOTP() {
            +++setValue("")+++
            inputRef[0].focus()
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
    />

    <button onclick={() => clearOTP()}>Clear OTP</button>
```

### OR

If you want to set value like vue.js ref you can also use `bind:this={otpRef}`

```svelte
    <script>
        import OtpInput, { inputRef } from 'svelte-otp-input';
    
        +++let otpRef;+++
        let otp = $state("");
    
        function clearOTP() {
            +++otpRef.setValue("");+++
            inputRef[0].focus()
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        +++bind:this={otpRef}+++
        numInputs={4}
    />
    
    <button onclick={() => clearOTP()}>Clear OTP</button>
```