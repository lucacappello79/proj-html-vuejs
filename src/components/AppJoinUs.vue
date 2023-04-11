<script>

import { store } from "../store.js";

export default {

    name: "AppJoinUs",

    data() {

        return {

            store,

        }
    },

};

</script>


<template>
    <div class="joinus-wrapper">
        <div class="section-title">
            Want to work with us?
            <span>Send us <strong>a message!</strong></span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sint molestiae consequatur ratione, excepturi
            assumenda a tenetur ducimus eligendi
            repellat repudiandae nam.</p>
        <button>CONTACT</button>

    </div>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

.joinus-wrapper {
    @include centered;

    background-image: url('/img/h-2-background-1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;

    padding: 60px 0;
    text-align: center;

    .section-title {
        @include centered-inner;
        font-size: 32px;
        margin-bottom: 15px;

        strong {
            font-style: italic
        }

    }

    p {
        @include centered-inner;
        margin-bottom: 20px;

    }
}

button {
    font-weight: bold;
    padding: 12px 50px;
    background-color: #d8f0e3;
    outline: none;
    border: none;
}
</style>