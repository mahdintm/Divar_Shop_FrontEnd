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
      default_profile: `${process.env.server_cdn_URL}/private/img/user.png`,
      user: {},
      linkUser: '',
    }
  },
  methods: {},
  computed: {},
  watch: {},
  async mounted() {
    this.linkUser = `ShowUser?id=${this.id}`
    try {
      const response = await fetch(
        `${process.env.server_URL}/api/user?id=${this.id}`
      )
      if (response.status === 404) {
        return
      }
      if (!response.ok) {
        throw new Error(`User request failed with HTTP ${response.status}`)
      }
      const user = await response.json()
      if (!user || typeof user !== 'object' || Array.isArray(user)) {
        throw new Error('User response was not a valid object')
      }
      this.user = user
    } catch (error) {
      console.error('User card lookup failed:', error)
      this.user = {}
    }
  },
  props: ['id'],
}
</script>
