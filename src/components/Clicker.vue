<template>
    <div>
        <button @click="click">Click</button>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        name: "Clicker",
        methods: {
            ...mapMutations({
                click: 'increment'
            })
        }
    }
</script>

<style scoped>

</style>