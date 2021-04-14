<template>
  <p></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Country {
  [countryName: string]: {
    All?: {
      confirmed: number;
      lat: number;
      long: number;
    };
  };
}

export default defineComponent({
  name: "APIData",
  async data() {
    const countryData: Country | Record<string, never> = {};
    return {
      countryData,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("http://localhost:3000/Netherlands");
      (await this).countryData = await response.json();
    },
  },
  async created() {
    this.fetchData();
  },
});
</script>
