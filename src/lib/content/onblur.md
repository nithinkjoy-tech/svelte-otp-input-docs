---
title: onBlur
---

## onBlur
This function gets called when we blur on an input field and receive event and index as a parameter. The `onBlur` prop takes an array where the `0th` index is the callback function and the `1st` index is a string specifying when to call it: `"before"`, `"after"`, or `"replace"`.

Ex: `onBlur={[onBlur, "after"]}`

| Options       | Description | 
|---------------|-------------|
| `replace`     | Replaces the default input behavior with the custom function |
| `before`      | Calls the function before the input value is updated |
| `after`       | Calls the function after the input value is updated |

### Example: Replace
Our custom `onBlur` function will replace the default `onBlur` function.

```svelte
    <script>
        import OtpInput, {
            +++inputRef as inputRefs,
            removeFocusStyle,+++
        } from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state('');
    
        let inputFocusStyle = {
            border: '2px solid pink;'
        }
    
        +++function onBlur(event, index) {
            if (inputFocusStyle) {
                removeFocusStyle(inputRefs[index]);
            }
        }+++
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        inputFocusStyle={inputFocusStyle}
        +++onBlur={[onBlur, "replace"]}+++
    />
```

### Example: Before
Our custom `onBlur` function will execute before the default `onBlur` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onBlur(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onBlur={[onBlur, "before"]}+++
    />
```

### Example: After
Our custom `onBlur` function will execute after the default `onBlur` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onBlur(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onBlur={[onBlur, "after"]}+++
    />
```