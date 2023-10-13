export default {
  computed: {
    role() {
      return "local";
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
      const token = this.$auth.strategy.token.get();
      console.log("Token:", token);
      return {
        headers: { Authorization: token },
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
