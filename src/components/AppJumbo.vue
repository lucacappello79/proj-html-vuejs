<script>

import { store } from "../store.js";

export default {

    name: "AppJumbo",

    data() {

        return {
            store,
            currentImageIndex: 0,
        }
    },

    computed: {

        currentImage() {

            return this.store.sliderImages[this.currentImageIndex];

        },

    },

    methods: {

        previousImage() {

            if (this.currentImageIndex > 0) {
                this.currentImageIndex--;
            } else {
                this.currentImageIndex = this.store.sliderImages.length - 1;
            }

        },

        nextImage() {

            if (this.currentImageIndex < this.store.sliderImages.length - 1) {
                this.currentImageIndex++;
            } else {
                this.currentImageIndex = 0;
            }

        },

        setCurrentImage(index) {

            this.currentImageIndex = index;

        },

    },

};

</script>


<template>
    <section id="jumbo">

        <div class="slider-wrapper">

            <div id="arrow-left" @click="previousImage">
                <i class="fa-solid fa-chevron-left"></i>
            </div>
            <div id="arrow-right" @click="nextImage">
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="dots-wrapper">
                <div class="dot" :class="{ active: currentImageIndex === 0 }" @click="setCurrentImage(0)"></div>
                <div class="dot" :class="{ active: currentImageIndex === 1 }" @click="setCurrentImage(1)"></div>
                <div class="dot" :class="{ active: currentImageIndex === 2 }" @click="setCurrentImage(2)"></div>
            </div>

            <div class="slider-text">

                <h1>Devotion that <br>never <strong>ends</strong></h1>
                <small>Young at heart, life just started! Even if you are a senior don't hesitate <br> to grab
                    yourskating-board and live your best life</small>
                <button>READ MORE</button>

            </div>

            <div class="slider-img">

                <div class="decoration-one">
                    <img src="/img/h-2-slider-img-17.png" alt="decoration">
                </div>
                <div class="decoration-two">
                    <img src="/img/h-2-slider-img-13.png" alt="decoration">
                </div>
                <div class="decoration-three">
                    <img src="/img/short-slider-rev-1-img-10.png" alt="decoration">
                </div>
                <div class="decoration-four">
                    <img src="/img/h-2-slider-img-14.png" alt="decoration">
                </div>
                <div class="decoration-five">
                    <img src="/img/short-slider-rev-1-img-6.png" alt="decoration">
                </div>
                <div class="decoration-six">
                    <img src="/img/short-slider-rev-1-img-2.png" alt="decoration">
                </div>

                <img :src="currentImage" alt="fnf">
                <img v-if="currentImageIndex === 0" src="/img/h-2-slider-img-16.png" alt="fnf">

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
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translate(0, -50%);

            display: flex;
            justify-content: center;
            align-items: center;

            height: 25px;
            width: 25px;
            background-color: pink;
            border-radius: 50%;
            z-index: 2;

            &:hover {
                scale: 1.1;
            }
        }

        #arrow-left {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translate(0, -50%);

            display: flex;
            justify-content: center;
            align-items: center;

            height: 25px;
            width: 25px;
            background-color: pink;
            border-radius: 50%;
            z-index: 2;

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
            transform: translate(-50%);

            display: flex;
            justify-content: space-around;

            width: 80px;

        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: pink;
            border: 1px solid #ed684e;

            &.active {
                transform: scale(1.3);
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
            padding: 12px;
            background-color: white;
            border: 2px solid pink;

            font-size: 10px;
            font-weight: 600;
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