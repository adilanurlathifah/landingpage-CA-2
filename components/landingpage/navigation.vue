<template>
<div>
  <b-navbar class="light-navbar fixed-top" toggleable="lg" type="light">
    <div class="navbar-collapsed">
      <div class="logo-container">
      <b-navbar-brand class="logo-img">
        <nuxt-link to="/">
          <img src="~/assets/img/cda.png" />
        </nuxt-link>
        </b-navbar-brand>
        <b-navbar-brand class="logo-img-2">
            <nuxt-link to="/">
              <img src="~/assets/img/swp.png" />
            </nuxt-link>
        </b-navbar-brand>
        </div>
        <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
      </div>
    <b-collapse id="navbar-collapse" is-nav>
      <b-navbar-nav class="light-navbar-nav">
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
          <b-button class="masuk-btn mt-sm-1 mr-sm-2">Masuk</b-button>
          <b-button class="daftar-btn mt-sm-1 mr-sm-2">Daftar</b-button>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {}
</script>


<style>
.light-navbar {
  background-color: #FFFFFF;
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
}

.signal-live-class {
  width: 13px; 
  height: 13px; 
  margin-left: 3px;
  margin-top: 5px;
  object-fit: contain;
}

.live-class-container {
  display: flex;
  flex-direction: row;
}

.light-navbar-nav {
  padding: 10px;
}

.navbar-light .light-navbar-nav .nav-link {
  color: black;
  font-weight: 600;
}

.navbar-light .light-navbar-nav .nav-link:hover {
  color: #183ebc;
}

.nav-item a {
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
}

.dropdown-item a {
    color: black;
    font-size: 15px;
}

.light-navbar-nav .nav-item a {
  color: black;
}

.nav-item a:hover {
  color: #183ebc;
}

.masuk-btn {
  color: #183ebc;
  background-color: transparent;
  outline: 1px solid #3260f7;
  padding: 8px 22px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
}

.daftar-btn {
  color: white;
  background-color: #183ebc;
  padding: 8px 22px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
}

.masuk-btn:hover {
  background: #2c54d7;
  color: white;
}

.daftar-btn:hover {
  background: #3f67eb;
  color: white;
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

  .navbar-dark .navbar-toggler {
    margin-top: -10px;
    margin-right: 10px;
  }

  /* .button-container {
    padding: 10px;
  } */
  
}

@media (min-width: 768px) {  
  .logo-img {
    height: 65px;
    width: 160px;
  }
}

@media (min-width: 992px) {
  .light-navbar {
    width: 100%;
    height: 100px;
    margin-left: 20px;
  }

  .light-navbar-nav {
    margin-left: 200px;
  }

  .logo-container {
    margin-top: 30px;
    margin-left: 100px;
  }

  .button-container {
    margin-right: 150px;
  }
}
</style>