<template>
  <v-container>
      <v-slide-x-transition >

        <register-form
            class="form__margin"
            v-if="isShowRegisterForm"
            @loginClick="toggleForms"
        />

      </v-slide-x-transition>


      <v-slide-x-transition >

        <login-form
            class="form__margin"
            v-if="isShowLoginForm"
            @registerClick="toggleForms"
        />

      </v-slide-x-transition>

  </v-container>
</template>
<script>
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

export default {
  components: {
    LoginForm,
    RegisterForm
  },

  data: () => ({
    isShowRegisterForm: true,
    isShowLoginForm: false,
  }),
  methods: {
    toggleForms() {

      if(this.isShowRegisterForm) {
        this.isShowRegisterForm = false;
        setTimeout(() => this.isShowLoginForm = true, 300)
      }

      if(this.isShowLoginForm) {
        this.isShowLoginForm = false;
        setTimeout(() => this.isShowRegisterForm = true, 300)
      }

    }
  }
}
</script>
<style scoped>
.form__margin {
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
}
</style>