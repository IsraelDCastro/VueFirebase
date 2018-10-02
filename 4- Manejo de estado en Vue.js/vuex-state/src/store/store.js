import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		nombre: 'Israel',
		apellido: 'De Castro',
		profesion: 'Developer',
		ciudad: 'Higüey'
	}
})