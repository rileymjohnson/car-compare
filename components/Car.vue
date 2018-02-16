<template>
  <h6>{{data.make}}</h6>
  <input type="checkbox" @change="compareChange" :data-id="data.id" />
  <label>{{data.compare? "Remove from compare" : "Add to compare"}}</label>
</template>

<script>

export default {
  methods: {
    compareChange (e) {
      var carId = parseInt(e.target.getAttribute("data-id"));
      if (e.target.checked) { //if checked, add car
        this.$store.dispatch("ADD_CAR_COMPARISON", carId);
      } else {
        this.$store.dispatch("REMOVE_CAR_COMPARISON", carId);
      }
    }
  },
  props: {
    data: {
        type: Object
    }
  },
}
</script>
