<template>
  <div class="s-header">
    <div class="header-inner">
      <div>
        <div class="wrap header-main">
          <!-- logo -->
          <h1 class="logo">
            <router-link to="/">社区交流</router-link>
          </h1>
          <!-- 菜单栏 -->
          <Slider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/common/Slider'
export default {
  components: {
    Slider,
  },
}
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
  .wrap {
    width: 1120px;
    box-shadow: 0 4px 4px -4px rgba(98, 124, 153, 0.1);
    border-radius: 4px;
    position: relative;
    margin: 0 auto;
    .logo {
      position: absolute;
      left: 10px;
      height: 100%;
      width: 83px;
      line-height: 60px;
      color: black;
      font-size: 18px;
      color: #1985ff;
      cursor: pointer;
    }
  }
  .header-main {
    position: relative;
    height: 60px;
  }
}
</style>
