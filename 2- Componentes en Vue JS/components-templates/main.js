Vue.component('elegir-ganador', {
	props: ['listado'],
	template: `#elegir-ganador`,
	data () {
		return {
			ganador: false,
			participantes: this.listado
		}	
	},
	methods: {
		elegirGanador (){
			let cantidad = this.participantes.length;
			let indice = Math.floor((Math.random() * cantidad));
			this.ganador = this.participantes[indice - 1];
		}
	}
});

new Vue({
	el: '#app',
	data: {
		personas: ['Juan', 'Alicia', 'Pedro', 'Javier', 'Marcos']
	}
})