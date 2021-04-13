<template>
  <div class="card">
    <h1 class="card__title">{{ country.country || place }}</h1>
    <p class="card__cases">confirmed: {{ country.confirmed }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  props: ["country", "place"],
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid red;
}
</style>
