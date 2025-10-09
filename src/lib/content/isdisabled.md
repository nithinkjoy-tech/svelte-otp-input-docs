---
title: isDisabled
---

# isDisabled
Disables user interaction with the input when set to `true`. Accepts a boolean value. Defaults to `false`.

### Example
```svelte
    <script>
      import OtpInput from 'svelte-otp-input';
      
      let numInputs = 4;
      let otp = $state("");
    </script>
    
    <OtpInput
      bind:value={otp}
      numInputs={numInputs}
      +++isDisabled={true}+++
    />
```