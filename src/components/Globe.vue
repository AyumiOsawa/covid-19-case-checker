<template>
  <h1>data</h1>
  <ul v-for="(value, key, index) in data" :key="index">
    <h2>{{ key }}</h2>
    <li>{{ value.confirmed }}</li>
  </ul>
  <div id="globe"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import * as d3 from 'd3';
// import versor from 'versor';
// import topojson from 'topojson-client';

export default defineComponent({
  name: 'Globe',
  props: {
    data: Object,
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
#globe {
  background-color: azure;
}
</style>
