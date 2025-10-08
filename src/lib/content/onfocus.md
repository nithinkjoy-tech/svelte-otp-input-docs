---
title: onFocus
---

## onFocus
This function gets called when the user inputs a value in any OTP field and receives the OTP value as a parameter. The `onFocus` prop takes an array where the `0th` index is the callback function and the `1st` index is a string specifying when to call it: `"before"`, `"after"`, or `"replace"`.

Ex: `onFocus={[onFocus, "after"]}`

| Options       | Description | 
|---------------|-------------|
| `replace`     | Replaces the default input behavior with the custom function |
| `before`      | Calls the function before the input value is updated |
| `after`       | Calls the function after the input value is updated |

### Example: Replace
Our custom `onFocus` function will replace the default `onFocus` function.

```svelte
    <script>
        import OtpInput, {
            +++setFocusIndex,
            getSortedKeysByPriority,
            inputRef as inputRefs,
            applyFocusStyle,
            removeFocusStyle,
            stylePriority+++
        } from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state('');
    
        let inputFocusStyle = {
            border: '2px solid blue;'
        };
        let isError = false;
    
        function onFocus(event, index) {
            +++setFocusIndex(index);+++
            if (!inputFocusStyle) return;
    
            const sortedKeys = +++getSortedKeysByPriority(stylePriority);+++
            const shouldApply =
                !isError || sortedKeys.indexOf('inputErrorStyle') > sortedKeys.indexOf('inputFocusStyle');
    
            if (shouldApply && inputFocusStyle) {
                +++applyFocusStyle(inputRefs[index], inputFocusStyle);+++
    
                if (event.key === 'Backspace' || event.key === 'Backspace') {
                    +++removeFocusStyle(inputRefs[index]);+++
                }
            }
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        inputFocusStyle={inputFocusStyle}
        +++onFocus={[onFocus, "replace"]}+++
    />
```

### Example: Before
Our custom `onFocus` function will execute before the default `onFocus` function gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onFocus(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onFocus={[onFocus, "before"]}+++
    />
```

### Example: After
Our custom `onFocus` function will execute after the default `onFocus` function gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onFocus(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onFocus={[onFocus, "after"]}+++
    />
```