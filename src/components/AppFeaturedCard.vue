<script>

import { store } from "../store.js";

export default {

    name: "AppFeaturedCard",

    data() {

        return {

            store,
            isHover: false,

        }
    },

    props: {

        img: String,
        title: String,
        description: String,
        background: String,

    },


};

</script>


<template>
    <div class="card" @mouseover="isHover = true" @mouseleave="isHover = false">
        <img :src="img" alt="fnf">
        <div class="card-overlay" v-show="isHover" :style="{ backgroundColor: background }">
            <h4>{{ title }}</h4>
            <small>{{ description }}</small>
        </div>
    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.card {
    position: relative;
    width: calc(100% / 3);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        scale: 1.05;
        z-index: 999;
    }

    .card-overlay {
        position: absolute;
        top: 43%;
        width: 43%;
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        transition: all 0.3s ease-in-out;
        padding-left: 13px;

        h4 {
            font-size: 0.8em;
            margin-bottom: 5px;
            font-weight: 500;
        }

        small {
            font-size: 0.7em;
            text-align: center;
            font-style: italic;
        }
    }

    &:hover .card-overlay {
        left: 0;
    }
}
</style>