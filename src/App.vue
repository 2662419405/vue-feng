<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    document.title = this.$route.meta.title
  },
  watch: {
    $route: function() {
      document.title = this.$route.meta.title
    },
  },
}
</script>

<style></style>
