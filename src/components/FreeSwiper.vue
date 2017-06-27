<template>
  <!-- swiper -->
  <swiper class="swiper-container" :options="swiperOption">
    <swiper-slide class="swiper-item" v-for="i in 10">
      <div class="icon"></div>
      <div class="texts-container">
        <div class="title">title {{ i}} </div>
        <div class="sub-title">sub-title {{ i}} </div>
        <div class="description">description {{ i}} </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    data () {
      return {
        swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 10,
          freeMode: true,
          freeModeFluid: true,
          momentumBounce: false
        }
      };
    }
  };
</script>

<style scoped lang="less" rel="stylesheet/less">
  .swiper-container {
    color: gray;
    height: 200px;
    background-color: wheat;

    .swiper-item {
      padding: 10px;
      position: relative;
      height: 200px;
      background-color: whitesmoke;

      .icon {
        position: absolute;
        background-color: red;
        width: 100px;
        height: 100px;
      }

      .texts-container {
        left: 120px;
        position: absolute;

        .title {
        }

        .sub-title {
          margin-top: 10px;
        }

        .description {
          margin-top: 10px;
        }
      }

    }
  }
</style>
