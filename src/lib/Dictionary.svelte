<script lang="ts">
	export let types;

	const { dictionary_type, dictionary_keys_type, anchor_keys_type } = types;

	export let dictionary: typeof dictionary_type;
	export let dictionary_keys: typeof dictionary_keys_type;
	export let anchor_keys: typeof anchor_keys_type;
</script>

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
</style>
