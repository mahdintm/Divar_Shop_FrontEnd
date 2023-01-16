<template>
  <nuxt-link :to="linkUser">
    <div class="RateOrderOfAdvertisingBox">
      <div class="RateOrderOfAdvertisingSubBox">
        <div class="AvatarClientBox">
          <img :src="user.profile ? user.profile : default_profile" alt="" />
        </div>
        <div class="ClientInformationBox">
          <div class="ClientInfoBox">
            {{
            user.firstname && user.lastname
            ? `${user.firstname} ${user.lastname}`
            : user.email
            }}
          </div>
          <div class="RateValueBox">قیمت پیشنهاد: {{new Intl.NumberFormat().format(price)}} تومان</div>
        </div>
      </div>
      <!-- <div class="RateOrderOfAdvertisingDateTime">2 دقیقه پیش</div> -->
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RateOrderOfAdvertisingSubBox',
  data() {
    return {
      default_profile: `https://${process.env.server_cdn_URL}/private/img/user.png`,
      user: '',
      linkUser: '',
    }
  },
  async mounted() {
    this.user = await fetch(
      `https://${process.env.server_URL}/api/user?id=${this.id}`
    ).then((res) => res.json())
    this.linkUser = `ShowUser?id=${this.id}`
  },
  props: ['id','price'],
}
</script>
