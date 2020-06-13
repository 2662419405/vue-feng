<template>
  <nav class="links">
    <router-link to="/">首页</router-link>
    <router-link to="/tags">标签</router-link>
    <router-link to="/tool">工具</router-link>
    <router-link to="/code">热门框架</router-link>
    <router-link to="/album">相册</router-link>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.links {
  display: inline-block;
  margin-left: 135px;
  margin-right: 14px;
  height: 100%;
  line-height: 60px;
  width: 340px;
  overflow-y: hidden;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 16px;
  > a {
    display: inline-block;
    color: #797c80;
    font-weight: 400;
    height: 60px;
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      color: #18191a;
      font-weight: 600;
    }
  }
}
</style>
