<template>
  <div>
    <Header />
    <transition name="router-fade" mode="out-in">
      <keep-alive v-if="!$route.meta.keepAlive">
        <router-view />
      </keep-alive>
    </transition>
    <Setting />
    <returnTop />
  </div>
</template>

<script>
import returnTop from '@/components/return-top'
import Setting from '@/components/setting'
import Header from '@/components/common/header'
export default {
  components: {
    Header,
    returnTop,
    Setting,
  },
}
</script>

<style lang="scss">
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
