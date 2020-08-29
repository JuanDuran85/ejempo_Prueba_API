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
      <a class="btn btn-primary btn-lg mx-2" href="#" role="button" @click="mostrarJS">JavaScript</a>
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
    <div v-if="javaScriptIncluded.length > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in javaScriptIncluded" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.type}}</td>
            <td>{{item.attributes.name}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import { API } from "../config/apiConexion";

export default {
  name: 'InfoApi',
  data() {
    return {
      javaScriptIncluded: []
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
    },
    mostrarJavaScriptInclude(){
      return this.$store.getters.mostrarJavascriptIncluded;
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
        this.$store.dispatch('cursosCompletos',response.data);
      }).catch(error => console.error(error));
    },
    fundamentos(){
      API('courses/fundamentos-de-desarrollo-web').then(response =>{
        console.log(response.data); //objeto
        console.log(response.included); //arreglo
        this.$store.dispatch('gardaDataFundamentos',response);
      }).catch(error => console.error(error));
    },
    mostrarJS(){
      this.javaScriptIncluded = this.$store.state.javascriptInclude;
    }
  },
}
</script>

<style scoped lang="scss">

</style>
