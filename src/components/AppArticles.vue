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

    .scroll-up {
        position: absolute;
        top: 25px;
        right: 15px;

        display: flex;
        align-items: center;
        justify-content: center;
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

.scrolling-arrow {
    @include centered;
    position: relative
}

.articles-wrapper {
    @include centered;

    display: flex;
    justify-content: flex-start;
    gap: 30px;

    padding: 60px 12px;
    overflow-x: auto;

    //scroll bar styling, might not work on all devices
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