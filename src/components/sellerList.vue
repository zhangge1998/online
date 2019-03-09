<template>
  <div class="content">
    <SearchInput></SearchInput>
    <div class="container">
      <div class="top_list"></div>
      <div class="seller_list">
        <div class="seller" v-for="item,index in list" v-bind:key="index"></div>
      </div>
    </div>
  </div>
</template>

<script>
  let SearchInput = {
    template: `<input type="text" placeholder="搜索商家,美食..." class="searchInput">`
  };
    export default {
      name: "SellerList",
      data(){
        return{
          list:['','','','','','','','','','','','','','','','','','','','','','','']
        }
      },
      components:{
        SearchInput
      }
    }
</script>

<style scoped>
  .content{
    width:1200px;
    margin: 100px auto 50px;
  }
.searchInput{
  width:200px;
  height: 30px;
  font-size: 16px;
  position: absolute;
  right: 40px;
  top:100px;
}
.container{
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  position:relative;
}
.top_list{
  width:100%;
  height:96px;
  background: white ;
  box-shadow: 0 0 2px grey;
  margin-bottom: 20px;
}
.seller_list{
  width:1200px;
  background: white;
  box-shadow: 0 0 2px grey;
  /*padding: 10px;*/
}
  .seller{
    width:300px;
    height: 137px;
    background: white;
    display: inline-block;
  }
  .seller:hover{
    background: #f7f7f7;
  }
</style>
