<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
//import { API } from "./config/apiConexion";
//import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      apiResultado: null
    }
  },
  mounted(){
/*     API('courses').then(response =>{
      this.apiResultado = response;
      this.$store.dispatch('guardaData',this.apiResultado);
    }).catch(error => console.error(error)); */
    
/*     axios.get('https://us-central1-apiclub-d7567.cloudfunctions.net/apiClub/cursos').then((response)=>{
      console.log(response);
    }).catch(error => console.error(error)); */
  
/*     fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */

  }
}
</script>

<style lang="scss">

</style>
