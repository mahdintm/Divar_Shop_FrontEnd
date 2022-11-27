<template>
  <div class="D_Content">
    <Content_Item_registration v-for="item in filteredProducts" v-if="item.active != false" :key="item.id" :title_="item.title"
      :description="item.description" :price="item.price" :time="'item.time'" :registrations="item.registrations"
      :image="item.imgs" :link="item.id"/>
  </div>
</template>

<script>
import Content_Item_registration from '@/components/content/item_Content.vue'
export default {
  components: { Content_Item_registration },
  data() {
    return {
      content_itemm: '',
      filteredProducts:"",
      filters: {
        s: ''
      }
    }
  },
  async mounted() {
    this.content_item = await fetch(
      `http://${process.env.server_URL}/api/products`
    ).then(async (res) => {
    let a  =await res.json()
     this.filteredProducts =a
     this.content_itemm = a
     console.log(this.filteredProducts)})
    this.$nuxt.$on('set-filters',(f)=> {
      let products = this.content_itemm.filter(p => p.title.toLowerCase().indexOf(f.s) >= 0||p.description.toLowerCase().indexOf(f.s) >= 0);
      this.filteredProducts = products
    })
    
  }
}
</script>
<style>
@import url(@/static/css/content.css);
</style>
