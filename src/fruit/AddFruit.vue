<template>
  <div class="mt-5">
    <b-card title="Add new">
      <b-form-input v-model="name" placeholder="Enter name"></b-form-input>
      <b-form-input v-model="quantity" placeholder="Enter quantity"></b-form-input>
      <b-form-input v-model="quantityType" placeholder="Enter quantity type"></b-form-input>
      <b-form-input v-model="calorie" placeholder="Enter calorie"></b-form-input>
      <b-form-input v-model="type" placeholder="Enter type"></b-form-input>

      
      <b-button variant="success" @click="saveFruit">Save</b-button>
    </b-card>
  </div>
</template>
 
<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: "",
      quantity: "",
      quantityType: "",
      calorie: "",
      type: ""
      
    };
  },
  methods: {
    saveFruit() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      let params = {
        name: this.name,
        quantity: this.quantity,
        quantityType: this.quantityType,
        calorie: this.calorie,
        type: this.type
       
      }

      axios.post("fruit",params,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("fruit");
        })
        .catch(() => {
          alert("failed");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>