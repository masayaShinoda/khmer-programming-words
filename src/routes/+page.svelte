<script lang="ts">
	import SEOHead from '$lib/SEOHead.svelte';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';
	import type { PageData } from './$types';
	// import { onMount } from 'svelte';

	export let data: PageData;

	export function convertMarkdownToHtml(markdown: string, expectedReturn: 'html' | 'array') {
		const lines: string[] = markdown.split(/\r?\n/);

		const lines_filtered: string[] = lines.filter((line) => line.length > 1);
		// console.log(lines_filtered);

		let html = '';
		let currentTerm = '';

		let currentChar = '';

		for (let i = 0; i < lines_filtered.length; i++) {
			const line = lines_filtered[i];

			if (line.startsWith(':')) {
				if (currentTerm) {
					const regex = /`([^`]*)`/g; /* for code blocks */

					html += `<dd>${line.slice(1).replace(regex, '<code>$1</code>')}</dd>\n`;
				}
			} else {
				// if (currentTerm) {
				// 	html += `</dd>\n`;
				// }
				currentTerm = line;

				if (currentTerm[0].toUpperCase() === currentChar) {
					html += `<dt>${currentTerm}</dt>`;
				} else {
					currentChar = currentTerm[0].toUpperCase();
					html += `<dt id='${currentChar}'>${currentTerm}</dt>`;
				}
			}
		}
		// if (currentTerm) {
		// 	html += `</dd>\n`;
		// }
		if (expectedReturn === 'html') {
			return html;
		} else if (expectedReturn === 'array') {
			return lines_filtered;
		}
	}

	let content_array: string[] = convertMarkdownToHtml(data.content, 'array');
	let first_char_array = content_array.map((item) => {
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
		{@html convertMarkdownToHtml(data.content, 'html')}
	</dl>
</section>
