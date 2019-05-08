<template>
  <div id="Login">
    <van-nav-bar title left-text="返回" left-arrow @click-left="onClickLeft"/>
    <img src="../../assets/logo.png" alt="图片不存在">
    <form id="loginPage">
      <div class="account">
        <van-button type="info" id="btnAcc">账号</van-button>
        <input type="text" placeholder="请输入账号" id="account" v-model="acc">
      </div>
      <div class="passwd">
        <van-button type="info" id="btnPsd">密码</van-button>
        <input type="text" placeholder="请输入密码" id="passwd" v-model="psd">
      </div>

      <div class="subRes">
        <van-button type="primary" id="login" @click="login">登录</van-button>
        <van-button type="warning" id="regist" @click="Register">注册</van-button>
      </div>
    </form>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  name: "Login",
  data() {
    return {
      acc: "",
      psd: ""
    };
  },
  methods: {
    Register() {
      this.$router.push("/Registe ");
    },
    onClickLeft() {
      this.$router.push("/Kitchen");
    },
    login() {
      if (this.acc == localStorage.account && this.psd == localStorage.passwd) {
        // console.log("登录成功");
        MessageBox("提示", "登录成功！");
      } else {
        // console.log("账号或密码错误登录失败")
        MessageBox("提示", "账号或密码错误登录失败");
      }
    }
  }
};
</script>

<style scoped>
#Login {
  height: 50%;
}
#account,
#passwd {
  border-radius: 5px;
  height: 34px;
  border: none;
  border: 1px solid lightskyblue;
  margin: 3px;
  margin-top: 30px;
}
#btnAcc,
#btnPsd {
  width: 70px;
  height: 35px;
  line-height: 35px;
  border-radius: 30px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
}
#login,
#regist {
  width: 70px;
  height: 30px;
  line-height: 10px;
  padding: 10px;
  margin: 5px 18px;
}
form {
  margin: 65px auto;
}
img {
  width: 50%;
  height: 70px;
  margin-left: -20px;
  margin-top: 30px;
}
.subRes {
  margin-top: 30px;
}
#loginPage {
  background-color: rgba(173, 207, 238, 0.5);
}
</style>
