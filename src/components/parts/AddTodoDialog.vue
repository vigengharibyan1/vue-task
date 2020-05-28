<template>
   <div class="text-center">
      <v-dialog
              v-model="dialog"
              width="500"
      >
         <template v-slot:activator="{ on }">
            <v-btn
                    color="primary"
                    dark
                    v-on="on"
            >
             Add TODO
            </v-btn>
         </template>

         <v-card>
            <v-card-title
                    class="headline grey lighten-2"
                    primary-title
            >
               Add Todo Form
            </v-card-title>
            <v-card-text>
               <v-form ref="form" v-model="valid">
                  <v-text-field
                   v-model="todo.msg"
                   :rules="[rules.required]"
                   label="Message"
                   required
                  />
                  <v-text-field
                          v-model="todo.detail"
                          :rules="[rules.required]"
                          label="Detail"
                          required
                  />
                  <div class="d-flex justify-center">
                     <v-btn
                             color="error"
                             class="mr-4"
                             @click="reset"
                     >
                        Reset Form
                     </v-btn>
                     <v-btn
                             :disabled="!valid"
                             color="success"
                             class="mr-4"
                             @click="submit"
                     >
                        Save
                     </v-btn>
                  </div>
               </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn
                       color="primary"
                       text
                       @click="closeDialog"
               >
                     Cancel
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </div>
</template>

<script>
   export default {
      name: "AddTodoDialog",
      data: () => ({
         dialog: false,
         valid: true,
         todo: {
            msg: '',
            detail: '',
            complete: false
         },
         rules: {
            required: v => !!v || "Field shouldn't be empty"
         }
      }),

      methods: {
         submit() {
           if(this.valid) {
              this.$store.dispatch('todo/add', {...this.todo}).then((res) => {
                 console.log(res);
                 if(res.success) this.closeDialog();
              });
           }
         },
         reset() {
            this.$refs.form.reset()
         },
         closeDialog() {
            this.reset();
            this.dialog = false;
         }
      },
   }
</script>
