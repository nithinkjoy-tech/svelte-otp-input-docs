---
title: keyDown
---

## keyDown
This function gets called when we press on a key and receive event and index as a parameter. The `keyDown` prop takes an array where the `0th` index is the callback function and the `1st` index is a string specifying when to call it: `"before"`, `"after"`, or `"replace"`.

Ex: `keyDown={[keyDown, "after"]}`

| Options       | Description | 
|---------------|-------------|
| `replace`     | Replaces the default input behavior with the custom function |
| `before`      | Calls the function before the input value is updated |
| `after`       | Calls the function after the input value is updated |

### Example: Replace
Our custom `keyDown` function will replace the default `keyDown` method.

```svelte
    <script>
        import OtpInput, {
            +++validateInput,
            inputRef as inputRefs,
            onInputInstance,
            onFocusInstance,
            getValue,
            keyDownInstance,
            setFocusIndex,
            isIphoneOrIpad+++
        } from 'svelte-otp-input';
    
        let numInputs = 4;
        let inputType = 'number';
        let otp = $state('');
    
        let onEnter = null;
    
        function keyDown(event, index) {
            switch (event.key) {
                case 'Backspace':
                    +++inputRefs+++[index].value
                        ? +++onInputInstance+++.handleOnInput(event, +++isIphoneOrIpad()+++ ? index + 1 : index)
                        : +++onFocusInstance+++.handleInputFocus(event, index - 1);
                    break;
                case 'Enter':
                    if (onEnter) {
                        if (typeof onEnter === 'function') {
                            onEnter(getValue());
                        } else {
                            throw new TypeError('onEnter must be a function');
                        }
                    }
                    break;
                case 'Tab':
                    +++keyDownInstance+++.defaultHandler({ ...event, key: 'ArrowRight' }, index);
                    break;
                case 'ArrowLeft':
                    +++setFocusIndex+++(index > 0 ? index - 1 : index);
                    if (index === 0) event.preventDefault();
                    break;
                case 'ArrowRight':
                    +++setFocusIndex+++(index < numInputs - 1 ? index + 1 : index);
                    if (index === numInputs - 1) {
                        if ('preventDefault' in event) event.preventDefault();
                    }
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();
                    break;
                default:
                    +++validateInput+++(event, index, inputType);
            }
        }
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        inputType={inputType}
        +++keyDown={[keyDown, "replace"]}+++
    />
```

### Example: Before
Our custom `keyDown` function will execute before the default `keyDown` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function keyDown(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++keyDown={[keyDown, "before"]}+++
    />
```

### Example: After
Our custom `keyDown` function will execute after the default `keyDown` method gets executed.

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let numInputs = 4;
        let otp = $state("");
    
        +++function keyDown(event, index) {
            console.log(event, index);
        }+++
    
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={numInputs}
        +++keyDown={[keyDown, "after"]}+++
    />
```