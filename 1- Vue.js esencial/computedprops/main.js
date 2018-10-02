const vm = new Vue({
	el: '#app',
	data: {
		msj: 'Hola Mundo :) !',
		nuevaTarea: null,
		tareas: [{
			title: 'Aprender Vue.js',
			prioridad: true,
			antiguedad: 23
		},
		{
			title: 'Aprender ES6',
			prioridad: false,
			antiguedad: 135
		},
		{
			title: 'Públicar algo todos los días',
			prioridad: true,
			antiguedad: 378
		}
		],
		numbers: [3,343,53556858,72365256,754,453,5,64,34,6]
	},
	methods: {
		agregarTarea () {
			// this, Aquí hace referancia a la instancia Vue
			this.tareas.unshift({
				title: this.nuevaTarea,
				prioridad: false,
				antiguedad: 0
			});
			this.nuevaTarea = null;
		}
	},
	computed: {
		msjReverse () {
			return this.msj.split('').reverse().join('')
		},
		tareasConPrioridad () {
			return this.tareas.filter((tarea) => tarea.prioridad);
		},
		tareasPorAntiguedad () {
			return this.tareas.sort((a, b) => b.antiguedad - a.antiguedad);
		},
		lowHight () {
			return this.numbers.sort((a, b) => a - b);
		}
	}
});

// Vanilla JavaScript

// function agregarTarea(){
// 	const input = document.querySelector('input[type="text"]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }