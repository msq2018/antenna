<template>
    <div class="user-login panel-wrapper">
        <span class="logo">
      <img
          :src="logoPath"
          alt=""
      >
    </span>
        <div class="slogan-wrapper">
            <div class="slogan">
                <img
                    :src="sloganBgPath"
                    alt=""
                >
            </div>
        </div>

        <div class="panel-content">
            <v-app class="login-con">
                <!-- <v-spacer></v-spacer> -->

                <v-content>
                    <v-container
                        fill-height
                    >
                        <v-flex class="frame">
                            <router-view></router-view>
                        </v-flex>
                    </v-container>
                </v-content>

                <v-footer
                    color="#fbfbfb"
                    height="auto"
                >
                    <v-layout>
                        <v-flex text-xs-center>
                            版权所有
                        </v-flex>
                    </v-layout>
                </v-footer>
            </v-app>
        </div>
    </div>

</template>

<script>
    import {assets} from "@/helpers/assets";
    export default {
        name: "AuthLayout",
        data: () => ({
            logoPath: assets('assets/images/layout/logo.png'),
            sloganBgPath: assets('assets/images/user/login-bg2.svg'),
        }),
    }
</script>

<style scoped lang="scss">
    @import '~@/assets/sass/pages/_login.scss';
</style>
