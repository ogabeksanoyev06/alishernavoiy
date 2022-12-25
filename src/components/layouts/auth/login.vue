<template>
  <div class="auth__body auth__form mb-30"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "login",
  components: {},
  data() {
    return {
      request: {
        login: "",
        password: "",
        client_id: 1,
      },
      errorMes: "",
      authError: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions([]),
  },
  mounted() {},
};
</script>

<style scoped></style>
