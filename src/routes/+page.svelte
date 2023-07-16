<script lang="ts">
	import type { PageData } from './$types';
	import SectionTop from '$lib/SectionTop.svelte';
	import Hero from '$lib/Hero.svelte';

	export function convertMarkdownToHtml(markdown: string) {
		const lines = markdown.split(/\r?\n/);

		const lines_filtered = lines.filter((line) => line.length > 1);
		console.log(lines_filtered);

		let html = '';
		let currentTerm = '';

		for (let i = 0; i < lines_filtered.length; i++) {
			const line = lines_filtered[i];

			if (line.startsWith(':')) {
				if (currentTerm) {
					html += `<dd>${line.slice(1)}</dd>\n`;
				}
			} else {
				// if (currentTerm) {
				// 	html += `</dd>\n`;
				// }
				currentTerm = line;
				html += `<dt>${currentTerm}</dt>`;
			}
		}
		// if (currentTerm) {
		// 	html += `</dd>\n`;
		// }

		return html;
	}

	export let data: PageData;
</script>

<SectionTop />
<Hero />

<section class="section_alpha_nav">
	<nav id="alpha_nav">
		<a href="#a">A</a>
	</nav>
	<noscript>JavaScript is required to use this navigation feature.</noscript>
</section>

<section class="section_main">
	<dl id="definition_list">
		{@html convertMarkdownToHtml(data.content)}
	</dl>
</section>
