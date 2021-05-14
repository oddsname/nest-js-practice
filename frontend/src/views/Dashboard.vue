<template>
  <div class="mt-16">
    <v-container>
      <v-row>
        <v-col class="col-5">

          <file-operation-panel
            :selected-files="selected"
          />

        </v-col>


        <v-col class="col-7">
          <v-row>
            <v-col cols="3" v-for="item in items" :key="item.id">

              <div @click="onClickFile(item)">
                <file-block
                    img="https://demo.tagdiv.com/newspaper_podcasts/wp-content/uploads/2019/04/71.jpg"
                    name="Text.txt"
                    status="Private"
                    :is-selected="isFileSelected(item)"
                />
              </div>

            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import FileBlock from "@/components/Files/FileBlock";
import FileOperationPanel from "@/components/Files/FileOperationPanel";
import {authAction} from "@/actions/authAction";

export default {
  name: 'Home',
  components: {
    FileOperationPanel,
    FileBlock
  },
  data: () => ({
    items: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
    ],
    selected: [],
  }),
  methods: {
    isFileSelected(elemToCheck) {
      return this.selected.some((elem) => elem.id === elemToCheck.id);
    },

    onClickFile(clickedElem) {
      this.selected = this.isFileSelected(clickedElem)
        ? []
        : [clickedElem];
    }
  }
}
</script>
<style scoped>
.bottom-line {
  border-bottom: 1px solid gray;
}
</style>