<template>
<form @submit.prevent="handleSubmit">
    <h3> Registration </h3>

    <div class="form-group">
        <label> Name </label>
        <input type="name" class="form-control" v-model="name" placeholder="name" />
    </div>

    <div class="form-group">
        <label> Username </label>
        <input type="username" class="form-control" v-model="username" placeholder="Username" />
    </div>

    <div class="form-group">
        <label> Email </label>
        <input type="email" class="form-control" v-model="email" placeholder="email" />
    </div>

    <div class="form-group">
        <label> Password </label>
        <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>    

    <button class="btn btn-primary btn-block">Registration </button>
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
        handleSubmit(){

            const data = {
                name: this.name,
                username: this.username,
                email: this.email,
                password: this.password,
                
            };
            //így megjelenik a szöveg, nem frissíti folyamat az oldalt
            //e.preventDefault();
            //console.log(data);
             axios.post('http://localhost:8080/api/auth/signup', data)
            .then(
                res => {
                    console.log(res)
                } 
            ).catch(
                err => {
                    console.log(err)
                }
            )

           
        }
    }
}
</script>