<template>
<div class="container-fluid row py-0 px-0 my-0 mx-0">
    <div class=" col-lg-2 col-md-2 py-0 px-0 my-0 mx-0">
        <sidebar></sidebar>
    </div>
    <div class=" col-lg-10 col-md-10 py-0 px-0 my-0 mx-0">
        <router-view></router-view>
    </div>
</div>
</template>

<style>
.conta {
    margin: 0px;
    padding: 0px;
}

@import'~bootstrap/dist/css/bootstrap.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
</style>

</script>

<script>
import sidebar from "./components/sidebar"
export default {
    components: {
        sidebar
    }
}
</script>
