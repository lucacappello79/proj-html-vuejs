<script>

import { store } from "../store.js";
import AppFeaturedCard from "./AppFeaturedCard.vue";

export default {

    name: "AppFeatured",

    data() {

        return {

            store,

        }
    },

    components: {
        AppFeaturedCard,
    },

};

</script>


<template>
    <div class="featured-wrapper">
        <AppFeaturedCard v-for="(item, index) in store.imagePaths" :img="item">
        </AppFeaturedCard>
    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.featured-wrapper {
    @include centered();

    display: flex;
    flex-flow: row wrap;
}
</style>