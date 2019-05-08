<template>
  <div id="Collect">
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="onClickLeft" class="toparea"/>
    <van-card tag="菜品收藏" :title="title" :thumb="img" v-if="obs">
      <div slot="footer">
        <van-button size="mini" @click="watch">查看</van-button>
        <van-button size="mini" @click="remove">删除</van-button>
      </div>
    </van-card>
    <van-popup v-model="show">
      <p id="title">{{title}}</p>
      <hr>
      <img :src="img" alt>
      <ul id="list">
        <li v-for="(item,index) in steps" :key="index">{{item.step}}</li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "Collect",
  data() {
    return {
      title: "",
      img: "",
      steps: [],
      show: false,
      obs: true
    };
  },
  methods: {
    watch() {
      this.show = !this.show;
    },
    onClickLeft() {
      this.$router.push("/Kitchen");
    },
    remove() {
      this.obs = !this.obs;
      localStorage.clear();
      localStorage.setItem("title", "没有收藏内容");
    }
  },
  created() {
    var storage = window.localStorage;
    var dd = storage.getItem("steps");
    var steps = JSON.parse(dd);
    var title = storage.getItem("title");
    var showImg = storage.getItem("showImg");
    // console.log(dd);
    this.steps = steps;
    // console.log(this.steps);
    // console.log(title);
    this.title = title;
    // console.log(showImg);
    this.img = showImg;
  }
};
</script>

<style scoped>
.toparea{
  border: 1px solid rgba(199, 43, 43, 0.137);
  border-radius: 5px;
}
.van-card__title {
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-family: "楷体";
}
.van-nav-bar__title{
  color:darkblue;
  font-family: "楷体";
  font-size: 20px;
  font-weight: bold;
}
.van-popup {
  width: 100%;
  height: 80%;
  border-radius: 35px;
}
#title {
  font-size: 25px;
  height: 30px;
  line-height: 30px;
}
#list {
  font-size: 20px;
  text-align: left;
}
#list li {
  padding: 10px;
}
</style>
