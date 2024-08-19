<template>
    <button @click="signUp = !signUp">Sign / Login</button>
    <div v-if="signUp">
        <h1>Sign Up here:</h1>
        <table style="margin:auto">
            <tbody>
                <tr><th><label>Enter your name:</label></th><td><input type="text" v-model="name"><br><br></td></tr>
                <tr><th><label>Enter your surname:</label></th><td><input type="text" v-model="surname"><br><br></td></tr>
                <tr><th><label>Enter your age:</label></th><td><input type="text" v-model="age"><br><br></td></tr>
                <tr><th><label>Enter your favourite coding language:</label></th><td><input type="text" v-model="fav_coding_lang"><br><br></td></tr>
                <tr><th><label>Enter your favourite car:</label></th><td><input type="text" v-model="fav_car"><br><br></td></tr>
                <tr><th><label>Enter your eye colour:</label></th><td><input type="text" v-model="eye_colour"><br><br></td></tr>
                <tr><th><label>Enter your username:</label></th><td><input type="text" v-model="username"><br><br></td></tr>
                <tr><th><label>Enter your password:</label></th><td><input type="password" v-model="password"></td></tr>
                <tr><td><button @click="addUser()">Submit</button></td></tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        <h1>Login here:</h1>
        <div>
            <label>Enter your Username:</label>
            <input type="text" v-model="username" required><br><br>
            <label>Enter your Password:</label>
            <input type="password" v-model="password" required><br><br>
            <button @click="loginUser()">Login</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:'',
            surname:'',
            age:'',
            fav_coding_lang:'',
            fav_car:'',
            eye_colour:'',
            username:'',
            password:'',
            signUp: true
        }
    },
    methods:{
        addUser(){
            this.$store.dispatch('addUser',this.$data);
        },
        async loginUser(){
            await this.$store.dispatch('loginUser',this.$data);
            location.reload();
        }
    }
}
</script>
<style>
    
</style>