<template>
    <v-app id="inspire">
        <Nav :opened="drawer"></Nav>
        <v-app-bar
            app
            color="indigo"
            dark
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>Dashboard</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container
                class="fill-height"
                fluid
            >
            </v-container>
        </v-content>

        <v-footer
            color="indigo"
            app
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {Nav} from "./sections";
    export default {
        name: "index",
        components:{
            Nav
        },
        props: {
            source: String,
        },
        data: () => ({
            drawer: false,
        }),
    }
</script>

<style scoped>

</style>
