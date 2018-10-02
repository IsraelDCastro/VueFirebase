<template>
  <div>
    <h1>Hola me llamo {{ nombre }} {{ apellido }} y me dedico a {{ profesion }}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    // computed: {
    //   nombre() {
    //     return this.$store.state.nombre;
    //   }
    // }
    // computed: mapState({
    //   nombre: (state) => state.nombre,
    //   apellido: (state) => state.apellido,
    // })
    computed: mapState(['nombre', 'apellido', 'profesion'])
  }
</script>