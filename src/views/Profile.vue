 <template>
    <div>
      <IHeader></IHeader>
      <h2>个人资料</h2>
      <Information></Information>
      <router-view></router-view>
    </div>
  </template>

  <script>
    import {mapGetters} from 'vuex'
    import IHeader from '@/components/iheader.vue'
    import Information from '@/components/information.vue'
    // let status = '';
    export default {
      name: "profile",
      components: {
        IHeader: IHeader,
        Information: Information
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
