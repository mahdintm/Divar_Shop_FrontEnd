<template>
  <nuxt-link :to="link">
    <span>{{ name }}</span>
  </nuxt-link>
</template>
<script>
export default {
  name: 'Child_sidebar_item',
  props: ['name', 'link'],
}
</script>
