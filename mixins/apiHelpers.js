export default {
  computed: {
    role() {
      return "local1";
    },
  },
  methods: {
    getCsrf(successHandler, failHandler) {
      this.$http
        .get("/sanctum/csrf-cookie")
        .then(successHandler.bind(this))
        .catch(failHandler);
    },
    getHeaderAuth() {
      return {
        headers: { Authorization: this.$auth.strategy.token.get() },
      };
    },
    getTokenAuth() {
      return this.$auth.strategy.token.get();
    },
    getMultipartHeaderAuth() {
      return {
        headers: {
          Authorization: this.$auth.strategy.token.get(),
          "Content-Type": "multipart/form-data",
        },
      };
    },
  },
};
