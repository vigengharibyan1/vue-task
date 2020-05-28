import { cloneDeep } from "lodash";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import todo from "@/store/todo";
import * as mutations from "@/store/todo/mutation_types";

let store;
beforeEach(() => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  store = new Vuex.Store({
    modules: {
      todo: cloneDeep(todo)
    }
  });
});

const task = {
  msg: "Create TODO test project",
  detail: "I must do this so I can test applicants",
  complete: false
};

describe("TodoMutations", () => {
  test("Add new todo", () => {
    store.commit(`todo/${mutations.ADD_TODO}`, task);

    expect(store.state.todo.todoList).toContain(task);
  });

  test("Set todo completion state", () => {
    store.state.todo.todoList.push(task);

    store.commit(`todo/${mutations.SET_STATE}`, {
      index: 0,
      complete: true
    });
    expect(store.state.todo.todoList[0].complete).toBe(true);

    store.commit(`todo/${mutations.SET_STATE}`, {
      index: 0,
      complete: false
    });
    expect(store.state.todo.todoList[0].complete).toBe(false);
  });

  test("Remove TODO", () => {
    store.state.todo.todoList.push(task);

    store.commit(`todo/${mutations.REMOVE_TODO}`, 0);

    expect(store.state.todo.todoList).toEqual([]);
  });

  test("Select Todo", () => {
    store.state.todo.todoList.push(task);

    store.commit(`todo/${mutations.SELECT_TODO}`, 0);
    expect(store.state.todo.todo).toBe(task);

    store.commit(`todo/${mutations.SELECT_TODO}`, 1);
    expect(store.state.todo.todo).toBe(undefined);
  });
});
