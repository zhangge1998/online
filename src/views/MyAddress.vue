<template>
<div>
  <IHeader></IHeader>
  <h2>我的地址</h2>
  <el-button type="primary" size="medium" class="add" @click="showForm">添加地址</el-button>
   <div class="box" v-for="item in addrArr" :key="item.id">
    <h4>收货人：{{item.name}}</h4>
    <p>电话：{{item.phone}}</p>
    <p>详细地址：{{item.address}}{{item.door}}</p>
     <el-button type="primary" icon="el-icon-delete" size="mini" class="del" @click="delAddr(item.id)"></el-button>
     <!--<el-button type="primary" icon="el-icon-edit" size="mini" class="edit"></el-button>-->
  </div>
  <!--<BaiduMap></BaiduMap>-->
  <div v-show="isShow" class="add_addr">
    <el-form label-width="80px" :model="addrInfo" ref="addrInfo">
      <el-form-item label="联系人">
        <el-input v-model="addrInfo.name"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="addrInfo.phone"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="addrInfo.addrDetail" id="suggestId"></el-input>
        <div id="allMap"></div>
        <!--<BaiduMap message="addrInfo.addrDetail"></BaiduMap>-->
      </el-form-item>
      <el-form-item label="门牌号码">
        <el-input v-model="addrInfo.door"></el-input>
      </el-form-item>
      <el-button type="primary" size="small" class="center" @click="submitForm('addrInfo')">添加</el-button>
    </el-form>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import IHeader from '@/components/iheader.vue'
  import BaiduMap from '@/components/baiduMap.vue'
  // let status = '';
  export default {
    name: "MyAddress",
    components: {
      IHeader: IHeader,
      BaiduMap:BaiduMap
    },
    data() {
      return {
        isShow:false,
        addrInfo: {
          name: '',
          phone: '',
          addrDetail:'',
          door: '',
        },
        userlocation:{
          lng: '', lat: ''
        },
      };
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
      this.$store.dispatch('getMineAddrApi');
      this.$nextTick(function() {
          let th = this;
          //创建Map实例
          let map = new BMap.Map('allMap');
          //初始化地图，设置中心点坐标
          let point = new BMap.Point(121.160724, 31.173277);
          //创建点坐标，汉得公司的经纬度坐标
          map.centerAndZoom(point, 15);
          map.enableScrollWheelZoom();
          //建立一个自动完成的对象
          let ac = new BMap.Autocomplete({
            "input": "suggestId" ,
            "location": map
          });
          let myValue = '';
          //鼠标点击下拉列表后的事件
          ac.addEventListener('onconfirm', function (e) {
            let _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            th.addrInfo.addrDetail = myValue;
            setPlace();
          });

          function setPlace(){
            //清除地图上所有覆盖物
            map.clearOverlays();
            function myFun(){
              //获取第一个智能搜索的结果
              th.userlocation = local.getResults().getPoi(0).point;
              map.centerAndZoom(th.userlocation, 18);
              //添加标注
              map.addOverlay(new BMap.Marker(th.userlocation));
              // //经度
              // alert(th.userlocation.lng);
              // //维度
              // alert(th.userlocation.lat);
            }
            //智能搜索
            let local = new BMap.LocalSearch(map, {
              onSearchComplete: myFun
            });
            local.search(myValue);
          }
      })
    },
    computed: {
      ...mapGetters([
        'getMineBaseMsg',
        'getSessionData'
      ]),
      addrArr(){
        return this.$store.state.getAddr.getAddress.data
      }
    },
    methods:{
      showForm(){
        this.isShow = true;
      },
      delAddr(addr){
        let th = this;
        let param = new URLSearchParams();
        param.append('id', addr);
        this.$axios({
          method: 'post',
          url: '/api/user/delAddr',
          data: param
        }).then(function(res){
          if(res.data.status == '1'){
            th.$store.dispatch('getMineAddrApi')
          }
        })
      },
      submitForm(){
        let th = this;
        let param = new URLSearchParams();
        param.append('name', this.addrInfo.name);
        param.append('phone', this.addrInfo.phone);
        param.append('address', this.addrInfo.addrDetail);
        param.append('door', this.addrInfo.door);
        param.append('lng', this.userlocation.lng);
        param.append('lat', this.userlocation.lat);
        this.$axios({
          method: 'post',
          url: '/api/user/addAddr',
          data: param
        }).then(function(res){
          if(res.data.status == '1'){
            th.$store.dispatch('getMineAddrApi')
          }
        })
      }
    }
  }
</script>

<style scoped>
.box{
  width: 500px;
  height: 80px;
  border: 1px solid grey;
  border-radius: 5px;
  box-shadow: 2px 2px 2px grey;
  background: white;
  margin: 20px 150px;
  padding: 5px;
  position:relative;
}
  .box .del{
    position: absolute;
    top: 3px;
    right: 10px;
  }
  .box .edit{
    position: absolute;
    top:3px;
    right: 60px;
  }
  .add{
    position: absolute;
    left: 800px;
  }
  .add_addr{
    width: 400px;
    height: 300px;
    position: absolute;
    top: 200px;
    left: 750px;
    text-align: center;
  }
</style>
