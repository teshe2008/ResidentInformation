<template>
<div class="sidebar navbar nav bg-dark">

    <h1 class="navbar-brand">Dashboard</h1>
    <br>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav flex-column">
                <li class="nav-item active">

                    <router-link :to="{name: 'home'}" class="nav-link"><i class="fa fa-bars"> Home </i></router-link>

                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'hello'}" class="nav-link">Link</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'sidebar'}" class="nav-link"> Disabled </router-link>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>

<style scoped>
.container {
    width: 100%;
}
</style>

<script>
import Vue from 'vue';

export default {

}
</script>
