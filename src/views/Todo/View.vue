<template>
   <v-container>
     <div v-if="todo">
        <h1 class="text-center ma-3">{{todo.msg}}</h1>
        <h4>{{todo.detail}}</h4>
        <b>Completed:</b> {{completed}}
     </div>
     <h1 v-else>
        404 NOT FOUND
     </h1>
   </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
       name: "Todo",
       mounted() {
          this.getTodo();
       },
       methods: {
         getTodo() {
            this.$store.dispatch('todo/selectTodo', this.$route.params.index).then(res => {
                if(!res.success || !this.todo) {this.$router.push({name: 'TodoList'})}
            })
         }
       },
       watch: {
          $route() {
             this.getTodo();
          }
       },
       computed: {
          ...mapGetters({
             todo: 'todo/one'
          }),
          completed() {
             return (this.todo && this.todo.complete) ? "Yes": 'No';
          }
       },
    }
</script>

<style scoped>

</style>
