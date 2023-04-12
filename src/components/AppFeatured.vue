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

    methods: {
        scrollTop() {

            window.scrollTo({ top: 0, behavior: "smooth" });

        },
    },

};

</script>


<!-- <template>
    <section id="featured">
        <div class="scroll-up" @click="scrollTop">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="featured-wrapper">
            <AppFeaturedCard v-for="(item, index) in store.featuredCards" :img="item.img" :title="item.title"
                :description="item.description" :background="item.color">
            </AppFeaturedCard>
        </div>
    </section>
</template> -->

<template>
    <section id="featured">

        <div class="featured-wrapper">
            <div class="scroll-up" @click="scrollTop">
                <i class="fa-solid fa-arrow-up-long"></i>
            </div>
            <AppFeaturedCard v-for="(item, index) in store.featuredCards" :img="item.img" :title="item.title"
                :description="item.description" :background="item.color">
            </AppFeaturedCard>
        </div>
    </section>
</template>




  
<style lang="scss" scoped>
@use "../scss/variables" as *;

// section {
//     position: relative;
// }

// .scroll-up {
//     width: 27px;
//     height: 27px;
//     color: white;
//     background-color: #c0e1cf;
//     position: absolute;
//     bottom: 45%;
//     right: 15px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 50%;
//     z-index: 999;

//     &:hover {
//         border: 1px solid #c0e1cf;
//         background-color: #fff;
//         scale: 1.05;
//         color: #c0e1cf;
//     }
// }

.featured-wrapper {
    @include centered();

    position: relative;
    display: flex;
    flex-flow: row wrap;

    .scroll-up {
        width: 27px;
        height: 27px;
        color: white;
        background-color: #c0e1cf;
        position: absolute;
        bottom: 45%;
        right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        z-index: 999;

        &:hover {
            border: 1px solid #c0e1cf;
            background-color: #fff;
            scale: 1.05;
            color: #c0e1cf;
            z-index: 999;
        }
    }
}
</style>