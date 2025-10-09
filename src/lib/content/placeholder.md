---
title: placeholder
---

# placeholder
Placeholder can be single character or multiple characters of length equal to the number of inputs.

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
      +++placeholder="0000"+++ // or +++placeholder="*"+++
    />
```