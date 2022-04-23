<template>
<div class="mt-5">
    <button @click=getPlan()>Generate your plan</button>

    <button @click=getBreakfast()>Breakfast</button>
    <button @click=getLunch()>Lunch</button>
    <button @click=getDinner()>Dinner</button>

    <button @click=goBack()>Back</button>

</div>
</template>
<script>

import axios from 'axios';
export default {
    name: 'Plan',
    methods:{
        getPlan(){

            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');
            const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

    //breakfast generating..
        axios.get('breakfast', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
                }}).then((response) => {
                    console.log("Breakfast generated!");
                });
    //lunch generating..
        axios.get('lunch', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
                }}).then((response) => {
                    console.log("Lunch generated!");
                });
    //dinner generating..
        axios.get('dinner', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
                }}).then((response) => {
                    console.log("Dinner generated!");
                });
    //plan generating..
        axios.get('dietPlan', { headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic '+token
                }}).then((response) => {
                    console.log("Plan generated!");
                });
             
        },
        getBreakfast(){
             this.$router.push("/breakfast")
        },
        getLunch(){
            this.$router.push("/lunch")
        },
        getDinner(){
            this.$router.push("/dinner")
        },
        goBack(){
            this.$router.push("/")
        }
    }
}
</script>