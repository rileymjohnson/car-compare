<template>
  <div id="app">
    <car-list></car-list>
    <compare></compare>
  </div>
</template>

<script>
import CarList from './CarList.vue'
import Compare from './Compare.vue'

export default {
  components: {
    CarList,
    Compare
  }
}
</script>
