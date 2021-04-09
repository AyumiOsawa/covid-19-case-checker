<template>
  Globe
  data {{basicData}}
  <div id="globe"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Globe',
  props: {
    basicData: [],
  },
});
</script>

<style lang="scss" scoped>
#globe {
  background-color: azure;
}
</style>
