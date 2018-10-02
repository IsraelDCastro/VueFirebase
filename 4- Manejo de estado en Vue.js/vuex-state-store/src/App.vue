<template>
  <!-- <contador :cantidad="cantidad" @aumentar="cantidad++" @reducir="cantidad--"></contador> -->
  <contador></contador>
</template>

<script>
  import contador from './components/Contador'
export default {
  name: 'app',
  components: { contador },
  // data () {
  //   return {
  //     cantidad: 0
  //   }
  // }
}
</script>

<style>

</style>
