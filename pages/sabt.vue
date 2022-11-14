<template>
  <div>
    <div class="D_AdminBox">
      <div class="HeaderBox"></div>
      <div class="AvatarBox"><img src="@/static/img/avatar.png" alt="" /></div>
      <div class="UserInfo">شیوا کمالی</div>
      <div class="RankInfoBox">ادمین</div>
      <div class="AddAdvertisingBox">
        <span>ثبت آگهی</span>
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" :xmlns="'http://www.w3.org/2000/svg%22%3E'">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M25.3334 2.66663C27.5426 2.66663 29.3334 4.45749 29.3334 6.66663V25.3333C29.3334 27.5424 27.5426 29.3333 25.3334 29.3333H6.66675C4.45761 29.3333 2.66675 27.5424 2.66675 25.3333V6.66663C2.66675 4.45749 4.45761 2.66663 6.66675 2.66663H25.3334ZM26.6667 10.6666H5.33341V25.3333C5.33341 26.0697 5.93037 26.6666 6.66675 26.6666H25.3334C26.0698 26.6666 26.6667 26.0697 26.6667 25.3333V10.6666ZM16.1557 23.991L16.0002 24L15.8881 23.9946L15.7326 23.973L15.584 23.9336L15.4359 23.8751L15.3059 23.8053L15.2066 23.7382L15.0574 23.6094L11.0573 19.6094C10.5366 19.0887 10.5366 18.2445 11.0573 17.7238C11.5379 17.2432 12.2943 17.2062 12.8173 17.6129L12.9429 17.7238L14.6667 19.4466L14.6669 14.6666C14.6669 13.9828 15.1816 13.4193 15.8447 13.3423L16.0003 13.3333C16.7366 13.3333 17.3336 13.9302 17.3336 14.6666L17.3334 19.4466L19.0575 17.7238C19.5381 17.2432 20.2945 17.2062 20.8175 17.6129L20.9432 17.7238C21.4238 18.2045 21.4608 18.9608 21.0541 19.4838L20.9432 19.6094L16.9431 23.6094L16.829 23.7111L16.7359 23.7788L16.6054 23.8551L16.4536 23.9209L16.3549 23.9522L16.1557 23.991ZM25.3334 5.33329H6.66675C5.93037 5.33329 5.33341 5.93025 5.33341 6.66663V7.99996H26.6667V6.66663C26.6667 5.93025 26.0698 5.33329 25.3334 5.33329Z"
            fill="#ffffff" />
        </svg>
      </div>
      <div class="AdvertisingInfoBox">
        <div class="AdvertisingInfoSubBox"><span>27</span><br /><span>آگهی های فعال</span></div>
        <div></div>
        <div class="AdvertisingInfoSubBox"><span>40</span><br /><span>آگهی های غیرفعال</span></div>
      </div>
      <div class="AdminBoxDetails">
        <div class="AdminBoxSubDetails">
          <span>آگهی های شما:</span> <span>شما تا اکنون تعداد 15 آگهی ثبت کرده اید.</span>
          <div>مشاهده</div>
        </div>
        <div class="AdminBoxSubDetails">
          <span>تمام آگهی ها:</span> <span>تعداد 77 آگهی فعال و غیرفعال موجود میباشد.</span>
          <div>مشاهده</div>
        </div>
        <div class="AdminBoxSubDetails">
          <span> اکانت ها:</span> <span>تعداد 500 یوزر در دیتابیس فعال میباشد.</span>
          <div>مشاهده</div>
        </div>
        <div class="AdminBoxSubDetails">
          <span>آگهی های شما:</span> <span>شما تا اکنون تعداد 15 آگهی ثبت کرده اید.</span>
          <div>مشاهده</div>
        </div>
      </div>
    </div>

    <div class="SubmitAdvertisingContentBox">
      <div class="TitlePage">ثبت آگهی</div>
      <div class="UploadAdvertisingImagesBox">
        <span>آپلود عکس ها</span>
        <div class="UploadAdvertisingImagesSubBox FirstBox">
          <span>عکس اصلی آگهی شما این عکس میباشد</span>
          <span> تعداد عکس ها حداکثر 5 عدد میباشد</span>
          <div class="UploadImageBigBox"><img :src="ImageInsertInWeb[0]" alt="" /></div>
        </div>
        <div class="UploadAdvertisingImagesSubBox">
          <span>عکس ها را اینجا رها کنید یا برای آپلود کلیک کنید</span>
          <span>( حداکثر آپلود عکس 5 تا میباشد )</span>
          <div class="UploadImagesBox">
            <input type="file" id="InputImageInSubmitAdvertising" accept="image/*" v-on:input="previewImage" />
            <div class="ImageBox" v-for="Image in ImageInsertInWeb" :key="Image"><img :src="Image" alt="" /></div>
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
        <textarea name="" id="" rows="10"></textarea>
      </div>
      <div class="InformationAdvertisingBox">
        <span>وضعیت</span>
        <select>
          <option value="نو">نو</option>
          <option value="در حد نو">در حد نو</option>
          <option value="کار کرده">کار کرده</option>
          <option value="نیاز به تعمیر">نیاز به تعمیر</option>
        </select>
        <span>قیمت</span>
        <input type="number" value="0" />
        <span>عنوان آگهی</span>
        <input type="text" />
        <span>مشخصات</span>
        <div class="InformationAdvertisingSubBox">
          <div class="InformationInsertDataBox">
            <div class="TitleInformationInsertDataBox">موضوع</div>
            <div class="VerticalLineInformationInsertData"></div>
            <input type="text" name="" id="" placeholder="توضیحات " />
          </div>
          <div class="InformationInsertDataBox">
            <div class="TitleInformationInsertDataBox">موضوع</div>
            <div class="VerticalLineInformationInsertData"></div>
            <input type="text" name="" id="" placeholder="توضیحات " />
          </div>
          <div class="InformationInsertDataBox">
            <div class="TitleInformationInsertDataBox">موضوع</div>
            <div class="VerticalLineInformationInsertData"></div>
            <input type="text" name="" id="" placeholder="توضیحات " />
          </div>
          <div class="InformationInsertDataBox">
            <div class="TitleInformationInsertDataBox">موضوع</div>
            <div class="VerticalLineInformationInsertData"></div>
            <input type="text" name="" id="" placeholder="توضیحات " />
          </div>
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
      ImageInsertInWeb: [],
      ImageFiles: [],
    }
  },
  methods: {
    InsertImageButtonClicked() {
      document.getElementById('InputImageInSubmitAdvertising').click();
    },
    previewImage(element) {
      if (element.srcElement.files.length > 0) {
        const imageSrc = URL.createObjectURL(element.srcElement.files[0]);
        this.ImageInsertInWeb.push(imageSrc)
        this.ImageFiles.push(element.srcElement.files[0]);
      }
    },
    async SubmitAdvertising() {
      var data = new FormData();
      for (const file of ImageFiles) {
        data.append("files", file, file.name);
      }

      await fetch("http://localhost:3002/upload", {
        method: "POST",
        headers: {
          // Content-Type may need to be completely **omitted**
          // or you may need something
          // "Content-Type": "*",
        },
        body: data,
      });
    }
  },
  mounted() {
  },
}
</script>
<style>
@import url(@/static/css/submitAdvertisingPage.css);
</style>