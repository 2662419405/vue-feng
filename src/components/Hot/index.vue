<template>
  <div class="hot-content-wrap f-card dow">
    <div class="f-card-header">
      <div class="title">
        <a-icon type="rise" />
        <span>社区热门</span>
      </div>
    </div>
    <div class="f-card-body">
      <div v-for="(item, index) in home_hot" :key="item.id" class="item">
        <div class="rank">
          <div class="num">{{ index + 1 }}</div>
        </div>
        <a-tooltip placement="topLeft">
          <template slot="title">{{ item.title }}</template>
          <div class="item-content">
            <router-link :to="item.id">{{ item.title }}</router-link>
            <div class="info">
              <div class="topic-name">{{ item.phone }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
          </div>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    console.log(this.$store)
  },
  computed: {
    ...mapState(['home_hot']),
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  height: 47px;
  position: relative;
  cursor: default;
  &:nth-child(1) .num {
    background: #ff2a2a;
    color: #fff;
  }
  &:nth-child(2) .num {
    color: #fff;
    background: #ff7171;
  }
  &:nth-child(3) .num {
    color: #fff;
    background: #ff9900;
  }
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  .num {
    width: 30px;
    margin: 0 5px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    background: #f3f3f3;
    color: #6a6a6a;
    position: relative;
    top: 3px;
  }
  .item-content {
    flex: 1;
    min-width: 282px;
    margin-left: 10px;
    padding-right: 20px;
    align-items: flex-end;
    > a {
      display: block;
      width: 100%;
      height: 22px;
      line-height: 22px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      color: #494b4d;
      cursor: pointer;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .info {
      display: flex;
      justify-content: space-between;
      height: 17px;
      line-height: 17px;
      color: #797c80;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
.dow {
  box-shadow: 0 0 2px 0 rgba(98, 124, 153, 0.1);
}
.hot-content-wrap {
  margin-bottom: 12px;
}
.f-card {
  padding: 16px 20px;
  background-color: #fff;
  border-radius: 4px;
}
.f-card-header {
  position: relative;
  padding-bottom: 16px;
  overflow: hidden;
  .title {
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: #18191a;
    line-height: 22px;
    float: left;
  }
  span {
    display: inline-block;
    margin-left: 10px;
  }
  i {
    color: #1985ff;
  }
}
.f-card-body {
  margin-top: 16px;
}
</style>
