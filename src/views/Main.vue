<template>
  <v-container>
     <form class="mb-12" enctype="multipart/form-data" novalidate id="upload-form">
        <h1>Upload images</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <p v-if="!isSaving">
              Drag your file(s) here to begin<br> or click to browse
            </p>
            <p v-if="isSaving">
              Uploading {{ fileCount }} files...
            </p>
        </div>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess" justify="center" align="center">
        <v-row justify="flex-start">
            <v-card
                class="mx-2"
                max-width="250"
                v-for="item in uploadedFiles" 
                v-bind:key="item.id"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="item.url"
                :alt="item.originalName"
                >
                <v-card-title>{{ item.originalName }}</v-card-title>
                </v-img>
                <v-card-actions class="justify-center">
                <v-btn
                    color="warning"
                    text
                >
                    Rename
                </v-btn>
                <v-btn
                    color="red"
                    text
                >
                    Delete
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-row> 
        <v-btn class="mt-8 mb-8" @click="$router.replace({ name: 'Suggest' })">Suggest outfits</v-btn>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
  </v-container>
</template>

<script>
  import { upload, wait } from '@/helper.js'; 
  import { mapState } from 'vuex'

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3;

  export default {
    name: 'Main',
    data() {
      return {
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos'
      }
    },
    computed: {
      isInitial() {
        return this.currentStatus === STATUS_INITIAL;
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING;
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS;
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED;
      },
      ...mapState(['clothing'])
    },
    methods: {
      reset() {
        // reset form to initial state
        this.currentStatus = STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
      },
      save(formData) {
        // upload data to the server
        this.currentStatus = STATUS_SAVING;
        upload(formData)
          .then(wait(1500)) // DEV ONLY: wait for 1.5s 
          .then(x => {
            this.uploadedFiles = [].concat(x);
            this.currentStatus = STATUS_SUCCESS;
            this.$store.commit("setClothing", this.uploadedFiles);
          })
          .catch(err => {
            this.uploadError = err.response;
            this.currentStatus = STATUS_FAILED;
          });
      },
      filesChange(fieldName, fileList) {
        // handle file changes
        const formData = new FormData();
        if (!fileList.length) return;
        // append the files to FormData
        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name);
          });
        // save it
        this.save(formData);
      }
    },
    mounted() {
      this.reset();
    },
  }
</script>

<style scoped lang="scss">
  .dropbox {
    outline: 2px dashed grey; /* the dash box */
    outline-offset: -10px;
    background: lightcyan;
    color: dimgray;
    padding: 10px 10px;
    min-height: 200px; /* minimum height */
    position: relative;
    cursor: pointer;
    transition: 0.3s all;
  }
  
  .input-file {
    opacity: 0; /* invisible but it's there! */
    width: 100%;
    height: 200px;
    position: absolute;
    cursor: pointer;
  }
  
  .dropbox:hover {
    background: lightblue; /* when mouse over to the drop zone, change color */
  }
  
  .dropbox p {
    font-size: 1.2em;
    text-align: center;
    padding: 50px 0;
  }

  .clothing-img {
      height: 200px;
  }
</style>