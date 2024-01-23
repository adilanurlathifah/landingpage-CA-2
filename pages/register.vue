<template>
    <div>
      <Nav :is-dark-mode="false"/>
      <v-form class="form-input card" v-model="valid">
          <h5 class="register-title">Daftar Akun Member</h5>
          <button type="button" class="btn-google">
              <span class="btn-google-logo">
                <img src="~/assets/img/ic_google.png" width="20px" height="20px" />
              </span>
              <span style="font-size: 12px; font-weight: 600;">Masuk dengan Google</span>
          </button>
          <div class="flex-container mt-4">
              <span class="flex-item" style="font-size: 12px; margin-top: -10px; margin-bottom: 10px;">Atau</span>
          </div>
          <div class="register-group">
            <div class="regis-gp"></div>
            <label for="name" style="font-size: 13px;">Daftar Selain Email Google</label>
              
              <v-text-field
                dense
                outlined
                outlined-dense
                placeholder="Masukkan Nama Lengkap Kamu"
                style="font-size: 12px"
              ></v-text-field>
              <v-text-field
                dense
                outlined
                outlined-dense
                placeholder="Masukkan Alamat Email Kamu"
                style="font-size: 12px; margin-top: -10px;"
              ></v-text-field>
  
          </div>
          <button @click="submit" style="font-size: 12px;" class="masuk-button-2">Daftar Member</button>
            <p class="daftar-title" style="text-align: left;">
              Dengan Mendaftar Member, Saya telah menyetujui 
              <a style="font-size: 10px;" href="/">Syarat dan Ketentuan</a>
              serta <a style="font-size: 10px;" href="/">Kebijakan Privasi</a>
            </p>
            <p class="daftar-title" style="margin-top: -10px;">
              Sudah punya akun?
            <a style="font-size: 10px;" href="/login">Masuk Sekarang</a>
            </p>
      </v-form>
    </div>
</template>
  
<script>
 import Footer from "~/components/landingpage/Footer.vue";
 import Nav from '~/components/landingpage/Nav.vue';
  
  export default {
    auth: false,
    components: { Nav, Footer },
    data() {
      return {
      };
    },
  };
</script>
  
<style scoped>
  .form-input.card {
    width: 360px;
    height: 410px;
    background-color: #ffffff;
    border-color: #2839bc;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin: 50px auto;
    margin-top: 130px;
    padding: 20px;
  }
  
  .form-input.card .register {
    display: flex;
    flex-direction: column;
  }
  
  .form-input.card a {
    text-decoration: none;
    color: #2839bc;
    font-size: 12px;
    margin-top: 10px;
  }
  .register-title {
    text-align: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
  
  
  .regis-gp .name-input,
  .email-input {
    position: relative;
  }
  
  .password-input svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }
  
  .name-input input[type="text"] {
    width: 100%;
    padding-left: 10px;
  }
  
  .email-input input[type="email"]{
    width: 100%;
  }
  
  .password-input svg {
    position: absolute;
    top: 50%;
    right: 10px;
    cursor: pointer;
    z-index: 1;
  }
  
  .masuk-button-2 {
    background: #004ecb;
    border-radius: 5px;
    border-color: transparent;
    color: white;
    text-decoration: none;
    position: relative;
    padding: 8px 22px;
    font-size: 12px;
    margin-left: 1px;
    font-weight: 600;
    margin-top: -10px;
  }
  
  .masuk-button-2:hover {
    background: #0687ff;
    color: white;
  }
  
  .btn-google {
    background: #ffffff;
    border-radius: 5px;
    border: black 0.5px solid;
    text-decoration: none;
    position: relative;
    padding: 8px 22px;
    margin-left: 1px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
  
  .daftar-title {
    text-align: center;
    margin-top: 10px;
    font-size: 10px;
  }
  
  .flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .flex-item {
    margin-top: 10px;
  }
  
  .control .button {
    width: 50px;
    height: 70px;
    background-color: white;
    cursor: pointer;
  }
  
</style>