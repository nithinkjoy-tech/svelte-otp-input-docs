---
title: onPaste
---

# onPaste
This function gets called when we paste on an input field and receive event and index as a parameter. The `onPaste` prop takes an array where the `0th` index is the callback function and the `1st` index is a string specifying when to call it: `"before"`, `"after"`, or `"replace"`.

Ex: `onPaste={[onPaste, "after"]}`

| Options       | Description | 
|---------------|-------------|
| `replace`     | Replaces the default input behavior with the custom function |
| `before`      | Calls the function before the input value is updated |
| `after`       | Calls the function after the input value is updated |

### Example: Replace
Our custom `onPaste` function will replace the default `onPaste` method.

```svelte
    <script>
        import OtpInput, {
            +++inputValues,
            getValidInput,
            getInputType,
            setFocusIndex,+++
        } from 'svelte-otp-input';
    
        let numInputs = 4;
        let inputType = 'number';
        let otp = $state('');
    
        function onPaste(event, currentIndex) {
            event.preventDefault();
            const clipboardText = event.clipboardData
                .getData('text/plain')
                .slice(0, numInputs) // limit to max input length
                .split('');
    
            let insertionStartIndex = currentIndex - 1;
    
            // Handle case where previous value is 'v' (from Ctrl+V)
            if (+++inputValues+++[currentIndex - 1]?.toLowerCase() === 'v') {
                +++inputValues+++[currentIndex - 1] = '';
            } else {
                insertionStartIndex = currentIndex;
            }
            const totalCharsToInsert = clipboardText.length;
    
            // Check if any non-empty value exists before currentIndex
            const hasValuesBefore = +++inputValues+++.slice(0, currentIndex).some(Boolean);
            const startIndex = !hasValuesBefore ? 0 : insertionStartIndex;
            const endIndex = Math.min(numInputs, startIndex + totalCharsToInsert);
    
            for (let pos = startIndex; pos < endIndex; pos++) {
                if (clipboardText.length > 0) {
                    const char = clipboardText.shift();
                    +++inputValues+++[pos] = +++getValidInput(getInputType(inputType+++, pos), char) ?? '';
                    +++setFocusIndex(Math.min(numInputs - 1, pos + 1));+++
                } else {
                    break;
                }
            }
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        inputType={inputType}
        +++onPaste={[onPaste, "replace"]}+++
    />
```

### Example: Before
Our custom `onPaste` function will execute before the default `onPaste` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onPaste(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onPaste={[onPaste, "before"]}+++
    />
```

### Example: After
Our custom `onPaste` function will execute after the default `onPaste` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onPaste(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onPaste={[onPaste, "after"]}+++
    />
```