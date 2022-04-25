<template>
<form class="mt-5" @submit.prevent="handleSubmit">

<div class="container my-4 text-center ">
    <h3 class="py-4"> Registration </h3>

    <div class="form-group text-md-left">
        <label> Name </label>
        <input type="name" class="form-control" v-model="name" placeholder="Name" />
    </div>

    <div class="form-group text-md-left">
        <label> Username </label>
        <input type="username" class="form-control" v-model="username" placeholder="Username" />
    </div>

    <div class="form-group text-md-left">
        <label> Email </label>
        <input type="email" class="form-control" v-model="email" placeholder="Email" />
    </div>

    <div class="form-group text-md-left">
        <label> Password </label>
        <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>    

    <button class=" mt-5 btn btn-secondary btn-block" @click=handleSubmit()>Registration </button>

    <!--<button class=" mt-2 btn btn-secondary btn-block" @click=goBack()>Back </button>-->


</div>
    
</form>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Registration',
    data(){
        return {
            name: '',
            username: '',
            email: '',
            password: '',
           
        }
    },
    methods:{
        async handleSubmit(){

            /*const data = {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                
            };
            //így megjelenik a szöveg, nem frissíti folyamat az oldalt
            //e.preventDefault();
            //console.log(data);
             axios.post('api/auth/signup', data)
            .then(
                res => {
                    console.log(res)
                } 
            ).catch(
                err => {
                    console.log(err)
                }
            )*/

           
            await axios.post('api/auth/signup', {
                    name: this.name,
                    username: this.username,
                    email: this.email,
                    password: this.password
                
            });

            //console.log(response);

            this.$router.push('/login');

           
        },
         goBack(){
            this.$router.push("/")
        }
    }
}
</script>