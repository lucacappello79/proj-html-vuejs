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
    @include centered;
}

.articles-wrapper {
    @include centered-inner;

    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 60px 0;
}
</style>