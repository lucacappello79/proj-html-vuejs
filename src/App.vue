<script>
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppHeader.vue";
import AppFooter from "./components/AppHeader.vue";



export default {
  data() {
    return {
      store,
    };
  },

  components: {

    AppHeader,
    AppMain,
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
    <AppHeader @searchMovieOrShowEvent="searchMovieOrShow()"></AppHeader>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>


<style lang="scss"></style>
