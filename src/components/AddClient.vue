<template>
  <div id="bodys">
    <el-row :gutter="20">
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple">
          <el-form ref="form" :model="form" label-width="200px">
            <el-form-item label="客户端ID">
              <el-input v-model="form.clientID"></el-input>
            </el-form-item>
            <el-form-item label="资源ID">
              <el-input v-model="form.resourceIDs"></el-input>
            </el-form-item>
            <el-form-item label="密钥">
              <el-input v-model="form.clientSecret"></el-input>
            </el-form-item>
            <el-form-item label="权限范围">
              <el-input v-model="form.scope"></el-input>
            </el-form-item>
            <el-form-item label="重定向地址">
              <el-input v-model="form.webServerRedirectUri"></el-input>
            </el-form-item>
            <el-form-item label="客户端描述">
              <el-input v-model="form.additionalInformation"></el-input>
            </el-form-item>
            <el-form-item label="令牌有效时长">
              <el-input v-model="form.accessTokenValidity"></el-input>
            </el-form-item>
            <el-form-item label="刷新令牌有效时长">
              <el-input v-model="form.refreshTokenValidity"></el-input>
            </el-form-item>
            <el-form-item label="客户端类型">
              <el-checkbox-group v-model="form.authorizedGrantTypes">
                <el-checkbox label="authorization_code" name="type"></el-checkbox>
                <el-checkbox label="password" name="type"></el-checkbox>
                <el-checkbox label="client_credentials" name="type"></el-checkbox>
                <el-checkbox label="implicit" name="type"></el-checkbox>
                 <el-checkbox
                  label="refresh_token"
                  disabled
                  name="type"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="autoapprove">
              <el-radio-group v-model="form.autoapprove">
                <el-radio label="true"></el-radio>
                <el-radio label="false" disabled></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div></el-col
      >
      <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>


import {addClient} from "../api/api"
export default {
  data() {
    return {
      form: {
        clientID: "",
        resourceIDs: "",
        clientSecret: "",
        scope: "",
        webServerRedirectUri: "",
        authorizedGrantTypes: ["refresh_token"],
        autoapprove: "true",
        additionalInformation: "",
        accessTokenValidity: "",
        refreshTokenValidity: "",
      },
    };
  },
  methods: {
    onSubmit() {
        let data = this.form
        data.authorizedGrantTypes = data.authorizedGrantTypes.join(",")
        addClient(data).then(result =>{
            console.log(result)
            if(result.data.status == 200){
                this.$router.push("/client")
            }
      })
    },
  },
};
</script>

<style>
#bodys{
  background-color: white;
  height: 800px;
}
</style>