<template>
    <div>
      <IHeader></IHeader>
      <SellerList></SellerList>
      <router-view></router-view>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import IHeader from '@/components/iheader.vue'
  import SellerList from '@/components/sellerList.vue'
  // let status = '';
    export default {
      name: "Index",
      components: {
        IHeader: IHeader,
        SellerList: SellerList
      },
      created(){
        // this.$axios({
        //   method: 'get',
        //   url: '/api/user/getSession',
        // }).then(function(res){
        //   this.status = (res.data !== undefined);
        //   console.log(status);
        // });
        this.$store.dispatch('getSessionApi');
      },
      mounted(){
          this.$store.dispatch('getMineBaseApi');
        },
      // mounted(){
      //   this.$axios({
      //     method: 'get',
      //     url: '/api/user/getSession',
      //   }).then(function(res){
      //     console.log(res);
      //     if(res.data === 1){
      //       console.log(this.status);
      //       this.status = true;
      //     }else{
      //       window.location.href = '/unLogin';
      //     }
      //   })
      // },
      computed: {
        ...mapGetters([
          'getMineBaseMsg',
          'getSessionData'
        ])
      },
    }
</script>

<style scoped>

</style>
