<template>
  <v-container fluid style="background-color: #E0E0E0;">

      <v-row justify="center">

          <v-card
                class="mx-2 my-2"
                max-width="80"
                v-for="(item, index) in clothes" 
                v-bind:key="index"
                @click="selectClothing(item)"
            >
                <v-img
                class="white--text align-end"
                height="80"
                :src="item"
                >
                </v-img>
            </v-card>

      </v-row>
    
  </v-container>
</template>

<script>
  export default {
    name: 'ClothesView',

    props: {
        clothes: {type: Array, required: true}
    },

    data: () => ({
        
    }),

    methods: {
        selectClothing(itemUrl) {
            this.$emit('selectClothing', itemUrl)
        }
    }
      
  }
</script>
