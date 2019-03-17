<template>
  <div class="nav">
    <div class="list">
      <p class="rest">订餐系统</p>
      <p class="index"><router-link to="/">首页</router-link></p>
      <p class="bo"><router-link to="/login">登录</router-link></p>
      <p class="bo"><router-link to="/register">注册</router-link></p>
      <p class="bo mini"> <router-link to="/seller">商家</router-link> </p>
    </div>
  </div>

</template>

<script>
  export default {
    name: "iheader",
    computed:{
    },
    methods:{
    },
  }
</script>

<style scoped>
  .rest{
    font-size: 26px;
    margin-left: 20px;
    flex-grow: .25;
  }
  .index{
    font-size: 26px;
    flex-grow: 2;
  }
  .index a{
    text-decoration: none;
    color: white;
  }
  .nav{
    width: 100%;
    height: 70px;
    background: rgba(42, 44, 52, 0.89);
    box-sizing: border-box;
    color: white!important;
  }
  .list{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .list .name{
    display: inline-block;
    margin: 0 12px 0 10px;
  }
  .bo a{
    text-decoration: none;
    /*color: rgba(19, 21, 8, 0.93);*/
    color:white;
    display: inline-block;
    width: 40px;
    height: 30px;
    text-align: center;
    border: 1px solid white;
    border-radius: 5px;
    margin: 5px;
  }
  /*.mini a{*/
    /*font-size: 12px;*/
  /*}*/
</style>
