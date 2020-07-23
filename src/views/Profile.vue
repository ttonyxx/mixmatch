<template>
  <v-container>

     <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-container
      height="100%"
      style="background-color: var(--secondary-color);"
    >
      <v-row
        class="fill-height"
      >
        <v-col
          align-self="start"
          cols="6"
          style="border-right: 1px solid gray"
        >
          <v-avatar
            class="profile"
            color="grey"
            size="164"
            tile
          >
            <v-img :src="profile.image_url"></v-img>
          </v-avatar>
          <v-list-item
            color="rgb(0, 0, 0)"
            dark
          >
            <v-list-item-content>
              <v-list-item-title style="color: black; font-family: var(--main-font); font-size: 20px;">{{ profile.first_name }} {{ profile.last_name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6" class="px-8">
         <h1>Followers <span class="number">20</span></h1>
         <h1>Following <span class="number">35</span></h1>
         <h1>Outfits <span class="number">16</span></h1>
         <h1>Clothes <span class="number">54</span></h1>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
   <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-container
        class="mt-6"
      height="100%"
      style="background-color: var(--secondary-color);"
    >

        <v-row justify="center">
        <h1 class="section-title">Your closet</h1>
        </v-row>
        <v-row justify="center">
        <v-btn class="profile-btn" @click="$router.replace({ name: 'Suggest' })">Suggest outfits</v-btn>
        </v-row>
        <v-row justify="center" class="mt-3">
            <v-card
                class="mx-2 my-2"
                max-width="200"
                v-for="item in clothing" 
                v-bind:key="item.id"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="item.url"
                :alt="item.originalName"
                >
                </v-img>
                <v-card-actions class="justify-center">
                <v-btn
                    color="red"
                    text
                >
                    Remove
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-row> 
        <v-row justify="center">
        <v-btn class="profile-btn mb-3" @click="$router.replace({ name: 'Main' })" color="#DCEDC8">Add clothes</v-btn>
        </v-row>

        
    </v-container>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="434"
    tile
  >
    <v-container
        class="mt-6"
      height="100%"
      style="background-color: var(--secondary-color);"
    >

        <v-row justify="center">
        <h1 class="section-title">Your outfits</h1>
        </v-row>
        <v-row justify="center">
        <v-btn class="profile-btn mt-3" @click="$router.replace({ name: 'Create' })">Create outfits</v-btn>
        </v-row>
        <v-row justify="center" class="mt-3">
            
        </v-row> 

        
    </v-container>
  </v-card>

          

     
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Suggest',
    data() {
      return {
            
      }
      
    },
    computed: {
      ...mapState(['clothing', 'profile'])
    },
    methods: {
      
    },
    mounted() {
        
        
    },
    watch: {
    }
  }
</script>

<style scoped>

    h1 {
        font-size: 20px;
        font-weight: normal;
        line-height: 1.8;
    }

    .number {
        padding: 0px 2px;
        background-color: lightsteelblue;
        border-radius: 5px;
    }

    .section-title {
        font-size: 30px;
        font-weight: bold;
    }

    .profile-btn {
        width: 200px;
    }
  
</style>