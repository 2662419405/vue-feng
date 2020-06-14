<template>
  <div class="layout">
    <Carousel />
    <div class="layout">
      <div class="layout_left"></div>
      <div class="layout_right">
        <Hot />
        <Essence />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Carousel from '@/components/carousel'
import Hot from '@/components/Hot'
import Essence from '@/components/Essence'
import Footer from '@/components/footer'
import { HOME_HOT, HOME_ESSENCE } from '@/store/mutation-types'
export default {
  components: {
    Carousel,
    Hot,
    Essence,
    Footer,
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch(`${HOME_HOT}`)
      this.$store.dispatch(`${HOME_ESSENCE}`)
    },
  },
}
</script>

<style lang="scss">
.layout {
  overflow: hidden;
}
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
