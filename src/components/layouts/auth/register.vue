<template>
  <div class="auth__body auth__form mb-30"></div>
</template>

<script>
export default {
  name: "register",
  components: {},
  data() {
    return {
      form: {
        lastName: "",
        firstName: "",
        telefon: null,
        login: "",
        password: "",
        passwordConfirmation: "",
      },
      passwordField: false,
      passwordConfirmationField: false,
    };
  },
  methods: {},
};
</script>

<style scoped></style>
