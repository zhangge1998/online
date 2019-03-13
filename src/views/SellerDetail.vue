<template>
  <div>
    <IHeader></IHeader>
    <SearchInput></SearchInput>
    <div class="detail">
      <p class="title">商家{{$route.params.id}}详情页</p>
      <div class="discount">
        <span>优惠信息:满20减2</span>
      </div>
      <p>商品列表</p>
    </div>

  </div>

</template>

<script>
  import IHeader from '@/components/iheader.vue'
  import SearchInput from '@/components/searchInput.vue'
    export default {
        name: "SellerDetail",
      components:{
        IHeader,
        SearchInput
      }
    }
</script>

<style scoped>
  .detail{
    margin-left: 50px;
  }
  p{
    font-size: 20px;
    margin-top: 5px;
  }
.discount{
  width: 500px;
  height: 50px;
  box-shadow: 0 0 2px grey;
  margin-top: 20px;
}
</style>
