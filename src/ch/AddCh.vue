<template>
  <div class="mt-5">
    <b-card title="Add new">
      <b-form-input class="mb-2" v-model="name" placeholder="Enter name"></b-form-input>
      <b-form-input class="mb-2" v-model="quantity" placeholder="Enter quantity"></b-form-input>
      <b-form-input class="mb-2" v-model="quantityType" placeholder="Enter quantity type"></b-form-input>
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
      name: "",
      quantity: "",
      quantityType: "",
      calorie: "",
      type: ""
      
    };
  },
  methods: {
    save() {
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
 
      axios.post("ch",params,{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then(() => {
          alert("success");
          this.$router.push("ch");
        })
        .catch(() => {
          alert("failed");
        });
    },
    goBack(){
            this.$router.push("/ch")
        }
  },
};
</script>

<style lang="scss" scoped>
</style>