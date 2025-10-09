---
title: onComplete
---

# onComplete
This function gets called when all fields are filled.

### Example
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onComplete(value) {
            console.log('All OTP fields are filled', value);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        restrictPaste={true}
        +++onComplete={onComplete}+++
    />
```