<template>
  <div>
    <h1>Welcome to Profile Page</h1>
  </div>
</template>

<script>
import apiHelpers from "~/mixins/apiHelpers";
import { mapState } from "vuex";

export default {
  name: "Profile",
  middleware: 'auth',
  computed: {
    ...mapState(["authData"]),
  },
  mounted() {
    const token = this.authData.token;
    console.log("Token:", token);
    this.getProfile(token);
  },
  methods: {
    async getProfile(token) {
      try {
        const response = await this.$axios.$get(
          "/api/user/profile",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log("Profile:", response);
      } catch (err) {
        console.log("Error:", err);
      }
    },
  },
};
</script>