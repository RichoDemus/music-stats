<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <LoginComponent v-if="!loggedIn"/>
        <Username v-if="loggedIn"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import LoginComponent from "./components/LoginComponent";
    import {mapGetters, mapState} from "vuex";
    import Username from "./components/Username";

    export default {
        name: 'app',
        data() {
            return {
                clicks: 0
            }
        },
        computed: {
            ...mapState({
                access: state => state.clicks
            }),
            ...mapGetters(["loggedIn"])
        },
        components: {
            LoginComponent,
            Username,
            HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
