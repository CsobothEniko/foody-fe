<template>
<div>
    <!--<h1 v-if="username">Hello, {{username}}</h1>
    <h1 v-if="!username">You are not logged in!</h1>-->
    <div class="m-5" v-if="!username">

        <button class="mr-2" @click=login() >Login </button>
        <button @click=registration() >Registration </button>

    </div>

    <div class="m-5" v-if="username">

        <button class="mr-2" @click=crud() >Create your foods</button>
        <button @click=plan() >Go to plan </button>

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