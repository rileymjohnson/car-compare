<template>
  <h2>Comparison Table</h2>

  <table class="table" v-show="filteredCars.length > 0">
    <tbody>
      <tr>
        <td class="compareTableHeader">Car</td>
        <td v-for="car in filteredCars">{{car.make}}</td>
      </tr>
      <tr>
        <td class="compareTableHeader">Mileage</td>
        <td v-for="car in filteredCars">{{car.mileage}}</td>
      </tr>
      <tr>
        <td class="compareTableHeader">Price</td>
        <td v-for="car in filteredCars">{{car.price}}</td>
      </tr>
    </tbody>
  </table>




</template>

<script>

export default {
  computed: {
    filteredCars () {
      return this.$store.state.cars.filter((car) => { //only cars that the user selected to compare
        return car.compare;
      })
    }
  }
}
</script>
