<template>
<div class="container my-4 text-center">
<div class="mt-5 btn-group-vertical col-md-7 text-center ">
<button type="button" class="btn btn-secondary m-1 fload-end" @click=ch() >CH</button>
<button type="button" class="btn btn-secondary m-1 fload-end" @click=protein() >PROTEIN</button>
<button type="button" class="btn btn-secondary m-1 fload-end" @click=fat() >FAT</button>
<button type="button" class="btn btn-secondary m-1 fload-end" @click=fruit() >FRUIT</button>
<button type="button" class="btn btn-secondary m-1 fload-end" @click=vegetable() >VEGETABLE</button>

<button type="button" class="btn btn-secondary m-1 fload-end" @click=goBack()>Back</button>
</div>
</div>
 
    
</template>

<script>

export default {
    name: 'MainCrud',
    methods:{
        ch(){
            this.$router.push("/ch");
        },
        protein(){
            this.$router.push("/protein");
        },
        fat(){
            this.$router.push("/fat");
        },
        fruit(){
            this.$router.push("/fruit");
        },
        vegetable(){
            this.$router.push("/vegetable");
        },
        goBack(){
            this.$router.push("/")
        }
    }
}
</script>
