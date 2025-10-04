---
title: numInputs
---

## numInputs
This is the number of input fields required.

### Example
```svelte
    <script>
      import OtpInput from 'svelte-otp-input';
      
      let numInputs = 4;
      let otp = $state("");
    </script>
    
    <OtpInput
      bind:value={otp}
      +++numInputs={numInputs}+++
    />
```