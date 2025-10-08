---
title: onEnter
---

## onEnter
This function gets called when the user clicks on the enter key and receives OTP as a parameter.

### Example
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onEnter(value) {
            console.log('Enter pressed', value);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        restrictPaste={true}
        +++onEnter={onEnter}+++
    />
```