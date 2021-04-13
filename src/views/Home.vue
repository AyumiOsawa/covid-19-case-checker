<template>
  <div class="home">
    home component here:
    <Globe :countryData="countryData" />
    <Cards :countryData="countryData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Globe from "@/components/Globe.vue";
import Cards from "@/components/layout/Cards.vue";

export default defineComponent({
  name: "Home",
  components: {
    Globe,
    Cards,
  },
  props: ["countryData"],
});
</script>

<style lang="scss" scoped>
.home {
  height: 300vh;
  min-height: 120vh;
}
</style>
