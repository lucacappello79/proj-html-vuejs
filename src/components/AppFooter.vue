<script>

import { store } from "../store.js";

export default {

    name: "AppFooter",

    data() {

        return {

            store,

        }
    },

    emits: [''],

};

</script>


<template>
    <footer>
        <div class="footer-wrapper">
            <div class="footer-logo">
                <div class="footer-logo-img">
                    <img src="/img/logo-sidearea-1.png" alt="">
                </div>
                <div class="footer-logo-text">
                    <small>
                        Let's get creative
                    </small>
                </div>
            </div>
            <div class="footer-contacts">
                erregreg@gregerg
                <br>
                vreververververv
            </div>
            <div class="footer-address">
                erregreg@gregerg
                <br>
                vreververververv
            </div>
            <div class="footer-social">
                erregreg@gregerg
                <br>
                vreververververv
            </div>
        </div>
    </footer>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

footer {
    background-color: #c0e1cf;
    height: 120px;

    .footer-wrapper {
        @include centered();
        display: flex;
        gap: 150px;

        padding: 20px 0;
    }
}
</style>