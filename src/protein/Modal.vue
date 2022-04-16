<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h5 name ="header" class="modal-title" id="exampleModalLabel">
                        {{modalTitle}}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <div class="input-group mb-3" name="body">
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
  </Transition>
</template>
