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
        <div class="scroll-up">
            <i class="fa-solid fa-arrow-up-long"></i>
        </div>
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
                maree.qode@gmail.com
                <br>
                +44645 321 789
            </div>
            <div class="footer-address">
                Avenue d'Auderghem 10
                <br>
                1040 Brussels, Belgium
            </div>
            <div class="footer-social">
                Stay in touch with us
                <br>
                <br>
                <div class="social-icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-pinterest"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
    </footer>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

footer {
    background-color: #c0e1cf;
    height: 120px;
    position: relative;

    .scroll-up {
        width: 27px;
        height: 27px;
        color: white;
        background-color: #f0817b;
        position: absolute;
        bottom: 10px;
        right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .footer-wrapper {
        @include centered();
        display: flex;
        gap: 150px;

        padding: 20px 0;
    }

    .footer-address,
    .footer-contacts {
        line-height: 2.0;
        font-size: 12px;
    }
}

.social-icons {
    display: flex;
    justify-content: space-between;
}
</style>