<template>
  <el-container>
    <el-aside width="300px">
      <Left class="left"></Left>
    </el-aside>
    <el-container>
      <el-header>
        <Top class="top"></Top>
      </el-header>
      <el-main>
        <el-scrollbar height="800px">
          <router-view class="info"/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Top from "./Top.vue";
import Left from "./Left.vue";

export default {
  name: "index",
  components: {
    Top,
    Left,
  },
};
</script>

<style scoped>
#left{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
#top{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}



</style>
