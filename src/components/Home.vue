<template>
<div>
    <h1 v-if="username">Hello, {{username}}</h1>
    <h1 v-if="!username">You are not logged in!</h1>
</div>
</template>

<script>
//import axios from 'axios';
import {mapGetters} from 'vuex';

export default {
    name: 'Home',
    computed: {
        ...mapGetters(['username'])
    }
    //ez nem kell(props) , ha van a computed mapgetters!!
    // props: ['username']
    /*data(){
        return {
            username: null
        }
    },
    async created(){
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');*/
        

       // const username = 'csoboth';
        //const password = '123456';
        //let users = [{ id: 1, username: 'csoboth', password: '123456', firstName: 'Test', lastName: 'User' }];
        //let user = users[0];

        /*let responseJson = {
                            id:user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };
        let res = JSON.stringify(responseJson);*/
        //const auth = window.btoa(username + ':' + password);

        /*const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        

        const response = await axios.get('ch/random',{

            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }
            
        });
        console.log(response);
        this.username = username;
    }*/
}


</script>