<script lang="ts">
	import SEOHead from '$lib/SEOHead.svelte';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';
	import AlphabetNav from '$lib/AlphabetNav.svelte';
	import Dictionary from '$lib/Dictionary.svelte';
	import { dictionary } from '$lib/content/dictionary';

	type DictionaryKey = keyof typeof dictionary;
	let dictionary_keys = Array.from(Object.keys(dictionary)).sort() as DictionaryKey[];

	// filter out empty items
	dictionary_keys = dictionary_keys.filter((item) => dictionary[item].length > 0);

	const first_char_array = dictionary_keys.map((item) => {
		return item[0];
	});
	// console.log('dictionary_keys: ', dictionary_keys);

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

	// console.log('anchor_keys: ', anchor_keys);

	function removeDuplicates(arr: string[]) {
		return [...new Set(arr)];
	}

	const types = {
		dictionary_type: typeof dictionary,
		dictionary_keys_type: typeof dictionary_keys,
		anchor_keys_type: typeof anchor_keys
	};
</script>

<SEOHead />
<SectionTop />
<Hero />
<AlphabetNav alphabet_array={removeDuplicates(first_char_array)} />
<Dictionary {types} {dictionary} {dictionary_keys} {anchor_keys} />

<footer class="section_footer">
	<a href="https://masayashida.com">masayashida.com</a>
</footer>

<style>
	.section_footer {
		width: 100%;
		/* max-width: min(40em, 95%); */
		margin: 2.5rem auto 3.5rem auto;
		padding: 1.5rem 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		/* outline: 1px solid red; */
	}
</style>
