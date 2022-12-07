<template>
  <nuxt />
</template>
<
<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdn.lordicon.com/qjzruarw.js',
          body: true,
          async: true,
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/apexcharts',
          body: true,
          async: true,
        },
      ],
    }
  },
  mounted() {},
}
</script>
<style>
* {
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
}

a {
  text-decoration: none !important;
}
</style>
