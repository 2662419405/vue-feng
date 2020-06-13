<template>
  <div class="s-header">
    <div class="header-inner">123</div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.s-header {
  height: 60px;
  margin-bottom: 16px;
  .header-inner {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(114, 144, 179, 0.06);
  }
}
</style>
