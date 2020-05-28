import Vue from "vue";
import Vuex from "vuex";
import todo from "./todo";
import * as types from "./todo/mutation_types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    resetStates({ commit }) {
      commit(`todo/${types.RESET_STATE}`);
    }
  },
  modules: {
    todo
  }
});
