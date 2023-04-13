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
    display: flex;
    flex-direction: column;
    align-items: center;

    width: calc(100% / 4);

    .card-img {
        position: relative;

        width: 40%;
        padding-top: 40%;
        background-color: #faf7f1;
        border-radius: 50%;

        i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            font-size: 30px;
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