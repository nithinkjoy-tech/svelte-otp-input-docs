---
title: bind:value
---

# bind:value

The `bind:value` directive in Svelte enables data binding between the OtpInput component and a variable, ensuring seamless synchronization of the input's value with the specified variable.

### Example 1: Basic Binding with value

```svelte
    <script>
      import OtpInput from 'svelte-otp-input';
      
      let value = $state("");
    </script>
    
    <OtpInput
        bind:value
        numInputs={4}
    />
```

In this example, the value variable is bound to the OtpInput component, allowing real-time updates to the input's value as the user types.

> [!NOTE] You cannot directly set new values to the `value` variable. This has been made readonly to prevent unintended updates. But if you want to update the value, you can use the [`setValue`](setvalue) method.

### Example 2: Binding with Custom Variable otp

```svelte
    <script>
      import OtpInput from 'svelte-otp-input';
      
      let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
    /> 
```

In this example, the otp variable is bound to the OtpInput component, enabling the component to both reflect and update the otp state as the user interacts with the input.