<template>
  <div class="AdvertisingInformationSubBox">
    <div>{{ option_name }}</div>
    <div>{{ option_value }}</div>
  </div>
</template>
<script>
export default {
  props: ['option_name', 'option_value'],
}
</script>
