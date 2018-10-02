import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		tareas: [
			{ nombre: 'Aprender Vue Routing', completado: true},
			{ nombre: 'Organizar lecciones recientes', completado: false},
			{ nombre: 'Grabar lecciones del mini curso ES6', completado: false},
			{ nombre: 'Preparar landing page del curso', completado: false},
			{ nombre: 'Diseñar acciones de marketing', completado: false}
		]
	},
	getters: {
		tareasCompletadas: (state) => {
			return state.tareas.filter((tarea) => tarea.completado).length;
		}
	}
})