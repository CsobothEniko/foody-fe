<template>
  <div class="mt-5">
    <b-card :title="'Edit with id of ' + id">
      <b-form-input class="mb-2" v-model="name" placeholder="Enter name"></b-form-input>
      <b-form-input class="mb-2" v-model="quantity" placeholder="Enter quantity"></b-form-input>
      <b-form-input class="mb-2" v-model="quantityType" placeholder="Enter quantity Type"></b-form-input>
      <b-form-input class="mb-2" v-model="calorie" placeholder="Enter calorie"></b-form-input>

      <select required class="mb-2 form-control" v-model="type">
          <option value="" disabled selected hidden>Choose type...</option>
          <option value="breakfast">BREAKFAST</option>
          <option value="lunch">LUNCH</option>
          <option value="dinner">DINNER</option>
        </select>

      <br/> 

      <button  class="btn btn-secondary m-1 fload-end" type="button" variant="success" @click="save">Save</button>
      <button  class="btn btn-secondary m-1 fload-end" type="button"  @click=goBack()>Back</button>

    </b-card>
  </div>
</template>
 
<script>
 
import axios from 'axios';
export default {
  

  data() {
    return {
      id: null,
      name: "",
      quantity: "",
      quantityType: "",
      calorie: "",
      type: ""
      
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getById();    

  },
  methods: {
    getById() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      axios.get("fat/" + this.id, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then((response) => {

          console.log(response);

          this.name = response.data.name;
          this.quantity = response.data.quantity,
          this.quantityType = response.data.quantityType,
          this.calorie = response.data.calorie,
          this.type = response.data.type
          
        })
        .catch(() => {
          alert("failed");
        });
    },
    save() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64'); 

      let params = {
        id: this.id,
        name: this.name,
        quantity: this.quantity,
        quantityType: this.quantityType,
        calorie: this.calorie,
        type: this.type
       
      }

      axios.put("fat/update/" + this.id,params,
         {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("/fat");
        })
        .catch(() => {
          alert("failed");
        });
    },
    goBack(){
            this.$router.push("/fat") 
        }
  },
};
</script>

<style lang="scss" scoped>
</style>