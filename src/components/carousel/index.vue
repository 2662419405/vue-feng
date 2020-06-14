<template>
  <a-carousel arrows autoplay>
    <div slot="prevArrow" class="custom-slick-arrow" style="left: 10px;zIndex: 1">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <div>
      <img
        src="https://feng-bbs-att-1255531212.image.myqcloud.com/2020/05/19/13540881qux4omxsen8apu.jpg"
      />
    </div>
    <div>
      <img
        src="https://feng-bbs-att-1255531212.image.myqcloud.com/2020/06/09/181219aq8vp539ss2gxe8q.png"
      />
    </div>
    <div>
      <img
        src="https://feng-bbs-att-1255531212.image.myqcloud.com/2020/06/04/175654l8aw5o3iqkxdksyb.jpg"
      />
    </div>
  </a-carousel>
</template>
<script>
export default {}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 460px;
  line-height: 460px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel .slick-slide img {
  width: 100%;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
