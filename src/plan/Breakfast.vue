<template>
<div class="mt-5">
   <h1>Breakfast page</h1>
   <button @click=goBack()>Back</button>

   <table class="table table-striped mt-3">
        <thead>
            <tr>
                <th>
                    Ch
                </th>
                <th>
                    Fat 
                </th>
                <th>
                    Protein
                </th>
                <th>
                    Fruit
                </th>
                <th>
                    Vegetable
                </th>
                <th>
                    Vitamin
                </th>
                 <th>
                    Second Vitamin
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="breakfast in breakfast" v-bind:key = "breakfast.id">
                <td>{{breakfast.ch}}</td>
                <td>{{breakfast.fat}}</td>
                <td>{{breakfast.protein}}</td>
                <td>{{breakfast.fruit}}</td>
                <td>{{breakfast.vegetable}}</td>
                <td>{{breakfast.vitamin1}}</td>    
                <td>{{breakfast.vitamin2}}</td>             

            </tr>
        </tbody>
    </table>
</div>
    
</template>
<script>
import axios from 'axios';
export default {
   name:'Breakfast',
    data() {
    return {
      breakfast: []
    }
   
  },
   created(){
         this.updateList();
      },
   methods:{
      goBack(){
            this.$router.push("/plan");
        },
      updateList() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      axios.get('/breakfastV/weekly', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.breakfast = response.data;
             });
    }

   }
}
</script>