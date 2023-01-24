<template>
  <nuxt-link :to="`Product?id=${link}`">
    <div class="D_ContentItem">
      <div class="D_ItemTitle">{{ title_ }}</div>
      <div class="D_ItemDescription">کد اموال : {{ code }}</div>
      <div class="D_ProductBottomBox">
        <div class="D_ProductBottomSubBox">
          <div class="D_ItemPrice">
            {{ new Intl.NumberFormat().format(price) }} ریال
          </div>
          <!-- <div class="D_ItemCreateTime">{{ time }}</div> -->
          <div class="D_ItemSlotBox">
            <div class="D_ItemSlotNumber">
              تعداد پیشنهاد ها : {{ register_COUNT.count }} نفر
            </div>
          </div>
        </div>
      </div>
      <div
        :class="
          image.length > 0 ? 'D_ItemImage BoxLoading' : 'D_ItemImageDontScale'
        "
      >
        <img :src="image.length > 0 ? image[0] : default_no_photo" alt="" />
      </div>
    </div>
  </nuxt-link>
</template>
<script>
import Content_Item_registration from '@/components/content/item_registration.vue'
export default {
  components: {
    Content_Item_registration,
  },
  data() {
    return {
      register_COUNT: {},
      default_no_photo: `${process.env.server_cdn_URL}/private/img/no-photo.png`,
    }
  },
  name: 'Content_Item',
  async mounted() {
    this.register_COUNT = await fetch(
      `${process.env.server_URL}/api/count_product_register?productid=${this.link}`
    ).then((res) => res.json())
  },
  props: [
    'title_',
    'description',
    'price',
    'time',
    'registrations',
    'image',
    'link',
    'code',
  ],
}
</script>
