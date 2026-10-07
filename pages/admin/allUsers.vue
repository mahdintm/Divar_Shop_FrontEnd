<template>
  <div class="D_CategoryBox">
    <b href="#" @click="test">Export to Excel File</b>
    <b-form-input
      id="filter-input"
      v-model="filter"
      type="search"
      placeholder="جستجو"
    ></b-form-input>
    <b-table
      id="tbl"
      :filter="filter"
      striped
      hover
      :items="items"
      :fields="fields"
    >
      <template #cell(تعداد)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(lastLogin)="data">
        {{
          new Date(parseInt(data.item.lastLogin)).toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        |
        {{
          `${new Date(parseInt(data.item.lastLogin)).getHours()}:${new Date(
            parseInt(data.item.lastLogin)
          ).getMinutes()}`
        }} </template
      ><template #cell(firstLogin)="data">
        {{
          new Date(parseInt(data.item.firstLogin)).toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        |
        {{
          `${new Date(parseInt(data.item.firstLogin)).getHours()}:${new Date(
            parseInt(data.item.firstLogin)
          ).getMinutes()}`
        }}
      </template>
      <template #cell(acl)="data">
        {{ data.item.acl == 1 ? 'مدیر' : 'کاریر' }}
      </template>

    </b-table>
  </div>
</template>
<script>
import exportFromJSON from 'export-from-json'
export default {
  layout: 'admin',
  data() {
    return {
      filter: null,
      fields: [
        'تعداد',
        { key: 'email', label: 'ایمیل' },
        { key: 'firstname', label: 'نام' },
        { key: 'lastname', label: 'نام خانوادگی' },
        { key: 'phonenumber', label: 'شماره موبایل' },
        { key: 'firstLogin', label: 'اولین ورود' },
        { key: 'lastLogin', label: 'آخرین ورود' },
        { key: 'acl', label: 'سطح دسترسی' },
      ],
      items: [],
    }
  },
  async mounted() {
    try {
      const response = await fetch(
        `${process.env.server_URL}/api/getAllUsers`
      )
      if (!response.ok) {
        throw new Error(
          `Admin user list request failed with HTTP ${response.status}`
        )
      }
      const users = await response.json()
      if (!Array.isArray(users)) {
        throw new Error('Admin user list response was not an array')
      }
      this.items = users
    } catch (error) {
      console.error('Admin user list loading failed:', error)
      this.$nuxt.$emit(
        'showErrorAlert',
        'خطا در دریافت اطلاعات کاربران'
      )
    }
  },
  methods: {
    async test() {
      const data = this.items.map((element) => ({
        id: element.id,
        username: element.username,
        email: element.email,
        firstname: element.firstname,
        lastname: element.lastname,
        phonenumber: element.phonenumber,
        firstLogin: element.firstLogin,
        lastLogin: element.lastLogin,
        acl: element.acl,
      }))

      const fileName = `Export_${process.env.APP_NAME}_${Date.now()}`
      const exportType = exportFromJSON.types.xls

      if (data) exportFromJSON({ data, fileName, exportType })
    },

  },
}
</script>

<style>
@import url(@/static/css/categoryPage.css);

.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #a7211b !important;
  border-color: #a7211b !important;
}

.pointer {
  cursor: pointer;
}
</style>
