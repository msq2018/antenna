<template>

    <v-col cols="12" sm="4" md="2" >
            <v-text-field
                placeholder="Search"
                rounded
                hide-details="true"
                background-color="indigo darken-2"
                append-icon="$magnify"
                @click:append="submit()"
                class="global-search"
            ></v-text-field>
    </v-col>
</template>

<script>
    export default {
        name: "GlobalSearch",
        date:()=>({
           fieldHidden:true
        }),
        methods:{
            submit(){
                console.log(111);
            }
        }
    }
</script>

<style  lang="scss">
    .global-search{
        .v-input__icon{
            opacity: .6;
        }
    }
</style>
