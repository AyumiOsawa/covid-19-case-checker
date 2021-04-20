<template>
  <div class="card__area">
    <div class="card__container" v-for="(datum, place, index) in countryData" :key="index">
      <Card :country="datum" :place="place" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Card from "@/components/layout/Card.vue";

export default defineComponent({
  name: "Cards",
  components: {
    Card,
  },
  props: ["countryData"],
  computed: {
    getEUTopTen() {
      // const eus = [];
      this.countryData;
      return null;
    },
  },
});
</script>

<style lang="scss" scoped>
$card-width: calc(100vw * 0.3);
$card-height: calc(100vw * 0.3 * 0.8);
$card-space: calc(100vw * 0.025);
.card {
  &__area {
    border: 3px blue solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  &__container {
    width: $card-width;
    height: $card-height;
    margin-top: $card-space;
    border: 3px solid navy;
    border-radius: 0.5rem;
    :hover {
      background-color: azure;
    }
  }
}
</style>
