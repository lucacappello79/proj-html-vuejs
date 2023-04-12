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
        <div class="scroll-up" @click="scrollTop">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="articles-wrapper">

            <AppArticlesCard v-for="(item, index) in store.articles" :img="item.img_path" :description="item.description"
                :author="item.author" :day="item.day" :date="item.month">
            </AppArticlesCard>

        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;


section {
    position: relative;

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

        &:hover {
            border: 1px solid #c0e1cf;
            background-color: #fff;
            scale: 1.05;
            color: #c0e1cf;
        }
    }

}

.articles-wrapper {
    @include centered;

    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 60px 0;
    overflow-x: hidden;
    // white-space: nowrap;
    // width: 100%;

}
</style>