<template>
	<div>
		<h1>Menú principal</h1>
	<ul>
		<li><a href="#">Enlace 1</a></li>
		<li><a href="#">Enlace 2</a></li>
		<li><a href="#">Enlace 3</a></li>
		<li><a href="#">Enlace 4</a></li>
		<li><a href="#">Enlace 5</a></li>
		<li><a href="#">Enlace 6</a></li>
	</ul>
  <tareas></tareas>
	</div>
</template>

<script>
  import tareas from './components/Tareas'
export default {
  components: { tareas }
}
</script>