<script>

import { store } from "../store.js";
import AppCard from "./AppCard.vue";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

        }
    },

    components: {
        AppCard
    },

};

</script>


<template>
    <header>
    </header>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;
</style>