<template>
  <a-back-top>
    <div class="returnTop">
      <a-icon type="up" />
    </div>
  </a-back-top>
</template>

<script>
export default {}
</script>

<style lang="scss">
.returnTop {
  position: fixed;
  right: 100px;
  bottom: 50px;
  width: 60px;
  height: 40px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 32px;
  text-align: center;
  line-height: 40px;
  transition: all 0.5s;
  color: #9a9a9a;
  z-index: 20;
  &:hover {
    transform: translateY(-6px);
  }
}
</style>
