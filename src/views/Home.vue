<template>
    <div>
      <IHeader></IHeader>
      <SellerList></SellerList>
      <!--<div id="nav">-->
        <!--<router-link to="/register" tag="button">Register</router-link>-->
        <!--<router-link to="/login" tag="button">Login</router-link>-->
      <!--</div>-->
      <router-view/>
    </div>
</template>

<script>
  import IHeader from '@/components/iheader.vue'
  import SellerList from '@/components/sellerList.vue'
    export default {
        name: "Home",
        components: {
        IHeader: IHeader,
        SellerList:SellerList
      },
    }
</script>

<style scoped>

</style>
