<template>
  <nuxt-link :to="linkUser">
    <div>
      <img :src="user.profile ? user.profile : default_profile" alt="" />
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'Content_Item_registration',
  data() {
    return {
      default_profile: `https://${process.env.server_cdn_URL}/private/img/user.png`,
      user: '',
      linkUser: '',
    }
  },
  methods: {},
  computed: {},
  watch: {},
  async mounted() {
    this.user = await fetch(
      `https://${process.env.server_URL}/api/user?id=${this.id}`
    ).then((res) => res.json())
    this.linkUser = `ShowUser?id=${this.id}`
  },
  props: ['id'],
}
</script>
