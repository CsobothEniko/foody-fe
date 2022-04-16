<template>
<form @submit.prevent="handleSubmit" >
    <h3> Forgot Password </h3>

    <div class="form-group">
        <label> Email </label>
        <input type="email" class="form-control" v-model="email" placeholder="Email" />
    </div>

    <button class="btn btn-primary btn-block">Submit </button>

</form>
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'Forgot',
    data(){
        return {
            email: ''
        }
    },
     methods:{
        async handleSubmit(){
            const response = await axios.post('api/auth/forgotPassword', {
                email: this.email
                
            });

            console.log(response);
            
            this.$router.push('/');           
        }
    }
    
}
</script>