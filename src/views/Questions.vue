<template>
  <v-container>

        <v-row align="center" justify="center">
            <v-card class="elevation-12 mx-5" style="height: 600px;">
                <v-toolbar
                    color="var(--secondary-color)"
                    flat
                >
                    <v-toolbar-title>
                      <h1>
                      Clothes preference</h1>
                      </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <p style="font-size: 18px;">
                    We want to understand your clothing preferences, so pick which outfits you'd rather wear!
                    </p>

                    <transition name="slide-fade">
                      <v-row class="mt-5" align="center" justify="space-between" v-if="!clicked">
                        <v-img
                        height="400px"
                        width="150px"
                        :src="firstLink"
                        @click="clickedImage(this)"
                        class="protrude"
                          >
                        </v-img>
                        <v-img
                        height="400px"
                        width="150px"
                        :src="secondLink"
                        @click="clickedImage(this)"
                        class="protrude"
                        >
                        </v-img>
                      </v-row>
                    </transition>
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
          "https://www.themodestman.com/wp-content/uploads/2019/09/NYC_April_2010_Brock_Eric_Khoi-32-650x880.jpg",
          "https://i.pinimg.com/originals/10/73/b2/1073b2dd63d1661e9374593eef5aef00.jpg",
          "https://i1.wp.com/rohayati.com/wp-content/uploads/2020/03/White-T-shirt-with-Jackets.jpg?resize=1080%2C1024&ssl=1",
          "https://i.pinimg.com/564x/5b/bb/30/5bbb30f44e9645aaec4424398803b467.jpg",
          "https://cdn.famousoutfits.com/wp-content/uploads/2015/collections/summer-outfits/summer-outfits-01.jpg",
          "https://i2.wp.com/www.stylezco.com/wp-content/uploads/2019/01/Best-Mens-Outfits-Styles-for-Winter-Season.jpg?fit=566%2C732&ssl=1&w=640",
          "https://i.pinimg.com/736x/9e/81/10/9e81109ffc1dada9ae63e94a0c759d83.jpg"],
          firstLink: "",
          secondLink: "",
          clicked: false,
          index: 0
      }
    },
    computed: {
      
    },
    methods: {
      clickedImage() {
        this.clicked = true;
        setTimeout(() => {
          this.firstLink = this.clothing[this.index++];
          this.secondLink = this.clothing[this.index++];
          this.clicked = false;
        }, 300);
      }
    },
    mounted() {
      this.firstLink = this.clothing[this.index++];
      this.secondLink = this.clothing[this.index++];
    },
    watch: {
      index(val) {
        if(val >= this.clothing.length) {
          this.$router.replace({ name: 'Profile' })
        }
      }
    }
  }
</script>

<style scoped>

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.protrude {
  transition: 0.3s all;
}

.protrude:hover {
  cursor: pointer;
  transform: scale(1.1);
}

h1 {
  font-size: 25px;
}
  
</style>