<template>
  <nuxt-link :to="`Product?id=${link}`">
    <div class="D_ContentItem">
      <div class="D_ItemTitle">{{ title_ }}</div>
      <div class="D_ItemDescription">{{ description }}</div>
      <div class="D_ProductBottomBox">
        <div class="D_ProductBottomSubBox">
          <div class="D_ItemPrice">{{ new Intl.NumberFormat().format(price) }} تومان</div>
          <!-- <div class="D_ItemCreateTime">{{ time }}</div> -->
          <div class="D_ItemSlotBox">
            <div class="D_ItemSlotNumber">{{ registrations.length }}/4</div>
            <div class="D_ItemAvatars" v-if="registrations.length > 0">
              <Content_Item_registration
                v-for="reg in registrations"
                :key="reg"
                :id="reg"
              />
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
      default_no_photo: `http://${process.env.server_cdn_URL}/private/img/no-photo.png`,
    }
  },
  name: 'Content_Item',
  mounted() {
    // var Result = '';
    // for (let i = 0; i < this.price.length; i++) {
    //   Result += this.price.charAt(i)
    //   if(i % 3 == 0)
    //     Result += ','
    // }
    // this.price = Result;
  },
  props: [
    'title_',
    'description',
    'price',
    'time',
    'registrations',
    'image',
    'link',
  ],
}
</script>
