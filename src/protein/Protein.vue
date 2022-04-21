<template>
<form >
    <h3> Protein </h3>

    <div class="form-group">
        <label> Name </label>
        <input class="form-control" v-model="name" placeholder="Name" />
    </div>

    <div class="form-group">
        <label> Quantity </label>
        <input class="form-control" v-model="quantity" placeholder="Quantity" />
    </div>

    <div class="form-group">
        <label> Quantity Type</label>
        <input class="form-control" v-model="quantityType" placeholder="Quantity Type" />
    </div>

    <div class="form-group">
        <label> Calorie </label>
        <input class="form-control" v-model="calorie" placeholder="Calorie" />
    </div>

    <div class="form-group">
        <label> Type </label>
        <!--<input class="form-control" v-model="type" placeholder="Type" > -->
        <select name="Type:" v-model="type">
            <option value="breakfast">BREAKFAST</option>
            <option value="lunch">LUNCH</option>
            <option value="dinner">DINNER</option>
        </select>
   
    </div>

    <button class="btn btn-primary btn-block" @click="saveProtein">Submit </button>

</form>

</template>

<script>

import axios from 'axios'

export default {
    name: 'Protein',
    data(){
        return {
            username: '',
            password: '',
            name: '',
            quantity: '',
            quantityType: '',
            calorie: '',
            type: '',
            types:['breakfast', 'lunch', 'dinner']
                
        }
    },
    methods:{
        async saveProtein(){

            const username = localStorage.getItem('username');
            const password = localStorage.getItem('password');

            const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

            const response = await axios.post('protein', {
                name: this.name,
                quantity: this.quantity,
                quantityType: this.quantityType,
                calorie: this.calorie,
                type: this.type
                        
            },{

            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }
            
        });

            localStorage.setItem('username',response.data.username);
            localStorage.setItem('password',response.data.password);

            console.log(response);
            
           // this.$store.dispatch('username', response.data.username);
           
        }
    }
}
</script>