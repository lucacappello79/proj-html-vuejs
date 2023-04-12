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
    <section>
        <div class="scroll-up">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="featured-wrapper">
            <AppFeaturedCard v-for="(item, index) in store.featuredCards" :img="item.img" :title="item.title"
                :description="item.description" :background="item.color">
            </AppFeaturedCard>
        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

section {
    position: relative;
}

.scroll-up {
    width: 27px;
    height: 27px;
    color: white;
    // background-color: #f0817b;
    background-color: #c0e1cf;
    position: absolute;
    bottom: 45%;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

.featured-wrapper {
    @include centered();

    display: flex;
    flex-flow: row wrap;
}
</style>