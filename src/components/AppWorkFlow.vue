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
    }

};

</script>


<template>
    <section>
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
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.workflow-wrapper {

    @include centered();

    text-align: center;
    position: relative;
    // background-image: url('/img/svg-3.svg');
    // background-repeat: no-repeat;
    // background-position-y: center;
    // background-size: contain;

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