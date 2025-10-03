---
title: bind:inputRef
---

## bind:inputRef

### Create your own reference

You can create your own reference to the input fields by using the `bind:inputRef` directive. This is an alternate way to get references. Otherwise, you can use [`otpRef.inputRefs`](bind-this) or you can import `inputRef` from the library.

> [!NOTE] Generally, there's no need to create your own reference, but you can if needed for specific purposes.

### Example
```svelte
    <script>
        import OtpInput, { setValue } from 'svelte-otp-input';
    
        // Ensure the array length equals numInputs (the number of OTP input fields)
        +++let inputRef = $state(Array(4).fill(null));+++
        let otp = $state("");
    
        function clearOTP() {
            setValue("")
            +++inputRef[0].focus()+++
        }
    </script>
    
    <OtpInput
        +++bind:inputRef+++
        bind:value={otp}
        numInputs={4}
    />
    
    <button onclick={() => clearOTP()}>Clear OTP</button>
```