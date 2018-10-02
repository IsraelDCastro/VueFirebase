const shared = {
	usuario: {
		nombre: 'Israel De Castro'
	}
}

new Vue({
	el: '#app1',
	data: shared
})

new Vue({
	el: '#app2',
	data: shared
})