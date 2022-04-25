<template>
    <div class="mt-5">
   <h1>Your Diet Plan</h1>
   <button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Back</button>

<h2 class="mt-4">Breakfast</h2>
<div class="table-responsive-sm mt-3">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                 <th>
                    Day
                </th>
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
            <tr v-for="(breakfast, index) in breakfast" v-bind:key = "breakfast.id">
                <td>{{days[index]}}</td>
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

<h2 class="mt-4">Lunch</h2>

    <div class="table-responsive-md">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                 <th>
                    Day
                </th>
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
            <tr v-for="(lunch, index) in lunch" v-bind:key = "lunch.id">
                <td>{{days[index]}}</td>
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

<h2 class="mt-4">Dinner</h2>

    <div class="table-responsive-lg">
    <table class="table">
        <thead class="thead-dark">
            <tr>
                <th>
                    Day
                </th>
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
                           
                
            </tr>
        </thead>
        <tbody>

            <tr v-for="(dinner,index) in dinner" v-bind:key = "dinner.id">
                <td>{{days[index]}}</td>
                <td>{{dinner.ch}}</td>
                <td>{{dinner.fat}}</td>
                <td>{{dinner.protein}}</td>
                <td>{{dinner.fruit}}</td>
                <td>{{dinner.vegetable}}</td>
                <td>{{dinner.vitamin}}</td>                                              

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
      breakfast: [],
      lunch: [],
      dinner: [],
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

      axios.get('/breakfastV/weekly', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.breakfast = response.data;
             });

      axios.get('/lunchV/weekly', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.lunch = response.data;
             });
      axios.get('/dinnerV/weekly', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.dinner = response.data;
             });
    }

   }
}
</script>