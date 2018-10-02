Vue.prototype.$https = axios;
const vm = new Vue({
	el: 'main',
	data: {
		personas: [],
		urlApi: 'https://randomuser.me/api/?results=500'
	},
	mounted(){
		this.cargarPersonas();
	},
	methods: {
		cargarPersonas(){
			this.$http.get(this.urlApi)
			.then((respuesta) => {
				this.personas = respuesta.data.results;
			});

			// axios.get(this.urlApi)
			// .then((respuesta) => {
			// 	this.personas = respuesta.data.results;
			// });
		}
	}
});