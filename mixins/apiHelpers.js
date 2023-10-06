export default {
    methods: {
      getCsrf(successHandler, failHandler) {
        this.$http
          .get("/sanctum/csrf-cookie")
          .then(successHandler.bind(this))
          .catch(failHandler);
      },
      getHeaderAuth() {
        const token = this.$auth.strategy.token.get();
        return token ? { headers: { Authorization: token } } : {};
      },
      getTokenAuth() {
          const token = this.$auth.strategy.token.get();
          return token || '';
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