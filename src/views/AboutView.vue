<template>
    <h1>Get your fruits here:</h1>
    <div>
        <button @click = "getFruits()">Fruits</button>
    </div>
</template>
<script>
export default {
    methods: {
        getFruits(){
            this.$store.dispatch('getFruits')
        }
    },
}
</script>
<style lang="">
    
</style>