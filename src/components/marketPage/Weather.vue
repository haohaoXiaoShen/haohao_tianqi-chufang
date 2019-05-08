
<template>
  <div id="weather">
    <van-notice-bar
      :text="today.dressing_advice"
      left-icon="fire-o"
      style="color:darkcyan;backgroundColor:cyan;font-size:16px;"
    />
    <div class="weatherInfo">
      <p class="temp">{{sk.temp}}℃</p>
      <p class="humidity">湿度::{{sk.humidity}}</p>
      <p class="time">检测时间:{{sk.time}} {{today.week}}</p>
      <p class="wind_direction">{{sk.wind_direction}}</p>
      <p class="wind_strength">{{sk.wind_strength}}</p>
      <p class="weather">{{today.weather}}</p>
      <p class="uv_index">UVR:{{today.uv_index}}</p>
      <p class="exercise_index">运动：{{today.exercise_index}}</p>
      <p class="travel_index">出游:{{today.travel_index}}</p>
    </div>
    <hr>
    <Future :future="future"></Future>
  </div>
</template>
<script>
import Future from "./Future";
export default {
  name: "Weather",
  data() {
    return {
      sk: "",
      today: "",
      future: []
    };
  },
  components: {
    Future
  },
  props: ["valueCity"],
  watch: {
    valueCity: function(newVal, oldVal) {
      this.axios(
        "/weather/weather/index?format=2&cityname=" +
          newVal +
          "&key=938db2cd870514f0e41ce51cc9edf700"
      ).then(weatherInfo => {
        this.sk = weatherInfo.data.result.sk;
        // sk.humidity 湿度  sk.temp 温度  sk.time 检测时间  sk.wind_direction风向 sk.wind_strength风力
        this.today = weatherInfo.data.result.today;
        this.future = weatherInfo.data.result.future;
        console.log(this.future);
        // date_y 日期  dressing_advice 穿衣建议 dressing_index舒适度
        // exercise_index 运动建议 temperature 温度范围 uv_index 紫外线
        // weather 天气 week周?  wind风情
        this.$emit("dataFromSon", this.today.date_y);
      });
    }
  },
  created() {
    this.axios(
      "/weather/weather/index?format=2&cityname=" +
        this.valueCity +
        "&key=938db2cd870514f0e41ce51cc9edf700"
    ).then(weatherInfo => {
      this.sk = weatherInfo.data.result.sk;
      // sk.humidity 湿度  sk.temp 温度  sk.time 检测时间  sk.wind_direction风向 sk.wind_strength风力
      this.today = weatherInfo.data.result.today;
      this.future = weatherInfo.data.result.future;
      // date_y 日期  dressing_advice 穿衣建议 dressing_index舒适度
      // exercise_index运动建议 temperature温度范围 uv_index紫外线
      // weather 天气 week周?  wind风情
      // console.log(weatherInfo.data.result.sk);
      this.$emit("dataFromSon", this.today.date_y);
      console.log(weatherInfo.data.result);
    });
  }
};
</script>
<style scoped>
.weatherInfo {
  position: relative;
  height: 150px;
}
p {
  position: absolute;
}
.temp {
  font-size: 80px;
  font-family: "楷体";
  font-weight: bolder;
  color: cornflowerblue;
  left: 30px;
  top: 30px;
}
.humidity,
.wind_direction,
.wind_strength,
.uv_index {
  color: rgba(49, 12, 85, 0.486);
  font-size: 1em;
  top: 110px;
}
.humidity {
  left: 38px;
}
.wind_direction {
  left: 125px;
}
.wind_strength {
  left: 175px;
}
.uv_index {
  left: 210px;
}
.exercise_index,
.travel_index {
  bottom: 0px;
  left: 38px;
  color: darkblue;
  font-size: 15px;
  background-color: rgba(102, 51, 153, 0.274);
  padding: 3px;
  border-radius: 5px;
  color: darkgoldenrod;
}
.travel_index {
  left: 140px;
}
.time {
  top: 7px;
  left: 5px;
  color: darkblue;
  background-color: rgba(190, 16, 16, 0.15);
  padding: 5px;
  border-radius: 5px;
}
.weather {
  top: 8px;
  right: 5px;
  background-color: rgba(30, 9, 92, 0.411);
  padding: 15px;
  border-radius: 20px;
  color: yellow;
}
</style>
