<template>
  <div>
    <b-modal id="bv-modal-Setting_Start_register" hide-footer title="تغییر زمان شروع مزایده">
      <div class="d-block text-center">
        <b-row class="my-1">
          <b-col sm="4">
            <label for="input-valid"> ساعت شروع مزایده:</label>
          </b-col>
          <b-col sm="8">
            <b-time class="border rounded p-2" v-model="Start_TimeVmodel" isRTL locale="fa-IR" show-seconds
              @context="onContext_start_time_register" style="direction: ltr; width: 100%"></b-time>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label for="input-valid">تاریخ شروع مزایده:</label>
          </b-col>
          <b-col sm="8">
            <b-form-datepicker v-model="Start_DateVmodel" hide-header start-weekday="6" isRTL="true"
              calendar-width="100%" right @context="onContext_start_date_register" class="mb-3"
              locale="fa-IR"></b-form-datepicker>
          </b-col>
        </b-row>
      </div>
      <b-button style="background-color: #a62626" @click="save_calculateTime_start" class="mt-3" block>ذخیره</b-button>
    </b-modal>

    <b-modal id="bv-modal-Setting_End_register" hide-footer title="تغییر زمان پایان مزایده">
      <div class="d-block text-center">
        <b-row class="my-1">
          <b-col sm="4">
            <label for="input-valid"> ساعت پایان مزایده:</label>
          </b-col>
          <b-col sm="8">
            <b-time class="border rounded p-2" v-model="End_TimeVmodel" isRTL locale="fa-IR" show-seconds
              @context="onContext_end_time_register" style="direction: ltr; width: 100%"></b-time>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label for="input-valid">تاریخ شروع مزایده:</label>
          </b-col>
          <b-col sm="8">
            <b-form-datepicker v-model="End_DateVmodel" hide-header start-weekday="6" isRTL="true" calendar-width="100%"
              right @context="onContext_end_date_register" class="mb-3" locale="fa-IR"></b-form-datepicker>
          </b-col>
        </b-row>
      </div>
      <b-button style="background-color: #a62626" @click="save_calculateTime_end" class="mt-3" block>ذخیره</b-button>
    </b-modal>

    <div class="AdminPageChartItemsBox">
    </div>

    <div class="AdminPageContentInfoBox">
      <div class="AdminPageBigChartBox">
        <div class="AdminPageBigChartTitleBox">
          <span style="padding-bottom: 3%">تنظیمات برگذاری مزایده</span>
          <div style="margin: 3%">
            <div @click="$bvModal.show('bv-modal-Setting_Start_register')" class="box_setting_tim_item">
              <div class="header_setting_Time">
                <div>زمان شروع</div>

                <div class="hoverPoint">
                  <lord-icon src="https://cdn.lordicon.com/dycatgju.json" trigger="hover" id="SettingIconEndTime"
                    colors="primary:#BABFC7" style="width: 24px; height: 24px">
                  </lord-icon>
                </div>
              </div>
              <div>
                {{ new Date(TimeRegister.start).getHours() }}:{{
                    new Date(TimeRegister.start).getMinutes()
                }}:{{ new Date(TimeRegister.start).getSeconds() }} -
                {{ new Date(TimeRegister.start).toLocaleDateString('fa-IR') }}
              </div>
            </div>
            <div class="box_setting_tim_item" @click="$bvModal.show('bv-modal-Setting_End_register')">
              <div class="header_setting_Time">
                <div>زمان پایان</div>

                <div class="hoverPoint">
                  <lord-icon src="https://cdn.lordicon.com/dycatgju.json" trigger="hover" id="SettingIconEndTime"
                    colors="primary:#BABFC7" style="width: 24px; height: 24px">
                  </lord-icon>
                </div>
              </div>
              <div>
                {{ new Date(TimeRegister.end).getHours() }}:{{
                    new Date(TimeRegister.end).getMinutes()
                }}:{{ new Date(TimeRegister.end).getSeconds() }} -
                {{ new Date(TimeRegister.end).toLocaleDateString('fa-IR') }}
              </div>
            </div>
            <div @click="MozaiedeRun" class="box_setting_tim_item">
              <div class="header_setting_Time">
                <div>برگذاری مزایده</div>
                <div>
                  <lord-icon src="https://cdn.lordicon.com/usxfmtjg.json" trigger="hover"
                    style="width: 24px; height: 24px" colors="primary:#BABFC7">
                  </lord-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="AdminPageBigChartSeriesBox" id="AdminPageBigChartSeriesBox"></div>
      </div>

      <div class="AdminPageUserInfoTableBox">
        <table>
          <thead>
            <th>#</th>
            <th>اکانت</th>
            <th>مقدار خرید</th>
            <th>وضعیت</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar2.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
            </tr>

            <tr>
              <td>2</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar2.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
            </tr>
            <tr>
              <td>3</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar3.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
            </tr>
            <tr>
              <td>4</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
            </tr>
            <tr>
              <td>5</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar3.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OnlineClientShowInAdminPage">آنلاین</span></td>
            </tr>
            <tr>
              <td>6</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OfflineClientShowInAdminPage">آفلاین</span></td>
            </tr>
            <tr>
              <td>7</td>
              <td class="UserInformationBoxTableAdminPage">
                <div>
                  <div class="AvatarInUserTableAdminPage">
                    <img src="@/static/img/avatar2.png" alt="" />
                  </div>
                  <div class="ClientInfoInAdminPage">
                    <div class="ClientUsernameBoxInAdminPage">سارا شریفی</div>
                    <div class="ClientContactInfoInAdminBox">
                      SaraSharifi@gmail.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="UserBuyInformationBoxTableAdminPage">10,000 تومان</td>
              <td><span class="OnlineClientShowInAdminPage">آنلاین</span></td>
            </tr>
          </tbody>
          <tfoot>
            <td>
              <label for="UserTableAdminPageSearchInput">
                <div class="UserTableAdminPageSearchBox">
                  <lord-icon src="https://cdn.lordicon.com/rlizirgt.json" trigger="hover" colors="primary:#707070"
                    style="width: 18px; height: 18px">
                  </lord-icon>
                  <input type="text" id="UserTableAdminPageSearchInput" placeholder="جستجو" />
                </div>
              </label>
            </td>
            <td>
              <div class="SlideButtonAdminPage">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.46667 5.46665L1.46667 9.46665C1.33333 9.59998 1.2 9.66665 0.999999 9.66665C0.799999 9.66665 0.666665 9.59998 0.533332 9.46665C0.266665 9.19998 0.266665 8.79998 0.533332 8.53331L4.06667 4.99998L0.533332 1.46665C0.266665 1.19998 0.266665 0.79998 0.533332 0.533313C0.799999 0.266646 1.2 0.266646 1.46667 0.533313L5.46667 4.53331C5.73333 4.79998 5.73333 5.19998 5.46667 5.46665Z"
                    fill="black" />
                </svg>
              </div>
              <div class="SlideIDBoxAdminPage">
                <span class="SlideIDBoxSeleced">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
              </div>
              <div class="SlideButtonAdminPage">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.46668 8.53331C5.73334 8.79998 5.73334 9.19998 5.46668 9.46665C5.33334 9.59998 5.20001 9.66665 5.00001 9.66665C4.80001 9.66665 4.66668 9.59998 4.53334 9.46665L0.533344 5.46665C0.266677 5.19998 0.266677 4.79998 0.533344 4.53331L4.53334 0.533313C4.80001 0.266646 5.20001 0.266646 5.46668 0.533313C5.73334 0.79998 5.73334 1.19998 5.46668 1.46665L1.93334 4.99998L5.46668 8.53331Z"
                    fill="black" />
                </svg>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  layout: 'admin',
  components: {
    [process.browser && 'apexchart']: () => import('vue-apexcharts'),
  },
  data() {
    return {
      items: '',
      TimeRegister: [],
      Start_TimeVmodel: '',
      Start_DateVmodel: '',
      Start_Timecontext: '',
      Start_Datecontext: '',
      End_TimeVmodel: '',
      End_DateVmodel: '',
      End_Timecontext: '',
      End_Datecontext: '',
    }
  },

  methods: {
    onContext_start_time_register(ctx) {
      this.Start_Timecontext = ctx
    },
    onContext_start_date_register(ctx) {
      this.Start_Datecontext = ctx
    },
    async save_calculateTime_start() {
      let date = this.Start_Datecontext
      let time = this.Start_Timecontext
      let date_ = new Date(date.activeYMD.replaceAll('-', ','))
      date_.setHours(time.hours)
      date_.setMinutes(time.minutes)
      date_.setSeconds(time.seconds)
      this.TimeRegister.start = date_.getTime()
      let response = await fetch(
        `https://${
          process.env.server_URL
        }/api/setRegisterTime_Start?Time=${date_.getTime()}`
      )
      this.$bvModal.hide('bv-modal-Setting_Start_register')
    },
    onContext_end_time_register(ctx) {
      this.End_Timecontext = ctx
    },
    onContext_end_date_register(ctx) {
      this.End_Datecontext = ctx
    },
    async save_calculateTime_end() {
      let date = this.End_Datecontext
      let time = this.End_Timecontext
      let date_ = new Date(date.activeYMD.replaceAll('-', ','))
      date_.setHours(time.hours)
      date_.setMinutes(time.minutes)
      date_.setSeconds(time.seconds)
      this.TimeRegister.end = date_.getTime()
      let response = await fetch(
        `https://${
          process.env.server_URL
        }/api/setRegisterTime_End?Time=${date_.getTime()}`
      )
      this.$bvModal.hide('bv-modal-Setting_End_register')
    },
    async MozaiedeRun(){
      this.$nuxt.$emit('showLoading', (true) )
      console.log(1)
      let response = await fetch(
        `https://${process.env.server_URL}/api/RunMozaiede`
      ).then(async (res) => res.json())
      if (response[0]) {
      this.$nuxt.$emit('showLoading', (false) )
      }else{
        this.$nuxt.$emit('showLoading', (false) )
        this.$nuxt.$emit('showErrorAlert', (`مشکلی در سمت سرور وجود دارد لطفا با ادمین تماس بگیرید.\n${response[1]}`) )
      }
    }
  },

  async mounted() {
    this.items = await fetch(
      `https://${process.env.server_URL}/api/products`
    ).then(async (res) => res.json())
    console.log(this.items.length)
    this.TimeRegister = await fetch(
      `https://${process.env.server_URL}/api/getRegisterTime`
    ).then(async (res) => res.json())
    this.Start_TimeVmodel = `${new Date(
      this.TimeRegister.start
    ).getHours()}:${new Date(this.TimeRegister.start).getMinutes()}:${new Date(
      this.TimeRegister.start
    ).getSeconds()}`
    this.Start_DateVmodel = `${new Date(
      this.TimeRegister.start
    ).getFullYear()}-${
      new Date(this.TimeRegister.start).getMonth() + 1
    }-${new Date(this.TimeRegister.start).getDate()}`
    this.End_TimeVmodel = `${new Date(
      this.TimeRegister.end
    ).getHours()}:${new Date(this.TimeRegister.end).getMinutes()}:${new Date(
      this.TimeRegister.end
    ).getSeconds()}`
    this.End_DateVmodel = `${new Date(this.TimeRegister.end).getFullYear()}-${
      new Date(this.TimeRegister.end).getMonth() + 1
    }-${new Date(this.TimeRegister.end).getDate()}`
  },
}
</script>
<style>
.box_setting_tim_item {
  margin-top: 1%;
  padding: 2%;
  border-radius: 15px;
}

.header_setting_Time {
  display: flex;
  justify-content: space-between;
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem 0rem !important;
}

.box_setting_tim_item:hover {
  cursor: pointer;
  background-color: #cacaca91;
}
</style>
