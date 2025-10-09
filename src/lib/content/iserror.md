---
title: isError
---

# isError
Applies error styling to the input. Accepts a boolean value. Defaults to `false`.

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
      +++isError={true}+++
    />
```