<template >
  
    <div v-if="auth" lang="fa">
      <div class="loading-page" v-if="loading">
    <p>Loading...</p>
  </div >
        <div v-if="!isMobile" class="D_Wrapper">
                <NavBar_PC></NavBar_PC>
                <SideBar_PC></SideBar_PC>
                <nuxt/>
        </div>
    </div>
  
</template>
<script>
import NavBar_PC from "~/components/pc/navbar.vue";
import SideBar_PC from "~/components/pc/sidebar.vue";
import NavBar_Mobile from "~/components/mobile/navbar.vue";
import { clearInterval } from "timers";
export default {
    head() {
    return {
            script: [
                        {src: "https://cdn.lordicon.com/qjzruarw.js",body:true,async: true,},
                    ],
            
        }
    },
     data(){
        return{
            isMobile:false,
            posts:"",
            auth: false,
            loading: false,
            login_check_interval:false
        }
    },
    methods: {
      start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
    },
    components:{
        NavBar_PC,
        SideBar_PC,
        NavBar_Mobile
    },
    methods: {
      
  },
   async mounted() {
    
    async function check_login(app) {
      const response = await fetch(`http://${process.env.server_URL}/account/user`, {
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      })
      const content = await response.json();
      if (content.auth == false) {
        app.auth = false
        await app.$router.push('/login');
      }else{
      app.auth = true
      }
    }
    this.$nuxt.$on('logout',async()=>{
      console.log("event")
      await fetch(`http://${process.env.server_URL}/account/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
      });
      $nuxt.$off('logout')
      await this.$router.push('/login');
      window.location.reload(true)
    })
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })

   check_login(this)
   setInterval(
     async ()=>{
      if (this.auth) {
        await check_login(this)
      }
      }, 5000);  
  },
}
</script>

<style>
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




@font-face {
  font-family: IRANSans;
  src: url("@/static/fonts/IRANSans.ttf");
}
@font-face {
  font-family: IRANSans_Regular;
  src: url("@/static/fonts/IRAN_Sans_Regular.ttf");
}
@font-face {
  font-family: IRANSans_Bold;
  src: url("@/static/fonts/IRAN_Sans_Bold.ttf");
}

:root {
  --HeaderHeight: 64px;
  --WidthSideBar: 200px;
  --WidthBoxItem: 500px;
  --HeightBoxItem: 168px;
  --FontSizeBoxItem: 18px;
  --BaseFontFamily: IRANSans;
  --BaseFontFamilyRegular: IRANSans_Regular;
  --BaseFontFamilyBold: IRANSans_Bold;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--BaseFontFamily), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  background-color: #f3f4f6;
}

html {
  direction: rtl;
}

.VerticalHR {
  display: inline-block;
  height: 1.5rem;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.12);
  border: none;
  box-sizing: border-box;
}

.BoxLoading {
  background: linear-gradient(60deg, #eeeeee 0%, #eeeeee 35%, #dddddd 45%, #dddddd 55%, #eeeeee 65%, #eeeeee 100%);
  background-size: 400%;
  animation: BoxLoading 1.5s infinite;
}

@keyframes BoxLoading {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.D_Wrapper {
  width: 100%;
  position: relative;
}

.D_Wrapper .D_Header {
  height: var(--HeaderHeight);
  position: fixed;
  display: grid;
  grid-template-columns: auto auto;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 0 26px;
  z-index: 100;
  box-shadow: 0px 0px 20px -10px rgb(0 0 0 / 25%);
  border-bottom: 1px solid #ccc;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: stretch;
}

.D_Header .D_RightHeader {
  float: right;
}

.D_Header .D_LeftHeader {
  float: left;
}

.D_Header .D_HeaderLogo svg {
  height: 48px;
  vertical-align: middle;
  width: 48px;
}

.D_Header .D_ContentHeader {
  direction: ltr;
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  grid-template-columns: auto auto;
}

.D_Header .D_AvatarHeader {
  width: 42px;
  height: 42px;
  overflow: hidden;
  border-radius: 50%;
}

.D_Header .D_AvatarHeader img {
  width: 100%;
}

.D_Header .D_IconsHeader {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 8px;
}

.D_Header .D_IconsHeader svg {
  width: 20px;
  height: 20px;
}

.D_Header .D_RightHeader {
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto;
}

.D_Header .D_SearchBarHeader {
  background-color: #f0f0f1;
  border-radius: 15px;
  padding: 0px 12px;
  width: 540px;
  height: 46px;
  display: grid;
  justify-content: start;
  align-items: center;
  direction: rtl;
  grid-template-columns: auto auto;
  overflow: hidden;
  gap: 10px;
  transition: width 0.3s;
  cursor: pointer;
}

.D_IconsHeader .NotificationIcon {
  cursor: pointer;
}
.D_IconsHeader .NotificationIcon,
.D_IconsHeader .SettingIcon,
.D_IconsHeader .HelpIcon,
.D_IconsHeader .CartIcon {
  transition: all 0.3s;
}
.ActiveMarkIcon {
  position: relative;
}
.ActiveMarkIcon::before {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  z-index: 2000;
  border-radius: 50%;
  background-color: #a62626;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.D_Header .D_SearchBarHeader input:focus + .D_Header .D_SearchBarHeader {
  width: 540px;
  transition: width 0.3s;
}

.D_Header .D_SearchBarHeader input {
  background-color: unset;
  border: unset;
  outline: unset;
  width: 480px;
  height: 100%;
  font-family: var(--BaseFontFamilyRegular);
  font-size: 20px;
  color: #252525;
}
.D_Header .D_SearchBarHeader input::placeholder {
  color: #707070;
}
.D_Header .D_SearchBarHeader svg path {
  fill: #707070;
}

.D_Wrapper .D_SideBar {
  position: fixed;
  height: calc(95vh - var(--HeaderHeight) - 20px);
  width: var(--WidthSideBar);
  top: calc(var(--HeaderHeight) + 20px);
  right: 16px;
  border-radius: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0px 18px 0px 5px;
  background-color: #ffffff;
  z-index: 150;
  text-align: right;
  box-shadow: 0px 0px 30px -20px rgb(0 0 0 / 25%);
}

.D_Wrapper .D_SideBar::-webkit-scrollbar {
  width: 0px;
}

.D_SideBar .D_SideBarSubBoxTitle {
  font-family: var(--BaseFontFamilyBold);
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: #252525;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 28px;
}

.D_SideBar .D_SideBarSubBoxItems {
  margin-top: 12px;
}

.D_SideBar .D_SideBarSubItem {
  font-family: var(--BaseFontFamilyRegular);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #707070;
  cursor: pointer;
  order: 0;
  border-radius: 5px;
  margin-top: 2px;
  padding: 3px 8px;
  transition: background 0.3s;
}
.D_SideBar .D_SideBarSubItem:hover {
  background-color: #f0f0f1;
  transition: background 0.3s;
}

.D_SideBar .D_SideBarSubItem svg:nth-child(1) {
  width: 16px;
  height: 16px;
  transform: translateY(25%);
  margin-left: 4px;
}

.D_SideBar .D_SideBarSubItem svg:nth-child(3) {
  transform: translateY(50%);
  float: left;
  margin-left: 15px;
  transition: margin 0.3s;
}
.D_SideBar .D_SideBarSubItem:hover svg:nth-child(3) {
  margin-left: 10px;
  transition: margin 0.3s;
}

.D_SideBar .SideBarNotifictionAlarm {
  padding: 0px 8px;
  line-height: normal;
  transform: translateY(25%);
  float: left;
  background: #a62626;
  border-radius: 4px;
  font-weight: 100;
  color: #ffffff;
  font-size: 12px;
  margin-left: 5px;
}

.D_Wrapper .D_Content {
  width: auto;
  margin: calc(20px + var(--HeaderHeight)) calc(16px + 26px + var(--WidthSideBar)) 0px 26px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--WidthBoxItem), 1fr));
  gap: 10px;
}

.D_Wrapper .D_SideBarSubBox {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 2;
}

.D_Content .D_ContentItem {
  box-shadow: 0px 10px 20px -10px rgb(0 0 0 / 25%);
  background-color: #ffffff;
  border-radius: 15px;
  height: var(--HeightBoxItem);
  padding: 16px;
  position: relative;
  min-width: var(--WidthBoxItem);
  max-width: calc(var(--WidthBoxItem) + 100px);
  overflow: hidden;
  font-size: var(--FontSizeBoxItem);
  cursor: pointer;
  transition: 0.3s;
}

.D_Content .D_ContentItem:hover {
  box-shadow: 0px 10px 20px -8px rgb(0 0 0 / 25%);
  transform: scale(102%);
  transition: 0.3s;
}

.D_Content .D_ItemImage::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 300px;
  transform: rotate(30deg);
  background-color: #ffffff54;
  top: -300px;
  left: -100px;
  transition: 0.3s;
  filter: blur(8px);
  z-index: 2000;
}

.D_Content .D_ContentItem:hover .D_ItemImage::before {
  content: "";
  top: -240px;
}

.D_Content .D_ContentItem .D_ItemImage {
  overflow: hidden;
}
.D_Content .D_ContentItem .D_ItemImage img {
  transition: 0.3s;
  transform: scale(115%);
}

.D_Content .D_ContentItem:hover .D_ItemImage img {
  transform: scale(100%);
  transition: 0.3s;
}

.D_ItemTitle {
  font-family: var(--BaseFontFamily);
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 24px;
  text-align: right;
  color: #252525;
  width: 66%;
  overflow: hidden;
}

.D_ItemDescription {
  font-family: var(--BaseFontFamily);
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 24px;
  text-align: right;
  color: #707070;
  width: 66%;
  overflow: hidden;
  margin-top: 10px;
}

.D_ItemPrice {
  font-family: var(--BaseFontFamilyBold);
  width: 66%;
  overflow: hidden;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: right;
  color: #252525;
  margin-top: 12px;
}

.D_ItemCreateTime {
  margin-top: 5px;
  font-family: var(--BaseFontFamily);
  width: fit-content;
  max-width: 200px;
  overflow: hidden;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 24px;
  text-align: right;
  color: #707070;
}

.D_ItemImage {
  position: absolute;
  width: var(--HeightBoxItem);
  height: var(--HeightBoxItem);
  top: 0;
  left: 0;
  text-align: center;
  vertical-align: middle;
  z-index: 10;
}

.D_ItemSlotBox {
  position: absolute;
  bottom: 5px;
  left: 187px;
  z-index: 12;
  text-align: left;
  font-family: var(--BaseFontFamilyRegular);
  direction: ltr;
}

.D_ItemSlotBox div {
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  overflow: hidden;
  background-color: #fff;
  margin-right: -12px;
}

.D_ItemSlotBox div img {
  width: 100%;
}

.D_ItemSlotBox div:nth-child(4) {
  padding: 2px 6px;
  background: #d9d9d9;
  border-radius: 3px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  color: #707070;
  margin-left: 15px;
  margin-bottom: 1px;
  width: unset;
  height: unset;
}

@media only screen and (max-width: 768px) {
  /*Tablet*/
  :root {
    /* --WidthSideBar: 140px;
    --WidthBoxItem: 240px;
    --HeightBoxItem: 120px;
    --FontSizeBoxItem: 14px; */
  }
  .D_ItemSlotBox {
    /* width: 28px;
    height: 28px; */
  }
}

</style>