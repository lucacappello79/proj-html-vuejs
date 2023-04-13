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

<template>
    <section id="featured">

        <div class="featured-wrapper">
            <div class="scroll-up" @click="scrollTop">
                <i class="fa-solid fa-arrow-up-long"></i>
            </div>
            <div class="cart">
                <img src="/img/svg-6.svg" alt="cart icon">
            </div>
            <div class="circle">
                <img src="/img/svg-7.svg" alt="circle icon">
            </div>
            <AppFeaturedCard v-for="(item, index) in store.featuredCards" :img="item.img" :title="item.title"
                :description="item.description" :background="item.color">
            </AppFeaturedCard>
        </div>
    </section>
</template>




  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.featured-wrapper {
    @include centered();

    position: relative;
    display: flex;
    flex-flow: row wrap;

    .cart,
    .circle {
        position: absolute;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        z-index: 3;
        width: 25px;
        height: 25px;
    }

    .circle {
        top: 10%;
        background-color: red;

        img {
            width: 70%;
            filter: brightness(0) invert(1);
        }
    }

    .cart {
        top: 14%;
        background-color: white;

        img {
            width: 50%;
        }
    }



    .scroll-up {
        position: absolute;
        bottom: 45%;
        right: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;

        width: 27px;
        height: 27px;
        border-radius: 50%;
        color: white;
        background-color: #c0e1cf;

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