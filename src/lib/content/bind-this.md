---
title: bind:this
---

## bind:this

### Explicitly Setting Value

To get a reference to a OtpInput, use `bind:this={otpRef}`. The value will be undefined until the component is mounted.

### otpRef.inputValues
Get array of input values

### otpRef.inputRefs
Get input refs

```svelte
    <script>
        import OtpInput, { setValue } from 'svelte-otp-input';
        
        +++let otpRef;+++
        let otp = $state("");
    
        function clearOTP() {
            setValue("")
            +++otpRef.inputRefs[0].focus()+++
        }
    </script>
    
    <OtpInput
        +++bind:this={otpRef}+++
        bind:value={otp}
        numInputs={4}
    />

    <button onclick={() => clearOTP()}>Clear OTP</button>
```

### otpRef.setFocusIndex(index)
Focus on an input box

```svelte
    <script>
        import OtpInput, { setValue } from 'svelte-otp-input';
    
        +++let otpRef;+++
        let otp = $state("");
    
        function clearOTP() {
            setValue("")
            +++otpRef.setFocusIndex(2)+++
        }
    </script>
    
    <OtpInput
        +++bind:this={otpRef}+++
        bind:value={otp}
        numInputs={4}
    />
    
    <button onclick={() => clearOTP()}>Clear OTP</button>
```

### otpRef.setValue(value)
Set a new value. ex: `otpRef.setValue("1234")`

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        +++let otpRef;+++
        let otp = $state("");
    
        function clearOTP() {
            +++otpRef.setValue("")+++
            otpRef.setFocusIndex(0)
        }
    </script>
    
    <OtpInput
        +++bind:this={otpRef}+++
        bind:value={otp}
        numInputs={4}
    />
    
    <button onclick={() => clearOTP()}>Clear OTP</button>
```

### otpRef.focusIndex.current
Get current focused index

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        +++let otpRef;+++
        let otp = $state("");
    
        function getCurrentFocusedIndex() {
            console.log(`current focused index is ${+++otpRef.focusIndex.current+++}`)
        }
    </script>
    
    <OtpInput
        +++bind:this={otpRef}+++
        bind:value={otp}
        numInputs={4}
    />
    
    <button onclick={() => getCurrentFocusedIndex()}>Get Current Focus</button>
```