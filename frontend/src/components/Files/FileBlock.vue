<template>
  <v-card
      class="file-item"
      :class="{selected : isSelected}"
  >
    <div
        class="img-block"
    >
      <img :src="img" :alt="name"/>
    </div>
    <div class="desc-block">
      <div class="pt-2 text-center">
        <filename class="file-name">
          {{ name }}
        </filename>
        <span class="file-status">
          {{ status }}
        </span>
      </div>
    </div>
  </v-card>
</template>
<script>
import Filename from "@/components/Shared/Text/Filename";
export default {
  components: {Filename},
  props: {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.file-item {
  padding: 0;
}

.file-item:hover {
  cursor: pointer;

  .file-name {
    text-decoration: underline;
  }
}

.desc-block {
  height: 100px;
}

.file-status {
  font-weight: 500;
  font-size: 15px;
  color: slategray;
}

img {
  display: block;
  width: 100%;
}

.img-block {
  cursor: pointer;
  margin: 0;
  height: 100%;
  width: 100%;
}

.selected {
  border: 2.5px solid royalblue;
}
</style>
