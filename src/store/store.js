import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userMe: {},
    cursos: {},
    fundamentos: {}
  },
  getters: {
    mostrarUserMe(state){
      return state.userMe;
    },
    mostrarCursos(state){
      return state.cursos;
    },
    mostrarFundamentos(state){
      return state.fundamentos;
    }
  },
  mutations: {
    userMe(state,datosRecibidos){
      state.userMe = datosRecibidos;
    },
    cursos(state,datosRecibidos){
      state.cursos = datosRecibidos;
    },
    fundamentosWeb(state,datosRecibidos){
      state.fundamentos = datosRecibidos;
    }
  },
  actions: {
    guardaData(context,datosRecibidos){
      context.commit('userMe',datosRecibidos);
    },
    guardaData2(context,datosRecibidos){
      context.commit('cursos',datosRecibidos);
    },
    guardaData3(context,datosRecibidos){
      context.commit('fundamentosWeb',datosRecibidos);
    },
  },
})
