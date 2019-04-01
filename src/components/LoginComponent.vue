<template>
    <div>
        <a v-bind:href="url">Authenticate with Spotify</a>
    </div>
</template>

<script>
    import getParameterByName from "../util/QueryString";
    import uuidv4 from 'uuid/v4'
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "LoginComponent",
        data: () => ({
            url: "https://accounts.spotify.com/authorize" +
                "?client_id=a4463063c9834dd3bc5976eaa6f9e7c3" +
                "&response_type=token" +
                "&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fcallback" +
                "&scope=" +
                "&show_dialog=false" +
                "&state=" + uuidv4()
        }),
        mounted() {
            if (window.location.pathname === "/callback") {
                const accessToken = getParameterByName("access_token");
                const tokenType = getParameterByName("token_type");
                const expiresIn = getParameterByName("expires_in");
                const err = getParameterByName("error");
                const state = getParameterByName("state");
                console.log(window.location.href);
                console.log("Access Token:", accessToken);
                console.log("Token Type:", tokenType);
                console.log("Expires In:", expiresIn);
                console.log("State:", state);
                console.log("Error:", err);
                // todo handle error
                window.history.pushState('Main', 'Title', '/');
                // this.login(accessToken);
                this.loggedIn(accessToken);
            }
        },
        methods: {
            ...mapMutations({
                login: 'login'
            }),
            ...mapActions([
                'loggedIn'
            ])
        }
    }
</script>

<style scoped>

</style>