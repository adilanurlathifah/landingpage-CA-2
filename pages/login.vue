<template>
  <div>
    <Navigation />
    <v-form ref="form" class="form-input card" @submit="handleSubmit" :form="form">
      <h5 class="login-title">Masuk Akun Member</h5>
      <div class="login-group">
        <label class="text-subtitle-1 text-medium-emphasis" style="font-size: 12px">
          Email
        </label>
        <v-text-field
          dense
          outlined
          outlined-dense
          style="font-size: 12px"
          placeholder="Masukkan Alamat Email Kamu"
          type="email"
          v-model="auth.email"
          :rules="auth.emailRules"
        ></v-text-field>
        <label
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          style="font-size: 12px; margin-top: -10px;"
        >
          Password
        </label>
        <v-text-field
          dense
          outlined
          outlined-dense
          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show2 ? 'text' : 'password'"
          style="font-size: 12px"
          @click:append="show2 = !show2"
          placeholder="Masukkan Password Kamu"
          v-model="auth.password"
          :rules="auth.passwordRules"
        ></v-text-field>
      </div>
      <button htmlType="submit" style="font-size: 12px;" class="masuk-button-2">
        Masuk
      </button>
      <a href="#">Lupa Password?</a>
      <div class="flex-container mt-4">
        <span
          class="flex-item"
          style="font-size: 12px; margin-top: -20px; margin-bottom: 10px;"
          >Atau</span
        >
      </div>
      <button type="button" class="btn-google">
        <span class="btn-google-logo">
          <img src="~/assets/ic_google.png" width="20px" height="20px" />
        </span>
        <span style="font-size: 12px; font-weight: 600; margin-left: 10px;"
          >Masuk dengan Google</span
        >
      </button>
      <p class="daftar-title">
        Belum punya akun? <a style="font-size: 10px;" href="/register">Ayo Daftar</a>
      </p>
    </v-form>
    <Footer :showFooterTop="false" />
  </div>
</template>

<script>
import Navigation from "~/components/landingpage/navigation.vue";
import apiHelpers from "~/mixins/apiHelpers";

export default {
  mixins: [apiHelpers],
  components: {
    Navigation,
  },
  props: {
    showLogin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show2: false,
      auth: {
        email: "",
        password: "",
        token: "",
        // emailRules: [
        //   (v) => !!v || "field is required",
        //   (v) => /.+@.+/.test(v) || "email must be valid format",
        // ],
        // passwordRules: [(v) => !!v || "field is required"],
      },
      form: null,
    };
  },
  mounted() {
    this.form = this.$refs.form;
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const form = this.$refs.form;
      if (form.validate()) {
        const url = "/api/login";
        const data = { 
          ...this.auth,
        };
        this.postData(data, url);
      }
    },
    async postData(data, url) {
      try {
        const tokenResponse = await this.$getToken(url);
        if (tokenResponse.status) {
          const token = tokenResponse.data.token;
          const loginData = {...data, token }; 
          const login = await this.$auth.loginWith('local', {
            data: loginData,
          });
          const response = login.data;
          if (response.success) {
           const tokenLogin = response.data.token;
            this.setProfile(tokenLogin);
          } else {
            this.$message.error(response.message);
          }
        } else {
          this.$message.error(tokenResponse.message);
        }
      } catch (err) {
        alert('something went wrong, please try again.');
      }
    },
    async setProfile(token) {
      try {
        const response = await this.$auth.setUserToken(token);
        console.log(this.$auth.strategy.token.get());
        if (response.data.success) {
            this.$router.push("/profile");
          } else {
            this.$router.push("/homepage");
          }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          alert("This set from Login.vue");
        } else if (err.response && err.response.status === 500) {
          alert("Internal server error. Please try again later.");
        } else {
          alert("Something went wrong. Please try again later.");
        }
      }
    },
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

.form-input.card .login {
  display: flex;
  flex-direction: column;
}

.form-input.card a {
  text-decoration: none;
  color: #2839bc;
  font-size: 12px;
  margin-top: 10px;
}

.login-title {
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
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

.email-input input[type="email"] {
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