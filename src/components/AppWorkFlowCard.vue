<script>

import { stringifyExpression } from "@vue/compiler-core";
import { store } from "../store.js";

export default {

    name: "AppWorkFlowCard",

    data() {

        return {

            store,

        }
    },

    props: {
        img: String,
        icon: String,
        color: String,
        title: String,
        description: String,
    },


};

</script>


<template>
    <div class="card">

        <div class="card-img">
            <!-- <img :src="img" alt="fnf"> -->
            <div class="icon" :style="{ color: color }">
                <i :class="icon"></i>
            </div>
        </div>

        <div class="card-text">
            <div class="title">
                {{ title }}
            </div>
            <div class="description">
                {{ description }}
            </div>
        </div>
    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.card {
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-img {
        background-color: #faf7f1;
        width: 40%;
        padding-top: 40%;
        border-radius: 50%;
        position: relative;

        i {
            font-size: 30px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    .description {
        color: grey;
        font-size: 12px;
        padding: 0 30px;
    }

    .title {
        font-weight: 400;
        margin: 15px 0;
    }
}
</style>