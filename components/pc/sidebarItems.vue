<template>
    <nuxt-link :to="link">
        <div class="D_SideBarSubItem">
            <span><i :class="icon"></i></span> 
            <span>{{ name }}</span>
            <div v-if="count>0" class="SideBarNotifictionAlarm">{{count}}</div>
        </div>
    </nuxt-link>
</template>
<script>

export default {
  name: 'SideBarItem',
  methods: {},
  computed: {},
  watch: {},
  props: ['name', 'icon', 'link','count'],
}
</script>

<!-- <div class="D_SideBarSubItem">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V13C20 14.6569 18.6569 16 17 16H11V18H13C13.5523 18 14 18.4477 14 19C14 19.5523 13.5523 20 13 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18H9V16ZM17 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H17C17.5523 14 18 13.5523 18 13V3C18 2.44772 17.5523 2 17 2Z" fill="#707070" />
    </svg>
    <span>کالای دیجیتال</span>
    <div class="SideBarNotifictionAlarm">10</div>
  </div> -->