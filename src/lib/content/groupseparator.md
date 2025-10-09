---
title: group Separator
---

# group Separator

group Separator is used to separate the groups of the input field, It is used along with [`group`](group) prop.

| Type        | Description               |
|-------------|---------------------------|
| `"string"`  | Any string like `***` etc |
| `"snippet"` | Svelte5+ Snippets         |

### Example 1: String
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        separator=""
        inputType="number"
        +++group={[2,2]}+++ // sum of group should be equal to numInputs
        +++groupSeparator="***"+++
    />
```

### Example 2: Snippet
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    +++{#snippet groupSeparatorSnippet()}
        <span class="custom-group-separator"></span>
    {/snippet}+++
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        separator=""
        inputType="number"
        +++group={[2,2]}+++  // sum of group should be equal to numInputs
        +++groupSeparator={groupSeparatorSnippet}+++
    />
    
    <style>
        +++.custom-group-separator {
            width: 40px;
        }+++
    </style>
```