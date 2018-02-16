import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var carsArray = [
  {
    id: 0,
    price: 24000,
    mileage: 100,
    make: "Hyundai",
    compare: false
  },
  {
    id: 1,
    price: 35000,
    mileage: 50,
    make: "Ford",
    compare: false
  },
  {
    id: 2,
    price: 70000,
    mileage: 1000,
    make: "BMW",
    compare: false
  },
  {
    id: 3,
    price: 10000,
    mileage: 200,
    make: "Mazda",
    compare: false
  },
]

const state = {
  cars: carsArray
}

const mutations = {

  ADD_CAR_COMPARISON(state, carId) {
    var carIndex = state.cars.findIndex(car => car.id == carId);
    state.cars[carIndex].compare = true;
  },

  REMOVE_CAR_COMPARISON(state, carId) {
    var carIndex = state.cars.findIndex(car => car.id == carId);
    state.cars[carIndex].compare = false;
  }

}

export default new Vuex.Store({
  state,
  mutations
})