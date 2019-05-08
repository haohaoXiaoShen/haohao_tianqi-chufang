<template>
  <div id="Search">
    <van-search v-model="searchValue" placeholder="请输入搜索菜名关键字" show-action shape="round">
      <div slot="action" @click="press">搜索</div>
    </van-search>
    
    <Swipe></Swipe>
    <ShowMain v-if="addShow"></ShowMain>
    <!-- 搜索显示 -->
    <van-card
      v-for="item in SearchShow "
      :key="item.index"
      :tags="item.tags"
      :desc="item.tags"
      :title="item.title"
      :thumb="item.albums[0]"
    >
      <div slot="footer">
        <van-button
          size="mini"
          @click="watch(item.tags,item.albums[0],item.ingredients,item.steps,item.title)"
        >查看</van-button>
        <van-button size="mini" @click="collections">收藏</van-button>
      </div>
    </van-card>

    <van-popup v-model="show">
      <img :src="showImg" alt>
      <p id="tags">{{showTags}}</p>
      <hr>
      <p>食材 : {{ingredients}}</p>
      <ul v-for="(item,index)  in steps" :key="index">
        <hr>
        <li id="steps">{{item.step}}</li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
import ShowMain from "./ShowMain";
import Swipe from "./Swipe";
export default {
  data() {
    return {
      title: "",
      show: false,
      searchValue: "",
      SearchShowImg: [],
      burden: [],
      active: "1",
      showTags: "",
      showImg: "",
      ingredients: "",
      steps: [],
      collect: [],
      tags: "",
      addShow:true
    };
  },
  components: {
    Swipe,
    ShowMain
  },
  methods: {
    Info() {
      this.$router.push("/Info");
    },
    press() {
      this.addShow = !this.addShow
      this.$emit("press", this.searchValue);
      // console.log(this.SearchShow);
      for (let i = 0; i < this.SearchShow.length; i++) {
        // 图片
        // console.log(this.SearchShow[i].albums[0]);
        // // 标题
        // console.log(this.SearchShow[i].title);
        // //食材
        // console.log(this.SearchShow[i].burden);
        // // 介绍
        // console.log(this.SearchShow[i].imtro);
        // // 功能
        // console.log(this.SearchShow[i].tags);
      }
    },
    watch(tags, image, ingredients, steps, title) {
      this.show = !this.show;
      // console.log(tags, image);
      this.showTags = tags;
      this.showImg = image;
      this.ingredients = ingredients;
      this.steps = steps;
      this.title = title;
      // console.log(this.steps);
    },
    collections() {
      // var collect = {titel:this.title, tags:this.showTags , img:this.showImg,steps:this.steps};
      var storage = window.localStorage;
      //写入title
      storage["title"] = this.title;
      //写入步骤
      var co = [];
      for (let i = 0; i < this.steps.length; i++) {
        // console.log(this.steps[i]);
        co.push(this.steps[i]);
      }
      // console.log(co);
      var LocalData = JSON.stringify(co);
      // console.log(LocalData);
      storage.steps = LocalData;
      //写入展示图片
      storage.setItem("showImg", this.showImg);
      // 写入tags
      storage["tags"] = this.showTags;
    }
  },
  props: ["SearchShow"]
};
</script>
<style scoped>
.van-card {
  border-top: 1px saddlebrown solid;
  border-radius: 7px;
  background-color: rgba(60, 231, 231, 0.158);
}
.van-card__desc {
  font-size: 16px;
  font-family: "楷体";
  font-weight: bold;
  color: darkblue;
}
.van-card__title {
  font-size: 19px;
  padding-top: 5px;
}
#searchList {
  width: 50%;
}
#searchList li {
  width: 100%;
  height: 50px;
  background-color: antiquewhite;
  position: relative;
  line-height: 50px;
  margin-bottom: 10px;
  text-align: left;
}
span {
  font-size: 20px;
}
#img {
  display: inline;
}
.van-button__text {
  font-size: 15px;
}
.van-popup {
  padding: 10px 10px;
  font-size: 25px;
  width: 100%;
  height: 70%;
  background-color: rgba(122, 16, 16, 0.1);
  color: aliceblue;
}
#tags {
  padding: 10px 10px;
}
#steps {
  font-size: 20px;
}
</style>
