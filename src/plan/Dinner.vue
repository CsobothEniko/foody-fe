<template>
<div class="mt-5">
   <h1>Dinner page</h1>
   <button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Back</button>

   <table class="table table-striped mt-3">
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
</template>
<script>
import axios from 'axios';
export default {
   name:'Dinner',
   data() {
    return {
      dinner: [],
      days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
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