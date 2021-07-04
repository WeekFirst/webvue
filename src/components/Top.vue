<template>
  <div>
    <el-menu
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1" disabled>处理中心</el-menu-item>
    <el-menu-item index="2">登录</el-menu-item>
    <el-menu-item index="3">注册</el-menu-item>
</el-menu>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key) {
      if(key == 2){
        this.$router.push('/login')
      }else{
        this.$router.push('/register')
      }
    },
  },
};
</script>


<style>
.login {
  margin-right: 10px;
}
</style>