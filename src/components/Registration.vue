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

    <div class="form-group">
        <label> Confirm Password </label>
        <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password" />
    </div>


    <button class="btn btn-primary btn-block">Registration </button>
</form>

</template>

<script>

export default {
    name: 'Registration',
    data(){
        return {
            name: '',
            username: '',
            email: '',
            password: '',
            password_confirm : ''
        }
    },
    methods:{
        handleSubmit(){
            //így megjelenik a szöveg, nem frissíti folyamat az oldalt
            //e.preventDefault();
            console.log('submitted!!!');
        }
    }
}
</script>