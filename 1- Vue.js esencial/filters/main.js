const vm = new Vue({
	el: '#app',
	data: {
		busqueda: '',
		minimo: 5,
		juegos: [{
			titulo: 'Battlefield 1',
			genero: 'FPS',
			puntuacion: 9
		},
		{
			titulo: 'Civilazation VI',
			genero: 'Estrategia',
			puntuacion: 10
		},
		{
			titulo: 'Resident Evil 7',
			genero: 'Survival Horror',
			puntuacion: 7
		}
		]
	},
	computed: {
		mejoresJuegos() {
			return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
		},
		buscarJuego() {
			return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
		},
		searchBest (){
			return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
			return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
		}
	}
});

// Vanilla JavaScript

// function agregarTarea(){
// 	const input = document.querySelector('input[type="text"]');
// 	vm.tareas.unshift(input.value);
// 	input.value = '';
// }