<script>

import { store } from "../store.js";
import AppArticlesCard from "./AppArticlesCard.vue";

export default {

    name: "AppArticles",

    data() {

        return {

            store,

        }
    },

    components: {
        AppArticlesCard
    },

    methods: {
        scrollTop() {

            window.scrollTo({ top: 0, behavior: "smooth" });

        },
    },

};

</script>


<!-- <template>
    <section id="articles">
        <div class="scroll-up" @click="scrollTop">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="articles-wrapper">

            <AppArticlesCard v-for="(item, index) in store.articles" :img="item.img_path" :description="item.description"
                :author="item.author" :day="item.day" :date="item.month">
            </AppArticlesCard>

        </div>
    </section>
</template> -->

<template>
    <section id="articles">
        <div class="scrolling-arrow">
            <div class="scroll-up" @click="scrollTop">
                <i class="fa-solid fa-arrow-up-long"></i>
            </div>
            <div class="articles-wrapper">
                <AppArticlesCard v-for="(item, index) in store.articles" :img="item.img_path"
                    :description="item.description" :author="item.author" :day="item.day" :date="item.month">
                </AppArticlesCard>

            </div>
        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;


section {
    // position: relative;

    .scroll-up {
        width: 27px;
        height: 27px;
        color: white;
        // background-color: #f0817b;
        background-color: #c0e1cf;
        position: absolute;
        top: 25px;
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

// .articles-wrapper {
//     @include centered;
//     position: relative;

//     display: flex;
//     justify-content: space-between;
//     gap: 30px;
//     padding: 60px 0;

// }
.scrolling-arrow {
    @include centered;
    position: relative
}

.articles-wrapper {
    @include centered;
    // position: relative;

    display: flex;
    justify-content: flex-start;
    gap: 30px;
    padding: 60px 12px;
    overflow-x: auto;
    // 

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #f0817b;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f0f0f0;
        border-radius: 4px;
    }

}
</style>