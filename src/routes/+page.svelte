<script lang="ts">
	import SEOHead from '$lib/SEOHead.svelte';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';
	import AlphabetNav from '$lib/AlphabetNav.svelte';
	import { dictionary } from '$lib/content/dictionary';

	type DictionaryKey = keyof typeof dictionary;

	const dictionary_keys = Array.from(Object.keys(dictionary)).sort() as DictionaryKey[];

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
<AlphabetNav alphabet_array={removeDuplicates(first_char_array)} />
<section class="section_main">
	<dl id="definition_list">
		{#each dictionary_keys as item}
			<!-- if its the first occurence of an alphabetical character, add id -->
			{#if anchor_keys.includes(item)}
				<h5 class="heading_alphabet">{item[0].toUpperCase()}</h5>
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
<footer class="section_footer">
	<a href="https://masayashida.com">masayashida.com</a>
</footer>

<style>
	.section_main {
		/* display: flex;
		flex-direction: column;
		align-items: flex-start; */
		width: 100%;
		max-width: min(48em, 95%);
		margin: 3.5rem auto;
		margin-bottom: 7.5rem;

		hyphens: auto;
		/* outline: 1px solid red; */
	}
	@media screen and (max-width: 40em) {
		.section_main {
			/* line-break: anywhere; */
			max-width: 100%;
			/* max-width: calc(100% - 4rem); */
			margin: 0 auto;
			/* padding: 0 2rem 0 2rem; */
			/* outline: 1px solid red; */
		}
	}

	.section_main dt {
		line-height: 1.24;
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1rem 0;
	}

	.section_main dd {
		line-height: 1.5;
		margin-bottom: 1.25rem;
		font-size: 1.25rem;
		color: var(--clr_grey_shade_a);
	}

	@media (prefers-color-scheme: dark) {
		.section_main dd {
			color: var(--clr_grey_shade_d);
		}
	}

	.heading_alphabet {
		font-size: var(--type_scale_5);
		font-weight: 600;
		margin: 0;
		color: var(--clr_grey_shade_c);
		/* outline: 1px solid red; */
	}
	.heading_alphabet:not(:first-of-type) {
		margin-top: var(--type_scale_6);
	}
	@media (prefers-color-scheme: dark) {
		.heading_alphabet {
			color: var(--clr_grey_shade_b);
		}
	}

	/* for mobile screen, add padding to dt, dd, and alphabet headings */
	@media screen and (max-width: 40em) {
		.heading_alphabet,
		.section_main dt,
		.section_main dd {
			padding: 0 2rem 0 1rem;
		}

		@supports (-moz-appearance: none) {
			/* firefox specific khmer word wrap fix */
			.heading_alphabet,
			.section_main dt,
			.section_main dd {
				word-break: break-all;
			}
		}
	}

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
