<template>
  <div>
    <b-card title="Add new ch">
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
    saveCh() {
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

      this.axios
        .post("ch",{
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        }, params)
        .then(() => {
          alert("success");
          this.$router.push("ch");
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