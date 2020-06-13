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
          <!-- 输入框 -->
          <div class="t-search">
            <div class="search-wrap">
              <input
                v-model="value"
                autocomplete="off"
                placeholder="输入你感兴趣的文章"
                class="search-input"
              />
              <a-icon type="search" class="search-icon" />
            </div>
          </div>
          <!-- 发帖按钮 -->
          <a-button @click="postAircle" type="primary" class="btn-primary">发帖</a-button>
          <!-- 右侧内容栏 -->
          <div class="right-nav">
            <div class="auth">
              <router-link to="/login">登录</router-link>
              <span></span>
              <router-link to="/login">注册</router-link>
            </div>
          </div>
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
  data() {
    return {
      value: '',
    }
  },
  methods: {
    postAircle() {
      this.$message.info('123')
    },
  },
}
</script>

<style scoped lang="scss">
.s-header {
  height: 60px;
  margin-bottom: 16px;
  .search-icon {
    position: absolute;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .btn-primary {
    margin-left: 15px;
  }
  .t-search {
    position: relative;
    display: inline-block;
  }
  .search-wrap {
    position: relative;
    .search-input {
      padding-left: 12px;
      width: 237px;
      height: 34px;
      font-size: 14px;
      background: #f5f6f7;
      border-radius: 4px;
      border: none;
      outline: none;
      font-weight: 500;
    }
  }
  .right-nav {
    float: right;
    height: 60px;
    display: flex;
    align-items: center;
    margin-right: 30px;
    .auth {
      display: flex;
      align-items: center;
      padding: 6px;
      margin-left: 16px;
      > a {
        font-size: 14px;
        font-weight: 400;
        color: #494b4d;
        &:hover {
          color: #1985ff;
        }
      }
      span {
        background-color: #c0c5cc;
        width: 1px;
        height: 12px;
        margin: 0 11px;
      }
    }
  }
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
