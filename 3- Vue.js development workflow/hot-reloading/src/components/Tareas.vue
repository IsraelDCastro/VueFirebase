<template>
	<div>
		<h2>Tareas por Hacer</h2>
		<ul>
			<li v-for="tarea in tareasPendientes">
				<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
			</li>
		</ul>
		<h2>Tareas por Finalizadas</h2>
		<ul>
			<li v-for="tarea in tareasFinalizdas ">
				<a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tareas: [
					{ nombre: 'Aprender Vue.js', completado: false},
					{ nombre: 'Grabar el módulo de Vuex', completado: false},
					{ nombre: 'Responder comentarios (de una vez)', completado: false},
					{ nombre: 'Salir a correr para despejarme', completado: false},
					{ nombre: 'Diseñar el módulo de Firebase', completado: false},
					{ nombre: 'Diseñar el ejercicio final', completado: false},
				],
				finalizadas: []
			}
		},
		methods: {
			actualizarTarea(tarea) {
				tarea.completado = !tarea.completado
			}
		},
		computed: {
			tareasPendientes() {
				return this.tareas.filter((tarea) => !tarea.completado)
			},
			tareasFinalizdas() {
				return this.tareas.filter((tarea) => tarea.completado)
			}
		}
	}
</script>