<template>
  <div class="D_Content">
    <Content_Item_registration v-for="item in content_item" :key="item.id" :title_="item.title"
      :description="item.description" :price="item.price" :time="item.time" :registrations="item.registrations"
      :image="item.imgs" :link="item.id" />
  </div>
</template>

<script>
import Content_Item_registration from '@/components/content/item_Content.vue'
export default {
  components: { Content_Item_registration },
  data() {
    return {
      content_item: [],
      productsRequestId: 0,
    }
  },
  methods: {
    async loadProducts() {
      const requestId = ++this.productsRequestId
      const categoryId = this.$route.query.id
      try {
        const response = await fetch(
          `${process.env.server_URL}/api/products?category=${categoryId}`
        )
        if (!response.ok) {
          throw new Error(
            `Category products request failed with HTTP ${response.status}`
          )
        }
        const products = await response.json()
        if (!Array.isArray(products)) {
          throw new Error('Category products response was not an array')
        }
        if (requestId !== this.productsRequestId) {
          return
        }
        this.content_item = products
      } catch (error) {
        if (requestId !== this.productsRequestId) {
          return
        }
        console.error('Category products loading failed:', error)
        this.content_item = []
      }
    },
  },
  async mounted() {
    await this.loadProducts()
  },
  watch: {
    '$route.query.id': {
      async handler() {
        await this.loadProducts()
      },
    },
  },
}
</script>
<style>
@import url(@/static/css/content.css);
</style>
