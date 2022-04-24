<template>
    <div class="mt-5">
   <h1>Lunch page</h1>
   <button @click=goBack()>Back</button>

<div class="table-responsive-sm">
    <table class="table">
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
            <tr v-for="lunch in lunch" v-bind:key = "lunch.id">
                <td>{{lunch.ch}}</td>
                <td>{{lunch.fat}}</td>
                <td>{{lunch.protein}}</td>
                <td>{{lunch.fruit}}</td>
                <td>{{lunch.vegetable}}</td>
                <td>{{lunch.vitamin1}}</td>     
                <td>{{lunch.vitamin2}}</td>                            

            </tr>
        </tbody>
    </table>
    </div>

    <div class="table-responsive-md">
    <table class="table">
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
            <tr v-for="lunch in lunch" v-bind:key = "lunch.id">
                <td>{{lunch.ch}}</td>
                <td>{{lunch.fat}}</td>
                <td>{{lunch.protein}}</td>
                <td>{{lunch.fruit}}</td>
                <td>{{lunch.vegetable}}</td>
                <td>{{lunch.vitamin1}}</td>     
                <td>{{lunch.vitamin2}}</td>                            

            </tr>
        </tbody>
    </table>
    </div>

    <div class="table-responsive-lg">
    <table class="table">
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
            <tr v-for="lunch in lunch" v-bind:key = "lunch.id">
                <td>{{lunch.ch}}</td>
                <td>{{lunch.fat}}</td>
                <td>{{lunch.protein}}</td>
                <td>{{lunch.fruit}}</td>
                <td>{{lunch.vegetable}}</td>
                <td>{{lunch.vitamin1}}</td>     
                <td>{{lunch.vitamin2}}</td>                            

            </tr>
        </tbody>
    </table>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Sum',
  data() {
    return {
      lunch: [],
      days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    }},
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

      axios.get('/lunchV/weekly', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.lunch = response.data;
             });
    }

   }
}
</script>