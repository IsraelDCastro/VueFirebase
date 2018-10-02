Vue.component('autor', {
	props: ['nombre', 'edad'],
	template: `
	<div>
		<h1> {{ nombre }} </h1>
		<button @click="cambiarProp">Cambiar Pro</button>
	</div>`,
	mounted() {
		// Las props son accesibles desde this (proxy)
		// console.log(this.nombre);
		console.log(typeof this.edad);
	},
	methods: {
		cambiarProp() {
			this.nombre = this.nombre.toUpperCase();
		}
	}
})

new Vue({
	el: '#app',
	data: {
		autor: 'Israel de Castro'
	}
})