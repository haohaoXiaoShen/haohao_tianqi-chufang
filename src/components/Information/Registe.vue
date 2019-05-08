<template>
  <div id="Registe">
    <van-nav-bar title left-text="返回" left-arrow @click-left="onClickLeft"/>
    <img src="../../assets/welcome.jpg" alt>
    <form id="registePage">
      <div class="Registe">
        <van-button type="info" id="btnAcc">请输入账号:</van-button>
        <input type="text" placeholder="请输入账号" id="account" v-model="account">
      </div>
      <div class="passwd">
        <van-button type="info" id="btnPsd">请输入密码:</van-button>
        <input type="password" placeholder="请输入密码" id="passwd" v-model="passwd">
      </div>

      <div class="repasswd">
        <van-button type="info" id="btnrePsd">请重复密码:</van-button>
        <input type="password" placeholder="请重复密码" id="repasswd" v-model="repasswd">
      </div>

      <div class="email">
        <van-button type="info" id="btnEmail">请输入邮箱:</van-button>
        <input type="text" placeholder="请输入邮箱" id="email" v-model="email">
      </div>

      <div class="subRes">
        <van-button type="primary" id="regist" @click="registe">注册</van-button>
        <van-button type="warning" id="clear" @click="remove">清空</van-button>
      </div>
    </form>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
export default {
  name: "Registe",
  data() {
    return {
      account: "",
      passwd: "",
      repasswd: "",
      email: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/Information");
    },
    remove() {
      this.account = "";
      this.passwd = "";
      this.repasswd = "";
      this.email = "";
    },
    registe() {
      var testUsername = /^[a-zA-Z0-9_-]{4,16}$/; //账户验证正则表达式
      var testEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; //邮箱验证正则表达式
      if (testUsername.test(this.account)) {
        //判断用户名
        if (testEmail.test(this.email)) {
          if (this.passwd == this.repasswd) {
            // alert("注册成功");
            MessageBox("Notice", "注册成功！");
            localStorage.setItem("account", this.account);
            localStorage.setItem("passwd", this.passwd);
            localStorage.setItem("email", this.email);
            this.$router.push("/Information");
          } else {
            // console.log("两次密码输入不一致");
            MessageBox("提示", "两次密码输入不一致");
          }
        } else {
          MessageBox("提示", "邮箱输入不规范");
          // console.log("邮箱不规范");
        }
      } else {
        // console.log("用户名不规范");
        MessageBox("提示", "用户名不规范");
      }
    }
  }
};
</script>

<style scoped>
#account,
#passwd,
#repasswd,
#email {
  border-radius: 5px;
  height: 26px;
  border: none;
  border: 1px solid lightskyblue;
  margin: 5px;
  margin-top: 20px;
}
#btnAcc,
#btnPsd,
#btnEmail,
#btnrePsd {
  width: 120px;
  height: 30px;
  line-height: 30px;
  border-radius: 30px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  text-align: left;
}
#regist,
#clear {
  width: 70px;
  height: 30px;
  line-height: 10px;
  padding: 10px;
  margin: 15px 15px;
}
form {
  margin: 65px auto;
}
.subRes {
  margin-top: 20px;
}
img {
  width: 250px;
}

.mint-msgbox {
  font-size: 50px;
}
#registePage {
  background-color: rgba(173, 207, 238, 0.5);
}
</style>
