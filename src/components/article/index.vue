<template>
  <div>
    <div class="list-header">
      <nav class="list-nav">
        <ul class="nav-list">
          <li class="active">热门推荐</li>
          <li>最近一周</li>
          <li>最近一个月</li>
        </ul>
      </nav>
    </div>
    <ul class="home-list">
      <template v-for="item in article">
        <Item class="entrt-item" :key="item.id" :item="item" />
      </template>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Item from './item'
export default {
  components: {
    Item,
  },
  computed: {
    ...mapState(['article']),
  },
}
</script>

<style lang="scss">
.entrt-item {
  min-height: 90px;
  position: relative;
  .content-box {
    padding: 18px 24px;
    overflow: auto;
    cursor: default;
  }
  .entry-left {
    height: 100%;
    overflow: hidden;
    font-size: 0;
  }
  &::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 1px;
    width: 764px;
    border-bottom: 1px solid #f5f6f7;
  }
}
.list-header {
  position: relative;
  padding: 19px 8px;
  border-bottom: 1px solid #f5f6f7;
  .list-nav {
    justify-content: flex-start;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
  .nav-list {
    display: flex;
    align-items: center;
    li {
      padding: 0 16px;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 16px;
      &:hover {
        color: #1985ff;
        font-weight: 600;
      }
    }
    .active {
      color: #1985ff;
      font-weight: 600;
    }
  }
}
</style>
