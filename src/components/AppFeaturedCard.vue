<script>

import { store } from "../store.js";

export default {

    name: "AppFeaturedCard",

    data() {

        return {

            store,

        }
    },

    props: {

        img: String,

    },


};

</script>


<template>
    <div class="card">
        <img :src="img" alt="fnf">
    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.card {
    width: calc(100% / 3);

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>