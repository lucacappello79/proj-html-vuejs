<script>
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppJumbo from "./components/AppJumbo.vue";
import AppFeatured from "./components/AppFeatured.vue";
import AppWorkFlow from "./components/AppWorkFlow.vue";
import AppJoinUs from "./components/AppJoinUs.vue";
import AppArticles from "./components/AppArticles.vue";
import AppFooter from "./components/AppFooter.vue";



export default {
  data() {
    return {
      store,
    };
  },

  components: {

    AppHeader,
    AppJumbo,
    AppFeatured,
    AppWorkFlow,
    AppJoinUs,
    AppArticles,
    AppFooter,

  },

  created() {

  },

  methods: {

  },

}

</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <AppJumbo></AppJumbo>
    <AppFeatured></AppFeatured>
    <AppWorkFlow></AppWorkFlow>
    <AppJoinUs></AppJoinUs>
    <AppArticles></AppArticles>
    <AppFooter></AppFooter>
  </div>
</template>


<style lang="scss"></style>
