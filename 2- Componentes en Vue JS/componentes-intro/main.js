Vue.component('mis-tareas', {
	// props: ['tareas'],
	template: `<ul><li v-for="tarea in tareas">{{tarea.title}}</li></ul>`,
	data () {
		return {
			tareas: [],
			urlApi: 'https://jsonplaceholder.typicode.com/todos',
			tareasLocales: [
				{title: 'Aprender Vue.js'},
				{title: 'Aprender Node.JS'},
				{title: 'Aprender JS'},
				{title: 'Dormir'},
				{title: 'Ver anime'}
			]
		}	
	},
	mounted (){
		axios.get(this.urlApi)
		.then((respuesta) => {
			this.tareas = respuesta.data;
		})
	}
});

const vm = new Vue({
	el: '#app',
})