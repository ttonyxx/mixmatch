<template>
  <v-container>

      <div v-if="!showOutfits">
        <v-row align="center" justify="center">
            <h1 class="h1-display">Please wait while we generate your outfits</h1>
        </v-row>
        
        <v-row align="center" justify="center">
            <v-progress-circular
            :size="80"
            color="black"
            indeterminate
            class="mt-12"
            ></v-progress-circular>
        </v-row>
      </div>

      <v-row v-if="showOutfits" justify="flex-start">
          <v-card class="py-3">
            <v-card
                class="mx-2"
                max-width="250"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="clothing[0].url"
                :alt="clothing[0].originalName"
                >
                <v-card-title>{{ clothing[0].originalName }}</v-card-title>
                </v-img>
            </v-card>
            <v-card
                class="mx-2"
                max-width="250"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="clothing[1].url"
                :alt="clothing[1].originalName"
                >
                <v-card-title>{{ clothing[1].originalName }}</v-card-title>
                </v-img>
            </v-card>
          </v-card>
      </v-row>
     
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Questions',
    data() {
      return {
          showOutfits: false,
      }
      
    },
    computed: {
      ...mapState(['clothing'])
    },
    methods: {
      
    },
    mounted() {
        setTimeout(() => {
            this.showOutfits = true;
        }, 1000);
    },
    watch: {
    }
  }
</script>

<style scoped>

  
</style>