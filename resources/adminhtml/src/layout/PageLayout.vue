<template>
    <v-app id="inspire">
        <Nav :opened="opening"></Nav>
        <AppBar :navState="opening" @changeNavState="setNavState"></AppBar>
        <v-content class="grey lighten-3">
            <v-container
                class="pa-7"
                fluid
            >
                    <router-view class="container"/>
            </v-container>
        </v-content>

        <v-footer
            color="indigo"
            app
            inset
        >
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {Nav,AppBar} from "./GlobalSections";
    export default {
        name: "index",
        components:{
            Nav,
            AppBar
        },
        data: () => ({
            opening: false,
        }),
        methods:{
            setNavState (state){
                this.opening = state
            }
        }
    }
</script>

<style scoped>
    .route-class{
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>
