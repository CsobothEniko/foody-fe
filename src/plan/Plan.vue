<template>
    <div  class="container my-4 text-center">
        <div class="mt-5 btn-group-vertical col-md-7 text-center">
            
            <button type="button" class="btn btn-secondary m-1 fload-end" @click=getPlan()>Generate your plan</button>
            <button type="button" class="btn btn-secondary m-1 mt-4 fload-end" @click=getBreakfast()>Breakfast</button>
            <button type="button" class="btn btn-secondary m-1 fload-end" @click=getLunch()>Lunch</button>
            <button type="button" class="btn btn-secondary m-1 fload-end" @click=getDinner()>Dinner</button>
            <button type="button" class="btn btn-secondary m-1 fload-end" @click=getSum()>Sum</button>
            <button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Back</button>

        </div>
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
        alert("Yout plan is done!!!");
             
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
        },
        getSum(){
            this.$router.push("/sum")
        }
    }
}
</script>
