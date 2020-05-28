<template>
   <v-container>
      <h1 class="text-center ma-3">Todos</h1>
      <AddTodoDialog/>
      <h1 class="mt-5">Todos</h1>
      <v-card class="ma-2" v-for="(item, i) in todoList" :key="`todo-${i}`">
         <v-card-title class="justify-space-between d-flex align-center">
            <span>{{item.msg}}</span>
            <v-btn icon color="red" @click="removeTodo(i)">
               <v-icon>mdi-close</v-icon>
            </v-btn>
         </v-card-title>
         <v-card-text>
           <p>{{item.detail}}</p>
            <v-switch
                    v-model="item.complete"
                    :inset="true"
                    @change="changeStatus"
                    label="Completed"
            />
            <v-btn class="mt-2" outlined color="teal" :to="{name: 'Todo', params: {index: i} }">
              Read More
            </v-btn>
         </v-card-text>
      </v-card>
   </v-container>
</template>

<script>
    import AddTodoDialog from "../../components/parts/AddTodoDialog";
    import {mapGetters} from "vuex";
    export default {
        name: "TodoList",
       components: {AddTodoDialog},
       computed: {
          ...mapGetters({
             todoList: 'todo/list'
          })
       },
       methods: {
          removeTodo(index) {
             this.$store.dispatch('todo/remove', index)
          },
          changeStatus(complete) {
             this.$store.dispatch('todo/state', complete)
          }
       }
    }
</script>

<style scoped>

</style>
