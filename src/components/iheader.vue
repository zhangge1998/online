<template>
    <div class="nav">
        <div class="list">
            <p class="rest">订餐系统</p>
            <p class="index"><router-link to="/index">首页</router-link></p>
            <p class="shoppingCar">购物车</p>
            <div class="img"><img :src="image"></div>
            <span class="name" v-on:click="show($event)" >{{name}}</span>
            <ul>
              <li><router-link to="/profile">个人资料</router-link></li>
              <li><router-link to="/myOrder">我的订单</router-link></li>
              <li><router-link to="/myAddress">我的地址</router-link></li>
              <li><router-link to="/mySafety">安全中心</router-link></li>
              <li @click="destroy">退出登录</li>
              <!--<router-view></router-view>-->
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
      name: "iheader",
      computed:{
        image(){
          return this.$store.state.mine.getMineBaseMsg.msg.image
        },
        name(){
          return this.$store.state.mine.getMineBaseMsg.msg.name
        },
      },
      methods:{
        show(event){
          event.target.classList.toggle('active')
        },
        destroy(){
          window.location.href = '/';
          this.$axios({
            method: 'get',
            url: '/api/user/destroy',
          })
        }
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
  .shoppingCar{
    display: inline-block;
    flex-grow: 1;
  }
  .shoppingCar:before{
    /*content: '';*/
    /*display: inline-block;*/
    /*width: 30px;*/
    /*height: 30px;*/
    /*background-image: url("../assets/shop.jpg");*/
    /*background-repeat: no-repeat;*/
    /*background-attachment:fixed;*/
    /*background-position: 300px 250px;*/
    /*background-size: 100% 100%;*/
  }
  .img{
    /*background: url("../assets/userImage.jpg") no-repeat;*/
    width: 50px;
    height: 50px;
    background-size: 100% 100%;
    border-radius: 100%;
    display: inline-block;
  }
  .img img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  .list .name{
    display: inline-block;
    margin: 0 12px 0 10px;
  }
  /*.list span{*/
    /*width:0;*/
    /*height: 0;*/
    /*display:inline-block;*/
    /*border: 6px dashed rgba(0,0,0,0);*/
    /*border-left: 6px solid #fff;*/
    /*margin-right: 10px;*/
    /*position: relative;*/
    /*top:1px;*/
  /*}*/
  .list .name:after{
    width: 0;
    height: 0;
    content: '';
    display: inline-block;
    border: 6px dashed rgba(0,0,0,0);
    border-top: 6px solid #fff;
    position: relative;
    top: 4px;
    right: -4px;
  }
  .list ul{
    background: grey;
    color: #fff;
    list-style: none;
    margin: 0;
    padding: 10px 20px 0 20px;
    position:absolute;
    top:70px;
    right: 12px;
    display: none;
  }
  .list li{
    height: 36px;
    box-sizing: border-box;
    /*padding-left: 30px;*/
    padding-top: 5px;
    line-height: 10px;
  }
  .list .active+ul{
    display: block;
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
  ul li a{
    text-decoration: none;
    color: white;
  }
  ul{
    z-index: 1;
  }
</style>
