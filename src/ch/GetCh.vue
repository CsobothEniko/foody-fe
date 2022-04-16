
<template>
  <div>
    <a href="getCh">New Ch</a>
    <b-list-group v-for="ch in allch" :key="ch.id">
      <b-list-group-item>
        ID: {{ch.id}}
        Name: {{ ch.name }}
        <small class="text-secondary"> Quantity: {{ ch.quantity }} </small>
        <small class="text-secondary"> Quantity Type: {{ ch.quantityType }} </small>
        <small class="text-secondary"> Calorie: {{ ch.calorie }} </small>
        <small class="text-secondary"> Type: {{ ch.type }} </small>
        <b-button variant="info" @click="editCh(ch.id)" class="mr-2">
          Edit
        </b-button>
        <b-button variant="danger" @click="deleteCh(ch.id)">
          Delete
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      allch: []
    };
  },
  created() {
    this.updateList();
  },
  methods: {
    updateList() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

      /*this.axios.get("ch/list",
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }            
        })
        .then((response) => {
          this.ch = response.data;
        });*/

     axios.get('ch/list', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.allch = response.data;
             });
    },
    editCh(id) {
      this.$router.push("editCh/" + id)
    },
    deleteCh(id) {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
      
      axios.delete("ch/" + id,{ headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }})
        .then(() => {
          this.updateList();
          alert("success");
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