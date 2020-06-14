<template>
  <div class="xiugai">
    <div class="setting" @click="showDrawer">
      <a-icon type="setting" />
    </div>
    <a-drawer placement="right" width="300" :closable="false" :visible="visible" @close="onClose">
      <!-- 字体设置 -->
      <div class="lang-setting">
        <span class="tip">语言选择</span>
        <a-select class="setting-ul" default-value="zh" style="width: 100px" @change="handleChange">
          <a-select-option value="zh">简体中文</a-select-option>
          <a-select-option value="zh-fan">繁体中文</a-select-option>
          <a-select-option value="en">English</a-select-option>
        </a-select>
      </div>
      <!-- 提醒设置 -->
      <div class="setting-alert">
        <a-icon type="sound" class="sound" />
        <span>本设置也只是修改默认布局方面的字体问题,并不会去修改文章具体内容的字体</span>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.xiugai {
  position: fixed;
  top: 300px;
  right: 0;
}
.setting-alert {
  box-sizing: border-box;
  margin: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: 'tnum', 'tnum';
  position: relative;
  padding: 8px 15px 8px 37px;
  word-wrap: break-word;
  border-radius: 2px;
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  .sound {
    position: absolute;
    top: 12.0005px;
    left: 16px;
    color: #faad14;
  }
}
.lang-setting {
  height: 50px;
}
.setting-ul {
  float: right;
}
.tip {
  position: relative;
  top: 6px;
}
.setting {
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: #1890ff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
  i {
    color: #fff;
  }
}
</style>
