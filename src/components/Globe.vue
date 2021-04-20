<template>
  <div class="globe">
    <h1>globe</h1>
    globe here
    <svg class="globe__svg" id="globe"></svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import * as d3 from 'd3';
// import versor from 'versor';
// import topojson from 'topojson-client';

export default defineComponent({
  name: "Globe",
  props: {
    countryData: Object,
  },
  computed: {
    createGlobe() {
      // sample
      // const projection = d3.geoEqualEarth();

      return null;
    },
  },
});
</script>

<style lang="scss" scoped>
.globe {
  background-color: lightgreen;
  __svg {
    background-color: blueviolet;
  }
}
</style>
