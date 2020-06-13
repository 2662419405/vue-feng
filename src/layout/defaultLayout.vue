<template>
  <div>
    <Header />
    <transition name="router-fade" mode="out-in">
      <keep-alive v-if="!$route.meta.keepAlive">
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/common/header'
export default {
  components: {
    Header,
  },
}
</script>

<style></style>
