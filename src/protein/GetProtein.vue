<template>
<div class="mt-5">
    <button type="button" class="btn btn-primary m-2 fload-end" data-toggle="modal" 
    data-target="#exampleModal" id="show-modal" @click=addClick() >Add Protein</button>



    <table class="table table-striped">
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Name
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    QuantityType
                </th>
                <th>
                    Calorie
                </th>
                <th>
                    Type
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="protein in proteins" v-bind:key = "protein.id">
                <td>{{protein.id}}</td>
                <td>{{protein.name}}</td>
                <td>{{protein.quantity}}</td>
                <td>{{protein.quantityType}}</td>
                <td>{{protein.calorie}}</td>
                <td>{{protein.type}}</td>
                <td>
                    <button type="button" class="btn btn-light mr-1" data-bs-toggle="modal" 
                    data-bs-target="#exampleModal" @click="editClick(protein)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                        </svg>
                    </button>
                     <button type="button" class="btn btn-light mr-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                    </svg>
                    </button>
                </td>
                

            </tr>
        </tbody>
    </table>

    <div name="modal" class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" >

    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                        {{modalTitle}}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>

            </div>
            <div class="modal-body">
                <div class="input-group mb-3">
                    <span class="input-group-text">Name</span>
                    <input type="text" class="form-control" v-model="name">
                    
                    <span class="input-group-text">Quantity</span>
                    <input type="text" class="form-control" v-model="quantity">

                    <span class="input-group-text">Quantity Type</span>
                    <input type="text" class="form-control" v-model="quantityType">

                    <span class="input-group-text">Calorie</span>
                    <input type="text" class="form-control" v-model="calorie">

                    <span class="input-group-text">Type</span>
                    <input type="text" class="form-control" v-model="type">
                </div>

                <button type="button" v-if="id==0" class="btn btn-primary">
                    Create
                </button>

                <button type="button" v-if="id!=0" class="btn btn-primary">
                    Update
                </button>
            </div>

        </div>

    </div>


    </div> 
    

</div>
  
</template>

<script>
import axios from 'axios';


export default {
 name: 'GetProtein',

 data() {
     return{
         proteins:[],
         id:0,
         name:'',
         quantity: '',
        quantityType: '',
        calorie: '',
        type: '',

        modalTitle:'',
        
         
     }
 },
 methods: {
     refreshData(){
         const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

         axios.get('protein/list', { headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic '+token
             }}).then((response) => {
                 this.proteins = response.data;
             });
     },
     addClick(){
         this.modalTitle = "Add Protein";
         this.id = 0;
         this.name = ""; 
     },
     editClick(protein){
         this.modalTitle = "Edit Protein";
         this.id = protein.id;
         this.name = protein.name; 
     }
 },
 mounted: function(){
     this.refreshData();
 }
}
</script>

<style>

</style>}