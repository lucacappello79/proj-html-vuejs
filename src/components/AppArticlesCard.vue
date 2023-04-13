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
        day: Number,
        date: Number,
    },


};

</script>


<template>
    <div class="card-content">
        <div class="date">
            <div class="date-top">{{ day }}</div>
            <div class="date-bottom">{{ date }}</div>
        </div>
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
    position: relative;
    min-width: calc(100% / 4);

    &:hover {
        scale: 1.05;
        z-index: 2;
    }

    .date {
        position: absolute;
        top: -20px;
        left: 20px;

        z-index: 1;
        text-align: center;

        width: 50px;

        .date-top {
            font-family: 'Times New Roman', Times, serif;
            font-size: larger;
            font-weight: bolder;
            line-height: 25px;

            height: 25px;
            background-color: #d8f0e3;

            transform: skew(20deg);
            transform-origin: left bottom;
        }

        .date-bottom {
            font-family: 'Times New Roman', Times, serif;
            font-size: 10px;
            font-weight: bold;
            line-height: 25px;

            height: 25px;
            background-color: #fad02c;

            transform: skew(-20deg);
            transform-origin: left bottom;
        }
    }

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