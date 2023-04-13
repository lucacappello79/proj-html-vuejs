<script>

import { store } from "../store.js";
import AppWorkFlowCard from "./AppWorkFlowCard.vue";


export default {

    name: "AppWorkFlow",

    data() {

        return {

            store,

        }
    },

    components: {
        AppWorkFlowCard,
    },

    methods: {
        scrollTop() {

            window.scrollTo({ top: 0, behavior: "smooth" });

        },
    },

};

</script>

<template>
    <section id="workflow">

        <div class="workflow-wrapper">
            <div class="scroll-up" @click="scrollTop">
                <i class="fa-solid fa-arrow-up-long"></i>
            </div>
            <div class="background-image-container"></div>
            <div class="section-title">
                Working
                <strong>process</strong>
            </div>
            <div class="process">
                <AppWorkFlowCard v-for="(item, index) in store.workflowSteps" :icon="item.icon" :color="item.color"
                    :title="item.title" :description="item.description">
                </AppWorkFlowCard>
            </div>

        </div>
    </section>
</template>
  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.scroll-up {
    position: absolute;
    right: 15px;
    bottom: 25px;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: white;
    background-color: #f0817b;

    &:hover {
        border: 1px solid #f0817b;
        background-color: #fff;
        color: #f0817b;
        scale: 1.05;
        z-index: 999;
    }
}

.workflow-wrapper {

    @include centered();

    position: relative;
    text-align: center;
    padding: 50px 0 80px;

    .background-image-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 0;

        width: 73%;
        height: 100%;

        background-image: url('/img/svg-3.svg');
        background-repeat: no-repeat;
        background-position-y: 40%;
        background-size: contain;
    }

    .section-title {
        font-size: 32px;
        margin-bottom: 60px;

        strong {
            font-style: italic
        }
    }

    .process {
        display: flex;
        gap: 10px;
    }
}
</style>