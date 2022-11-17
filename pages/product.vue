<template>
  <div class="AdvertisingContentBox">
    <!-- <div @click="backto">برگشت</div> -->
    <div class="SiteMapBox">
      <span>کالای دیجیتال</span>
      <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.4999 10.8334C4.37191 10.8334 4.24391 10.7745 4.14642 10.6571L0.146618 5.8423C-0.0488726 5.60698 -0.0488726 5.22661 0.146618 4.99129L4.14642 0.176492C4.34191 -0.0588308 4.65789 -0.0588308 4.85338 0.176492C5.04887 0.411815 5.04887 0.792184 4.85338 1.02751L1.20706 5.41679L4.85338 9.80608C5.04887 10.0414 5.04887 10.4218 4.85338 10.6571C4.75589 10.7745 4.62789 10.8334 4.4999 10.8334Z"
          fill="#707070" />
      </svg>
      <span>رایانه</span>
      <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.4999 10.8334C4.37191 10.8334 4.24391 10.7745 4.14642 10.6571L0.146618 5.8423C-0.0488726 5.60698 -0.0488726 5.22661 0.146618 4.99129L4.14642 0.176492C4.34191 -0.0588308 4.65789 -0.0588308 4.85338 0.176492C5.04887 0.411815 5.04887 0.792184 4.85338 1.02751L1.20706 5.41679L4.85338 9.80608C5.04887 10.0414 5.04887 10.4218 4.85338 10.6571C4.75589 10.7745 4.62789 10.8334 4.4999 10.8334Z"
          fill="#707070" />
      </svg>
      <span>رایانه همراه</span>
      <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M4.4999 10.8334C4.37191 10.8334 4.24391 10.7745 4.14642 10.6571L0.146618 5.8423C-0.0488726 5.60698 -0.0488726 5.22661 0.146618 4.99129L4.14642 0.176492C4.34191 -0.0588308 4.65789 -0.0588308 4.85338 0.176492C5.04887 0.411815 5.04887 0.792184 4.85338 1.02751L1.20706 5.41679L4.85338 9.80608C5.04887 10.0414 5.04887 10.4218 4.85338 10.6571C4.75589 10.7745 4.62789 10.8334 4.4999 10.8334Z"
          fill="#707070" />
      </svg>
      <span>رایانه سری مک M1</span>
    </div>
    <div class="RightPanel">
      <div class="AdvertisingBox">
        <div class="AdvertisingTitle">{{ item.title }}</div>
        <div class="AdvertisingCreateTime">5 دقیقه پیش . . .</div>
        <div class="AdvertisingButtonBox">
          <div class="SubmitAdvertisingButton" @click="registerProduct" v-if="!userRegiter">
            سفارش
          </div>
          <div class="SubmitAdvertisingButton" @click="disregisterProduct" v-if="userRegiter">
            لغو سفارش
          </div>
          <!-- <div class="SaveAdvertisingButton">نشان کردن</div> -->
          <div class="ShareIconAdvertisingBox">
            <lord-icon src="https://cdn.lordicon.com/uvqnvwbl.json" colors="primary:#707070" trigger="hover"
              style="width: 26px; height: 26px">
            </lord-icon>
          </div>
        </div>
        <div class="AdvertisingInformationBox">
          <div class="AdvertisingInformationSubBox">
            <div>آخرین بروزرسانی آگهی</div>
            <div>لحظاتی پیش . . .</div>
          </div>
          <Item_option_Product v-for="itm in item.options" :key="itm.id" :option_name="itm.key"
            :option_value="itm.value" />
        </div>
        <div style="text-align: rtl" class="AdvertisingDescriptionBox">
          <span style="text-align: rtl">توضیحات :</span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="LeftPanel">
      <div class="BigImageBox">
        <img :src="ImgMain" alt="" />
        <div class="IndexImageIDBox">
          <div @click="selectPhotoFromID" ImageKey="1" class="IndexImageIDSubBox SelectedImageID"></div>
          <div @click="selectPhotoFromID" ImageKey="2" class="IndexImageIDSubBox"></div>
          <div @click="selectPhotoFromID" ImageKey="3" class="IndexImageIDSubBox"></div>
          <div @click="selectPhotoFromID" ImageKey="4" class="IndexImageIDSubBox"></div>
          <div @click="selectPhotoFromID" ImageKey="5" class="IndexImageIDSubBox"></div>
        </div>
      </div>
      <div class="SmallImageBox">
        <div v-for="item_ of item.imgs" @click="selectPhoto" :ImageKey="ite" class="SmallImageSubBox SelectedImage">
          <img :src="item_" alt="" />
        </div>
        <!-- <div @click="selectPhoto" ImageKey="2" class="SmallImageSubBox">
          <img src="@/static/img/Item2.png" alt="" />
        </div>
        <div @click="selectPhoto" ImageKey="3" class="SmallImageSubBox">
          <img src="@/static/img/Item3.png" alt="" />
        </div>
        <div @click="selectPhoto" ImageKey="4" class="SmallImageSubBox">
          <img src="@/static/img/Item4.png" alt="" />
        </div>
        <div @click="selectPhoto" ImageKey="5" class="SmallImageSubBox">
          <img src="@/static/img/Item5.png" alt="" />
        </div> -->
      </div>
      <div class="RateOrderOfAdvertising">
        <RateOrderOfAdvertisingSubBox v-for="itm in item.registrations" :key="itm" :id="itm" />
      </div>
    </div>
  </div>
