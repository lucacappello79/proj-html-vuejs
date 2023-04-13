<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,
            isMenuOpen: false,

        }
    },
};

</script>


<template>
    <header>
        <div class="header-wrapper">
            <div class="header-logo">
                <img src="img/logo-sidearea-1.png" alt="logo image">
            </div>

            <div class="header-menu" @mouseleave="isMenuOpen = false">

                <ul>
                    <li v-for="(item, index) in store.menuItems">
                        <a :href="'#' + item.id">
                            {{ item.label.toUpperCase() }}
                        </a>
                    </li>
                </ul>

                <div class="header-dot-menu" @mouseover="isMenuOpen = true">
                    <img src="/img/svg-1.svg" alt="drop down menu">
                </div>

                <div class="dot-menu" v-show="isMenuOpen">
                    <ul>
                        <li v-for="(item, index) in store.menuItems">
                            <a :href="'#' + item.id" @click="isMenuOpen = false">
                                {{ item.label.toUpperCase() }}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </header>
</template>


  
<style lang="scss" scoped>
@use "../scss/variables" as *;

header {
    @include centered();
}

.header-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px;
}

.header-menu {
    position: relative;
    display: flex;
    gap: 15px;

    ul {
        display: flex;
        align-items: center;
        gap: 35px;

        li {
            position: relative;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 700;
            font-size: 13px;

            a {
                color: #575757;
            }

            &:hover {
                scale: 1.1;
            }
        }

        li:hover::before {

            position: absolute;

            width: 115%;
            height: 5px;
            background-color: #e57c78;
            opacity: 0.4;

            content: "";
            bottom: 5px;
        }
    }

    .header-dot-menu {
        margin-left: 20px;
    }

    .dot-menu {

        position: absolute;
        top: 25px;
        right: -18px;

        background-color: white;
        width: auto;
        padding: 15px;
        z-index: 10;

        ul {
            display: flex;
            flex-direction: column;
            gap: 15px;
            border: 1px solid black;
            padding: 15px;

            li {
                border-bottom: 1px solid grey;
            }
        }
    }

}
</style>