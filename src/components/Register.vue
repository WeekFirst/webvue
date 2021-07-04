<template>
  <div id="body">
    <div class="login">
      <br>
      <div><h3 style="color:white">注册中心</h3></div>

      <div class="form">
        <div><input type="text" placeholder="输入用户名" v-model="ruleForm.userNick" ></div>
        <div><input type="text" placeholder="输入账号" v-model="ruleForm.userName" ></div>
        <div><input type="text" placeholder="图片地址" v-model="ruleForm.userImg" ></div>
        <div><input type="password" placeholder="输入密码" v-model="ruleForm.userPassword"></div>
        <div><button @click="submitForm">注册</button></div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
// import qs from "qs";

export default {
  data() {
    return {
      ruleForm: {},
    };
  },
  methods: {
    submitForm() {
        axios({
            // url: 'http://192.168.2.172:9001/server/register',
            url: 'http://47.97.42.11/server/register',
            method: 'post',
            params: this.ruleForm
        }).then(res=>{
            console.log(res)
        })
    },
  },
};
</script>

<style>
#body {
  background-color: rgba(255, 255, 255, 0.288);
  height: 800px;
}
.login{
  width: 300px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition:1s;
  border: 1px solid rgba(255, 255, 255, 0.158);
}
.login:hover{
  box-shadow: 0px 0px 10px #0F996B;
}
.form{
  text-align: center;
  margin: 20px;
}
.form input{
  margin-top: 20px;
  height: 30px;
  width: 200px;
  background:none;  
  outline:none;  
  border:0px;
  color: white;
  border-bottom: 2px solid #dcdcdc;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.form input:focus{
  border-bottom: 2px solid #0F996B;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
.form button{
  margin-top: 50px;
  height: 30px;
  width: 200px;
  border: 0px;
  background-color: #0F996B;
  color: white;
}

.form button:hover{
  cursor:pointer;
}
.form button:active{
  background-color: #ffffff;
  color: black;
}

</style>