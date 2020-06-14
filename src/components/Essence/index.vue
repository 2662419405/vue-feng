<template>
  <div class="hot-content-wrap f-card dow essence">
    <div class="f-card-header">
      <div class="title">
        <a-icon type="rise" />
        <span>精华框架</span>
      </div>
    </div>
    <div class="essence-content">
      <ul class="essence-list">
        <li class="item" v-for="item in essence" :key="item.id">
          <div class="item-content-essence">
            <div class="desc">
              <div class="dot"></div>
            </div>
            <router-link :to="'post/' + item.id" class="essence-title">{{
              item.title
            }}</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['essence']),
  },
}
</script>

<style lang="scss">
.dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #797c80;
  position: relative;
  top: 8px;
}
.title {
  flex: 1;
  margin-left: 12px;
  max-height: 44px;
  font-size: 14px;
  font-weight: 400;
  color: #494b4d;
  line-height: 22px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}
.essence {
  .item {
    margin-top: 5px;
    margin-bottom: 0;
  }
  .item-content-essence {
    display: flex;
  }
  .essence-title {
    flex: 1;
    margin-left: 12px;
    max-height: 44px;
    font-size: 14px;
    font-weight: 400;
    color: #494b4d;
    line-height: 20px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    color: black;
    &:hover {
      color: #1985ff;
    }
  }
}
</style>
