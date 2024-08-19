<template>
    <div v-for="fruit in $store.state.fruits" :key="fruit.id">
        <div>
            <span>{{ fruit.id }}</span> /
            <span>{{ fruit.fruit_name }}</span> /
            <span>{{ fruit.weight }}</span> /
            <span>{{ fruit.amount }}</span> /
            <button v-if="$cookies.get('token')" @click="addToCart(fruit.id)">Purchase Fruit</button>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        getFruits(){
            this.$store.dispatch('getFruits');
        },
        addToCart(fruit_id){
            this.$store.dispatch('addToCart',fruit_id);
        }
    },
    mounted() {
        this.getFruits();
    },
}
</script>
<style lang="">
    
</style>