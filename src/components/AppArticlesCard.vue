<script>

import { store } from "../store.js";

export default {

    name: "AppArticlesCard",

    data() {

        return {

            store,

        }
    },

    props: {
        img: String,
        description: String,
        author: String,
    },


};

</script>


<template>
    <div class="card-content">
        <div class="card-img">
            <img :src="img" alt="fnf">
        </div>

        <div class="card-text">
            <div class="description">
                {{ description }}
            </div>
            <div class="author">
                {{ author }}
            </div>
        </div>
    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.card-content {
    width: calc(100% / 4);
    // flex: 1;
    //width: calc(25% - 30px);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .description {
        font-size: 12px;
        font-weight: 600;
        margin: 10px 0;
    }

    .author {
        font-size: 8px;
        font-style: italic;
    }
}
</style>