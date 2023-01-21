<template>
  <div @click="setFillterCategori(id)">
    <span>{{ name }}</span>
  </div>
</template>
<script>
export default {
  name: 'Child_sidebar_item',
  props: ['id', 'name', 'link'],
  methods: {
    setFillterCategori(s) {
      this.$nuxt.$emit('set-categories', s)
    },
  },
}
</script>
