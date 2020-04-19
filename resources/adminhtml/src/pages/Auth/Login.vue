<template>
    <div>
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
    </div>


</template>

<script>

    export default {
        name: "Login",
        data: () => ({
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

</style>
