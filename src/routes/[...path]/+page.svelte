<!--<script>-->
<!--	// import Text from '$lib/components/Text.svelte'-->
<!--	import { Text } from '@sveltejs/site-kit/components'-->
<!--	// import Text from '../../../packages/site-kit/src/lib/components/Text.svelte'-->
<!--	let content = $state();-->
<!--	let {data} = $props();-->
<!--	console.log({ data });-->
<!--</script>-->

<!--<div class="text content" bind:this={content}>-->
<!--	<Text>-->
<!--		{@html data.document.body}-->
<!--	</Text>-->
<!--</div>-->

<script>
	import { Text } from '@sveltejs/site-kit/components'
	let { data } = $props();
</script>

	<Text>
		{@html data.document.body}
	</Text>