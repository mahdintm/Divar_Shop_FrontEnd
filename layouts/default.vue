<template>
  <div v-if="auth" lang="fa">
    <div class="loading-page" v-if="loading">
      <p>Loading...</p>
    </div>
    <div v-if="!isMobile" class="D_Wrapper">
      <NavBar_PC></NavBar_PC>
      <SideBar_PC></SideBar_PC>
      <nuxt />
    </div>
  </div>
</template>
<script>
import NavBar_PC from '~/components/pc/navbar.vue'
import SideBar_PC from '~/components/pc/sidebar.vue'
import NavBar_Mobile from '~/components/mobile/navbar.vue'
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.lordicon.com/qjzruarw.js',
          body: true,
          async: true,
        },
      ],
    }
  },
  data() {
    return {
      isMobile: false,
      posts: '',
      auth: false,
      loading: false,
      login_check_interval: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
  components: {
    NavBar_PC,
    SideBar_PC,
    NavBar_Mobile,
  },
  async mounted() {
    async function check_login(app) {
      const response = await fetch(
        `http://${process.env.server_URL}/account/user`,
        {
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        }
      )
      const content = await response.json()
      if (content.auth == false) {
        app.auth = false
        await app.$router.push('/login')
      } else {
        app.auth = true
      }
    }
    this.$nuxt.$on('logout', async () => {
      console.log('event')
      await fetch(`http://${process.env.server_URL}/account/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      $nuxt.$off('logout')
      await this.$router.push('/login')
      window.location.reload(true)
    })
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

    check_login(this)
    setInterval(async () => {
      if (this.auth) {
        await check_login(this)
      }
    }, 5000)
  },
}
</script>

<style>
@import url(@/static/css/main.css);
@import url(@/static/css/responsive.css);

.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
}

* {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

a {
  text-decoration: none !important;
}
</style>
