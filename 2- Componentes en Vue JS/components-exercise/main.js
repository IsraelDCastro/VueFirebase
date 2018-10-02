Vue.component('users', {
	template: `#users-template`,
	mounted () {
		axios.get('https://randomuser.me/api/?results=500')
			.then((datos) => {
				const listado = datos.data.results.map((user) => {
					return {
						nombre: `${user.name.title} ${user.name.first} ${user.name.last}`,
						correo: user.email,
						foto: user.picture.medium, 
					}
				});
				this.users = listado;

			})
	},

	data() {
		return {
			users: [],
			busqueda: '',
		}
	},
	computed: {
		filtrarUsuarios () {
			return this.users.filter((user) => {
				return user.nombre.includes(this.busqueda);
			});
		}
	}
})

Vue.component('usuario', {
	props:['datos'],
	template: `#user-template`,
})

new Vue({
	el: '#app',
	data: {
	}
})