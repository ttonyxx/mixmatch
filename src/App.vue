<template>
  <v-app>
    <v-app-bar
      app
      color="#424242"
      dark
    >
      <h1 id="logo" @click="$router.replace({ name: 'Main' })">MixMatch</h1><!--<v-img src="@/assets/logo.png" height="40px" width="30px"></v-img>-->

      <v-spacer></v-spacer>

      <div v-if="$route.name !== 'Questions'">
      <v-avatar
        class="mr-2"
        id="user-avatar"
        @click="$router.replace({ name: 'Profile' })"
        height="40px"
        width="40px"
      >
      <img
        :src="profile.image_url"
        alt="John"
      >
      </v-avatar>
      <v-btn @click="signOut()">Sign out</v-btn>
      </div>

      
    </v-app-bar>
    <div style="height: 70px;"></div>

    <router-view />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',

  methods: {
    signOut() {
      this.$store.commit("setProfile", {
          image_url: "https://freesvg.org/img/abstract-user-flat-4.png", 
          first_name: "",
          last_name: ""
      })
      this.$router.replace({ name: 'Questions' })
    }
  },

  components: {
  },

  computed: {
      ...mapState(['clothing', 'profile'])
  },

  data: () => ({
    //
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

:root {
  --main-font: 'Poppins', 'Roboto', 'Sans-serif';
  --secondary-color: #EEEEEE;
}

* {
  font-family: var(--main-font);
}

</style>

<style scoped> 

#logo {
  font-family: var(--main-font);
}

#logo:hover {
  cursor: pointer;
}

#user-avatar {
  transition: 0.3s all;
}

#user-avatar:hover {
  opacity: 0.8;
  cursor: pointer;
}

</style>
