<template>
    <div id="all">
      <input type="text" id="suggestId" name="address_detail"
             v-model="message" class="input_style" @focus="showBorder($event)" @blur="hide($event)">
      <div id="allMap"></div>
    </div>
</template>

<script>
    export default {
      name: "baiduMap",
      props: ['message'],
      data(){
        return {
          // address_detail: null,
          userlocation: {lng: '', lat: ''}
        }
      },
      mounted(){
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
            this.address_detail = myValue;
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
              //经度
              alert(th.userlocation.lng);
              //维度
              alert(th.userlocation.lat);
            }
            //智能搜索
            let local = new BMap.LocalSearch(map, {
              onSearchComplete: myFun
            });
            local.search(myValue);
          }
          //测试输出坐标（指的是输入框最后确定地点的经纬度）
          // map.addEventListener('click', function(e){
          //   //经度
          //   console.log(th.userlocation.lng);
          //   //维度
          //   console.log(th.userlocation.lat);
          // })
        })
      },
      methods:{
        showBorder(e){
          e.target.style.border = '1px solid #66b1ff';
        },
        hide(e){
          e.target.style.border = '';
        }
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  #suggestId{
    width: 296px;
    height: 40px;
    outline: none;
    padding: 0 15px;
    background-color: #FFF;
    color: #606266;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
  }
  .active{
    border: 1px solid #66b1ff;
  }
  /*#allMap{*/
    /*width: 400px;*/
    /*height: 300px;*/
    /*font-family: "微软雅黑";*/
    /*border: 1px solid green;*/
  /*}*/
</style>
