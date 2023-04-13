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
        <img :src="img" alt="card image">
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
        z-index: 2;
    }

    .card-overlay {
        position: absolute;
        top: 43%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        width: 43%;
        height: 15%;
        padding-left: 13px;

        transition: all 0.3s ease-in-out;

        h4 {
            margin-bottom: 5px;
            font-size: 0.8em;
            font-weight: 500;
        }

        small {
            text-align: center;
            font-size: 0.7em;
            font-style: italic;
        }
    }

    &:hover .card-overlay {
        left: 0;
    }
}
</style>