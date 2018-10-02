Vue.component('candidato', {
	// props: ['nombre', 'correo', 'imagen'],
	props: {
		nombre: {
			type: String,
			required: true
		},
		correo: String,
		imagen: String,
		location: {
			type: Object,
			default (){
				return{
					 ciudad: 'Higüey'
				}
			}
		}
	},
	template: `#candidato-template`,
})

new Vue({
	el: '#app',
	data: {
		candidatos: [],
		urlApi: 'https://randomuser.me/api/?results=100'
	},
	mounted() {
		this.obtenerCandidatos();
	},
	methods: {
		obtenerCandidatos() {
			axios.get(this.urlApi)
			.then((respuesta) => {
				this.candidatos = respuesta.data.results;
			})
		}
	}
})