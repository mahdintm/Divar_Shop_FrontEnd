<template>
  <div>
    <div
      :id="'sidebar_id_' + id"
      class="D_SideBarSubItem"
      @click="ToggleClickedItemSideBar(`sidebar_id_${id}`)"
    >
      <!-- <i :class="icon"></i> -->
      <!-- <font-awesome-icon class="link-logo" :icon="['fas', 'user-secret']" /> -->
      <i :class="icon"></i>

      <span>{{ name }}</span>
      <!-- <div v-if="count>0" class="SideBarNotifictionAlarm">{{count}}</div> -->
      <svg
        v-if="child.length != 0"
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
        :id="item.id"
        :name="item.name"
        :link="item.link"
      />
    </div>
  </div>
</template>
<script>
import Child_sidebar_item from '@/components/pc/childsidebaritem.vue'
export default {
  name: 'SideBarItem',
  methods: {
    ToggleClickedItemSideBar(id) {
      return document.getElementById(id).classList.toggle('OpenAnotherItems')
    },
  },
  computed: {},
  watch: {},
  mounted() {
    // this.child.length >0?this.link="#":this.link
  },
  components: { Child_sidebar_item },
  props: ['id', 'name', 'icon', 'link', 'count', 'child'],
}
</script>
