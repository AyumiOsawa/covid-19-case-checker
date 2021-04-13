<template>
  <div class="card__area">
    countries? {{countries}}
    <div class="card__container" v-for="(datum, place, index) in countries" :key="index">
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
  data() {
    return {
      countries: this.countryData,
    };
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
.card {
  &__area{
    border: 3px blue solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  &__container {
    width: 30%;
    border: 3px solid navy;
    border-radius: 0.5rem;
    :hover {
      background-color: azure;
    }
  }
}

</style>
