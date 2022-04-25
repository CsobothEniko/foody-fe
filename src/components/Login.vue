<template>
<form class="mt-5" @submit.prevent="handleSubmit">
    
    <div class="container my-4 text-center ">

        <h3 class="py-4"> Login </h3>
        <div class="form-group mt-3 text-md-left">
            <label > Username </label>
            <input type="username" class="form-control" v-model="username" placeholder="Username" />
        </div>

        <div class="form-group text-md-left">
            <label> Password </label>
            <input type="password" class="form-control" v-model="password" placeholder="Password" />
        </div>

        
        <button class="mt-5 btn btn-secondary btn-block">Login </button>
        
        

    </div>

    
    
    

    <!-- <p class="forgot-password text-right">
        <router-link to="forgot"> Forgot Password </router-link>
       
    </p>-->
</form>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return {
            username: '',
            password: '',
           
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('api/auth/signin', {
                username: this.username,                
                password: this.password
                
            });

            localStorage.setItem('username',response.data.username);
            localStorage.setItem('password',response.data.password);

            console.log(response);
            
            this.$store.dispatch('username', response.data.username);
            //visszadob az home-ba
            this.$router.push('/');




           
        }
    }
}
</script>