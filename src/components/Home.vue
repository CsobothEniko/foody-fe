<template>
<div class="container my-4 text-center">
    <!--<h1 v-if="username">Hello, {{username}}</h1>
    <h1 v-if="!username">You are not logged in!</h1>-->
    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="!username">

        <button type="button" class="btn btn-secondary m-1 fload-end" @click=login() >Login </button>
        <button type="button" class="btn btn-secondary m-1 fload-end" @click=registration() >Registration </button>

    </div>

    <div class="mt-5 btn-group-vertical col-md-7 text-center" v-if="username">

        <button type="button" class="btn btn-secondary m-1 fload-end" @click=crud() >Create your foods</button>
        <button type="button" class="btn btn-secondary m-1 fload-end" @click=plan() >Go to plan </button>

    </div>
    
</div>
</template>

<script>
//import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['username'])
    },
    methods:{
        login(){
            this.$router.push("login")
        },
        registration(){
            this.$router.push("registration")
        },
        crud(){
            this.$router.push("mainCrud")
        },
        plan(){
            this.$router.push("plan")
        }
    }
    
}


</script>