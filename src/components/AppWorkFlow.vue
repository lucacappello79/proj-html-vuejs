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


<!-- <template>
    <section id="workflow">
        <div class="scroll-up" @click="scrollTop">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
        <div class="workflow-wrapper">
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
</template> -->

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

// section {
//     position: relative;
// }

.scroll-up {
    width: 27px;
    height: 27px;
    color: white;
    background-color: #f0817b;
    position: absolute;
    bottom: 25px;
    right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 999;

    &:hover {
        border: 1px solid #f0817b;
        background-color: #fff;
        scale: 1.05;
        color: #f0817b;
        z-index: 999;
    }
}

.workflow-wrapper {

    @include centered();

    text-align: center;
    position: relative;
    padding: 50px 0 80px;
    text-align: center;

    .background-image-container {
        position: absolute;
        z-index: 0;
        width: 73%;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
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