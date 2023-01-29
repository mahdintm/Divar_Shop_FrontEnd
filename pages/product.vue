<template>
  <div class="AdvertisingContentBox" v-if="this.$route.query.id != undefined">
    <b-modal id="bv-modal-Register-Product" hide-footer>
      <template #modal-title> ثبت قیمت پیشنهادی </template>
      <div class="d-block text-center">
        <b-row class="my-1">
          <b-col sm="4">
            <label for="input-valid">قیمت پیشنهادی:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input
              id="input-valid"
              type="number"
              v-model="UserPrice"
              :state="validPrice"
              placeholder="قیمت را به ریال وارد کنید"
            ></b-form-input>
          </b-col>
        </b-row>
      </div>
      <b-button
        style="background-color: #a62626"
        :disabled="!validPrice"
        class="mt-3"
        block
        @click="registerProduct"
        >ثبت پیشنهاد</b-button
      >
      <b-button
        v-if="userRegiter"
        class="mt-3"
        block
        @click="disregisterProduct"
        >حذف پیشنهاد</b-button
      >
    </b-modal>
    <!-- <div @click="backto">برگشت</div> -->
    <div class="SiteMapBox">
      <Map_navigation
        v-for="itm in cat"
        :key="itm.id"
        :id="itm.id"
        :name="itm.name"
      />
      <span>{{ item.title }}</span>
    </div>
    <div class="RightPanel">
      <div class="AdvertisingBox">
        <div class="AdvertisingTitle">{{ item.title }}</div>
        <!-- <div class="AdvertisingCreateTime">5 دقیقه پیش . . .</div> -->
        <div class="AdvertisingButtonBox">
          <div
            class="SubmitAdvertisingButton"
            @click="$bvModal.show('bv-modal-Register-Product')"
            v-if="!userRegiter && isTimeRegister"
          >
            ثبت پیشنهاد
          </div>
          <!-- <div class="SaveAdvertisingButton" @click="registerProduct" v-if="!isTimeRegister">
            خارج زمان ثبت نام
          </div> -->
          <div
            class="SaveAdvertisingButton"
            @click="$bvModal.show('bv-modal-Register-Product')"
            v-if="userRegiter && isTimeRegister"
          >
            ویرایش پیشنهاد
          </div>
          <!-- <div class="SaveAdvertisingButton">نشان کردن</div> -->
          <div class="ShareIconAdvertisingBox">
            <!-- <lord-icon src="https://cdn.lordicon.com/uvqnvwbl.json" colors="primary:#707070" trigger="hover"
              style="width: 26px; height: 26px">
            </lord-icon> -->
          </div>
        </div>
        <div class="AdvertisingInformationBox">
          <!-- <div class="AdvertisingInformationSubBox">
            <div>آخرین بروزرسانی آگهی</div>
            <div>لحظاتی پیش . . .</div>
          </div> -->
          <div class="AdvertisingInformationSubBox">
            <div>کد اموال</div>
            <div>{{ item.code }}</div>
          </div>
          <div class="AdvertisingInformationSubBox">
            <div>قیمت پایه مزایده</div>
            <div>{{ new Intl.NumberFormat().format(item.price) }} ریال</div>
          </div>
          <Item_option_Product
            v-for="itm in item.options"
            :key="itm.id"
            :option_name="itm.key"
            :option_value="itm.value"
          />
        </div>
        <div style="text-align: rtl" class="AdvertisingDescriptionBox">
          <span style="text-align: rtl">توضیحات :</span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="LeftPanel">
      <div
        :class="
          this.FirstImgMain != this.default_no_photo
            ? 'BigImageBox'
            : 'BigImageBoxDontShadow'
        "
      >
        <img :src="FirstImgMain" class="BigImageElement Active" alt="" />
        <img :src="SecondImgMain" class="BigImageElement" alt="" />
        <div class="IndexImageIDBox">
          <div
            v-for="(item_, index) of item.imgs"
            :key="item_"
            :ImageKey="index"
            @click="selectPhotoFromID"
            :class="
              index == 0
                ? 'IndexImageIDSubBox SelectedImageID'
                : 'IndexImageIDSubBox'
            "
          ></div>
        </div>
      </div>
      <div class="SmallImageBox">
        <div
          v-for="(item_, index) of item.imgs"
          :key="item_"
          :ImageKey="index"
          @click="selectPhoto"
          :class="
            index == 0 ? 'SmallImageSubBox SelectedImage' : 'SmallImageSubBox'
          "
        >
          <img :src="item_" alt="" />
        </div>
      </div>
      <div class="RateOrderOfAdvertising">
        <RateOrderOfAdvertisingSubBox
          v-for="itm in item.registrations"
          :key="itm.id"
          :id="itm.User_id"
          :price="itm.Price"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item_option_Product from '~/components/content/item_option_Product.vue'
