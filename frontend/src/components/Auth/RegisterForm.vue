<template>
  <v-card width="500px">
    <div class="register">
      <v-row>
        <v-col class="py-8">
          <v-card-title class="py-4 pl-8">
            <h2 class="ml-auto mr-auto">Register Form</h2>
          </v-card-title>

          <div class="pt-8 px-8">

            <v-text-field
                placeholder="Name"
                name="name"
            />

            <v-text-field
                placeholder="Email"
                name="email"
            />

            <v-text-field
                placeholder="Password"
                name="password"
                type="password"
            />

            <div class="pt-6 text-center">
              <v-btn
                  rounded
                  x-large
                  width="250px"
                  class="register-btn"
              >
                Register
              </v-btn>

              <h4 class="mt-7 font-weight-light cursor-pointer text-decoration-underline" @click="onLoginClick">
                Login
              </h4>
            </div>
          </div>
        </v-col>

      </v-row>

    </div>
  </v-card>
</template>
<script>
export default {

  methods: {
    onLoginClick() {
      this.$emit('loginClick');
    }
  }

}
</script>
<style>
.register-btn {
  border: 2px solid #1976d2 !important;
  background: white;
  color: #1976d2 !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>