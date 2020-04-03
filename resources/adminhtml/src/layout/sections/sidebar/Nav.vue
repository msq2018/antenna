<template>
    <v-navigation-drawer  :mini-variant.sync="opened" dark  app>
        <v-img slot="img" :height="background.height" :src="background.src" :gradient="background.gradient"></v-img>
        <v-list-item class="px-2 py-1 grey darken-4">
            <v-list-item-avatar>
                <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title >John Leider</v-list-item-title>
        </v-list-item>
        <v-list >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>

            </v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script>
    import {assets} from "@/helpers/assets";

    export default {
        name: "Nav",
        props: {
            opened: {
                type: Boolean,
                required: true,
                default: true
            }
        },
        data: () => ({
            background:{
                src:assets('assets/layout/nav_bg.jpg'),
                height:"100%",
                gradient:"rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"
            },
            items: [
                { title: 'Home', icon: '$homeCity' },
                { title: 'My Account', icon: '$account' },
                { title: 'Users', icon: '$accountGroupOutline' },
            ],
        }),
        methods: {}

    }
</script>

<style scoped>

</style>
