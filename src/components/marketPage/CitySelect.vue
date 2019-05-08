//TODD  这个只需要获取城市传给别的组件，然后写好相关显示隐藏样式

<template>
  <div id="CitySelect">
    <!-- 定位图标  刚开始显示 点击后隐藏 -->
    <div class="chooseArea">
      <img src="../../assets/pos.png" class="addCity" v-show="showBtn" @click="changeSelector">
      <span>
        {{chooseArea}}
        <span style="font-size:5px;">{{date_y}}</span>
      </span>
      <p id="date_y" style="padding-top:10px"></p>
    </div>

    <!-- 选择城市  刚开始隐藏-->
    <van-area
      :area-list="areaList"
      value="110101"
      v-show="showSelector"
      @cancel="onCancle"
      @confirm="onConfirm"
    />

    <!-- 天气Weather组件 -->
    <Weather v-show="showWeather" :valueCity="valueCity" @dataFromSon="dataFromSon"></Weather>

  </div>
</template>
<script>
import AreaList from "../../../city.js";
import Weather from "./Weather";
export default {
  name: "CitySelect",
  data() {
    return {
      // 是否显示选择器
      showSelector: false,
      // 是否显示定位图标
      showBtn: true,
      //   导入的城市列表
      areaList: AreaList,
      //   选中的城市
      chooseArea: "",
      //省市区
      province: "",
      city: "",
      district: "",
      // 传值城市
      valueCity: "",
      // 是否显示天气组件
      showWeather: true,
      date_y: ""
      
    };
  },
  methods: {
    dataFromSon(date_y) {
      console.log(date_y);
      this.date_y = date_y;
    },
    changeSelector() {
      this.showSelector = true;
      this.showBtn = !this.showBtn;
      this.showWeather = false;
    },
    onCancle() {
      this.showBtn = true;
      this.showSelector = false;
      this.showWeather = true;
    },
    onConfirm(e) {
      //   console.log(e);
      this.province = e[0].name;
      this.city = e[1].name;
      this.district = e[2].name;
      this.chooseArea = this.province + this.city + this.district;
      this.showSelector = false;
      this.showBtn = true;
      this.showWeather = true;
      this.valueCity = e[1].name.substring(0, e[1].name.length - 1);
      console.log(this.valueCity);
      console.log(this.chooseArea);
    }
  },
  components: {
    Weather,
  },
  created() {
    this.city = "广州";
    this.province = "广东";
    this.district = "荔湾区";
    this.chooseArea = "广东广州荔湾区";
    this.valueCity = "广州";
  }
};
</script>

<style scoped>
#CitySelect {
  position: relative;
}
.addCity {
  position: absolute;
  left: 0px;
  padding: 5px;
}
.chooseArea {
  height: 40px;
  line-height: 40px;
}
</style>
