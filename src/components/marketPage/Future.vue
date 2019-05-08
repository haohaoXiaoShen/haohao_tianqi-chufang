<template>
  <div class="Future">
    <van-tabs>
      <van-tab v-for="(item,index) in future" :title="item.week" :key="index">
        <!-- <p class="date">{{item.date}}</p> -->
        <p class="temperature">{{item.temperature}}</p>
        <p class="weather">{{item.weather}}</p>
        <p class="wind">{{item.wind}}</p>
      </van-tab>
    </van-tabs>
    <hr>
  </div>
</template>
<script>
export default {
  name: "Future",
  data() {
    return {};
  },
  props: ["future"]
};
</script>
<style scoped>
.van-tab__pane {
  padding: 20px;
}
.Future {
  background-color: rgba(255, 232, 232, 0.76);
}

.temperature {
  padding: 10px;
  font-size: 30px;
  font-weight: bold
}
.weather {
  font-size: 25px;
  padding: 20px;
  font-family: "楷体"
}
.wind {
  color: rgba(37, 3, 3, 0.76);
  font-size: 28px;
  padding: 20px;
  font-family: "楷体"

}
</style>
