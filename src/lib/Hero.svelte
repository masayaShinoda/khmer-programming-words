<section class="section_hero">
	<div>
		<img src="/SVG/decorative-hero-section.svg" width="128" height="128" alt="decorative icon" />
	</div>
	<div>
		<h1>ពាក្យបច្ចេកទេសបកប្រែជាភាសាខ្មែរ</h1>
		<p lang="en">
			An <span style="font-weight: 600;">opinionated</span> collection of technical words commonly used
			in programming, translated into Khmer.
		</p>
	</div>
</section>

<style>
	.section_hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: min(64em, 95%);
		margin: 2.5rem auto;
		/* outline: 1px solid green; */
	}

	.section_hero > div:first-of-type {
		margin-bottom: 1.5rem;
	}

	@media screen and (max-width: 48em) {
		.section_hero img {
			max-height: 25vw;
			max-width: 25vw;
			object-fit: contain;
		}
	}

	.section_hero h1,
	.section_hero span,
	.section_hero p {
		text-align: center;
		line-height: 1.4;
		line-break: auto;
		/* outline: 1px solid red; */
	}

	.section_hero h1 {
		font-size: calc(var(--type_scale_6) * 0.875);
	}
	@media screen and (max-width: 32em) {
		.section_hero h1 {
			font-size: var(--type_scale_5);
		}
	}

	.section_hero > div:nth-of-type(2) > span {
		color: var(--clr_dark_shade_b);
	}

	@media (prefers-color-scheme: dark) {
		.section_hero > div:nth-of-type(2) > span {
			color: var(--clr_grey_shade_d);
		}
	}
</style>
