Vue.component('password', {
	props: ['contra'],
	template: `<input type="text" :value="contra" @input="comprobarContra($event.target.value)" ref="pass">`,
	methods: {
		comprobarContra(contra){
			if (this.noValidas.includes(contra)) {
				this.$refs.pass.value = contra = '';
			}
			this.$emit('input', contra)
		}
		
	},
	data() {
		return {
			noValidas: ['abc', 'admin', '123456', 'root'],
		}
	}
})

new Vue({
	el: '#app',
	data: {
		contra: 'israel203'
	}
})