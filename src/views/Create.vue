<template>
  <v-container>

       <v-row justify="center">
          <v-card class="py-3 mt-3" style="background-color: var(--secondary-color); width: 250px;">
            <v-card
                class="mx-2 choose"
                max-height="250"
                @click="selected = 0"
                align="center"
                justify="center"
            >
                <v-img
                class="white--text align-end"
                width="200px"
                height="200px"
                :src="shirtUrl"
                >
                </v-img>
            </v-card>
            <v-card
                class="mx-2 choose"
                max-height="250"
                @click="selected = 1"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="pantsUrl"
                >
                </v-img>
            </v-card>
            <v-card
                class="white--text mx-2 choose"
                max-width="250"
                min-height="80"
                @click="selected = 2"
                align="center"
                justify="center"
            >
                <v-img
                class="white--text align-center"
                max-width="120"
                max-height="80"
                :src="shoesUrl"
                >
                </v-img>
            </v-card>
          <v-row justify="center" class="mt-3"><v-btn fill text color="success">Save</v-btn></v-row>
          </v-card>
      </v-row>

      <div style="height: 20vh;"></div>

    <ClothesView :clothes="selectedClothes" id="clothesview" :style="{bottom: clothesViewPos}" @selectClothing="selectClothing"></ClothesView>
     
  </v-container>
</template>

<script>
  import ClothesView from '@/components/ClothesView'

  export default {
    name: 'Create',
    components: {
        ClothesView
    },
    data() {
      return {
         shirtUrl: "",
         pantsUrl: "",
         shoesUrl: "",
         selected: -1,
         shirts: ["https://lp2.hm.com/hmgoepprod?set=quality[79],source[/21/4d/214d9765f510970fa8e5b082f120c76503fab1ca.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/zoom]&zoom=zoom",
             "https://ae01.alicdn.com/kf/HTB1US_lXx_rK1RkHFqDq6yJAFXai/5XL-Plus-Size-Brand-clothing-Cotton-Mens-Clothing-Solid-Soft-Men-Shirt-Long-Sleeve-Mens-Shirts.jpg_640x640.jpg", 
         "https://images-na.ssl-images-amazon.com/images/I/61god%2B%2BvR-L._AC_UY606_.jpg",
         "https://shop.madeinsantacruz.com/media/Sweatshirts/SC_PrimaryDot_Pullover_White_Front.jpg"],
         pants: ["https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dw8527d64f/products/S20_Product_Images/S20_onform_shots/750004_0003_M%20CIRCUIT%20PANTS_Carbon.jpg?sw=600",
             "https://cdn.shopify.com/s/files/1/0023/9901/0881/products/M-Coburn-Pant-Storm-Cloud_5f952c4f-d899-484f-b891-acf4f37f6269_1400x1400.jpg?v=1582657066",
         "https://www.blackdiamondequipment.com/on/demandware.static/-/Sites-bdel/default/dwdfe3d84b/products/F18_Product_Images/Apparel/E5SJ_015_Black_MWinterAlpinePant.jpg",
         "https://www.blackdiamondequipment.com/dw/image/v2/AAKN_PRD/on/demandware.static/-/Sites-bdel/default/dwf77df5be/products/S19_Product_Images/S19_Apparel/750020_0002_Black_MFORGEDDENIMPANTS.jpg?sw=600"],
         shoes: ["https://cdn.shopify.com/s/files/1/2273/2141/products/Roux-White-Tony-Bianco-Casual-Shoe-Front_c4ea1c0a-0df6-4262-857a-848148d3505a.png?v=1549260256",
             "https://s3.amazonaws.com/nikeinc/assets/59282/Converse_Chuck_Taylor_All_Star_70_Embossed_Floral_-_Front_original_hd_1600.JPG?1466984940",
             "https://www.rogansshoes.com/data/default/images/catalog/385/VN_0D3HY28_XXX1.JPG",
         "https://www.famousfootwear.com/productimages/shoes_ia71600.jpg?trim.threshold=105&width=630&height=480&paddingWidth=60"],
         selectedClothes: [],
         clothesViewPos: -120
      }
      
    },
    computed: {
      
    },
    methods: {

        animateClothes(selected) {
            this.clothesViewPos = '-120px';
            setTimeout(() => {
                this.selectedClothes = selected;
                this.clothesViewPos = '0px';
            }, 200);
        },
        selectClothing(e) {
            if(this.selected == 0) {
                this.shirtUrl = e;
            } else if(this.selected == 1) {
                this.pantsUrl = e;
            } else if(this.selected == 2) {
                this.shoesUrl = e;
            }
        }
      
    },
    mounted() {
        
        this.selectedClothes = this.shirts;
       
    },
    watch: {
        selected(val) {
            if(val == 0) {
                this.animateClothes(this.shirts);
            } else if(val == 1) {
                this.animateClothes(this.pants);
            } else if(val == 2) {
                this.animateClothes(this.shoes);
            }
        }
    }
  }
</script>

<style scoped>

#clothesview {
    position: fixed;
    left: 0;
    transition: 0.2s all;
}

.choose {
    transition: 0.3s all;
}

.choose:hover {
    background-color: #FFF9C4;
}
  
</style>