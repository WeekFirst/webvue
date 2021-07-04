<template>
  <div id="body">
    <div class="login">
      <br />
      <div><h3 style="color: white">权限中心</h3></div>

      <div class="form">
        <div>
          <input
            type="text"
            placeholder="输入用户名"
            v-model="ruleForm.username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="输入密码"
            v-model="ruleForm.password"
          />
        </div>
        <div><button @click="submitForm">登录</button></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";

export default {
  data() {
    return {
      ruleForm: {},
    };
  },
  methods: {
    submitForm() {
      axios
        .post(
          "http://47.97.42.11/server/oauth/token",
          // "http://192.168.2.172:9001/server/oauth/token",
          qs.stringify({
            client_id: "client_manager",
            client_secret: "123456",
            grant_type: "password",
            username: this.ruleForm.username,
            password: this.ruleForm.password,
          })
        )
        .then((r) => {
          if (r.status == 200) {
            localStorage.setItem("eToken", r.data.access_token);
            axios
              .get("http://47.97.42.11/client-manager/getInfo")
              // .get("http://192.168.2.172:8435/client-manager/getInfo")
              .then((res) => {
                var data = JSON.stringify(res.data.data)
                localStorage.setItem("userInfo",data);
                this.$router.push("/");
              });
          }else{
            ElMessage.error(r.data.error_description)
          }
        });
    },
  },
};
</script>

<style>
#body {
  background-color: rgba(255, 255, 255, 0.288);
  height: 800px;
}
.login {
  width: 300px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: 1s;
  border: 1px solid rgba(255, 255, 255, 0.158);
}
.login:hover {
  box-shadow: 0px 0px 10px #0f996b;
}
.form {
  text-align: center;
  margin: 20px;
}
.form input {
  margin-top: 50px;
  height: 30px;
  width: 200px;
  background: none;
  outline: none;
  border: 0px;
  border-bottom: 2px solid #dcdcdc;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.form input:focus {
  border-bottom: 2px solid #0f996b;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.form button {
  margin-top: 50px;
  height: 30px;
  width: 200px;
  border: 0px;
  background-color: #0f996b;
  color: white;
}

.form button:hover {
  cursor: pointer;
}
.form button:active {
  background-color: #ffffff;
  color: black;
}
</style>