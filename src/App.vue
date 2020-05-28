<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'TodoList' }">
        <span class="mr-2">Todos</span>
      </v-btn>
      <v-btn text :to="{ name: 'About' }">
        <span class="mr-2">About</span>
      </v-btn>
      <v-btn color="error" class="ml-1" @click="resetStore">
        <span class="mr-2">RESET STORE</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: "App",
  methods: {
    resetStore() {
      this.$store.dispatch('resetStates');
    }
  }
};
</script>
