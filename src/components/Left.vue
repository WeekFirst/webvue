<template>
  <!-- <img class="top-img" src="../assets/1.jpg" alt=""> -->
  <el-row class="tac">
    <el-col :span="24">
      <div class="demo-image" style="margin-top: 20px">
        <el-image
          style="
            width: 160px;
            height: 160px;
            border-radius: 160px;
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
          "
          :src="url"
          :fit="fit"
        ></el-image>
        <br />
        <span style="color: white">{{ name }}</span>
        <br />
        <span style="color: white">{{ auth }}</span>
      </div>
      <el-menu
        :uniqueOpened="true"
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <router-link class="butt" to="/">
          <el-menu-item index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
        </router-link>

        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <template #title>导航三</template>
        </el-menu-item>
        <router-link class="butt" to="/pic">
          <el-menu-item index="2">
            <template #title>
              <i class="el-icon-menu"></i>
              <span>图库</span>
            </template>
          </el-menu-item>
        </router-link>
        <router-link class="butt" to="/client">
          <el-menu-item index="10">
            <template #title>
              <i class="el-icon-menu"></i>
              <span>客户端管理</span>
            </template>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      fit: "cover",
      url: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      name: "集成中心",
      auth: "",
      checkAuth: false,
    };
  },
  mounted() {},
  methods: {
    handleOpen(e) {
      console.log(e);
    },
  },
};
</script>


<style scoped>
.demo-image {
  margin-bottom: 30px;
  padding: 0 0;
}
.butt {
  text-decoration: none;
  color: white;
}
</style>