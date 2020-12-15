<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div>
                <input class="form-control" type="text" name="test" v-model="messages">
                <button class="btn btn-primary" type="button" v-on:click="showalert">click</button>
                {{messages}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    messages: "",
    data() {
        return {
            messages: ""
        }
    },

}
</script>
