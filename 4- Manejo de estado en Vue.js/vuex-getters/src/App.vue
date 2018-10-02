<template>
  <div>
    <count />
    <ul>
      <li v-for="tarea in tareas" @click="tarea.completado = !tarea.completado"> {{ tarea.nombre }} </li>
    </ul>
  </div>
</template>

<script>
  import count from './components/TareasRestantes'
  import { mapState} from 'vuex';
  export default {
    components: { count },
    // computed: {
    //   tareas() {
    //     return this.$store.state.tareas;
    //   }
    // }
    computed: mapState(['tareas'])
  }
</script>