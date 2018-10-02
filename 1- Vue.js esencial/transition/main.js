const vm = new Vue({
	el: '#app',
	data: {
		mostrar: true,
		mensajes: {
			transicion: 'Transiciones CSS con Vue.js',
			animacion: 'Animaciones CSS con Vue.js',
			animacionCustom: 'Animaciones custom CSS con vue.js',
			entreElementos: 'Transi entre elementos con Vue.js'
		}
	}	
	});

// Vanilla JavaScript

// function agregarTarea(){
// 	const input = document.querySelector('input[type="text"]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }