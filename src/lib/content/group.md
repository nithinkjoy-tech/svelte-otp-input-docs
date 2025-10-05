---
title: group
---

## group

We can group inputs by using `group` prop. And make sure sum of `group` should be equal to `numInputs`.

> [!NOTE] Need to use [groupSeparator](groupseparator) prop for proper grouping.

### Example 1:
```svelte
    <script>
        import OtpInput from 'svelte-otp-input';
    
        let otp = $state("");
    </script>
    
    {#snippet groupSeparatorSnippet()}
        <span class="custom-group-separator"></span>
    {/snippet}
    
    <OtpInput
        bind:value={otp}
        numInputs={4}
        separator=""
        inputType="number"
        group={[2,2]} // sum of group should be equal to numInputs
        groupSeparator={groupSeparatorSnippet} // this can be a snippet or a string
    />
    
    <style>
        .custom-group-separator {
            width: 40px;
        }
    </style>
```