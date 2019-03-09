<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1" disabled>订餐系统</el-menu-item>
    <el-menu-item index="2">首页</el-menu-item>
    <el-menu-item index="3">我的订单</el-menu-item>
    <el-menu-item index="4" class="img" disabled><img src="../../static/userImage.jpg"></el-menu-item>
    <el-submenu index="5">
      <template slot="title" class="name">哈哈哈</template>
      <el-menu-item index="5-1">个人资料</el-menu-item>
      <el-menu-item index="5-2">安全中心</el-menu-item>
      <el-menu-item index="5-3">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
</template>


<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .img{
    /*background: url("../assets/userImage.jpg") no-repeat;*/
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
    border-radius: 100%;
    display: inline-block;
    margin-right: 20px;
  }
  .img img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
</style>
