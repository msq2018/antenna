<template>
    <v-menu
        left
        bottom
        dark
        offset-y
        transition="scroll-x-reverse-transition"
    >
        <template v-slot:activator="{ on }">
            <v-avatar v-on="on" class="mr-5">
            <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
            >
            </v-avatar>
        </template>

        <v-list>
            <v-list-item
                @click="() => {this.$router.push({name:'login'})}"
            >
                <v-list-item-title>退出</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: "UserMenu"
    }
</script>

<style scoped>

</style>
