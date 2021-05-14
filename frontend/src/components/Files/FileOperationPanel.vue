<template>
  <v-card class="px-4 py-4" height="700px">
    <v-row class="pb-4">
      <v-col class="float-left">
        <h1>Panel</h1>
      </v-col>
      <v-col class="pt-5 text-right">

        <v-btn color="success">
          New File
        </v-btn>

      </v-col>
    </v-row>

    <hr>

    <div v-if="selectedFiles.length">
      <div class="mt-8">
        <div class="float-right pb-2">
          <v-btn class="mr-2" color="warning">
            Generate Token

            <v-icon dark right>
              mdi-plus-circle
            </v-icon>
          </v-btn>

          <download
              class="text-decoration-none"
              href="/favicon.ico"
          >
            <v-btn color="blue" class="white--text mr-2">
              Download

              <v-icon dark right>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
          </download>

          <v-btn class="error mr-2">
            Delete

            <v-icon dark right>
              mdi-delete
            </v-icon>
          </v-btn>

          <v-btn class="success">
            Edit

            <v-icon dark right>
              mdi-pencil
            </v-icon>
          </v-btn>
        </div>

        <img
            width="100%"
            src="https://demo.tagdiv.com/newspaper_podcasts/wp-content/uploads/2019/04/71.jpg"
            alt="selected_img"
        />
        <div class="text-center">
          <filename> Text.txt</filename>
        </div>
        <v-row>
          <v-col cols="12">

          </v-col>

        </v-row>
      </div>
    </div>
    <div class="text-lg-center " v-else>
      <h2 class="no-items__margin grey--text">No selected items</h2>
    </div>
  </v-card>
</template>
<script>
import Filename from "@/components/Shared/Text/Filename";
import Download from "@/components/Shared/Buttons/Download";

export default {
  components: {Download, Filename},
  props: {
    selectedFiles: {
      type: Array,
    }
  }
}
</script>
<style scoped>

.no-items__margin {
  margin-top: 35%;
}

</style>