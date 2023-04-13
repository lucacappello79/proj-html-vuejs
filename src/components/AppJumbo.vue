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

            <div id="arrow-left">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div id="arrow-right">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="dots-wrapper">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="slider-text">
                <h1>Devotion that <br>
                    never <strong>ends</strong>
                </h1>
                <small>Young at heart, life just started! Even if you are a senior don't hesitate <br> to grab your
                    skating-board and live your best life</small>
                <button>READ MORE</button>
            </div>
            <div class="slider-img">
                <div class="decoration-one">
                    <img src="/img/h-2-slider-img-17.png" alt="">
                </div>
                <div class="decoration-two">
                    <img src="/img/h-2-slider-img-13.png" alt="">
                </div>
                <div class="decoration-three">
                    <img src="/img/short-slider-rev-1-img-10.png" alt="">
                </div>
                <div class="decoration-four">
                    <img src="/img/h-2-slider-img-14.png" alt="">
                </div>
                <div class="decoration-five">
                    <img src="/img/short-slider-rev-1-img-6.png" alt="">
                </div>
                <div class="decoration-six">
                    <img src="/img/short-slider-rev-1-img-2.png" alt="">
                </div>
                <img src="/img/h-2-slider-img-15.png" alt="fnf">
                <img src="/img/h-2-slider-img-16.png" alt="fnf">
            </div>
        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;


section {


    .slider-wrapper {
        @include centered();
        position: relative;

        display: flex;
        justify-content: center;
        gap: 30px;
        height: 350px;

        #arrow-right {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            right: 20px;
            background-color: pink;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            z-index: 2;

            transform: translate(0, -50%);

            &:hover {
                scale: 1.1;
            }
        }

        #arrow-left {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 20px;
            background-color: pink;
            height: 25px;
            width: 25px;
            border-radius: 50%;
            z-index: 2;

            transform: translate(0, -50%);

            &:hover {
                scale: 1.1;
            }
        }

        i {
            color: white;
        }

        .dots-wrapper {
            position: absolute;
            bottom: 15px;
            left: 50%;
            width: 80px;

            display: flex;
            justify-content: space-around;

            transform: translate(-50%);
        }

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: pink;
            border: 1px solid gold;

            &:hover {
                scale: 1.5;
            }
        }
    }

    .slider-text {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding-top: 60px;

        h1 {
            font-size: 40px;
            font-weight: lighter;
            line-height: 1.1;

            strong {
                font-style: italic;
            }
        }

        small {
            color: grey;
            font-size: 12px;
        }

        button {
            width: 130px;
            font-size: 10px;
            font-weight: 600;
            padding: 12px;
            background-color: white;
            border: 2px solid pink;
        }
    }

    .slider-img {
        position: relative;

        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 50px;

        img {
            height: 70%;
        }

        .decoration-one {
            position: absolute;
            bottom: 20px;
            right: -80px;

            img {
                height: 80px;
            }
        }

        .decoration-two {
            position: absolute;
            bottom: 15%;
            left: -50px;

            img {
                height: 60px;
            }
        }

        .decoration-three {
            position: absolute;
            bottom: 50%;
            left: -30px;

            img {
                height: 30px;
            }
        }

        .decoration-four {
            position: absolute;
            top: 10%;
            right: -15px;

            img {
                height: 40px;
            }
        }

        .decoration-five {
            position: absolute;
            top: 30%;
            right: -45px;

            img {
                height: 28px;
            }
        }

        .decoration-six {
            position: absolute;
            top: 10%;
            left: -5px;

            img {
                height: 28px;
            }
        }

    }
}
</style>