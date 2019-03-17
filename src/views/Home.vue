<template>
    <div>
      <IHeader1></IHeader1>
      <SellerList></SellerList>
      <!--<div id="nav">-->
        <!--<router-link to="/register" tag="button">Register</router-link>-->
        <!--<router-link to="/login" tag="button">Login</router-link>-->
      <!--</div>-->
      <router-view/>
    </div>
</template>

<script>
  import IHeader1 from '@/components/iheader1.vue'
  import SellerList from '@/components/sellerList.vue'
    export default {
        name: "Home",
        components: {
        IHeader1: IHeader1,
        SellerList:SellerList
      },
    }
</script>

<style scoped>

</style>
