<template>
  <div>
    <h1>Información de Usuario</h1>
    <div v-if="usuarioMeIncluded.length > 0">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Type</th>
            <th>Ver Más</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in usuarioMeIncluded" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.type}}</td>
            <td><button class="btn btn-primary" @click="masInfo(item.type)">Ir al Curso</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {API} from '../config/apiConexion';

export default {
  name: 'About',
  data() {
    return {
      usuarioMeIncluded: this.$store.state.userMeInclude
    }
  },
  methods: {
    masInfo(type){
      console.log(type);
      
      let infoCurso = this.usuarioMeIncluded.filter(valores => {return valores.type == type});
      
      if (type == "profile"){
        this.$store.dispatch("profileUser",infoCurso);
      } else if (type == "course") {
        this.$store.dispatch("infoCursoUser",infoCurso);
      } else if (type == "social_network") {
        this.$store.dispatch("socialUser",infoCurso);
      } else {
        console.log("No existe")
      }

      console.log(infoCurso);
    }
  },
  mounted() {
    API('users/me').then(response =>{
      console.log(response.data);
      this.$store.dispatch('guardaData',response);
    }).catch(error => console.error(error));
  },
}
</script>