<template>
    <div>
        <p>Clicked {{clicks}} times</p>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Counter",
        computed: {
            ...mapState({
                clicks: state => state.clicks
            })
        }
    }
</script>

<style scoped>

</style>