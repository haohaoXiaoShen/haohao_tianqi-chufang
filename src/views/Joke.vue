<template>
  <div id="Kitchen">
    <van-nav-bar title="天气插件" left-text="返回" left-arrow @click-left="onClickLeft" class="toparea"/>
    <CitySelect></CitySelect>
  </div>
</template>
<script>
import CitySelect from "../components/marketPage/CitySelect";

export default {
  name: "Market",
  data() {
    return {};
  },
  components: {
    CitySelect
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Kitchen");
    }
  }
  // created() {
  //   this.chooseArea = this.province + this.city + this.district;
  //   this.axios(
  //     "/weather/weather/index?format=2&cityname=" +
  //       this.weatherCity +
  //       "&key=938db2cd870514f0e41ce51cc9edf700"
  //   ).then(weatherInfo => {
  //     console.log(weatherInfo.data.result.today);
  //     this.today = weatherInfo.data.result.today;
  //     this.date_y = weatherInfo.data.result.today.date_y;
  //     this.dressing_advice = weatherInfo.data.result.today.dressing_advice;
  //     this.week = weatherInfo.data.result.today.week;
  //     this.nowTemp = weatherInfo.data.result.sk.temp;
  //   });
  // }
};
</script>
<style scoped>

.van-nav-bar__title {
  font-family: "楷体";
  font-size: 20px;
  font-weight: bold;
}
.toparea {
  border: 1px solid rgba(199, 43, 43, 0.137);
  border-radius: 5px;
}

</style>
