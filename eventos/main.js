const vm = new Vue({
	el: '#app',
	data: {
		nuevaTarea: null,
		tareas: [
			'Aprender Vue.js',
			'Aprender ES6',
			'Públicar algo todos los días'
		]
	},
	methods: {
		agregarTarea () {
			// this, Aquí hace referancia a la instancia Vue
			this.tareas.unshift(this.nuevaTarea);
			this.nuevaTarea = null;
		}
	}
});

// Vanilla JavaScript

// function agregarTarea(){
// 	const input = document.querySelector('input[type="text"]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }