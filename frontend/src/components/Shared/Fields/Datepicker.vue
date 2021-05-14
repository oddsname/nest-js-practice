<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      max-width="290"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="activeValue"
          clearable
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
          @click:clear="activeValue = null"
      ></v-text-field>
    </template>
    <v-date-picker
        v-model="activeValue"
        :min="minDate"
        @change="menu = false"
    ></v-date-picker>
  </v-menu>
</template>
<script>

export default {

  props: {
    value: {},
    label: {
      type: String,
    },
    minDate: {
      type: String,
      default: () => {
        const date = new Date;
        date.setDate(date.getDate() + 1);

        return date.toJSON().slice(0, 10).replace(/-/g, '-')
      }
    }
  },

  data: () => ({
    menu: false,
    activeValue: null,
  }),

  created() {
    this.activeValue = this.value;
  },

  watch: {
    value(newValue) {
      this.activeValue = newValue;
    }
  }
}
</script>