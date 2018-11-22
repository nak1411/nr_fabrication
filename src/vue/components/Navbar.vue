<template>
    <div id="navbar">
        <nav class="site__navigation">
            <router-link to="/"><img class="site__logo" src="/src/img/nrfab_logo_emboss_red.png" alt="nr fabrication logo"></router-link>
            <ul class="site__navlist">
                <li class="site__navitem">
                    <router-link to="/about">About Us</router-link>
                </li>
                <li class="site__navitem">
                    <router-link to="/products">Products</router-link>
                </li>
                <li class="site__navitem">
                    <router-link to="/contact">Contact Us</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>