<template>
  <div>
    <div class="SubmitAdvertisingContentBox">
      <div class="TitlePage">ثبت آگهی</div>
      <div class="UploadAdvertisingImagesBox">
        <span>آپلود عکس ها</span>
        <div class="UploadAdvertisingImagesSubBox FirstBox">
          <span>عکس اصلی آگهی شما این عکس میباشد</span>
          <span> تعداد عکس ها حداکثر 5 عدد میباشد</span>
          <div class="UploadImageBigBox">
            <img :src="ImageInsertInWeb[0]" alt="" />
          </div>
        </div>
        <div class="UploadAdvertisingImagesSubBox">
          <span>عکس ها را اینجا رها کنید یا برای آپلود کلیک کنید</span>
          <span>( حداکثر آپلود عکس 5 تا میباشد )</span>
          <div class="UploadImagesBox">
            <input type="file" id="InputImageInSubmitAdvertising" accept="image/*" v-on:input="previewImage" />
            <div class="ImageBox" v-for="Image in ImageInsertInWeb" :key="Image">
              <img :src="Image" alt="" />
            </div>
            <div class="AddPathImageButton" @click="InsertImageButtonClicked" v-if="ImageInsertInWeb.length < 5">
              <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M25.3334 4.66666C27.5425 4.66666 29.3334 6.45752 29.3334 8.66666V27.3333C29.3334 29.5425 27.5425 31.3333 25.3334 31.3333H6.66669C4.45755 31.3333 2.66669 29.5425 2.66669 27.3333V8.66666C2.66669 6.45752 4.45755 4.66666 6.66669 4.66666H25.3334ZM26.6667 18.4027L21.1094 26.7396C20.6991 27.3551 19.8751 27.5117 19.2721 27.1173L19.1464 27.0243L12.25 21.2773L6.97069 28.6667H25.3334C26.0697 28.6667 26.6667 28.0697 26.6667 27.3333V18.4027ZM25.3334 7.33332H6.66669C5.93031 7.33332 5.33335 7.93028 5.33335 8.66666V26.3707L10.915 18.5583C11.3336 17.9724 12.1327 17.8316 12.7217 18.212L12.8536 18.309L19.7137 24.0258L26.6667 13.5947V8.66666C26.6667 7.93028 26.0697 7.33332 25.3334 7.33332ZM10.6667 9.99999C12.1394 9.99999 13.3334 11.1939 13.3334 12.6667C13.3334 14.1394 12.1394 15.3333 10.6667 15.3333C9.19393 15.3333 8.00002 14.1394 8.00002 12.6667C8.00002 11.1939 9.19393 9.99999 10.6667 9.99999Z"
                  fill="#707070" fill-opacity="0.5" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M26 1.5C30.1421 1.5 33.5 4.85786 33.5 9C33.5 13.1421 30.1421 16.5 26 16.5C21.8579 16.5 18.5 13.1421 18.5 9C18.5 4.85786 21.8579 1.5 26 1.5Z"
                  fill="#707070" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M26 3C22.6863 3 20 5.68629 20 9C20 12.3137 22.6863 15 26 15C29.3137 15 32 12.3137 32 9C32 5.68629 29.3137 3 26 3Z"
                  fill="#707070" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M26 4.5C26.4142 4.5 26.75 4.83579 26.75 5.25V8.25H29.75C30.1642 8.25 30.5 8.58579 30.5 9C30.5 9.41421 30.1642 9.75 29.75 9.75H26.75V12.75C26.75 13.1642 26.4142 13.5 26 13.5C25.5858 13.5 25.25 13.1642 25.25 12.75V9.75H22.25C21.8358 9.75 21.5 9.41421 21.5 9C21.5 8.58579 21.8358 8.25 22.25 8.25H25.25V5.25C25.25 4.83579 25.5858 4.5 26 4.5Z"
                  fill="white" />
              </svg>
            </div>
            <div class="AddPathImageButton" v-if="ImageInsertInWeb.length == 5">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14 0.666656C21.3638 0.666656 27.3334 6.63619 27.3334 14C27.3334 21.3638 21.3638 27.3333 14 27.3333C6.63622 27.3333 0.666687 21.3638 0.666687 14C0.666687 6.63619 6.63622 0.666656 14 0.666656ZM14 3.33332C8.10898 3.33332 3.33335 8.10895 3.33335 14C3.33335 19.891 8.10898 24.6667 14 24.6667C19.8911 24.6667 24.6667 19.891 24.6667 14C24.6667 8.10895 19.8911 3.33332 14 3.33332ZM20.6667 12.6667C21.4031 12.6667 22 13.2636 22 14C22 14.7364 21.4031 15.3333 20.6667 15.3333H7.33335C6.59697 15.3333 6.00002 14.7364 6.00002 14C6.00002 13.2636 6.59697 12.6667 7.33335 12.6667H20.6667Z"
                  fill="#707070" fill-opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="DescriptionAdvertisingBox">
        <span>توضیحات</span>
        <textarea v-model="adsData.description" name="" id="" rows="10"></textarea>
      </div>
      <div class="InformationAdvertisingBox">
        <span>عنوان آگهی</span>
        <input v-model="adsData.title" type="text" />
        <span>قیمت</span>
        <input v-model="adsData.price" type="number" value="0" />
        <span>کد اموال</span>
        <input v-model="adsData.code" type="number" value="0" />
        <span>دسته بندی</span>
        <select v-model="adsData.category_id">
          <option v-for="(item, index) in catergory" :key="index" :value="item.id">
            {{ item.name }}
          </option>
        </select>
        <span>وضعیت کارکرد</span>
        <select v-model="adsData.options[0].value">
          <option value="نو">نو</option>
          <option value="در حد نو">در حد نو</option>
          <option value="کار کرده">کار کرده</option>
          <option value="نیاز به تعمیر">نیاز به تعمیر</option>
        </select>
        <span>وضعیت آگهی</span>
        <select v-model="adsData.active">
          <option value="true">فعال</option>
          <option value="false">غیرفعال</option>
        </select>

        <span>مشخصات</span>
        <div class="InformationAdvertisingSubBox">
          <div class="InformationInsertDataBox" v-for="(CategoryInEditMenu, index) in adsData.options" :key="index"
            v-if="index != 0">
            <input class="" v-model="CategoryInEditMenu.key" type="text" name="" id="" placeholder="عنوان" />
            <div class="VerticalLineInformationInsertData"></div>
            <input type="text" v-model="CategoryInEditMenu.value" name="" id="" placeholder="توضیحات " />
            <div class="DeleteIconBox" @click="RemoveOptionData(index)">
              <lord-icon colors="primary:#707070" src="https://cdn.lordicon.com/kfzfxczd.json" trigger="morph">
              </lord-icon>

            </div>
          </div>
          <div class="AddToCategoryBottunBox" @click="AddOptionData">
            <lord-icon src="https://cdn.lordicon.com/ynwbvguu.json" trigger="morph"></lord-icon>

            <span>اضافه کردن دسته</span>
          </div>
        </div>
        <div class="AddToCategoryBottunBox" style="background-color: #a7211b; color: white" @click="SubmitAdvertising">
          <lord-icon colors="primary:#ffffff" src="https://cdn.lordicon.com/ynwbvguu.json" trigger="morph"></lord-icon>
          <span>ثبت نهایی</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      catergory: [],
      ImageInsertInWeb: [],
      ImageFiles: [],
      adsData: {
        category_id: '2',
        title: '',
        description: '',
        price: '',
        date: '',
        imgs: [],
        options: [{ key: 'وضعیت', value: '' }],
        active: false,
        code: 0,
      },
    }
  },
  methods: {
    RemoveOptionData(index) {
      this.adsData.options.splice(index, 1)
    },
    AddOptionData() {
      this.adsData.options.push({ key: '', value: '' })
    },
    InsertImageButtonClicked() {
      document.getElementById('InputImageInSubmitAdvertising').click()
    },
    previewImage(element) {
      if (element.srcElement.files.length > 0) {
        const imageSrc = URL.createObjectURL(element.srcElement.files[0])
        this.ImageInsertInWeb.push(imageSrc)
        this.ImageFiles.push(element.srcElement.files[0])
      }
    },
    async SubmitAdvertising() {


      if (this.adsData.options[0] && this.adsData.category_id && this.adsData.code && this.adsData.description && this.adsData.price && this.adsData.title) {
        for await (const file of this.ImageFiles) {
          var data = new FormData()
          data.append('files', file, file.name)
          await fetch(`${process.env.server_cdn_URL}/upload`, {
            method: 'POST',
            headers: {},
            body: data,
          }).then(async (res) => {
            let a = await res.json()
            this.adsData.imgs.push(
              `${process.env.server_cdn_URL}/upload/${a.name}`
            )
          })
        }
        this.adsData.date = Date.now()
        await fetch(`${process.env.server_URL}/api/postEdit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.adsData),
        }).then(async (res) => {
          let a = await res.json()
          await this.$router.push(`/Product?id=${a.id}`)
        })
      } else {
        alert('لطفا فرم را پر کنید')
      }

    },
  },
  async mounted() {
    this.catergory = await fetch(
      `${process.env.server_URL}/api/category`
    ).then((res) => res.json())
    this.adsData = await fetch(
      `${process.env.server_URL}/api/product?id=${this.$route.query.id}`
    ).then((res) => res.json())
    this.ImageInsertInWeb = this.adsData.imgs
    console.log(this.adsData)
  },
}
</script>
<style>
@import url(@/static/css/submitAdvertisingPage.css);

.AddToCategoryBottunBox span:first-child {
  background: #707070;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

.AddToCategoryBottunBox span {
  display: flex;
  justify-content: center;
  align-items: center;
}

.AddToCategoryBottunBox:hover {
  box-shadow: 0 8px 15px -8px rgba(112, 112, 112, 0.5);
  transition: box-shadow 0.3s;
}

.AddToCategoryBottunBox {
  width: fit-content;
  margin-top: 25px;
  background: rgba(112, 112, 112, 0.5);
  border-radius: 7px;
  font-family: var(--BaseFontFamily);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  display: flex;
  gap: 5px;
  align-items: center;
  color: #000000;
  padding: 4px 6px;
  cursor: pointer;
  margin-bottom: 25px;
  transition: box-shadow 0.3s;
}
</style>
