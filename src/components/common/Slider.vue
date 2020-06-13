<template>
  <nav class="links">
    <template v-for="(item, index) in menu">
      <router-link :key="index" :to="item.to" :class="defaultPath === item.to && 'active'">
        {{ item.title }}
      </router-link>
    </template>
  </nav>
</template>

<script>
import Menu from '@/components/common/menu'
export default {
  data() {
    return {
      defaultPath: '/',
      menu: Menu,
    }
  },
  created() {
    this.$data.defaultPath = this.$route.path //初始化
  },
  watch: {
    $route: function() {
      this.$data.defaultPath = this.$route.path
    },
  },
}
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
    &.active {
      color: #18191a;
      font-weight: 600;
      border-bottom: 2px solid #1985ff;
    }
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
