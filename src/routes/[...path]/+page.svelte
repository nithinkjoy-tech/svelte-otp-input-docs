<script>
	import { Text } from '@sveltejs/site-kit/components'
	let { data } = $props();
</script>

	<Text>
		{@html data.document.body}
	</Text>