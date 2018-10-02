<!-- <template>
	<div>
		<section v-if="tipo === 'section'">
			<slot></slot>
		</section>
		<aside v-if="tipo === 'aside'">
			<slot></slot>
		</aside>
		<article v-if="tipo === 'article'">
			<slot></slot>
		</article>
		<nac v-if="tipo === 'nav'">
			<slot></slot>
		</nac>
		<header v-if="tipo === 'header'">x
			<slot></slot>
		</header>
		<footer v-if="tipo === 'footer'">
			<slot></slot>
		</footer>
	</div>
</template> -->

<script>
	export default {
		props: ['tipo'],
		render(createElement) {
			return createElement(
				this.tipo,
				this.$slots.default,
			)
		}
	}
</script>

<style>
	
</style>