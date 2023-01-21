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
    async setFillterCategori(s) {
      if ((await this.$route.name) == 'index') {
        this.$nuxt.$emit('set-categories', s)
      } else {
        this.$router.push(`/?set_categories=${s}`)
      }
    },
  },
}
</script>
