<template>
  <div id="ShowMain">
    <p class="add">视频推荐...</p>
    <ul>
      <!-- <li>
        <p class="title">{{item.title}}</p>
        <p class="author">作者:{{item.author_name}}</p>
        <img :src="item.thumbnail_pic_s" alt>
        <img :src="item.thumbnail_pic_s02" alt>
        <img :src="item.thumbnail_pic_s03" alt>
      </li>-->
      <!--  上面 内容为 时尚   -->
      <van-popup v-model="show">
        <p>{{this.text}}</p>
        <video :src="videouri" controls="controls" width="80%" height="100%"></video>
      </van-popup>
      <li v-for="(item,index) in add" :key="index" @click="showOrNot(item.text,item.videouri)">
        <img :src="item.image_small" alt="无内容显示" class="smallImg">
      </li>

      <!-- <video :src="item.videouri" controls="controls" width="100%"></video> -->
    </ul>
  </div>
</template>
<script>
export default {
  name: "ShowMain",
  data() {
    return {
      add: [],
      show: false,
      text: "",
      videouri: ""
    };
  },
  created() {
    this.axios(
      "https://www.apiopen.top/satinApi?type=1&page=5"
      //   "/add/toutiao/index?type=shishang&key=b86a609429f36d36aa6df869de46f3de"
    ).then(res => {
      //   console.log(res.data.result.data.length);
      // console.log(res.data.data)
      //   for (let i = 0; i < 6; i++) {
      //     // console.log(res.data.result.data[i]);
      //     this.add.push(res.data.result.data[i]);
      //   }

      this.add = res.data.data;
      console.log(this.add);
    });
  },
  methods: {
    showOrNot(text, videouri) {
      this.show = !this.show;

      this.text = text;
      console.log(this.text);

      this.videouri = videouri;
      console.log(this.videouri);
    }
  }
};
</script>
<style scoped>
.van-popup {
  width: 100%;
  background-color: rgba(240, 248, 255, 0);
  color: wheat;
  border-radius: 15px;
}
p {
  font-size: 20px;
  padding: 10px;
}
.add {
  font-weight: bold;
  color: aquamarine;
}
.title {
  font-size: 16px;
  color: rebeccapurple;
}
.author {
  font-size: 10px;
}
.smallImg {
  width: 110%;
  height: 100px;
  border-radius: 15px;
}
ul {
  width: 100%;
}
li {
  float: left;
  padding: 20px 10px;
  width: 27%;
  height: 80px;
  padding-top: 5px;
}
</style>
