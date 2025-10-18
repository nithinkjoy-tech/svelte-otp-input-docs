---
title: separator
---

# separator

Separator is the character or style between the input fields.

| Type                       | Description                |
|----------------------------|----------------------------|
| `"string"`                 | Any string like `***` etc  |
| `"snippet"`                | Svelte5+ Snippets          |
| `Array(string or snippet)` | Array of string or snippet |

### Example 1: String
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++separator="•"+++
        inputType="number"
    />
```

### Example 2: Snippet
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    +++{#snippet separatorSnippet()}
        <span class="custom-separator"></span>
    {/snippet}+++
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++separator={separatorSnippet}+++
        inputType="number"
    />
    
    <style>
        .custom-separator {
            width: 6px;
            height: 6px;
            background: red;
            border-radius: 50%;
        }
    </style>
```

### Example 3: Array of Strings
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++separator={["*","•","*"]}+++
        inputType="number"
    />    
```

### Example 4: Array of Snippet
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    +++{#snippet separatorSnippet1()}
        <span class="custom-separator1"></span>
    {/snippet}
    
    {#snippet separatorSnippet2()}
        <span class="custom-separator2"></span>
    {/snippet}+++
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++separator={[separatorSnippet1, separatorSnippet2, separatorSnippet1]}+++
        inputType="number"
    />
    
    <style>
        .custom-separator1 {
            width: 6px;
            height: 6px;
            background: red;
            border-radius: 50%;
        }
        
        .custom-separator2 {
            width: 6px;
            height: 6px;
            background: blue;
            border-radius: 50%;
        }
    </style>
```

### Example 5: Mixture of Strings and Snippets
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    +++{#snippet separatorSnippet()}
        <span class="custom-separator"></span>
    {/snippet}+++
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        +++separator={[separatorSnippet, "*", separatorSnippet]}+++
        inputType="number"
    />
    
    <style>
        .custom-separator {
            width: 6px;
            height: 6px;
            background: red;
            border-radius: 50%;
        }
    </style>
```