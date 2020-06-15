<template>
  <li class="content-box">
    <div class="entry-left">
      <div class="avatar">
        <img :src="item.createAvatar" :alt="item.createName" />
      </div>
      <div class="entry-info">
        <div class="title-wrap">
          <div class="title-wrap-title">
            <router-link :to="'/post/' + item.id" class="title-wrap-a">
              {{ item.title }}
            </router-link>
          </div>
        </div>
        <div class="meta-box">
          <span>
            <span class="name">{{ item.createName }}</span>
            |
            <span class="time">{{ item.createTime }}</span>
          </span>
          <span class="count-group">
            <ul class="action-list">
              <li>
                <a-icon type="eye" />
                <span class="count" v-more="item.preview"></span>
              </li>
              <li>
                <a-icon type="message" />
                <span class="count">{{ item.liu.length }}</span>
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
