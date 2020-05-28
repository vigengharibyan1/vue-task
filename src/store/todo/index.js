import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation_types";

Vue.use(Vuex);

const todo = {
  namespaced: true,
  state: {
    todoList: [],
    todo: null
  },
  getters: {
    list: state => state.todoList,
    one: state => state.todo
  },
  mutations: {
    [types.ADD_TODO](state, todo) {
      state.todoList.push(todo);
    },
    [types.SET_STATE](state, { index, complete }) {
      state.todoList[index].complete = complete;
    },
    [types.REMOVE_TODO](state, index) {
      Vue.delete(state.todoList, index);
    },
    [types.SELECT_TODO](state, index) {
      const todo = state.todoList.find((el, i) => i == index);
      Vue.set(state, "todo", todo);
    },
    [types.RESET_STATE](state) {
      const INITIAL_STATE = {
        todoList: [],
        todo: null
      };
      Object.keys(INITIAL_STATE).forEach(key =>
        Vue.set(state, key, INITIAL_STATE[key])
      );
    }
  },
  actions: {
    add({ commit }, todo) {
      try {
        commit(types.ADD_TODO, todo);
        return { success: true }
      } catch (error) {
        return { success: false }
      }
    },
    remove({ commit }, index) {
      try {
        commit(types.REMOVE_TODO, index);
        return { success: true }
      } catch (error) {
        return { success: false }
      }
    },
    state({ commit }, complete) {
      try {
        commit(types.SET_STATE, complete);
        return { success: true }
      } catch (error) {
        return { success: false }
      }
    },
    selectTodo({ commit }, index) {
      try {
        commit(types.SELECT_TODO, index);
        return { success: true };
      } catch (error) {
        console.log(error.message)
        return { success: false, message: error.message }
      }
    },
  }
};

export default todo;
