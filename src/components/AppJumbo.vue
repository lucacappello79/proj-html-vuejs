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
    <section id="jumbo">
        <div class="slider-wrapper">

        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.slider-wrapper {
    @include centered();
    height: 300px;
    background-color: antiquewhite;
}
</style>