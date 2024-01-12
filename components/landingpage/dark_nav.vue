<template>
  <div>
  <b-navbar class="dark-navbar fixed-top" style="background-color: #121926;" toggleable="lg" type="dark">
      <div class="logo-container">
          <b-navbar-brand class="logo-img">
              <nuxt-link to="/">
              <img src="~/assets/img/cda_white.png" />
              </nuxt-link>
          </b-navbar-brand>
          <b-navbar-brand class="logo-img-2">
              <nuxt-link to="/">
              <img src="~/assets/img/swp_white.png" />
              </nuxt-link>
          </b-navbar-brand>
          </div>
          <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
          <b-collapse id="navbar-collapse" is-nav>
          <b-navbar-nav class="dark-navbar-nav">
              <b-nav-item-dropdown text="Academy" left>
                  <b-dropdown-item class="border-bottom dropdown-item" href="#">Belajar Online</b-dropdown-item>
                  <b-dropdown-item class="dropdown-item border-bottom" href="#">
                  <div class="live-class-container">
                      Live Class
                      <img src="~/assets/img/signal-live-class.svg" class="signal-live-class" alt="Signal Live Class">
                  </div>
                  </b-dropdown-item>
                  <b-dropdown-item class="border-bottom dropdown-item" href="#">Corporate Training</b-dropdown-item>
                  <b-dropdown-item class="dropdown-item" href="#">Cybersecurity Culture</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item>
                  <nuxt-link to="/cybersecuritylabs">
                  Cybersecurity Labs
                  </nuxt-link>
              </b-nav-item>
              <b-nav-item>
                  <nuxt-link to="/jobs">
                  Jobs
                  </nuxt-link>
              </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="button-container ml-auto">
              <b-button class="masuk-btn-dark mt-sm-1 mr-sm-2">Masuk</b-button>
              <b-button class="daftar-btn-dark mt-sm-1 mr-sm-2">Daftar</b-button>
              </b-navbar-nav>
          </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {}
</script>


<style>
.dark-navbar {
background-color: #121926;

}

.logo-img {
height: 75px;
width: 180px;
margin-left: 10px;
}

.logo-img-2 {
  height: 40px;
  width: 120px;
  margin: 15px 20px 0px 0px;
}

.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 100px;
}

.navbar-collapse {
  padding: 10px;
}

.dark-navbar .dark-navbar-nav .nav-link {
  color: white;
}

.dark-navbar .dark-navbar-nav .nav-link:hover {
  color: #195bff;
}

.nav-item a {
  color: white;
}

.dropdown-item a {
  color: black;
  font-size: 15px;
}

/* .nav-item a:hover {
color: #195bff;
} */

.masuk-btn-light:hover {
background: #154FE3;
color: white;
}

.masuk-btn-dark {
color: #154FE3;
background-color: white;
border: none;
padding: 8px 22px;
font-size: 16px;
text-decoration: none;
font-weight: 600;
margin-top: 0px;
}

.masuk-btn-dark:hover {
color: white;
background-color: #154FE3;
}

.daftar-btn-dark {
background: #154FE3;
border-radius: 5px;
border: none;
color: white;
text-decoration: none;
outline: none;
padding: 8px 22px;
font-size: 16px;
font-weight: 600;
}

.daftar-btn-dark:hover {
background-color: #154FE3;
}

@media  (min-width: 500px) {
.logo-img {
  height: 65px;
  width: 150px;
}

.logo-img-2 {
  height: 37px;
  width: 80px;
  margin: 15px 20px 0px 0px;
}

.logo-container {
  margin-top: 10px;
  margin-left: 10px;
}

.navbar-collapse {
  margin-top: -10px;
}

.navbar-dark .navbar-toggler {
  margin-top: -10px;
  margin-right: 10px;
}

.button-container {
  margin-top: 20px;
  gap: 10px;
}
}

@media (min-width: 768px) {  
.logo-img {
  height: 65px;
  width: 160px;
}
}

@media (min-width: 992px) {
.dark-navbar {
  width: 100%;
  height: 100px;
}

.dark-navbar-nav {
  margin-left: 200px;
}

.logo-container {
  margin-top: 30px;
}

  .button-container {
    margin-right: 150px;
  }
}
</style>