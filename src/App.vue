<template>
  <div id="app">
     <mt-tabbar v-model="selected" :fixed = "fixed">
        <mt-tab-item id="Kitchen">
          <img slot="icon" src="../public/icon/kitchen.png" @click="Kitchen">
          下厨房
        </mt-tab-item>
        <mt-tab-item id="Joke">
          <img slot="icon" src="../public/icon/market.png" @click="Joke">
          天气插件
        </mt-tab-item>
        <mt-tab-item id="Collect">
          <img slot="icon" src="../public/icon/collect.png" @click="Collect">
          收藏
        </mt-tab-item>
        <mt-tab-item id="Information">
          <img slot="icon" src="../public/icon/information.png" @click="Information">
          我自己
        </mt-tab-item>
      </mt-tabbar>
  <transition mode="out-in">
       <router-view/>
  </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
         selected: true,
         fixed:true
    };
  },
  methods:{
    Kitchen(){
      this.$router.push("/Kitchen")
    },
    Joke(){
      this.$router.push("/Joke")
    },
    Collect(){
      this.$router.push("/Collect")
    },
    Information(){
      this.$router.push("/Information")
    }
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.v-enter,.v-leave-to{
  opacity: 0;
  transform: translateZ(100%);
}
.v-enter-active,.v-leave-active{
  transition: all 0.2s ease-in-out
}
.is-selected{
  background-color: yellow;
}
</style>
