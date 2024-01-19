<template>
  <div>
    <b-navbar  class="light-nav fixed-top" toggleable="lg" type="light" variant="light">
      <div class="logo-container" style="float: left;">
        <nuxt-link to="/">
          <div id="logo">
            <img src="~/assets/img/cda.png" width="145px"/>
          </div>
        </nuxt-link>
        <div id="logo">
          <img src="~/assets/img/swp.png" width="115px"/>
        </div>
      </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mr-auto">
          <b-nav-item-dropdown text="Academy" left>
            <b-dropdown-item class="border-bottom dropdown-item" href="#">Belajar Online</b-dropdown-item>
            <b-dropdown-item class="dropdown-item border-bottom" href="#">
              <div class="live-class-container">
                  Live Class
                  <img src="~/assets/img/signal-live-class.svg" class="signal-live-class" alt="Signal Live Class">
              </div>
            </b-dropdown-item>
            <b-dropdown-item class="dropdown-item border-bottom" href="#">Corporate Training</b-dropdown-item>
            <b-dropdown-item class="dropdown-item" href="#">Cybersecurity Culture</b-dropdown-item>
          </b-nav-item-dropdown>
          <div class="nav-list">
            <ul style="list-style-type: none;">
              <li>
                <nuxt-link to="/cybersecuritylabs">
                  Cybersecurity Labs
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/jobs">
                  Jobs
                </nuxt-link>
              </li>
            </ul>
          </div>
          <b-navbar-nav class="button-container">
            <nuxt-link to="/login">
              <b-button class="masuk-btn mt-sm-1 mr-sm-2">
                  Masuk
              </b-button>
            </nuxt-link>
            <nuxt-link to="/register">
              <b-button class="daftar-btn mt-sm-1 mr-sm-2">
                  Daftar
              </b-button>
            </nuxt-link>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
.logo-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.signal-live-class {
  width: 13px; 
  height: 13px; 
  margin-left: 3px;
  object-fit: contain;
}

#nav-collapse {
   text-decoration: none;
   font-size: 1rem;
   font-weight: 500;
   color: black;
}

.light-nav, .bg-light {
  background-color: white !important;
}

.navbar-light .navbar-nav .nav-link {
  color: black;
  font-weight: 600;
}

.dropdown-item {
  padding: 5px 10px;
}

.nav-list li a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #1239B5;
  font-weight: 600;
}

.nav-list li a:hover {
  color: #1239B5;
}

.masuk-btn {
  width: 100%;
  color: #0176E0;
  background-color: transparent;
  outline: 0.5px solid #0176E0;
  border: none;
  padding: 8px 22px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
}

.daftar-btn {
  width: 100%;
  color: white;
  background-color: #183ebc;
  padding: 8px 22px;
  font-size: 16px;
  border: none;
  text-decoration: none;
  margin-top: 10px;
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

.button-container {
  gap: 20px;
}

@media screen and (max-width: 600px) {
  .logo-container {
    margin: 10px 0px 0px 0px;
  }
}

@media screen and (max-width: 992px) {
  #nav-collapse {
    padding-top: 20px;
  }

  .navbar-light .navbar-nav .nav-link {
    margin-bottom: 15px;
  }
  .nav-list li {
    margin-bottom: 20px;
  }
  .button-container {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media screen and (min-width: 992px) {
  .light-nav {
    padding-left: 50px;
    height: 80px;
  }

  #nav-collapse {
    margin: 10px 0px 0px 100px;
  }

  .nav-list ul {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-top: 8px;
    margin-right: 30px;
  }

  .logo-container {
    margin-top: 10px;
    padding-left: 60px;
  }

  .navbar-light .navbar-nav .nav-link {
    margin-left: 100px;
    margin-right: 30px;
  }
}

@media screen and (min-width: 1024px) {
  .logo-container {
    margin-left: 10px;
  } 

  .button-container {
    margin-left: 70px;
  }
}

@media screen and (min-width: 1440px) {
  .button-container {
    margin-left: 150px;
  }
}
</style>