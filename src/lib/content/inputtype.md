---
title: inputType
---

## inputType

| Value      | Description | Allowed Characters |
|------------|-------------|-------------------|
| `number`   | Numeric only | 0-9 |
| `text`     | Any text | All characters |
| `upper-alnum` | Uppercase alphanumeric | A-Z, 0-9 |
| `lower-alnum` | Lowercase alphanumeric | a-z, 0-9 |
| `alnum`    | Alphanumeric (mixed case) | A-Z, a-z, 0-9 |
| `uppercase` | Uppercase letters only | A-Z |
| `lowercase` | Lowercase letters only | a-z |
| `password` | Password input (masked) | All characters (hidden) |
| Custom RegEx | Custom pattern | `/^[A-Za-z]+$/` (letters only) |

### Example 1:
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';

        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++inputType="upper-alnum"+++ // or you can use array of different input types for each input, see ex below
    />
```

### Example 2:
You can also use array of different input types for each input field
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';

        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++inputType={["number" , "alnum" , "upper-alnum" , "lower-alnum"]}+++
    />
```

### Example 3: regex

```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
        +++let regex = /^[A-Za-z]+$/+++
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++inputType={regex}+++
    />
```