Vue.component('mis-tareas', {
	props: ['listado'],
	template: `#mis-tareas`,
})

new Vue({
	el: '#app',
	data: {
		tareas: [
			{ titulo: 'Salir a Correr' },
			{ titulo: 'Recoger la casa' },
			{ titulo: 'Aprender Vue.js' },
			{ titulo: 'Ir al Gimnasio' },
			{ titulo: 'Leer Cada día' }
		]
	}
	
})