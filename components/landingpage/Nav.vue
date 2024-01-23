<template>
    <div>
        <div v-if="isDarkMode">
          <b-navbar class="dark-nav d-flex fixed-top" toggleable="lg" type="dark" variant="dark">
            <div class="logo-container" style="float: left;">
                <nuxt-link to="/">
                <div>
                    <img class="logoCda" src="~/assets/img/cda_white.png"/>
                </div>
                </nuxt-link>
                <div>
                    <img class="logoSwp" src="~/assets/img/swp_white.png" width="115px"/>
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
                <div class="dark-nav-list">
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
              </b-navbar-nav>
                <b-navbar-nav class="button-container ml-auto">
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
            </b-collapse>
            </b-navbar>
        </div>
        <div v-else>
            <b-navbar class="light-nav d-flex fixed-top" toggleable="lg" type="light" variant="light">
                <div class="logo-container" style="float: left;">
                <nuxt-link to="/">
                    <div>
                        <img class="logoCda" src="~/assets/img/cda.png"/>
                    </div>
                </nuxt-link>
                <div>
                    <img class="logoSwp" src="~/assets/img/swp.png" width="115px"/>
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
                    <div class="light-nav-list">
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
                </b-navbar-nav>
                    <b-navbar-nav class="button-container ml-auto">
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
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>
  
<script>
export default {
  props: {
    isDarkMode: {
        type: Boolean,
        required: false,
        default: false
    }
  }
}
</script>

<style>
.logoCda {
  width: 150px;
}

.logoSwp {
  width: 130px;
}

.logo-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}

.live-class-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.signal-live-class {
  width: 13px; 
  height: 13px; 
  margin-left: 3px;
  object-fit: contain;
}

.dropdown-item {
  padding: 5px 10px;
}

.nav-list li a:hover {
  color: #1239B5;
}

.button-container {
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end; 
  padding: 0px;
}

.light-nav-list li a:hover {
  color: #0e2f9b !important;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #0e2f9b !important;
  font-weight: 600;
}

#nav-collapse {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    padding: 20px;
    line-height: 2.5rem;
    color: black;
}

.masuk-btn {
  width: 100%;
  color: #0176E0;
  background-color: white;
  outline: 0.5px solid #0176E0;
  border: none;
  padding: 8px 22px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
}

.masuk-btn:hover {
  background: #2c54d7;
  color: white;
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

.daftar-btn:hover {
  background: #3f67eb;
  color: white;
}

/* light mode */

.light-nav, .bg-light {
  background-color: white !important;
}

.navbar-light .navbar-nav .nav-link {
  color: black;
  font-weight: 600;
}

.light-nav-list li a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.navbar-light .navbar-nav .nav-link {
  color: black;
}

.light-nav-list li a {
  font-weight: 600;
  text-decoration: none;
  color: black;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #3f67eb;
}

/* dark mode */
.dark-nav, .bg-dark {
  background-color: #121926 !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: black;
  font-weight: 600;
}

.dark-nav-list li a {
  text-decoration: none;
  color: black;
  font-weight: 600;
}

.dark-nav-list li a:hover {
  color: #3f67eb !important;
}

.navbar-dark .navbar-nav .nav-link:hover {
  color: #3f67eb !important;
  font-weight: 600;
}

.navbar-dark .navbar-nav .nav-link {
  color: white;
}

.dark-nav-list li a {
  font-weight: 600;
  text-decoration: none;
  color: white;
}

/* responsive */
/* sm */
@media screen and (max-width: 425px) {
  .light-nav, .dark-nav {
    padding-bottom: 10px;
  }
  
  .logoCda {
    width: 130px;
  }

  .logoSwp {
    width: 110px;
  }
  
  .logo-container {
    margin-left: -7px;
    margin-top: 0px;
    gap: 5px;
  }

  .navbar-toggler {
    padding: 0.2rem 0.5rem;
  }

  .navbar-toggler collapsed {
    margin: 10px 0px 0px 70px;
  }
  
  .button-container {
    margin-top: 20px;
  }

  .daftar-btn {
    margin-top: -5px;
  }
}
  
/* md */
@media screen and (min-width: 425px) { 
  .light-nav, .dark-nav {
    padding-bottom: 10px;
  }

  .logo-container {
    margin-left: -5px;
    margin-top: 5px;
    gap: 5px;
  }

  .button-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .daftar-btn {
    margin-top: 5px;
  }
}
  
/* lg */
@media screen and (min-width: 992px) {
  .light-nav, .dark-nav {
    padding-left: 50px;
    height: 80px;
    align-items: center;
    padding-bottom: 15px;
  }

  #nav-collapse {
    margin: 10px 0px 0px 60px;
  }

  .light-nav-list ul {
    display: -webkit-inline-box;
    gap: 25px;
    margin-top: 8px;
    margin-right: 30px;
  }

  .logo-container {
    margin-top: 10px;
    padding-left: 40px;
  }

  .navbar-light .navbar-nav .nav-link {
    margin-left: 100px;
    margin-right: 20px;
  }

  .button-container {
    position: sticky;
    right: 0;
    margin-top: 5px;
    margin-left: 30px;
  }

  .dark-nav-list ul {
    display: -webkit-inline-box;
    gap: 25px;
    margin-top: 8px;
    margin-right: 30px;
  }

  .navbar-dark .navbar-nav .nav-link {
    margin-left: 100px;
    margin-right: 20px;
  }
}

@media screen and (min-width: 1141px) {
  .button-container {
    padding-right: 100px;
  }
}
</style>