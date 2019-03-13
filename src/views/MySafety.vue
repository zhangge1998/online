<template>
<div>
  <IHeader></IHeader>
  <h2>安全中心</h2>
  <Safe></Safe>
  <router-view></router-view>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import IHeader from '@/components/iheader.vue'
  import Safe from '@/components/safe.vue'
  // let status = '';
  export default {
    name: "MySafety",
    components: {
      IHeader: IHeader,
      Safe:Safe
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
