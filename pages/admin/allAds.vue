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
      <template #cell(date)="data">
        {{
          new Date(parseInt(data.item.date)).toLocaleDateString('fa-IR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        |
        {{
          `${new Date(parseInt(data.item.date)).getHours()}:${new Date(
            parseInt(data.item.date)
          ).getMinutes()}`
        }}
      </template>
      <template #cell(remove)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <lord-icon
          class="pointer"
          @click="remove(data.item.id)"
          src="https://cdn.lordicon.com/kfzfxczd.json"
          trigger="morph"
        >
        </lord-icon>
      </template>
      <template #cell(goto)="data">
        <nuxt-link :to="`/product?id=${data.item.id}`"
          ><lord-icon
            class="pointer"
            src="https://cdn.lordicon.com/ofwpzftr.json"
            trigger="morph"
          >
          </lord-icon
        ></nuxt-link>
        <!-- `data.value` is the value after formatted by the Formatter -->
      </template>

      <template #cell(register)="data">
        {{ data.item.registrations.length }}
      </template>
      <template #cell(edit)="data">
        <nuxt-link :to="`/admin/edit?id=${data.item.id}`">
          <span class="pointer" :href="`/admin/removead?${data.item.id}`">
            <lord-icon
              src="https://cdn.lordicon.com/hbigeisx.json"
              trigger="morph"
            >
            </lord-icon
          ></span>
        </nuxt-link>
      </template>
      <template #cell(active)="data">
        <b-form-checkbox
          style="color: #a7211b"
          :checked="!!data.item.active"
          @change="change($event, data.item.id)"
          switch
        ></b-form-checkbox>
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
        { key: 'title', label: 'عنوان آگهی' },
        { key: 'price', label: 'قیمت' },
        { key: 'register', label: 'تعداد خریداران', sortable: true },
        { key: 'date', label: 'تاریخ درج آگهی', sortable: true },
        { key: 'code', label: 'کد اموال', sortable: true },
        { key: 'edit', label: 'ویرایش' },
        { key: 'remove', label: 'حذف' },
        { key: 'goto', label: 'دیدن آگهی' },
        { key: 'active', label: 'وضعیت فعالیت' },
        ,
      ],
      items: [],
    }
  },
  async mounted() {
    try {
      const response = await fetch(
        `${process.env.server_URL}/api/products`
      )
      if (!response.ok) {
        throw new Error(`Product list request failed with HTTP ${response.status}`)
      }
      this.items = await response.json()
    } catch (error) {
      console.error('Admin ad loading failed:', error)
      alert('بارگذاری آگهی‌ها با خطا مواجه شد')
    }
  },
  methods: {
    async test() {
      const data = []
      let i = 0
      for await (const element of this.items) {
        i = 0
        let d__ = {
          id: element.id,
          title: element.title,
          price: element.price,
          code: element.code,
          active: element.active,
        }
        for await (const element__ of element.registrations) {
          let userd = await fetch(
            `${process.env.server_URL}/api/user?id=${element__.id}`
          ).then(async (res) => await res.json())
          switch (i) {
            case 0:
              d__['oneـperson'] = {
                email: await userd.email,
                price: element__.price,
              }
              break
            case 1:
              d__['secondـperson'] = {
                email: await userd.email,
                price: element__.price,
              }
              break
            case 2:
              d__['thridـperson'] = {
                email: await userd.email,
                price: element__.price,
              }
              break
            case 3:
              d__['fourthـperson'] = {
                email: await userd.email,
                price: element__.price,
              }
              break
          }
          i++
        }
        data.push(d__)
      }

      const fileName = `Export_${process.env.APP_NAME}_${Date.now()}`
      const exportType = exportFromJSON.types.xls

      if (data) exportFromJSON({ data, fileName, exportType })
    },
    async change(status, id) {
      try {
        const response = await fetch(
          `${process.env.server_URL}/api/changeStatusPost?id=${id}&status=${status}`
        )
        if (!response.ok) {
          throw new Error(
            `Change status request failed with HTTP ${response.status}`
          )
        }
        const result = await response.json()
        if (result.res !== true) {
          throw new Error('Change status request returned an unsuccessful result')
        }
        this.$root.$emit('updateProductCount')
      } catch (error) {
        console.error('Admin ad status change failed:', error)
        alert('تغییر وضعیت آگهی با خطا مواجه شد')
      }
    },
    async remove(id) {
      if (confirm('Press a button!')) {
        try {
          const response = await fetch(
            `${process.env.server_URL}/api/deletePost?id=${id}`
          )
          if (!response.ok) {
            throw new Error(
              `Delete request failed with HTTP ${response.status}`
            )
          }
          const result = await response.json()
          if (result !== true) {
            throw new Error('Delete request returned an unsuccessful result')
          }
          this.$root.$emit('updateProductCount')
          const refreshResponse = await fetch(
            `${process.env.server_URL}/api/products`
          )
          if (!refreshResponse.ok) {
            throw new Error(
              `Product list refresh failed with HTTP ${refreshResponse.status}`
            )
          }
          this.items = await refreshResponse.json()
        } catch (error) {
          console.error('Admin ad deletion failed:', error)
          alert('حذف آگهی با خطا مواجه شد')
        }
      } else {
        return
      }
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
