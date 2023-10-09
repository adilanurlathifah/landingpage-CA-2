<template>
  <div>
    <h1>Welcome to Profile Page</h1>
  </div>
</template>

<script>
import apiHelpers from "~/mixins/apiHelpers";
export default {
  middleware: 'auth',
  mixins: [apiHelpers],
  mounted() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      try {
        const response = await this.$axios.$get(
          "/api/user/profile",
          this.getHeaderAuth()
        );
        this.$auth.setUser(response.data);
      } catch (error) {
        this.$message.error("Internal Server Error");
      }
    },
  },
}
</script>