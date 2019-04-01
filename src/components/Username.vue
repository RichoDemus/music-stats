<template>
    <div>Your username is {{username}}</div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Username",
        computed: mapState({
            username: state => state.username
        })
    }
</script>

<style scoped>

</style>