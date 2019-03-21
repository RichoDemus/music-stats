<template>
    <div id="app">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <br/>
        <Counter v-bind:clicks="clicks"/>
        <br/>
        <Clicker/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Counter from "./components/Counter";
    import Clicker from "./components/Clicker";

    export default {
        name: 'app',
        data() {
            return {
                clicks: 0
            }
        },
        components: {
            Clicker,
            Counter,
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
