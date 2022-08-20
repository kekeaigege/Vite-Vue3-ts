<script lang="ts">
import { ref, computed, reactive, toRefs, defineComponent } from "vue";
import Layout from "./Layout/layout.vue";

export default defineComponent({
  name: "App",
  components: { Layout },
  setup() {
    return {};
  }
});
</script>

<template>
  <Layout></Layout>
</template>

<style scoped></style>
