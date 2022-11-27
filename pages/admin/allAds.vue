<template>
    <div class="D_CategoryBox">
        <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>
        <b-table :filter="filter" striped hover :items="items" :fields="fields">
            <template #cell(تعداد)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(date)="data">
        {{new Date(parseInt(data.item.date) ).toLocaleDateString('fa-IR',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}} |
         {{`${new Date(parseInt(data.item.date)).getHours()}:${new Date(parseInt(data.item.date)).getMinutes()}`}}
      </template>
      <template #cell(remove)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <lord-icon @click="remove(data.item.id)"
    src="https://cdn.lordicon.com/kfzfxczd.json"
    trigger="hover">
</lord-icon>
      </template>
      <template #cell(edit)="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <span :href="`/admin/removead?${data.item.id}`"> <lord-icon
    src="https://cdn.lordicon.com/hbigeisx.json"
    trigger="hover">
</lord-icon></span>
      </template>
      <template #cell(active)="data">
            <b-form-checkbox style="color: #A7211B;" :checked="!!data.item.active" @change="change($event,data.item.id)"  switch></b-form-checkbox>
      </template>
     
    </b-table>
    </div>
</template>
<script>
export default {
    layout:"admin",
    data() {
        return {
            filter:null,
            fields: [
            'تعداد',
            { key: 'title', label: 'عنوان آگهی' },
            { key: 'price', label: 'قیمت' },
            { key: 'date', label: 'تاریخ درج آگهی',sortable: true },
            { key: 'code', label: 'کد اموال' },
            { key: 'edit', label: 'ویرایش'},
            { key: 'remove', label: 'حذف'},
            { key: 'active', label: 'وضعیت فعالیت'},
            ,
        ],
            items: []
        }
    },
   async mounted() {
        this.items = await fetch(
      `http://${process.env.server_URL}/api/products`
    ).then(async (res) => await res.json())

        function test(params) {
            
        }
    },
    methods: {
      async  change(status,id){
        console.log(Boolean(status))
            await fetch(`http://${process.env.server_URL}/api/changeStatusPost?id=${id}&status=${status}`).then(
            async (res) => {
                await res.json()
                
                // this.items = await fetch(`http://${process.env.server_URL}/api/products`).then(async (res) => await res.json())
            })            
            this.$root.$emit('updateProductCount')
        },
        async remove(id){
            if (confirm("Press a button!")) {
             return   await fetch(`http://${process.env.server_URL}/api/deletePost?id=${id}`).then(
            async (res) => {
                await res.json()
                this.$root.$emit('updateProductCount')
                this.items = await fetch(`http://${process.env.server_URL}/api/products`).then(async (res) => await res.json())
            })
            } else {
                return
            }
       
        }
    },
    
}
</script>

<style>
@import url(@/static/css/categoryPage.css);
.custom-control-input:checked ~ .custom-control-label::before{
    background-color: #A7211b !important;
    border-color:#A7211b !important
}
</style>