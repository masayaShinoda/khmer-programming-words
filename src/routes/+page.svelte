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

<style>
	.section_alpha_nav {
		width: min(40em, 95%);
		max-width: min(40em, 95%);
		display: flex;
		justify-content: center;
		margin: 0 auto;
		padding: 1.5rem 0;
		background-color: rgba(0, 0, 0, 0);
		-webkit-backdrop-filter: blur(0.325rem);
		backdrop-filter: blur(0.325rem);
		border-top: 2px solid;
		border-bottom: 2px solid;
		border-color: var(--clr_grey_shade_e);

		font-size: 1.25rem;

		position: -webkit-sticky;
		/* Safari */
		position: sticky;
		top: 0;
	}

	@media (prefers-color-scheme: dark) {
		.section_alpha_nav {
			border-top-color: var(--clr_dark_shade_a);
			border-bottom-color: var(--clr_dark_shade_a);
		}
	}

	.section_alpha_nav a {
		text-decoration: none;
		font-size: 1.5rem;
	}

	.section_alpha_nav a:not(:last-of-type):not(:only-child) {
		margin-right: 0.5rem;
	}

	.section_main {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		max-width: min(48em, 95%);
		margin: 3.5rem auto;
		margin-bottom: 7.5rem;

		hyphens: auto;
		/* outline: 1px solid red; */
	}
	@media screen and (max-width: 40em) {
		.section_main {
			line-break: anywhere;
		}
	}

	.section_main dt {
		line-height: 1.24;
	}

	.section_main dd {
		line-height: 1.5;
	}

	.section_main dt {
		font-size: 1.5rem;
		font-weight: 600;
		margin: 1rem 0;
	}

	.section_main dd {
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
</style>
