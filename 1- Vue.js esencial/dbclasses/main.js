const vm1 = new Vue({
	el: '#app',
	data: {
		tareas: [
			{titulo: 'Hacer la Compra', completado: false},
			{titulo: 'Aprender Vue.js', completado: false},
			{titulo: 'Aprender Firebase', completado: false},
			{titulo: 'Dominar ES6', completado: false},
			{titulo: 'Salir a Correr', completado: false},
		]
	},
	methods: {
		completarTarea (tarea) {
			tarea.completado = !tarea.completado;
		}
	}
});