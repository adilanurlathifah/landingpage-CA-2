<template>
  <div class="profile">
    <h1>Welcome to Profile Page</h1>
    <div class="button">
      <v-btn @click="logout" style="text-transform: capitalize;" class="daftar-button" text to="/login">Logout</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$auth.logout({
        redirect: {
          name: 'login'
        }
      })
    }
  }
}
</script>
<style>
.profile h1 {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}

.button {
  display: flex;
  margin-left: auto;
  margin-right: 0px;
  align-items: center;
}
</style>