import RateOrderOfAdvertisingSubBox from '~/components/content/RateOrderOfAdvertisingBox.vue'
import Map_navigation from '~/components/content/Map_navigation.vue'
export default {
  computed: {
    validPrice() {
      return this.UserPrice >= this.item.price ? true : false
    },
  },
  data() {
    return {
      item: '',
      catergory: '',
      default_no_photo: `${process.env.server_cdn_URL}/private/img/no-photo.png`,
      FirstImgMain: '',
      SecondImgMain: '',
      myuser: '',
      userRegiter: false,
      cat: [],
      fullUser: false,
      isTimeRegister: false,
      UserPrice: '',
    }
  },
  methods: {
    backto() {
      this.$router.go(-1)
    },
    ChangeBigImage(SRC) {
      for (
        let i = 0;
        i < document.getElementsByClassName('BigImageElement').length;
        i++
      )
        document
          .getElementsByClassName('BigImageElement')
          [i].classList.toggle('Active')

      if (this.FirstImgMain == '') {
        this.FirstImgMain = SRC
        this.SecondImgMain = ''
      } else {
        this.SecondImgMain = SRC
        this.FirstImgMain = ''
      }
    },
    async selectPhoto(element) {
      if (element.srcElement.src == undefined) return
      let a = document.querySelectorAll('.SelectedImage')[0]
      let b = element.srcElement.parentElement
      let c = document.querySelectorAll('.IndexImageIDSubBox')
      for (const el of c) {
        if (a.getAttribute('imagekey') == el.getAttribute('imagekey')) {
          el.classList.remove('SelectedImageID')
          a.classList.remove('SelectedImage')
        }
        if (b.getAttribute('imagekey') == el.getAttribute('imagekey')) {
          el.classList.add('SelectedImageID')
          await b.classList.add('SelectedImage')
        }
      }
      this.ChangeBigImage(element.srcElement.src)
    },
    selectPhotoFromID(element) {
      for (
        let i = 0;
        i < document.getElementsByClassName('SelectedImage').length;
        i++
      )
        document
          .getElementsByClassName('SelectedImage')
          [i].classList.remove('SelectedImage')
      for (
        let i = 0;
        i < document.getElementsByClassName('SelectedImageID').length;
        i++
      )
        document
          .getElementsByClassName('SelectedImageID')
          [i].classList.remove('SelectedImageID')

      element.srcElement.classList.add('SelectedImageID')
      for (
        let i = 0;
        i < document.getElementsByClassName('SmallImageSubBox').length;
        i++
      )
        if (
          element.srcElement.getAttribute('ImageKey') ==
          document
            .getElementsByClassName('SmallImageSubBox')
            [i].getAttribute('ImageKey')
        ) {
          document
            .getElementsByClassName('SmallImageSubBox')
            [i].classList.add('SelectedImage')
          this.ChangeBigImage(
            document.getElementsByClassName('SmallImageSubBox')[i].childNodes[0]
              .src
          )
        }
    },
    async registerProduct() {
      let response = await fetch(
        `${process.env.server_URL}/api/RegisterProduct?Product_id=${this.item.id}&User_id=${this.myuser.id}&User_Price=${this.UserPrice}`
      )
      const content = await response.json()
      if (content.res) {
        this.userRegiter = true
        this.$bvModal.hide('bv-modal-Register-Product')
        window.location.reload(true)
      }
    },
    async disregisterProduct() {
      let response = await fetch(
        `${process.env.server_URL}/api/removeRegisterProduct?Product_id=${this.item.id}&User_id=${this.myuser.id}`
      )
      const content = await response.json()
      if (content.res) {
        this.userRegiter = false
        this.$bvModal.hide('bv-modal-Register-Product')
        window.location.reload(true)
      }
    },
  },
  async mounted() {
    this.item = await fetch(
      `${process.env.server_URL}/api/product?id=${this.$route.query.id}`
    ).then(async (res) => res.json())

    this.catergory = await fetch(
      `${process.env.server_URL}/api/category?id=${await this.item.category_id}`
    ).then((res) => res.json())
    this.myuser = await fetch(`${process.env.server_URL}/account/isUser`, {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }).then((res) => res.json())
    this.FirstImgMain =
      this.item.imgs.length > 0 ? this.item.imgs[0] : this.default_no_photo
    test(this, this.item.category_id)
    async function test(th, category_id) {
      await fetch(
        `${process.env.server_URL}/api/category?id=${category_id}`
      ).then(async (res) => {
        res = await res.json()
        th.cat.push(res)
        if (res.parent != 0) {
          test(th, res.parent)
        } else {
          th.cat.reverse()
        }
      })
    }
    this.isTimeRegister = await fetch(
      `${process.env.server_URL}/api/registerTime`
    ).then(async (res) => res.json())
    this.userRegiter = await fetch(
      `${process.env.server_URL}/api/checkRegisterProduct?Product_id=${this.item.id}&User_id=${this.myuser.id}`
    ).then(async (res) => res.json())
    this.item.registrations = await fetch(
      `${process.env.server_URL}/api/getRegisters?id=${this.$route.query.id}`
    ).then(async (res) => res.json())
  },
  components: {
    Item_option_Product,
    RateOrderOfAdvertisingSubBox,
    Map_navigation,
  },
}
</script>

<style>
@import url(@/static/css/siteMap.css);
@import url(@/static/css/advertisingPage.css);

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem 0rem !important;
}

/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield !important;
}
</style>
