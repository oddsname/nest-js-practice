<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h3 class="px-4">Files</h3>
      <h3 class="px-4">Reports</h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>