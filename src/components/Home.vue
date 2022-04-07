<template>
    <h1>Hello Home</h1>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Home',
    async created(){
        //const username = localStorage.getItem('username');
        //const password = localStorage.getItem('password');
        

        const username = 'csoboth';
        const password = '123456';
        let users = [{ id: 1, username: 'csoboth', password: '123456', firstName: 'Test', lastName: 'User' }];
        let user = users[0];

        let responseJson = {
                            id:user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName
                        };
        let res = JSON.stringify(responseJson);
        const auth = window.btoa(username + ':' + password);

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        

        const response = await axios.get('ch/random',{
            headers:{
                
               Authorization: 'Basic'+ auth
            }
        });
        console.log(response);
    }
}


</script>