export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // or
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter(el) {
      //      console.log('Before enter...')
    },
  },
  server: {
    host: 'localhost',
    port: '3000', // optional
  },
  ssr: false,
  env: {
    server_URL: 'https://shop-backend.agahpardazan.ir',
    // server_URL: 'http://localhost:3001',
    server_cdn_URL: 'https://shop-cdn.agahpardazan.ir',
    // server_cdn_URL: 'http://localhost:3002',
  },
  loading: {
    color: '#a7211b',
    height: '5px',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Divar Shop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/static/js/fontawesome.min.js',
    '@/static/js/duotone.min.js',
    { src: '~/plugins/apex-chart.js', mode: 'client' },
    // { src: '~/plugins/chart.js', mode: 'client' },
    // { src: '~/plugins/axios.js' },
  ],
  fontawesome: {
    icons: {
      solid: true,
      // brands: true,
    },
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/fontawesome'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: { fileName: 'icon.png' },
    manifest: {
      lang: 'fa',
    },
    title: 'Divar Shop',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
