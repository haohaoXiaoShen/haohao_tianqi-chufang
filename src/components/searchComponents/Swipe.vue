<template>
  <div id="Info">
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item, index) in lunbotuList" :key="index">
    <img v-lazy="item.url" width="100%" height="250px"/>
  </van-swipe-item>
</van-swipe>
  </div>
</template>
<script>
export default {
  props: ["SearchShow"],
  data() {
    return {
      lunbotuList: [
        { url: require("../../../public/image/1.jpg"), id: 1 },
        { url: require("../../../public/image/2.jpg"), id: 2 },
        { url: require("../../../public/image/3.jpg"), id: 3 },
        { url: require("../../../public/image/4.jpg"), id: 4 }
      ],
       fixed:true,
    };
  }
};
</script>