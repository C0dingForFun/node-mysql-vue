import { createStore } from 'vuex';
import axios from 'axios';
import {toast} from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import {usedCookies} from 'vue-cookies'
import router from '@/router';

axios.defaults.withCredentials = true;
axios.defaults.headers = $cookies.get('token');

export default createStore({
  state: {
    users:null,
    fruits:null
  },
  getters: {
  },
  mutations: {
    setFruits(state, payload){
      state.fruits = payload;
    }
  },
  actions: {
    async addUser({commit},info){
      let data = await axios.post('http://localhost:5003/users/insertUser',info);
      console.log(data);
    },
    async loginUser({commit},info){
      let {data} =  await axios.post('http://localhost:5003/users/login',info);
      console.log(data);
      $cookies.set('token', data.token)
      if(data.message){
        toast("Login is successful",{
          "theme": "dark",
          "type": "default",
          "position": "top-center",
          "transition": "zoom",
          "dangerouslyHTMLString": true
        })
      }else{
        toast("Your password is incorrect", {
          "theme": "auto",
          "type": "error",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
      await router.push('/about');
      location.reload();
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5003/fruits');
      console.log(data);
      commit('setFruits',data)
      
    },
    async addToCart({commit},fruit_id){
      let {data} = await axios.post('http://localhost:5003/fruits/cart',{id:fruit_id});
      console.log(data);
    }

  },
  modules: {
  }
})
