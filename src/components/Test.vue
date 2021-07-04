<template>
  <div id="bodys">
    <br />
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <div class="demo-image">
            <div class="block">
              <el-image
                style="width: 100px; height: 100px; border-radius: 100px"
                :src="url"
                :fit="fit"
              ></el-image>
                <h3 style="color: white">{{userNick}}</h3>
            </div>
            <div class="line"></div>
          </div></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>


    <img class="imgs" :src="url" alt="">
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      userInfo: "",
      url: "http://47.97.42.11/images/3.jpg",
      fit: "cover",
      userNick: ''
    };
  },
  mounted() {
    var data = JSON.parse(localStorage.getItem("userInfo"));
    console.log(data);
    this.url = data.userImg;
    this.userNick = data.userNick
  },
  methods: {},
};
</script>

<style scoped>
img {
  height: 100%;
}
#bodys {
  height: 800px;
  background-color: rgba(255, 255, 255, 0.212);
}
.line{
    border-bottom: 1px solid #0F996B;
}
.imgs{
  margin-top: 20px;
  height: 500px;
}
</style>