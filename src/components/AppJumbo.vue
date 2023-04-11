<script>

import { store } from "../store.js";

export default {

    name: "AppJumbo",

    data() {

        return {

            store,

        }
    },

};

</script>


<template>
    <div class="slider-wrapper">

    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.slider-wrapper {
    @include centered();
    height: 300px;
    background-color: antiquewhite;
}
</style>