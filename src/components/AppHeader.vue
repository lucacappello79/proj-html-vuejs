<script>

import { store } from "../store.js";

export default {

    name: "AppHeader",

    data() {

        return {

            store,

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

            <div class="header-menu">
                <ul>
                    <li v-for="(item, index) in store.menuItems">
                        <a href="">
                            {{ item.label.toUpperCase() }}
                        </a>
                    </li>
                </ul>

                <div class="header-dot-menu">
                    hamb
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
    display: flex;
    gap: 15px;

    ul {
        display: flex;
        gap: 35px;

        li {
            position: relative;

            a {
                color: #575757;
            }
        }

        li:hover::before {

            width: 115%;
            height: 5px;
            background-color: #f0817b;
            opacity: 0.5;

            content: "";
            position: absolute;
            bottom: 5px;
        }
    }

    .header-dot-menu {
        margin: 0 20px;
    }

}
</style>