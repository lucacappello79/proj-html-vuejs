<script>

import { store } from "../store.js";

export default {

    name: "AppJoinUs",

    data() {

        return {

            store,

        }
    },


    //mouse pointer turning into a dot when hovering over the contact button//
    mounted() {
        const buttonContainer = this.$refs.buttonContainer;
        const cursorDot = this.$refs.cursorDot;

        buttonContainer.addEventListener("mousemove", (e) => {
            const rect = buttonContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cursorDot.style.left = `${x}px`;
            cursorDot.style.top = `${y}px`;
        });

        buttonContainer.addEventListener("mouseenter", () => {
            cursorDot.style.display = "block";
        });

        buttonContainer.addEventListener("mouseleave", () => {
            cursorDot.style.display = "none";
        });
    },

};

</script>


<template>
    <section id="join">
        <div class="joinus-wrapper">
            <div class="section-title">
                Want to work with us?
                <span>Send us <strong>a message!</strong></span>
            </div>
            <p>"Are you passionate, driven, and eager to make a difference? Join our dynamic team at <i
                    class="fa-regular fa-copyright"></i>Merée and
                embark on an exciting journey of growth, innovation, and collaboration. Let's shape a better future
                together!"
            </p>
            <div ref="buttonContainer" class="button-container">
                <button>CONTACT</button>
                <div ref="cursorDot" class="cursor-dot"></div>
            </div>
        </div>
    </section>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

section {
    background-image: url('/img/h-2-background-1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.joinus-wrapper {
    @include centered;

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
        color: grey;
        font-size: 15px;
        margin: 30px auto 40px;
    }
}

.button-container {

    position: relative;

    button {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-weight: bold;
        padding: 12px 50px;
        background-color: #d8f0e3;
        outline: none;
        border: none;
        cursor: none;
        transition: background-color 0.3s ease;
    }

    &:hover button {
        background-color: #e1c0b0;
        color: white;
    }

    .cursor-dot {
        display: none;

        position: absolute;

        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #f5d8ca;
        pointer-events: none;
    }
}
</style>