<template>
    <v-navigation-drawer  :mini-variant.sync="opened" dark  app>
        <v-img slot="img" :height="background.height" :src="background.src" :gradient="background.gradient"></v-img>
        <v-list-item class="px-2 py-1 grey darken-4">
            <v-list-item-avatar color="#fff">
                <v-img :src="logo.src"></v-img>
            </v-list-item-avatar>
            <v-list-item-title >Vue MD PRO</v-list-item-title>
        </v-list-item>
        <v-list >

            <v-list-item
                v-for="item in items"
                :key="item.id"
                link
                :to="{path:item.path}"
                class="mt-5"
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
            logo:{
                src:assets('assets/images/layout/logo.png'),
            },
            background:{
                src:assets('assets/images/layout/nav_bg.jpg'),
                height:"100%",
                gradient:"rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"
            },
            items: [
                { title: 'Home', icon: '$homeCity' },
                { title: 'My Account', icon: '$account' },
                { title: 'Users', icon: '$accountGroupOutline' },
            ],
        }),
        computed:{
            routesItems:function () {
                let routes = this.$router.options.routes[0].children;
                let items = [];
                for ( let key in routes){
                    let route = routes[key]
                    items.push({
                        id:key,
                        path: route.path,
                        title:route.meta.title,
                        icon: route.meta.icon
                    })
                }
                console.log(items);
                return items;
            }
        },
        methods: {
            getRoutes(){
              console.log(this.$router.options.routes[0].children);
            },
        }

    }
</script>

<style scoped>

</style>
