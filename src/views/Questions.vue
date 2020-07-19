<template>
  <v-container>

        <v-row align="center" justify="center">
            <v-card class="elevation-12">
                <v-toolbar
                    color="success"
                    dark
                    flat
                >
                    <v-toolbar-title>Clothes preference</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    We want to understand your clothing preferences, so pick which outfits you'd rather wear!

                    <v-row class="mt-5" align="center" justify="space-between">
                        <v-img
                        height="400px"
                        width="150px"
                        src="https://i.pinimg.com/originals/78/e9/b8/78e9b81eda1d1f94acdbedb83c26b12c.jpg"
                        >
                        </v-img>
                        <v-img
                        height="400px"
                        width="150px"
                        src="https://www.themodestman.com/wp-content/uploads/2019/09/NYC_April_2010_Brock_Eric_Khoi-32-650x880.jpg"
                        >
                        </v-img>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
     
  </v-container>
</template>

<script>

  export default {
    name: 'Questions',
    data() {
      return {
          clothing: ["https://i.pinimg.com/originals/78/e9/b8/78e9b81eda1d1f94acdbedb83c26b12c.jpg", 
          "https://www.themodestman.com/wp-content/uploads/2019/09/NYC_April_2010_Brock_Eric_Khoi-32-650x880.jpg"]
      }
    },
    computed: {
      
    },
    methods: {
    },
    mounted() {
    },
  }
</script>

<style scoped lang="scss">
  
</style>