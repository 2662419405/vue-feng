<template>
  <li class="content-box">
    <div class="entry-left">
      <div class="avatar">
        <img :src="item.createAvatar" :alt="item.createName" />
      </div>
      <div class="entry-info">
        <div class="title-wrap">
          <div class="title-wrap-title">
            <a-tooltip>
              <template slot="title">{{ item.title }}</template>
              <router-link :to="'/post/' + item.id" class="title-wrap-a">
                {{ item.title }}
              </router-link>
            </a-tooltip>
          </div>
          <div class="tag-icon hot" v-if="item.hot">
            <a-tooltip>
              <template slot="title">热门</template>
              <a-icon type="fire" theme="filled" />
            </a-tooltip>
          </div>
          <div class="tag-icon essence" v-if="item.essence">
            <a-tooltip>
              <template slot="title">精华</template>
              精
            </a-tooltip>
          </div>
        </div>
        <div class="meta-box">
          <span>
            <span class="name">{{ item.createName }}</span>
            |
            <span class="time" v-time-to-now="item.createTime"></span>
          </span>
          <span class="count-group">
            <ul class="action-list">
              <li>
                <a-icon type="eye" />
                <span class="count" v-more="item.preview"></span>
              </li>
              <li>
                <a-icon type="message" />
                <span class="count" v-more="item.liu.length"></span>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: Object,
  },
}
</script>

<style lang="scss" scoped>
.tag-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 8px;
  > i {
    transform: scale(0.8) translateX(2px);
  }
  &.hot {
    background: rgb(255, 51, 85);
    color: #ffffff;
  }
  &.essence {
    background: rgb(255, 145, 0);
    font-size: 10px;
    color: #ffffff;
    text-align: center;
    line-height: 20px;
  }
}
.meta-box {
  width: 683px;
  font-size: 12px;
  color: #aaaeb3;
  display: flex;
  justify-content: space-between;
}
.count-group {
  font-size: 12px;
  color: #aaaeb3;
  font-weight: 400;
  line-height: 17px;
  .action-list {
    display: inline-block;
  }
  li {
    display: inline-block;
  }
  i {
    margin-right: 5px;
  }
  .count {
    margin-right: 10px;
    vertical-align: text-top;
  }
}
.name {
  margin-right: 11px;
}
.time {
  margin-left: 11px;
}
.content-box {
  padding: 18px 24px;
  overflow: auto;
  cursor: default;
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
}
.title-wrap-a {
  display: inline-block;
  height: 32px;
  margin-right: 8px;
  max-width: 542px;
  line-height: 32px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #18191a;
  font-weight: 400;
  vertical-align: top;
}
.entry-info {
  display: inline-block;
  height: 50px;
  max-width: 674px;
  margin-left: 16px;
  font-size: 16px;
}
.title-wrap {
  display: flex;
  align-items: center;
  .title-wrap-title {
    display: inline-block;
  }
}
.avatar {
  display: inline-block;
  height: 50px;
  width: 50px;
  overflow: hidden;
  background: #f7f9fa;
  border-radius: 50%;
  vertical-align: top;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
