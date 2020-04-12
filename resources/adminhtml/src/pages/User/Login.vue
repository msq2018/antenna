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
                        fluid
                        fill-height
                    >
                        <v-layout
                            align-center
                            justify-center
                        >
                            <v-flex class="frame">
                                <h1>
                                   {{$t("user.login")}}
                                </h1>
                                <v-form>
                                    <v-text-field
                                        v-model="form.username"
                                        prepend-icon="$account"
                                        clearable
                                        :label="$t('user.username')"
                                        @keyup.enter.native="login"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="form.password"
                                        prepend-icon="$lock"
                                        @keyup.enter.native="login"
                                        :append-icon="showPwd ? '$visibility_off' : '$visibility'"
                                        :type="showPwd ? 'text' : 'password'"
                                        @click:append="showPwd = !showPwd"
                                        :label="$t('user.password')"
                                        required
                                    ></v-text-field>
                                    <v-btn
                                        :loading="loginLoading"
                                        @click="login"
                                    >
                                        <span slot="loader">Loading...</span>
                                        {{$t("user.sign_in")}}
                                    </v-btn>
                                    <v-btn
                                        small
                                        text
                                        color="primary"
                                        @click="redirectForgotPassword"
                                    >
                                        {{$t("user.forgot_password")}}
                                    </v-btn>
                                </v-form>
                            </v-flex>
                        </v-layout>
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
        name: "Login",
        data: () => ({
            logoPath: assets('assets/images/layout/logo.png'),
            sloganBgPath: assets('assets/images/user/login-bg2.svg'),
            currentYear: new Date().getFullYear(),
            showPwd: false,
            form: {
                username: 'admin',
                password: 'admin123',
            },
            loginLoading: false,
        }),
        methods: {
            login() {
                if (!this.form.password || !this.form.username) {
                    return;
                }

                this.loginLoading = true;
                this.$router.push({name:'dashboard'})
               /* this.$store
                    .dispatch('login', this.form)
                    .then(() => {
                        try {
                            this.$router.push({ name: 'Index' });
                        } catch (err) {
                            this.$router.push({ path: '/' });
                        }
                    })
                    .catch((res) => {
                        console.log('login-failed', res);
                        this.$message({
                            type: 'error',
                            text: this.$t('common.invalid_password_username'),
                        });
                    })
                    .finally(() => {
                        this.loginLoading = false;
                    });*/
            },
            redirectForgotPassword() {
                console.log('redirectForgotPassword');
                this.$message({
                    type: 'info',
                    text: 'Ahem: Please add redirect function',
                });
            },
        },
        created() {},
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/pages/_login.scss';
</style>
