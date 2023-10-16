<template>
  <div>
    <b-navbar toggleable="lg" class="custom-navbar justify-content-start">
      <nuxt-link to="/">
        <img class="logo-img" src="logo.png" alt="Logo" />
      </nuxt-link>
      <b-navbar-toggle target="nav-collapse" class="w-100"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="container-navbar-item d-flex">
          <b-nav-item-dropdown class="navbar-item" text="Academy">
            <b-dropdown-item class="li-1" href="#">Belajar Online</b-dropdown-item>
            <b-dropdown-item class="li-2" href="#">Live Class</b-dropdown-item>
            <b-dropdown-item class="li-3" href="#">Corporate Training</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item class="ml-auto">
            <nuxt-link class="navbar-item-2" to="/cybersecuritylabs"
              >Cybersecurity Lab</nuxt-link
            >
          </b-nav-item>
        </b-navbar-nav>
        
        <div class="button">
            <v-btn style="text-transform: capitalize;" class="masuk-button" text to="/login">Masuk</v-btn>
            <v-btn style="text-transform: capitalize;" class="daftar-button" text to="/register">Daftar</v-btn>
        </div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custom-navbar {
  width: 110%; 
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #2c3e50;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  margin-left: -50px;
}

.logo-img {
  width: 140px;
  height: 50px;
  margin-left: 100px;
}

.button {
  display: flex;
  margin-left: auto;
  margin-right: 160px;
  align-items: center;
}

.button .masuk-button {
  color: #004ecb;
  background-color: white;
  outline: 1px solid #2070f2;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  padding: 8px 22px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 0px;
}

.button .daftar-button {
  background: #004ecb;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  margin-left: 30px;
  padding: 8px 22px;
  font-size: 14px;
  font-weight: 600;
}

.button .masuk-button:hover {
  background: #0687ff;
  color: white;
}

.button .daftar-button:hover {
  background: #0687ff;
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-left: 20px;
  margin-right: 20px;
  float: none;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #215ab5;
}

.navbar-item-2 {
  margin-top: 7px;
}
.navbar-item .li-1,
.li-2,
.li-3 {
  font-size: 13px;
  padding: 4px;
}

.navbar-item .li-1,
.li-2 {
  border-bottom: 0.5px solid #d8d8d8;
}

.nav-link a {
  color: black;
  font-size: 15px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 20px;
  text-decoration: none;
}

.nav-link a:hover {
  color: #215ab5;
}

.b-dropdown-menu {
  background-color: white;
}

.b-dropdown-menu.is-open {
  border: none; 
}

@media screen and (max-width: 991px) {
  .custom-navbar {
    flex-direction: column;
    height: auto;
  }

  .justify-content-start {
    justify-content: flex-start;
  }

  .navbar-item {
    margin-top: 10px;
  }

  .ml-auto .navbar-item-2 {
    margin: 0px 35px;
  }

  .navbar-item-dropdown .navbar-item-dropdown-toggle {
    display: block !important;
  }

  .navbar-item-dropdown .b-dropdown-form {
    display: none !important;
  }

  .navbar-item-dropdown .b-dropdown-group {
    display: block !important;
  }

  .logo-img {
    margin-left: 5px;
    margin-right: auto;
  }

  .button {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .masuk-button,
  .daftar-button {
    width: 100%;
    max-width: 300px;
    margin: 10px 30px;
  }
  .d-flex {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .d-flex .navbar-item-dropdown {
    margin-right: auto;
  }

}

@media screen and (min-width: 992px) {
  .custom-navbar {
    flex-direction: row;
    height: 80px;
  }

  .navbar-item-2 {
    margin-left: -20px;
    margin-right: 20px;
  }

  .button {
    justify-content: center;
    align-items: center;
  }
}
</style>