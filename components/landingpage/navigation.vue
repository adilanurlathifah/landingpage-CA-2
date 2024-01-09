<template>
  <div class="fixed-top">
    <b-navbar toggleable="lg">
      <div class="navbar container">
        <div class="logo-container">
          <nuxt-link to="/">
            <b-navbar-brand>
              <img class="logo-img" :src="showLogoCda ? require('~/assets/img/cda.png') : require('~/assets/img/cda_white.png')" alt="CDA Logo">
            </b-navbar-brand>
          </nuxt-link>
          <b-navbar-brand>
            <img class="logo-img-2" :src="showSwp ? require('~/assets/img/swp.png') : require('~/assets/img/swp_white.png')" alt="CDA Logo">
          </b-navbar-brand>
        </div>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse class="nav-collapse" id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Academy" left>
            <b-dropdown-item class="border-bottom" href="#">Belajar Online</b-dropdown-item>
            <b-dropdown-item class="border-bottom" href="#">
              <div class="live-class-container">
                Live Class
                <img src="~/assets/img/signal-live-class.svg" class="signal-live-class" alt="Signal Live Class">
              </div>
            </b-dropdown-item>
            <b-dropdown-item class="border-bottom" href="#">Corporate Training</b-dropdown-item>
            <b-dropdown-item href="#">Cybersecurity Culture</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-nav>
            <nuxt-link to="/cybersecuritylabs">
              <b-nav-item>Cybersecurity Lab</b-nav-item>
            </nuxt-link>
            <nuxt-link to="/jobs">
              <b-nav-item>Jobs</b-nav-item>
            </nuxt-link>
          </b-navbar-nav>
        </b-navbar-nav>
        <div class="button-container">
            <ThemeButton style="margin-top: 20px; margin-right: 50px;"/>
            <b-button class="masuk-button">Masuk</b-button>
            <b-button class="daftar-button">Daftar</b-button>
        </div>
      </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import ThemeButton from '~/components/theme_button.vue';

export default {
  components: { ThemeButton },
  props: {
      showLogoCda: {
        type: Boolean,
        default: true,
      },
      showSwp: {
        type: Boolean,
        default: true,
      }
  },
};
</script>

<style>
.logo-img {
  width: 140px;
  height: 100%;
}

.logo-container {
    height: 80px;
    width: 150px;
    object-fit: contain;
}

.navbar {
  background-color: var(--additional-color);
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
}

.navbar-light .navbar-toggler {
  margin-top: -20px;
}

a:hover {
  text-decoration: none;
}

.navbar-light .navbar-nav .nav-link {
  color: var(--text-color-4);
  font-weight: 600;
  margin-top: 14px;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: var(--accent-color-2);
}

.masuk-button {
  color: var(--btn-color);
  background-color: transparent;
  outline: 1px solid var(--btn-color);
  padding: 8px 22px;
  font-size: 14px;
  text-decoration: none;
  font-weight: 600;
}

.daftar-button {
  background: var(--btn-color);
  border-radius: 5px;
  color: var(--text-color-2);
  text-decoration: none;
  outline: none;
  padding: 8px 22px;
  font-size: 14px;
  font-weight: 600;
}

.masuk-button:hover {
  background: var(--btn-color);
  color: var(--text-color-2);
}

.daftar-button:hover {
  background: var(--btn-color);
  color: var(--text-color-2);
}

.live-class-container {
  display: flex;
  align-items: center;
}

.signal-live-class {
  width: 13px; 
  height: 13px; 
  margin-left: 3px;
  object-fit: contain;
}

/* small */
@media  (min-width: 500px) {
  .logo-img-2 {
    height: 30px;
    width: 120px;
    margin-right: 20px;
    margin-top: 10px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: top;
  }

  .nav-collapse {
    background-color: var(--bg-cda);
    margin-top: -20px;
    z-index: 2;
    padding: 20px;
    margin-right: 10px;
  }
}

/* medium */
@media (min-width: 768px) {  
  .logo-img-2 {
    height: 30px;
    width: 120px;
    margin-right: 20px;
    margin-top: 10px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    align-items: top;
  }

  .nav-collapse {
    background-color: var(--bg-cda);
    z-index: 2;
    padding: 20px;
    margin-right: 10px;
  }

  .dropdown-item {
    padding: 10px;
    font-size: small;
  }

  .navbar-nav .nav-link {
    font-size: 15px;
    line-height: 25px;
  }

  .button-container {
    display: flex;
    flex-direction: column;
  }

  .masuk-button {
    margin: 10px 0px 10px; 
  }
  .daftar-button {
    margin: 10px 0px 10px;  
  }
}

/* large */
@media (min-width: 992px) {
  .logo-img-2 {
    height: 30px;
    width: 120px;
    margin-right: 20px;
  }

  .logo-container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: top;
    margin-top: 10px;
    margin-left: 90px;
  }

  /* .navbar .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: -5px;
    margin-left: 60px;
  } */

  .button-container {
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    /* margin-top: 15px; */
  }

  .daftar-button {
    margin-left: 30px;
  }

  .nav-collapse {
    font-size: 15px;
    margin-right: 20px;
    margin-top: -17px;
    margin-left: 150px;
    justify-content: space-between;
  }

  .dropdown-item {
    padding: 10px;
    font-size: small;
    margin-left: 5px;
    margin-right: 10px;
  }
}
</style>