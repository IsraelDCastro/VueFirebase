Vue.component('alerta', {
	props: ['tipo', 'posicion'],
	template: `
		<section class="alerta" :class="[tipo, posicion]">
			<header class="alerta__header" >
				<slot name="header">
					Hola
				<slot>
			</header>
			<div class="alerta__contenido">
				<slot>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint doloribus praesentium dolore animi molestiae libero ullam eveniet sed est, nesciunt aliquid labore sit quasi cumque quod, alias excepturi delectus, aliquam.
				</slot>
			</div>
			<footer class="alerta__footer">
				<slot name="footer">
					Este es el texto del footer
				</slot>
			</footer>
		</section>
	
	`,
})

new Vue({
	el: '#app',
	data: {
	}
	
})