<script lang="ts">
	import SEOHead from '$lib/SEOHead.svelte';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let dictionary_keys = Object.keys(data.content);

	let first_char_array = dictionary_keys.map((item) => {
		if (item[0] !== ':') {
			return item[0];
		} else return '';
	});

	export function removeDuplicates(arr: string[]) {
		return [...new Set(arr)];
	}
</script>

<SEOHead />
<SectionTop />
<Hero />

<section class="section_alpha_nav">
	<nav id="alpha_nav">
		{#each removeDuplicates(first_char_array) as item}
			{#if item.length === 1}
				<a href={`#${item}`}>
					{item}
				</a>
			{/if}
		{/each}
	</nav>
	<!-- <noscript>JavaScript is required to use this navigation feature.</noscript> -->
</section>

<section class="section_main">
	<dl id="definition_list">
		{#each dictionary_keys as item}
			<dt>{item}</dt>
			{#each data.content[`${item}`] as definition}
				<dd>{definition}</dd>
			{/each}
		{/each}
	</dl>
</section>
