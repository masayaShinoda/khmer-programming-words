<script lang="ts">
	export let alphabet_array: string[];
</script>

<section class="section_alpha_nav">
	<nav id="alpha_nav">
		{#each alphabet_array as item}
			{#if item.length === 1}
				<a href={`#${item}`}>
					{item}
				</a>
			{/if}
		{/each}
	</nav>
	<!-- <noscript>JavaScript is required to use this navigation feature.</noscript> -->
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
		user-select: none;

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

	/* mobile dictionary nav */
	@media screen and (max-width: 40em) {
		.section_alpha_nav {
			width: 2rem;
			flex-direction: column;
			position: sticky;
            left: calc(100% - 2rem);
			top: 0;
			margin: 0;
            margin-right: calc(-1 * 2rem);
			height: 100dvh;
			border: none;
			background: none;
			backdrop-filter: none;
			-webkit-backdrop-filter: none;
			float: left;
			/* outline: 1px solid red; */
		}
		.section_alpha_nav nav {
			display: inline-flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.section_alpha_nav a {
			margin-bottom: .875rem;
			font-size: var(--type_scale_3);
		}
		.section_alpha_nav a:not(:last-of-type):not(:only-child) {
			margin: 0 0 1rem 0;
			/* outline: 1px solid green; */
		}
	}
</style>
