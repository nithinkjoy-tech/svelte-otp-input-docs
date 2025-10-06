---
title: shouldAutoFocus
---

## shouldAutoFocus
When `shouldAutoFocus` is true it focuses 1st input on mount. It accepts Boolean value. The default value is `true`

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
      +++shouldAutoFocus={false}+++
    />
```