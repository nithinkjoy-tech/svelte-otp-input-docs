---
title: stylePriority
---

# stylePriority (Experimental)
Defines the CSS specificity priority for input states. When multiple states are active (e.g., disabled + error + focus), styles are applied in this priority order:
Default:
1. Disabled (p0) - highest priority
2. Error (p1) - medium priority
3. Focus (p2) - lowest priority

```js
// These are the default values
    let stylePriority = {
      inputDisabledStyle: 'p0',
      inputErrorStyle: 'p1',
      inputFocusStyle: 'p2'
    }
```

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
      +++stylePriority={{
            inputDisabledStyle: 'p0',
            inputFocusStyle: 'p1',
            inputErrorStyle: 'p2'
      }}+++
    />
```