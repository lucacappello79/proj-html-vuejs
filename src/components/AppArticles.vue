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
    }

};

</script>


<template>
    <section>
        <div class="scroll-up">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="articles-wrapper">

            <AppArticlesCard v-for="(item, index) in store.articles" :img="item.img_path" :description="item.description"
                :author="item.author">
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
    }
}

.articles-wrapper {
    @include centered;

    display: flex;
    justify-content: space-between;
    gap: 30px;
    padding: 60px 0;
    overflow-x: auto;
    // white-space: nowrap;
    // width: 100%;

}
</style>