<template>
  <v-app>
    <v-app-bar
      app
      color="success"
      dark
    >
      <v-toolbar-title class="text-h4">MixMatch</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn>
        Sign in
      </v-btn>

      
    </v-app-bar>
    <div style="height: 70px;"></div>

    <router-view />
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped> 

</style>
