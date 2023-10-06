export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cyberacademy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', 
      //   href: 'https://cdn.jsdelivr.net/npm/@ajusa/lit@latest/dist/lit.css'
      // },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;700&family=Nunito+Sans:wght@300&display=swap',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [ '~/assets/css/main.css','aos/dist/aos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "@/services/get-access-token", mode: "client" },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/vuetify',
  ],
  env: {
      API_URL: process.env.API_URL || 'https://api-dev.cyberwarrior.id'
  },
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt', 
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  auth: {
    watchLoggedIn: false,
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/login",
      home: "/",
    },
    localStorage: {
      prefix: "auth."
    },
    token: {
      prefix: "_token.", 
    },
    strategies: {
      local: {
        scheme: "local",
        token: {
          property: "token",
          maxAge: 172800,
          type: 'Bearer',
          required: true,
        },
        user: {
          property: "data",
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/login", method: "post", propertyName: 'token'},
          logout: { url: "/api/logout", method: "get"},
          user: { url: "/api/user/profile", method: "get", propertyName: 'user'},
        },
          globalToken: true,
          autoFetchUser: true
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
  },
  router: {
    middleware: ['auth'],
    extendRoutes(routes, resolve) {
      routes.push({
          name: 'homepage-user',
          path: '/homepage',
          component: resolve(__dirname, 'pages/homepage.vue'),
        });
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['aos'],
  },
}
