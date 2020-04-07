<template>
    <v-container >
        <v-row>
            <v-col
                v-for="n in 4"
                :key="n"
                cols="12"
                sm="3"
            >
                <v-card
                    class="pa-2"
                >
                    <div></div>
                    <div class="category">Folowers</div>
                    <div></div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    .dashboard-test{
        background: red;
    }
</style>
