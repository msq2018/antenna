<template>
    <v-app id="inspire">
        <Nav :opened="opening"></Nav>
        <AppBar :navState="opening" @changeNavState="setNavState"></AppBar>
        <v-content>
            <v-container
                class="pa-7"
                fluid
            >
                <transition name="fade">
                <router-view/>
                </transition>
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
    import {Nav,AppBar} from "./sections";
    export default {
        name: "index",
        components:{
            Nav,
            AppBar
        },
        props: {
            source: String,
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

</style>
