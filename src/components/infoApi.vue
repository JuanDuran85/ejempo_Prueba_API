<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button" @click="userMe">Users me</a>
      <a class="btn btn-primary btn-lg mx-2" href="#" role="button" @click="courses">Cursos</a>
      <a class="btn btn-primary btn-lg mx-2" href="#" role="button" @click="fundamentos">Fundamentos</a>
      <a class="btn btn-primary btn-lg mx-2" href="#" role="button">CSS</a>
      <a class="btn btn-primary btn-lg mx-2" href="#" role="button">JavaScript</a>
    </div>
    <hr>
    <ul v-show="traerIncluded">
      <li v-for="(item,index) in traerIncluded" :key="index">{{item}}</li>
    </ul>
    <div v-show="traerCursos">
      <div v-for="(item,index) in traerCursos.data" :key="index">
        {{ item.id }} - {{item.type}} - {{item.attributes.name}}
      </div>
    </div>
    <div v-show="mostrarFundamentosData">
      <div v-for="(item,index) in mostrarFundamentosData" :key="index">
        {{item.id}} - {{item.type}} - {{item.attributes.cover}}
      </div>
    </div>
    <div v-for="(item,index) in mostrarFundamentosIncluded" :key="index">
      {{ item.attributes.name }}
    </div>
  </div>
</template>

<script>
import { API } from "../config/apiConexion";

export default {
  name: 'InfoApi',
  data() {
    return {
      
    }
  },
  computed: {
    traerIncluded(){
      return this.$store.getters.mostrarUserMe.included;
    },
    traerCursos(){
      return this.$store.getters.mostrarCursos;
    },
    mostrarFundamentosData(){
      return this.$store.getters.mostrarFundamentosData;
    },
    mostrarFundamentosIncluded(){
      return this.$store.getters.mostrarFundamentosIncluded;
    }
  },
  methods: {
    userMe(){
      API('users/me').then(response =>{
        console.log(response.data);
        this.$store.dispatch('guardaData',response);
      }).catch(error => console.error(error));
    },
    courses(){
      API('courses').then(response =>{
        console.log(response.data);
        this.$store.dispatch('guardaData2',response);
      }).catch(error => console.error(error));
    },
    fundamentos(){
      API('courses/fundamentos-de-desarrollo-web').then(response =>{
        console.log(response.data); //objeto
        console.log(response.included); //arreglo
        this.$store.dispatch('guardaData3',response);
      }).catch(error => console.error(error));
    }
  },
}
</script>

<style scoped lang="scss">

</style>
