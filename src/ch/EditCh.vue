<template>
  <div>
    <b-card :title="'Edit ch with id of ' + id">
      <b-form-input v-model="name" placeholder="Enter ch name"></b-form-input>
      <b-form-input v-model="quantity" placeholder="Enter quantity"></b-form-input>
      <b-form-input v-model="quantityType" placeholder="Enter quantity Type"></b-form-input>
      <b-form-input v-model="calorie" placeholder="Enter calorie"></b-form-input>
      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      

      <b-button variant="success" @click="saveCh">Save</b-button>
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
    this.getChById();    

  },
  methods: {
    getChById() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      axios.get("ch/" + this.id, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then((response) => {

          console.log(response);

          this.name = response.data.brandName;
          this.quantity = response.data.quantity,
          this.quantityType = response.data.quantityType,
          this.calorie = response.data.calorie,
          this.type = response.data.type
          
        })
        .catch(() => {
          alert("failed");
        });
    },
    saveCh() {
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

      axios.put("ch/update" + this.id,params,
         {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("/ch");
        })
        .catch(() => {
          alert("failed");
        });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>