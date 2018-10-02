Vue.component('lista-tareas', {
	template: `
	<div>
		<h1><slot></slot></h1>
		<ul>
			<tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
		</ul>
	</div>
	`,
	data () {
		return {
			tareas: [
				'Finalizar sección componentes',
				'Iniciar worflow con Vue CLI y Webpack',
				'Terminar de estudiar la documentación de Vuex',
				'Seguir jugando con Vue Router y grabar el primer video'
			],
		}
	}
});

Vue.component('tarea', {
	props: ['tarea'],
	template: `
		<li>{{tarea}}</li>
	`
});

Vue.component('contacto', {
	template: `<div><a href="mailto:juan@media.es">mailto:juan@media.es</a></div>`,
	data () {
		return {
		}
	}
});

Vue.component('bio', {
	template: `<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>`,
	data () {
		return {
		}
	}
});

new Vue({
	el: '#app'
});
