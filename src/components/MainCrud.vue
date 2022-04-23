<template>
<div>
<button class="m-5" @click=ch() >CH</button>
<button @click=protein() >PROTEIN</button>
<button @click=fat() >FAT</button>
<button @click=fruit() >FRUIT</button>
<button @click=vegetable() >VEGETABLE</button>
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
        }
    }
}
</script>
