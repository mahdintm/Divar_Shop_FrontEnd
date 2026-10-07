<template>
  <div>
    <b-modal
      id="modal-center"
      :no-close-on-backdrop="true"
      centered
      scrollable
      title="شرایط و مقررات"
    >
      <p style="direction: rtl; text-align: right" class="my-4">
        من یک متن تستی هستم برای تست مقررات باید تیک پایین رو بزنی تا همه درست
        شه
      </p>
      <b-form-checkbox
        style="direction: rtl; text-align: right"
        id="checkbox-1"
        v-model="status_REQ"
        name="checkbox-1"
        :value="true"
        :unchecked-value="false"
      >
        من شرایط رو قبول میکنم
      </b-form-checkbox>
      <template style="text-align: center" #modal-footer="{}">
        <b-button
          style="padding: 6px 20px 3px 20px"
          :disabled="!status_REQ ? true : false"
          size="sm"
          variant="success"
          @click="ok()"
        >
          OK
        </b-button>
      </template>
    </b-modal>
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
  </div>
</template>

<script>
import Content_Item_registration from '@/components/content/item_Content.vue'
export default {
  components: { Content_Item_registration },
  data() {
    return {
      content_itemm: [],
      filteredProducts: [],
      filters: {
        s: '',
      },
      status_REQ: false,
    }
  },
  methods: {
    ok() {
      localStorage.setItem('req', 'true')
      this.$bvModal.hide('modal-center')
    },
    handleSetFilters(f) {
      const searchTerm = String(f?.s ?? '')
      let products = this.content_itemm.filter((p) => {
        if (searchTerm) {
          if (isNaN(searchTerm)) {
            const normalizedSearchTerm = searchTerm.toLowerCase()
            return (
              p.title.toLowerCase().indexOf(normalizedSearchTerm) >= 0 ||
              p.description.toLowerCase().indexOf(normalizedSearchTerm) >= 0
            )
          } else {
            return p.code.toString().match(searchTerm)
          }
        } else {
          return p
        }
      })
      this.filteredProducts = products.sort(() => Math.random() - 0.5)
    },
    handleSetCategories(f) {
      let products = this.content_itemm.filter((p) => p.category_id == f)
      this.filteredProducts = products.sort(() => Math.random() - 0.5)
    },
    handleClearCategories() {
      let products = this.content_itemm.sort(() => Math.random() - 0.5)
      this.filteredProducts = products
    },
  },
  async mounted() {
    try {
      const response = await fetch(
        `${process.env.server_URL}/api/products`
      )
      if (!response.ok) {
        throw new Error(`Homepage products request failed with HTTP ${response.status}`)
      }
      const products = await response.json()
      if (!Array.isArray(products)) {
        throw new Error('Homepage products response was not an array')
      }
      this.content_itemm = [...products]
      this.filteredProducts = [...products].sort(() => Math.random() - 0.5)
    } catch (error) {
      console.error('Homepage product loading failed:', error)
      this.content_itemm = []
      this.filteredProducts = []
    }
    this.$nuxt.$on('set-filters', this.handleSetFilters)
    this.$nuxt.$on('set-categories', this.handleSetCategories)
    this.$nuxt.$on('no-set-categories', this.handleClearCategories)
    if ((await this.$route.query.set_categories) != undefined) {
      await this.$nuxt.$emit('set-categories', this.$route.query.set_categories)
    }
    if (localStorage.getItem('req') != 'true') {
      this.$bvModal.show('modal-center')
    }
  },
  beforeDestroy() {
    this.$nuxt.$off('set-filters', this.handleSetFilters)
    this.$nuxt.$off('set-categories', this.handleSetCategories)
    this.$nuxt.$off('no-set-categories', this.handleClearCategories)
  },
}
</script>
<style>
@import url(@/static/css/content.css);
.modal-footer {
  justify-content: center !important;
}
.modal-header .close {
  display: none;
}
</style>
