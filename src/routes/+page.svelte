<script lang="ts">
	import SEOHead from '$lib/SEOHead.svelte';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';
	import { dictionary } from '$lib/content/dictionary';

	type DictionaryKey = keyof typeof dictionary;

	const dictionary_keys = Object.keys(dictionary) as DictionaryKey[];

	const first_char_array = dictionary_keys.map((item) => {
		if (item[0] !== ':') {
			return item[0];
		} else return '';
	});

	// determine which <dt> gets to have the alphabetical ID tag for navigation
	const anchor_keys = dictionary_keys
		.map((key, index) => {
			if (index !== 0) {
				if (key[0].toUpperCase() !== dictionary_keys[index - 1][0].toUpperCase()) {
					return key;
				} else return '';
			} else if (index === 0) {
				return key;
			}
		})
		.filter((item) => item !== '');

	function removeDuplicates(arr: string[]) {
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
			<!-- if its the first occurence of an alphabetical character, add id -->
			{#if anchor_keys.includes(item)}
				<dt id={item[0].toUpperCase()}>{item}</dt>
			{:else}
				<dt>{item}</dt>
			{/if}
			{#each dictionary[item] as definition}
				<dd>{definition}</dd>
			{/each}
		{/each}
	</dl>
</section>
