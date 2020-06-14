<template>
  <div class="layout">
    <Carousel />
    <div class="layout">
      <div class="layout_left"></div>
      <div class="layout_right">
        <Hot />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/carousel'
import Hot from '@/components/Hot'
import { HOME_HOT } from '@/store/mutation-types'
export default {
  components: {
    Carousel,
    Hot,
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch(`${HOME_HOT}`)
    },
  },
}
</script>

<style lang="scss">
.layout_right {
  margin-top: 12px;
  float: right;
  top: 0;
  right: 0;
  width: 320px;
}
.layout_left {
  float: left;
  margin-top: 12px;
  background-color: #fff;
  width: 788px;
  border-radius: 4px;
}
</style>
