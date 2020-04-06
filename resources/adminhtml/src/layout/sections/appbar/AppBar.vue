<template>
    <v-app-bar
        app
        color="indigo"
        dark
    >
        <v-app-bar-nav-icon @click.stop="clickNavIconButton()" />
        <v-toolbar-title>Dashboard</v-toolbar-title>
        <v-spacer></v-spacer>
        <GlobalSearch class="mr-5"></GlobalSearch>
        <SystemMessage></SystemMessage>
        <UserMenu class="mr-5"></UserMenu>

    </v-app-bar>
</template>

<script>
    import {GlobalSearch,SystemMessage,UserMenu } from "./components"
    export default {
        name: "AppBar",
        components:{
          GlobalSearch,
          SystemMessage,
          UserMenu
        },
        props:{
          navState:{
              type:Boolean,
              require:false
          }
        },
        methods:{
            clickNavIconButton () {
                let newState = !this.navState;
                this.$emit('changeNavState',newState)
            }
        }
    }
</script>

<style scoped>

</style>
