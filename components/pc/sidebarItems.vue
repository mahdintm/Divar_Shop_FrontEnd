<template>
  <nuxt-link :to="link">
    <div class="D_SideBarSubItem" @click="ToggleClickedItemSideBar">
      <span><i :class="icon"></i></span>
      <span>{{ name }}</span>
      <!-- <div v-if="count>0" class="SideBarNotifictionAlarm">{{count}}</div> -->
      <svg
        width="6"
        height="14"
        viewBox="0 0 6 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.40009 -6.67572e-06C5.24648 -6.67572e-06 5.09288 0.0762157 4.97587 0.227883L0.175712 6.45013C-0.0588961 6.75424 -0.0588961 7.2458 0.175712 7.54991L4.97587 13.7722C5.21048 14.0763 5.58969 14.0763 5.8243 13.7722C6.05891 13.468 6.05891 12.9765 5.8243 12.6724L1.44835 7.00002L5.8243 1.32767C6.05891 1.02355 6.05891 0.531996 5.8243 0.227883C5.7073 0.0762157 5.55369 -6.67572e-06 5.40009 -6.67572e-06Z"
          fill="#707070"
        />
      </svg>
    </div>
    <div class="ListOfSubItems">
      <Child_sidebar_item
        v-for="item in child"
        :key="item.name"
        :name="item.name"
        :link="item.link"
      />
    </div>
  </nuxt-link>
</template>
<script>
import Child_sidebar_item from '@/components/pc/childsidebaritem.vue'
export default {
  name: 'SideBarItem',
  methods: {
    ToggleClickedItemSideBar(elem) {
      console.log(elem)
      elem.srcElement.classList.toggle('OpenAnotherItems')
    },
  },
  computed: {},
  watch: {},
  mounted() {
    // this.child.length >0?this.link="#":this.link
  },
  components: { Child_sidebar_item },
  props: ['name', 'icon', 'link', 'count', 'child'],
}
</script>

<!-- <div class="D_SideBarSubItem">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H11V18H13C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18H9V16ZM17 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H17C17.5523 14 18 13.5523 18 13V3C18 2.44772 17.5523 2 17 2Z" fill="#707070" />
    </svg>
    <span>کالای دیجیتال</span>
    <div class="SideBarNotifictionAlarm">10</div>
  </div> -->

<!--   
    <div class="D_SideBarSubItem" onclick="ToggleClickedItemSideBar(this)">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0H11C12.5977 0 13.9037 1.24892 13.9949 2.82373L14 3V4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V7C0 5.34315 1.34315 4 3 4H6V3C6 1.40232 7.24892 0.0963391 8.82373 0.00509269L9 0H11H9ZM18 14H2V17C2 17.5523 2.44772 18 3 18H17C17.5523 18 18 17.5523 18 17V14ZM17 6H3C2.44772 6 2 6.44772 2 7V12H18V7C18 6.44772 17.5523 6 17 6ZM11 2H9C8.48716 2 8.06449 2.38604 8.00673 2.88338L8 3V4H12V3C12 2.48716 11.614 2.06449 11.1166 2.00673L11 2Z" fill="#707070" />
      </svg>
      <span>موارد اداری</span>
      
    </div>
    <div class="ListOfSubItems">
      <span>تست</span>
      <span>تست</span>
      <span>تست</span>
    </div> -->
