<template>
<div class="mt-5">
   <h1>Lunch page</h1>
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
    
</template>
<script>
import axios from 'axios';
export default {
   name:'Lunch',
   data() {
    return {
      lunch: [],
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