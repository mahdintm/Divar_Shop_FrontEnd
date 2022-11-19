<template>
  <div class="D_Header">
    <div class="D_RightHeader">
      <nuxt-link :to="`/`">
        <div class="D_HeaderLogo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.38553 14.6173H8.28043C7.89506 14.5647 7.63232 14.1969 7.68487 13.8115C8.15781 10.6936 8.31546 5.71887 8.31546 5.68384C8.35049 5.29848 8.64827 4.98318 9.05115 5.0007C9.43652 5.01821 9.7343 5.33351 9.7343 5.71887C9.7343 5.92907 9.55913 10.8162 9.08619 14.0217C9.03364 14.372 8.73586 14.6173 8.38553 14.6173ZM18.4225 15.9135C18.1247 15.9135 17.8444 15.7208 17.7569 15.423C17.6342 15.0552 17.8444 14.6523 18.2123 14.5472C21.5229 13.4962 21.5754 12.6904 21.593 12.2525C21.628 11.5694 21.1025 10.6936 20.8923 10.3958C20.6646 10.0805 20.7347 9.64257 21.05 9.41485C21.3652 9.18714 21.8032 9.2572 22.0309 9.5725C22.136 9.71263 23.0819 11.0264 22.9943 12.3401C22.9067 13.9341 21.6805 14.915 18.6327 15.896C18.5976 15.896 18.5626 15.9003 18.5276 15.9047C18.4925 15.9091 18.4575 15.9135 18.4225 15.9135ZM8.91102 18.3833C8.70082 18.3833 8.49063 18.2957 8.36801 18.1206C8.12278 17.8228 8.17533 17.3673 8.49063 17.1396C9.92698 16.0011 10.8904 14.9851 11.521 14.0918C11.1706 13.9166 10.8028 13.6538 10.6101 13.2159C10.435 12.8131 10.3299 12.1474 10.9429 11.2541C11.8188 9.95786 12.6946 9.66008 13.0274 9.59002C13.4828 9.50244 13.9207 9.76518 14.0434 10.2031C14.1309 10.5184 14.3411 11.5168 13.7105 13.0408C14.5513 13.0233 15.217 12.7955 15.7249 12.3751C16.7059 11.5869 16.7584 10.2556 16.7584 10.2381C16.7759 9.85277 17.0912 9.55498 17.4766 9.55498C17.8619 9.5725 18.1597 9.8878 18.1597 10.2732C18.1597 10.3432 18.0897 12.2175 16.6358 13.4436C15.7249 14.2144 14.4813 14.5472 12.9748 14.4246C12.2567 15.5281 11.1181 16.8243 9.34893 18.2256C9.2088 18.3307 9.06867 18.3833 8.91102 18.3833ZM12.7121 11.3066C12.5194 11.4643 12.3092 11.692 12.0815 12.0423C11.8538 12.3927 11.8363 12.5853 11.8538 12.6379C11.8888 12.7255 12.064 12.8131 12.2392 12.8831C12.572 12.2175 12.6771 11.692 12.7121 11.3066ZM12.8873 16.2288C12.9048 16.6141 13.2201 16.9119 13.5879 16.9119H13.623C13.6755 16.9119 14.8491 16.8769 16.5307 16.4915C16.9161 16.4039 17.1613 16.0361 17.0737 15.6507C16.9861 15.2654 16.6183 15.0201 16.2329 15.1077C14.6739 15.4405 13.5704 15.4931 13.5529 15.4931C13.1675 15.5106 12.8697 15.8434 12.8873 16.2288ZM1.1337 18.103C1.25631 18.2782 1.48403 18.3833 1.69423 18.3833C1.83436 18.3833 1.97449 18.3483 2.11462 18.2607C6.56381 15.0201 6.73898 10.7811 6.73898 10.606C6.73898 10.2206 6.4412 9.90531 6.05583 9.8878C5.67047 9.87028 5.35517 10.1856 5.33766 10.5709C5.33766 10.7111 5.16249 14.302 1.29135 17.1221C0.976049 17.3498 0.905983 17.7877 1.1337 18.103Z"
              fill="#A62626"
            />
          </svg>
        </div>
      </nuxt-link>
      <label for="SearchBarInput">
        <div class="D_SearchBarHeader">
          <lord-icon
            src="https://cdn.lordicon.com/rlizirgt.json"
            trigger="hover"
            colors="primary:#707070"
            style="width: 24px; height: 24px"
          >
          </lord-icon>
          <input type="text" id="SearchBarInput" placeholder="جستجو" />
        </div>
      </label>
    </div>
    <div class="D_LeftHeader">
      <div class="D_ContentHeader">
        <div class="D_AvatarHeader" @click="OpenProfileModal">
          <img src="@/static/img/avatar.png" alt="" />
        </div>
        <div class="D_IconsHeader">
          <!-- Start Setting Icon Codes -->
          <lord-icon
            src="https://cdn.lordicon.com/dycatgju.json"
            trigger="hover"
            id="SettingIcon"
            class="SettingIcon"
            colors="primary:#707070"
            style="width: 24px; height: 24px"
          >
          </lord-icon>
          <!-- Stop Setting Icon Codes -->

          <!-- Start Cart Icon Codes -->
          <lord-icon
            src="https://cdn.lordicon.com/lqsduwhb.json"
            trigger="hover"
            id="CartIcon"
            class="CartIcon"
            colors="primary:#707070"
            style="width: 24px; height: 24px"
          >
          </lord-icon>
          <!-- Stop Cart Icon Codes -->

          <!-- Start Notification Icon Codes -->
          <lord-icon
            src="https://cdn.lordicon.com/msetysan.json"
            trigger="hover"
            id="NotificationIcon"
            class="NotificationIcon ActiveMarkIcon"
            colors="primary:#707070"
            style="width: 24px; height: 24px"
          >
          </lord-icon>
          <!-- Stop Notification Icon Codes -->

          <!-- Start Help Icon Codes -->
          <lord-icon
            src="https://cdn.lordicon.com/gmgkjaqp.json"
            trigger="hover"
            id="HelpIcon"
            class="HelpIcon"
            colors="primary:#707070"
            state="hover-1"
            style="width: 24px; height: 24px"
          >
          </lord-icon>
          <!-- Stop Help Icon Codes -->
        </div>
      </div>
    </div>

    <!-- Start Profile Modal -->
    <div class="D_ProfileModalSubBox" id="D_ProfileModal">
      <div class="ClientInformationBox">
        <div class="MenuIconBox">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 14.875C11.4665 14.875 12.25 15.6585 12.25 16.625C12.25 17.5915 11.4665 18.375 10.5 18.375C9.5335 18.375 8.75 17.5915 8.75 16.625C8.75 15.6585 9.5335 14.875 10.5 14.875ZM10.5 8.75C11.4665 8.75 12.25 9.5335 12.25 10.5C12.25 11.4665 11.4665 12.25 10.5 12.25C9.5335 12.25 8.75 11.4665 8.75 10.5C8.75 9.5335 9.5335 8.75 10.5 8.75ZM10.5 2.625C11.4665 2.625 12.25 3.4085 12.25 4.375C12.25 5.3415 11.4665 6.125 10.5 6.125C9.5335 6.125 8.75 5.3415 8.75 4.375C8.75 3.4085 9.5335 2.625 10.5 2.625Z" fill="#252525"/>
          </svg>
        </div>

        <div class="ClientAvatarBox">
          <img src="@/static/img/avatar.png" alt="" />
        </div>
        <div class="ClientUsernameInformation">
          <span>Toofan Tootian</span>
          <div class="ClientPermissionBox"><span>Admin</span></div>
        </div>
      </div>
      <div class="ChangeClientInfoBox">
        <label for="ProfileModalUsenameInput">
          <span>نام کاربری</span>
          <input type="text" id="ProfileModalUsenameInput" @blur="FocusOutInput" value="شیوا کمالی" disabled>
          <div class="EditIconBox" @click="OpenInputForEditing">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 15.6667C16.9603 15.6667 17.3334 16.0398 17.3334 16.5C17.3334 16.9602 16.9603 17.3333 16.5 17.3333H1.50002C1.03978 17.3333 0.666687 16.9602 0.666687 16.5C0.666687 16.0398 1.03978 15.6667 1.50002 15.6667H16.5ZM4.2441 10.0774L13.4108 0.910744C13.7112 0.610341 14.1839 0.587233 14.5108 0.841421L14.5893 0.910744L17.0893 3.41074C17.3897 3.71115 17.4128 4.18384 17.1586 4.51075L17.0893 4.58926L7.92261 13.7559C7.79238 13.8862 7.62348 13.9688 7.44289 13.9928L7.33335 14H4.83335C4.40599 14 4.05376 13.6783 4.00563 13.2639L4.00002 13.1667V10.6667C4.00002 10.4825 4.06099 10.3046 4.17175 10.16L4.2441 10.0774L13.4108 0.910744L4.2441 10.0774ZM14 2.67851L5.66669 11.0118V12.3333H6.98818L15.3215 4L14 2.67851Z" fill="#707070" fill-opacity="0.8"/>
            </svg>
          </div>
        </label>

        <label for="ProfileModalPhoneInput">
          <span>تلفن همراه</span>
          <input type="text" id="ProfileModalPhoneInput" @blur="FocusOutInput" value="09121234545" disabled>
          <div class="EditIconBox" @click="OpenInputForEditing">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 15.6667C16.9603 15.6667 17.3334 16.0398 17.3334 16.5C17.3334 16.9602 16.9603 17.3333 16.5 17.3333H1.50002C1.03978 17.3333 0.666687 16.9602 0.666687 16.5C0.666687 16.0398 1.03978 15.6667 1.50002 15.6667H16.5ZM4.2441 10.0774L13.4108 0.910744C13.7112 0.610341 14.1839 0.587233 14.5108 0.841421L14.5893 0.910744L17.0893 3.41074C17.3897 3.71115 17.4128 4.18384 17.1586 4.51075L17.0893 4.58926L7.92261 13.7559C7.79238 13.8862 7.62348 13.9688 7.44289 13.9928L7.33335 14H4.83335C4.40599 14 4.05376 13.6783 4.00563 13.2639L4.00002 13.1667V10.6667C4.00002 10.4825 4.06099 10.3046 4.17175 10.16L4.2441 10.0774L13.4108 0.910744L4.2441 10.0774ZM14 2.67851L5.66669 11.0118V12.3333H6.98818L15.3215 4L14 2.67851Z" fill="#707070" fill-opacity="0.8"/>
            </svg>
          </div>
        </label>
        <label for="ProfileModalEmailInput">
          <span>ایمیل</span>
          <input type="text" id="ProfileModalEmailInput" @blur="FocusOutInput" value="BessieCooper@example.com" disabled>
          <div class="EditIconBox" @click="OpenInputForEditing">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 15.6667C16.9603 15.6667 17.3334 16.0398 17.3334 16.5C17.3334 16.9602 16.9603 17.3333 16.5 17.3333H1.50002C1.03978 17.3333 0.666687 16.9602 0.666687 16.5C0.666687 16.0398 1.03978 15.6667 1.50002 15.6667H16.5ZM4.2441 10.0774L13.4108 0.910744C13.7112 0.610341 14.1839 0.587233 14.5108 0.841421L14.5893 0.910744L17.0893 3.41074C17.3897 3.71115 17.4128 4.18384 17.1586 4.51075L17.0893 4.58926L7.92261 13.7559C7.79238 13.8862 7.62348 13.9688 7.44289 13.9928L7.33335 14H4.83335C4.40599 14 4.05376 13.6783 4.00563 13.2639L4.00002 13.1667V10.6667C4.00002 10.4825 4.06099 10.3046 4.17175 10.16L4.2441 10.0774L13.4108 0.910744L4.2441 10.0774ZM14 2.67851L5.66669 11.0118V12.3333H6.98818L15.3215 4L14 2.67851Z" fill="#707070" fill-opacity="0.8"/>
            </svg>
          </div>
        </label>
      </div>
      <div class="LogOutButtonBox" @click="$nuxt.$emit('logout')">خروج</div>
    </div>
    <!-- Stop Profile Modal -->
  </div>
