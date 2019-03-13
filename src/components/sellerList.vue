<template>
  <div class="content">
    <SearchInput></SearchInput>
    <div class="container">
      <FilterList></FilterList>
      <div class="seller_list">
          <div class="seller" v-for="item,index in list" v-bind:key="index">
            <router-link :to="'/index/'+index">
              <img src="../assets/food.jpg" alt="">
              <p class="sellerName">{{item.name+'-'+index}} </p>
              <p class="count">优惠活动：{{item.discount}}</p>
              <span class="dis">{{item.distance}}</span>
              <p class="fee">配送费：{{item.fee}}</p>
            </router-link>
          </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchInput from '@/components/searchInput.vue'
  let FilterList = {
    data(){
      return {
        list:['全部商家', '快餐便当', '特色菜系', '甜品饮品', '果蔬生鲜', '早餐', '午餐', '下午茶', '晚餐'],
        flag:false,
        currentIndex: 0
      }
    },
    template:`<div class="filter_list">
                    <span v-bind:style="{color: 'grey'}">商家分类：</span>
                    <a href="#" v-for="item,index in list" v-bind:key="index" class="list"
                    v-bind:class="{active:index===currentIndex}" @click="select(index)">{{item}}</a>
              </div>`,
    methods:{
        select(index) {
          this.currentIndex = index === this.currentIndex?'':index;
          // console.log(index, this.currentIndex);
        }
    }
  };
    export default {
      name: "SellerList",
      data(){
        return{
          list:[{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },{
            image:'../assets/food.jpg',
            name:'商家',
            distance:'xx分钟',
            discount:'满20减2',
            fee:'xx元'
          },
          ]
        }
      },
      components:{
        SearchInput,
        FilterList
      }
    }
</script>

<style scoped>
  .content{
    width:1200px;
    margin: 100px auto 50px;
  }
.container{
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  position:relative;
}
.filter_list{
  width:100%;
  height:96px;
  background: white ;
  box-shadow: 0 0 2px grey;
  margin-bottom: 20px;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
}
.filter_list span{
  color: grey;
}
.filter_list /deep/ a{
  display: inline-block;
  text-align: center;
  height: 26px;
  /*width: 76px;*/
  margin: 5px 10px;
  padding: 5px 8px;
  color: #666;
  text-decoration: none;
  border-radius: 5px;
  /*box-sizing: border-box;*/
}
.filter_list /deep/ a:hover{
  background: rgba(128, 128, 128, 0.51);
}
.filter_list /deep/ .active{
  background: rgba(128, 128, 128, 0.51);
}
a{
  display: inline-block;
  width: 76px;
  height: 26px;
}
a:hover{
  background: #f7f7f7;
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
    position: relative;
    padding: 13px;
    box-sizing: border-box;
  }
  .seller a{
    color: black;
  }
  .seller:hover{
    background: #f7f7f7;
  }
  .sellerName{
    font-size: 18px;
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 105px;
  }
  .dis{
    position: absolute;
    top: 90px;
    left: 20px;
  }
  .count{
    position: absolute;
    top: 50px;
    left: 105px;
  }
  .fee{
    position: absolute;
    top: 80px;
    left: 105px;
  }
  .title{
    font-size: 18px;
  }
  .seller img{
    width: 70px;
    height: 70px;
    border-radius: 5px;
  }
</style>
