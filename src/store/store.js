import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMe: {},
    userMeData: [],
    userMeInclude: [],
    cursos: [],
    fundamentos: {},
    fundamentosData: [],
    fundamentosInclude: [],
    javascript: [],
    javascriptData: [],
    javascriptInclude: [],
    cssAvanzado: [],
    cssAvanzadoData: [],
    cssAvanzadoInclude: []
  },
  getters: {
    mostrarUserMe(state){
      return state.userMe;
    },
    mostrarUserMeData(state){
      return state.userMeData;
    },
    mostrarUserMeInclude(state){
      return state.userMeInclude;
    },
    mostrarCursos(state){
      return state.cursos;
    },
    mostrarFundamentos(state){
      return state.fundamentos;
    },
    mostrarFundamentosData(state){
      return state.fundamentosData;
    },
    mostrarFundamentosIncluded(state){
      return state.fundamentosInclude;
    },
    mostrarJavascriptData(state){
      return state.javascriptData;
    },
    mostrarJavascriptIncluded(state){
      return state.javascriptInclude;
    },
    mostrarcssAvanzadoData(state){
      return state.cssAvanzadoData;
    },
    mostrarcssAvanzadoIncluded(state){
      return state.cssAvanzadoInclude;
    },
  },
  mutations: {
    userMe(state,datosRecibidos){
      state.userMe = datosRecibidos;
      state.userMeData.push(datosRecibidos.data);
      state.userMeInclude = datosRecibidos.included;

    },
    cursos(state,datosRecibidos){
      state.cursos = datosRecibidos;
    },
    fundamentosWeb(state,datosRecibidos){
      state.fundamentos = datosRecibidos;
      state.fundamentosData.push(datosRecibidos.data);
      state.fundamentosInclude = datosRecibidos.included;
    },
    javascript(state,datosRecibidos){
      state.javascript = datosRecibidos;
      state.javascriptData.push(datosRecibidos.data);
      state.javascriptInclude = datosRecibidos.included;
    },
    cssAvanzado(state,datosRecibidos){
      state.cssAvanzado = datosRecibidos;
      state.cssAvanzadoData.push(datosRecibidos.data);
      state.cssAvanzadoInclude = datosRecibidos.included;
    },
    perfilUsuario(state,datosRecibidos){
      state.datosPerfilUsuario.push(datosRecibidos);
    }
  },
  actions: {
    guardaData(context,datosRecibidos){
      context.commit('userMe',datosRecibidos);
    },
    cursosCompletos(context,datosRecibidos){
      context.commit('cursos',datosRecibidos);
    },
    gardaDataFundamentos(context,datosRecibidos){
      context.commit('fundamentosWeb',datosRecibidos);
    },
    guardaDataJavaScript(context,datosRecibidos){
      context.commit('javascript',datosRecibidos);
    },
    guardaDataCSS(context,datosRecibidos){
      context.commit('cssAvanzado',datosRecibidos);
    },
    profileUser(context,datosRecibidos){
      context.commit('perfilUsuario',datosRecibidos);
    }
  },
})
