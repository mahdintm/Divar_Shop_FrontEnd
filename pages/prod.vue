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
        content_item: '',
      }
    },
    async mounted() {
      
    },
    async computed(){
        
    },
    async watch(){
        this.content_item = await fetch(
        `http://${process.env.server_URL}/api/products?category=${this.$route.query.id}`
      ).then((res) => res.json())
    }
  }
  </script>
  <style>
  @import url(@/static/css/content.css);
  </style>
  