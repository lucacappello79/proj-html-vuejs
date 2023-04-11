<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

        }
    },

    emits: [''],

};

</script>


<template>
    <header>
    </header>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;
</style>