</template>

<script>
import Item_option_Product from '~/components/content/item_option_Product.vue'
import RateOrderOfAdvertisingSubBox from '~/components/content/RateOrderOfAdvertisingBox.vue'
export default {
  data() {
    return {
      item: '',
      catergory: '',
      default_no_photo: `http://${process.env.server_cdn_URL}/private/img/no-photo.png`,
      ImgMain: '',
      myuser: '',
      userRegiter: false,
    }
  },
  methods: {
    backto() {
      this.$router.go(-1)
    },
    selectPhoto(element) {
      if (element.srcElement.src == undefined) return;
      for (let i = 0; i < document.getElementsByClassName('SelectedImage').length; i++)
        document.getElementsByClassName('SelectedImage')[i].classList.remove('SelectedImage');
      for (let i = 0; i < document.getElementsByClassName('SelectedImageID').length; i++)
        document.getElementsByClassName('SelectedImageID')[i].classList.remove('SelectedImageID');

      element.path[1].classList.add('SelectedImage');
      for (let i = 0; i < document.getElementsByClassName('IndexImageIDSubBox').length; i++)
        if (document.getElementsByClassName('IndexImageIDSubBox')[i].getAttribute('ImageKey') == element.path[1].getAttribute('ImageKey'))
          document.getElementsByClassName('IndexImageIDSubBox')[i].classList.add('SelectedImageID');

      this.ImgMain = element.srcElement.src
    },
    selectPhotoFromID(element) {
      for (let i = 0; i < document.getElementsByClassName('SelectedImage').length; i++)
        document.getElementsByClassName('SelectedImage')[i].classList.remove('SelectedImage');
      for (let i = 0; i < document.getElementsByClassName('SelectedImageID').length; i++)
        document.getElementsByClassName('SelectedImageID')[i].classList.remove('SelectedImageID');

      element.srcElement.classList.add('SelectedImageID');
      for (let i = 0; i < document.getElementsByClassName('SmallImageSubBox').length; i++)
        if (element.srcElement.getAttribute('ImageKey') == document.getElementsByClassName('SmallImageSubBox')[i].getAttribute('ImageKey')) {
          document.getElementsByClassName('SmallImageSubBox')[i].classList.add('SelectedImage');
          this.ImgMain = document.getElementsByClassName('SmallImageSubBox')[i].childNodes[0].src;
        }
    },
    async registerProduct() {
     let response =  await fetch(`http://${process.env.server_URL}/api/RegisterProduct?Product_id=${this.item.id}&User_id=${this.myuser.id}`)
     const content = await response.json()
     if (content.res) {
      this.userRegiter=true
      this.item = await fetch(
      `http://${process.env.server_URL}/api/product?id=${this.$route.query.id}`
    ).then((res) => res.json())
     }else{
      return
     }
    },
    async disregisterProduct() {
      let response =  await fetch(`http://${process.env.server_URL}/api/removeRegisterProduct?Product_id=${this.item.id}&User_id=${this.myuser.id}`)
     const content = await response.json()
     if (content.res) {
      this.userRegiter=false
      this.item = await fetch(
      `http://${process.env.server_URL}/api/product?id=${this.$route.query.id}`
    ).then((res) => res.json())
     }else{
      return
     }
    },
  },
  async mounted() {
    this.item = await fetch(
      `http://${process.env.server_URL}/api/product?id=${this.$route.query.id}`
    ).then((res) => res.json())
    this.catergory = await fetch(
      `http://${process.env.server_URL}/api/category?id=${await this.item.category_id}`
    ).then((res) => res.json())
    this.myuser = await fetch(`http://${process.env.server_URL}/account/isUser`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }).then((res) => res.json())
    this.item.registrations.forEach((element) => {
      if (this.myuser.id == element) {
        this.userRegiter = true
      }
    })
    this.ImgMain =
      this.item.imgs.length > 0 ? this.item.imgs[0] : this.default_no_photo
  },
  components: { Item_option_Product, RateOrderOfAdvertisingSubBox },
}
</script>

<style>
@import url(@/static/css/siteMap.css);
@import url(@/static/css/advertisingPage.css);
</style>
