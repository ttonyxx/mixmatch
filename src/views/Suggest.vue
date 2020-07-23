<template>
  <v-container>

      <div v-if="!showOutfits && !error">
        <v-row align="center" justify="center" style="font-size: 30px;">
            Please wait while we<br>generate your outfits
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

      <v-row v-if="showOutfits" justify="center">
          <v-card class="py-3 mt-3" v-for="(item, index) in outfits" v-bind:key="index" style="background-color: var(--secondary-color);">
            <v-card
                class="mx-2"
                max-width="250"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="item.firstClothing.url"
                :alt="item.firstClothing.originalName"
                >
                </v-img>
            </v-card>
            <v-card
                class="mx-2"
                max-width="250"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="item.secondClothing.url"
                :alt="item.secondClothing.originalName"
                >
                </v-img>
            </v-card>
            <v-card
                class="mx-2 py-3 px-3"
                max-width="250"
                style="background-color: #FFFDE7;"
            >
            Add?
                <v-img
                class="white--text align-end"
                max-width="250"
                max-height="70"
                :src="recomendedClothing[index]"
                >
                </v-img>
            </v-card>
          <v-row justify="center" class="mt-3"><v-btn fill text color="success">Save</v-btn></v-row>
          </v-card>
      </v-row>

      <v-alert type="error" v-if="error">
        There was an error in creating your outfits
      </v-alert>
     
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Suggest',
    data() {
      return {
          showOutfits: false,
          outfits: [],
          error: false,
          recomendedClothing: ["https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-193-Royale-TripleBlack-3RBW-Product-101_0dfdc0b7-602d-413d-a381-4baa1060da91_854x.jpg?v=1563992320",
          "https://images.vans.com/is/image/Vans/8G1UKX-HERO?$583x583$",
          "https://images.vans.com/is/image/Vans/VHQAOB-HERO?$583x583$",
          "https://images-na.ssl-images-amazon.com/images/I/A1mSOuZOxSL._AC_UX395_.jpg",
          "https://target.scene7.com/is/image/Target/GUEST_90729dd9-0e9d-461b-8f74-28fe15a0434f?wid=488&hei=488&fmt=pjpeg"
          ]
      }
      
    },
    computed: {
      ...mapState(['clothing'])
    },
    methods: {
      
    },
    mounted() {
        
        setTimeout(() => {
            if(this.clothing.length > 0) {
              for(let i=0; i<this.clothing.length; i+=2) {
                if(this.clothing[i] && this.clothing[i+1]) {
                  this.outfits.push(
                    {
                      firstClothing: this.clothing[i],
                      secondClothing: this.clothing[i+1]
                    }
                  )
                }
              }
              this.showOutfits = true;
            } else {
              this.error = true;
            }
        }, 1000);
    },
    watch: {
    }
  }
</script>

<style scoped>

  
</style>