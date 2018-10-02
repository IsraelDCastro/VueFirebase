new Vue({
	el: '#app',
	data: {
		days: [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'
		],
		tareas: [
			{name: 'Hacer la tarea', prioridad: 'Baja'},
			{name: 'Aprender Vue y Firebase', prioridad: 'Alta'},
			{name: 'Ir al Gimnasio', prioridad: 'Media'}
		],
		persona: {
			nombre: 'Juan',
			profesion: 'Dev Front-end',
			ciudad: 'Higüey'
		}
	}
});