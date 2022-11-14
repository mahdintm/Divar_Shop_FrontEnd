<template>
  <div>
    <div v-if="auth" lang="fa">
      <div class="loading-page" v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-if="!isMobile" class="D_Wrapper">
        <NavBar_PC></NavBar_PC>
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar_PC from '~/components/pc/navbar.vue'
import NavBar_Mobile from '~/components/mobile/navbar.vue'

export default {
  components: {
    NavBar_PC,
    NavBar_Mobile,
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/apexcharts',
          body: true,
          async: true,
        },
        {
          src: 'https://cdn.lordicon.com/qjzruarw.js',
          body: true,
          async: true,
        },
      ],
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
  data() {
    return {
      isMobile: false,
      posts: '',
      auth: false,
      loading: false,
      login_check_interval: false,
    }
  },
  mounted() {
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
@import url(@/static/css/header.css);
@import url(@/static/css/sideBarAdmin.css);
@import url(@/static/css/adminPage.css);
a {
  text-decoration: none !important;
}
* {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
</style>
