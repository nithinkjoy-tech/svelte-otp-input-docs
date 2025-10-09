---
title: onInput
---

# onInput
This function gets called when the user inputs a value in any OTP field and will receive the OTP value as a parameter of the function. The `onInput` prop takes an array where the `0th` index is the callback function and the `1st` index is a string specifying when to call it: `"before"`, `"after"`, or `"replace"`.

Ex: `onInput={[onInput, "after"]}`

| Options       | Description | 
|---------------|-------------|
| `replace`     | Replaces the default input behavior with the custom function |
| `before`      | Calls the function before the input value is updated |
| `after`       | Calls the function after the input value is updated |

### Example: Replace
Our custom `onInput` function will replace the default `onInput` function.

```svelte
    <script>
        import OtpInput, {+++onPasteInstance+++, +++setFocusIndex+++, +++inputValues+++, +++detectBrowser+++} from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
        function createFakePasteEvent(data) {
            return {
                clipboardData: {
                    getData: () => data
                },
                preventDefault: () => {}
            };
        }
    
        function onInput(event, index) {
            const isDelete =
                event.inputType === "deleteContentBackward" ||
                event.key === "Backspace" ||
                event.key === "deleteContentCut";
    
            // Chrome autofill
            if (+++detectBrowser().isChrome+++ && event.data?.length === numInputs && index === 0) {
                +++onPasteInstance+++.handleInputPaste(
                    createFakePasteEvent(event.data),
                    0,
                    null,
                    false
                );
                setTimeout(() => {
                    +++setFocusIndex(numInputs - 1);+++
                })
            }
    
            // Safari autofill
            if (+++detectBrowser().isSafari+++ && !("view" in event)) {
                +++inputValues+++.push(event.target.value);
                event.preventDefault();
                setTimeout(() => {
                    +++onPasteInstance+++.handleInputPaste(
                        createFakePasteEvent(+++inputValues+++.join("")),
                        0,
                        null,
                        false
                    );
                    +++setFocusIndex(numInputs - 1);+++
                }, 100);
            }
    
            // Move focus
            const focusIndex = isDelete
                ? index - 1
                : Math.min(index + 1, numInputs - 1);
    
            +++setFocusIndex(focusIndex);+++
            console.log("default function replaced with our custom function");
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onInput={[onInput, "replace"]}+++
    />
```

### Example: Before
Our custom `onInput` function will execute before the default `onInput` function gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onInput(value) {
            console.log('Input value will change', value);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onInput={[onInput, "before"]}+++
    />
```

### Example: After
Our custom `onInput` function will execute after the default `onInput` function gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function onInput(value) {
            console.log('Input value changed', value);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++onInput={[onInput, "after"]}+++
    />
```