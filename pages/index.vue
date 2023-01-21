<template>
  <div class="D_Content">
    <Content_Item_registration
      v-for="item in filteredProducts"
      :key="item.id"
      :title_="item.title"
      :description="item.description"
      :price="item.price"
      :time="'item.time'"
      :registrations="item.registrations"
      :image="item.imgs"
      :link="item.id"
      :code="item.code"
    />
  </div>
</template>

<script>
import Content_Item_registration from '@/components/content/item_Content.vue'
export default {
  components: { Content_Item_registration },
  data() {
    return {
      content_itemm: '',
      filteredProducts: '',
      filters: {
        s: '',
      },
    }
  },
  async mounted() {
    this.content_item = await fetch(
      `${process.env.server_URL}/api/products`
    ).then(async (res) => {
      let a = await res.json()
      this.filteredProducts = a.sort(() => Math.random() - 0.5)
      this.content_itemm = a.sort(() => Math.random() - 0.5)
    })
    this.$nuxt.$on('set-filters', (f) => {
      let products = this.content_itemm.filter((p) => {
        if (f.s) {
          if (isNaN(f.s)) {
            return (
              p.title.toLowerCase().indexOf(f.s) >= 0 ||
              p.description.toLowerCase().indexOf(f.s) >= 0
            )
          } else {
            return p.code.toString().match(f.s)
          }
        } else {
          return p
        }
      })
      this.filteredProducts = products.sort(() => Math.random() - 0.5)
    })
    this.$nuxt.$on('set-categories', (f) => {
      let products = this.content_itemm.filter((p) => p.category_id == f)
      this.filteredProducts = products.sort(() => Math.random() - 0.5)
    })
    this.$nuxt.$on('no-set-categories', (f) => {
      let products = this.content_itemm.sort(() => Math.random() - 0.5)
      this.filteredProducts = products
    })
  },
}
</script>
<style>
@import url(@/static/css/content.css);
</style>
