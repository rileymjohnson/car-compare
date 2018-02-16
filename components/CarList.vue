<template>
  <h2>Cars</h2>
  <div v-for="carItem in cars">
    <car :data="carItem"></car>
  </div>
</template>

<script>
import Car from './Car.vue'

export default {
  computed: {
    cars () {
      return this.$store.state.cars
    }
  },
  components: {
    Car
  }
}
</script>
