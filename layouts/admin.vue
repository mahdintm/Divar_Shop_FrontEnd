<template>
  <div>
    <div v-if="auth" lang="fa">
      <div class="loading-page" v-if="loading">
        <p>Loading...</p>
      </div>
      <div v-if="!isMobile" class="D_Wrapper">
        <NavBar_PC></NavBar_PC>
        <div class="D_AdminBox">
          <div class="HeaderBox"></div>
          <div class="AvatarBox"><img :src="myuser.profile ? myuser.profile : default_profile"  alt="" /></div>
          <div class="UserInfo">{{myuser.firstname||myuser.lastname?myuser.firstname&&myuser.lastname?`${myuser.firstname} ${myuser.lastname}`:myuser.firstname?myuser.firstname:myuser.lastname:myuser.email}}</div>
          <div class="RankInfoBox">ادمین</div>
          <nuxt-link to="/admin/sabt">
          <div class="AddAdvertisingBox">
            <span>ثبت آگهی</span>
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" :xmlns="'http://www.w3.org/2000/svg%22%3E'">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M25.3334 2.66663C27.5426 2.66663 29.3334 4.45749 29.3334 6.66663V25.3333C29.3334 27.5424 27.5426 29.3333 25.3334 29.3333H6.66675C4.45761 29.3333 2.66675 27.5424 2.66675 25.3333V6.66663C2.66675 4.45749 4.45761 2.66663 6.66675 2.66663H25.3334ZM26.6667 10.6666H5.33341V25.3333C5.33341 26.0697 5.93037 26.6666 6.66675 26.6666H25.3334C26.0698 26.6666 26.6667 26.0697 26.6667 25.3333V10.6666ZM16.1557 23.991L16.0002 24L15.8881 23.9946L15.7326 23.973L15.584 23.9336L15.4359 23.8751L15.3059 23.8053L15.2066 23.7382L15.0574 23.6094L11.0573 19.6094C10.5366 19.0887 10.5366 18.2445 11.0573 17.7238C11.5379 17.2432 12.2943 17.2062 12.8173 17.6129L12.9429 17.7238L14.6667 19.4466L14.6669 14.6666C14.6669 13.9828 15.1816 13.4193 15.8447 13.3423L16.0003 13.3333C16.7366 13.3333 17.3336 13.9302 17.3336 14.6666L17.3334 19.4466L19.0575 17.7238C19.5381 17.2432 20.2945 17.2062 20.8175 17.6129L20.9432 17.7238C21.4238 18.2045 21.4608 18.9608 21.0541 19.4838L20.9432 19.6094L16.9431 23.6094L16.829 23.7111L16.7359 23.7788L16.6054 23.8551L16.4536 23.9209L16.3549 23.9522L16.1557 23.991ZM25.3334 5.33329H6.66675C5.93037 5.33329 5.33341 5.93025 5.33341 6.66663V7.99996H26.6667V6.66663C26.6667 5.93025 26.0698 5.33329 25.3334 5.33329Z"
                fill="#ffffff" />
            </svg>
          </div>
        </nuxt-link>
          <div class="AdvertisingInfoBox">
            <div class="AdvertisingInfoSubBox">
              <span>{{Active}}</span><br /><span>آگهی های فعال</span>
            </div>
            <div></div>
            <div class="AdvertisingInfoSubBox">
              <span>{{notActive}}</span><br /><span>آگهی های غیرفعال</span>
            </div>
          </div>
          <div class="AdminBoxDetails">
            <!-- <div class="AdminBoxSubDetails">
              <span>آگهی های شما:</span>
              <span>شما تا اکنون تعداد 15 آگهی ثبت کرده اید.</span>
              <div>مشاهده</div>
            </div> -->
            <nuxtLink to="/admin/allads">
              <div class="AdminBoxSubDetails">
              <span>تمام آگهی ها:</span>
              <span>تعداد {{products.length}} آگهی فعال و غیرفعال موجود میباشد.</span>
              <div>مشاهده</div>
            </div>
            </nuxtLink>
            <div class="AdminBoxSubDetails">
              <span> اکانت ها:</span>
              <span>تعداد 500 یوزر در دیتابیس فعال میباشد.</span>
              <div>مشاهده</div>
            </div>
            <!-- <div class="AdminBoxSubDetails">
              <span>آگهی های شما:</span>
              <span>شما تا اکنون تعداد 15 آگهی ثبت کرده اید.</span>
              <div>مشاهده</div>
            </div> -->
          </div>
        </div>
        <nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import NavBar_PC from '~/components/pc/navbar.vue'
import NavBar_Mobile from '~/components/mobile/navbar.vue'
import { async } from 'q'

export default {
  components: {
    NavBar_PC,
    NavBar_Mobile,
  },
  async beforeCreate() {
    let user = await fetch(`http://${process.env.server_URL}/account/isUser`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }).then((res) => res.json())
    if (user.acl !=1) {
      await this.$router.push('/')
      await this.$nuxt.reload()
    }else{
      this.myuser = user
    }
  },
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
      myuser:"",
      default_profile: `http://${process.env.server_cdn_URL}/private/img/user.png`,
      products:"",
      Active:0,
      notActive:0
    }
  },
  async mounted() {
this.$nuxt.$on('updateProductCount',async()=>{
  this.products = await fetch(
      `http://${process.env.server_URL}/api/products`
    ).then(async (res) => await res.json())
    this.Active =0
    this.notActive =0
    count(this)
})
    function count(th) {
      for (let i = 0; i < th.products.length; i++) {
        if (th.products[i].active) {
          th.Active ++
        }else{
          th.notActive ++
        }
        
      }
    }
    this.products = await fetch(
      `http://${process.env.server_URL}/api/products`
    ).then(async (res) => await res.json())
    count(this)
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
</style>