</template>

<script>
export default {
  name: 'NavBar_PC',
  methods: {
    OpenProfileModal(){
      document.getElementById('D_ProfileModal').classList.toggle('ActiveProfileModal');
    },
    FocusOutInput(element){
      element.srcElement.classList.remove('ActiveInputForEditingInformation')
      element.srcElement.setAttribute('disabled', '')
      // Save Value And send tu backend in this line
    },
    OpenInputForEditing(element){
      for (let i = 0; i < element.path.length; i++) 
        if (element.path[i].tagName == "LABEL") {
          for (let j = 0; j < element.path[i].childNodes.length; j++) {
           if(element.path[i].childNodes[j].tagName == 'INPUT'){
            element.path[i].childNodes[j].removeAttribute('disabled')
            element.path[i].childNodes[j].classList.add("ActiveInputForEditingInformation");
            element.path[i].childNodes[j].setSelectionRange(element.path[i].childNodes[j].value.length, element.path[i].childNodes[j].value.length);
            element.path[i].childNodes[j].focus();
            break;
           }
          }
          break;
        }
    }
  },
  mounted() {
    document
      .getElementById('SettingIcon')
      .addEventListener('mouseenter', () => {
        document.getElementById('SettingIcon').colors = 'primary:#252525'
      })
    document
      .getElementById('SettingIcon')
      .addEventListener('mouseleave', () => {
        document.getElementById('SettingIcon').colors = 'primary:#707070'
      })
    document.getElementById('CartIcon').addEventListener('mouseenter', () => {
      document.getElementById('CartIcon').colors = 'primary:#252525'
    })
    document.getElementById('CartIcon').addEventListener('mouseleave', () => {
      document.getElementById('CartIcon').colors = 'primary:#707070'
    })
    document
      .getElementById('NotificationIcon')
      .addEventListener('mouseenter', () => {
        document.getElementById('NotificationIcon').colors = 'primary:#252525'
      })
    document
      .getElementById('NotificationIcon')
      .addEventListener('mouseleave', () => {
        document.getElementById('NotificationIcon').colors = 'primary:#707070'
      })
    document.getElementById('HelpIcon').addEventListener('mouseenter', () => {
      document.getElementById('HelpIcon').colors = 'primary:#252525'
    })
    document.getElementById('HelpIcon').addEventListener('mouseleave', () => {
      document.getElementById('HelpIcon').colors = 'primary:#707070'
    })
  },
}
</script>
<style>
@import url(@/static/css/header.css);
</style>
