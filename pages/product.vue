<template>
  <div class="AdvertisingContentBox" v-if="this.$route.query.id != undefined">
    <!-- <div @click="backto">برگشت</div> -->
    <div class="SiteMapBox">
      <Map_navigation v-for="itm in cat" :key="itm" :name="itm" />
      <span>{{item.title}}</span>
      
    </div>
    <div class="RightPanel">
      <div class="AdvertisingBox">
        <div class="AdvertisingTitle">{{ item.title }}</div>
        <!-- <div class="AdvertisingCreateTime">5 دقیقه پیش . . .</div> -->
        <div class="AdvertisingButtonBox">
          <div class="SubmitAdvertisingButton" @click="registerProduct" v-if="!userRegiter">
            سفارش
          </div>
          <div class="SubmitAdvertisingButton" @click="registerProduct" v-if="!fullUser">
            ظرفیت پر شده
          </div>
          <div class="SaveAdvertisingButton" @click="disregisterProduct" v-if="userRegiter">
            لغو سفارش
          </div>
          <!-- <div class="SaveAdvertisingButton">نشان کردن</div> -->
          <div class="ShareIconAdvertisingBox">
            <!-- <lord-icon src="https://cdn.lordicon.com/uvqnvwbl.json" colors="primary:#707070" trigger="hover"
              style="width: 26px; height: 26px">
            </lord-icon> -->
          </div>
        </div>
        <div class="AdvertisingInformationBox">
          <div class="AdvertisingInformationSubBox">
            <div>آخرین بروزرسانی آگهی</div>
            <div>لحظاتی پیش . . .</div>
          </div>
          <div class="AdvertisingInformationSubBox">
            <div>قیمت</div>
            <div>{{item.price}}</div>
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
      <div :class="this.FirstImgMain != this.default_no_photo ? 'BigImageBox' : 'BigImageBoxDontShadow'">
        <img :src="FirstImgMain" class="BigImageElement Active" alt="" />
        <img :src="SecondImgMain" class="BigImageElement" alt="" />
        <div class="IndexImageIDBox">
          <div v-for="(item_, index) of item.imgs" :key="item_" :ImageKey="index" @click="selectPhotoFromID" :class="index == 0 ? 'IndexImageIDSubBox SelectedImageID' : 'IndexImageIDSubBox'"></div>
        </div>
      </div>
      <div class="SmallImageBox">
        <div v-for="(item_, index) of item.imgs" :key="item_" :ImageKey="index" @click="selectPhoto" :class="index == 0 ? 'SmallImageSubBox SelectedImage' : 'SmallImageSubBox'">
          <img :src="item_" alt="" />
        </div>
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
import Map_navigation from '~/components/content/Map_navigation.vue'
import { async } from 'q'
export default {
  data() {
    return {
      item: '',
      catergory: '',
      default_no_photo: `http://${process.env.server_cdn_URL}/private/img/no-photo.png`,
      FirstImgMain: '',
      SecondImgMain: '',
      myuser: '',
      userRegiter: false,
      cat:[],
      fullUser:false
    }
  },
  methods: {
    backto() {
      this.$router.go(-1)
    },
    ChangeBigImage(SRC){
      for (let i = 0; i < document.getElementsByClassName('BigImageElement').length; i++) 
        document.getElementsByClassName('BigImageElement')[i].classList.toggle('Active');
        
      if(this.FirstImgMain == ''){
        this.FirstImgMain = SRC;
          this.SecondImgMain = '';
      }else{
        this.SecondImgMain = SRC;
          this.FirstImgMain = '';
      }
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

      this.ChangeBigImage(element.srcElement.src)
      
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
          this.ChangeBigImage(document.getElementsByClassName('SmallImageSubBox')[i].childNodes[0].src);
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
    ).then(async(res) =>res.json())
    // Salam, Dar morede inke ID ro dakhele url taghir bedan va site mire roo hava bahat sohbat kardam gharar shod ke
    // Az samte backend bege aya in id peyda shode ya na ke age peyda nashode redirect kone be safheye asli
    // Ba tashakor, modiriyate FRONT :)

    // Dar zemn zamani ha ke this.$route.query.id == undefined 
    // Dakhele khate 2 goftam ke chizi ro load nakone amma redirect nemishe inam dorost kon 
    // Mersi AH xDDD
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
    this.FirstImgMain =
      this.item.imgs.length > 0 ? this.item.imgs[0] : this.default_no_photo
      test(this,this.item.category_id)
        async function test(th,category_id) {
            await fetch(
            `http://${process.env.server_URL}/api/category?id=${category_id}`
            ).then(async (res) => {
               res = await res.json()
                th.cat.push(res.name)
                if (res.parent !=0) {
                    test(th,res.parent)
                }else{
                    th.cat.reverse()
                }
            })
        }
  },
  components: { Item_option_Product, RateOrderOfAdvertisingSubBox,Map_navigation },
}

</script>

<style>
@import url(@/static/css/siteMap.css);
@import url(@/static/css/advertisingPage.css);
</style>
