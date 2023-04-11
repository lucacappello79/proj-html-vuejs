<script>
import { store } from "./store.js";

import AppHeader from "./components/AppHeader.vue";


export default {
  data() {
    return {
      store,
    };
  },

  components: {

    AppHeader,
    AppMain,
    AppSeries,

  },

  created() {

  },

  methods: {

    searchMovieOrShow() {

      axios.get(this.store.APIcallMovies + this.store.movieOrShow).then((res) => {
        console.log(res);
        console.log(res.data.results)
        this.store.movies = res.data.results;
      });

    },

  },

}

</script>

<template>
  <div class="container">
    <AppHeader @searchMovieOrShowEvent="searchMovieOrShow()"></AppHeader>
    <AppMain></AppMain>
    <AppSeries></AppSeries>
  </div>
</template>


<style lang="scss">
.container {
  overflow: hidden;
}
</style>
