<template>
  <div class="box">
    <form>
      <table>
        <thead>
        <tr>
          <th style="width:125px;height:0px;"></th>
          <th style="width:360px;height:0px;"></th>
        </tr>
        </thead>
        <tbody class="base">
        <tr>
          <td class="top-line">
            <div class="photo">
              <img :src='image' >
            </div>
          </td>
          <td class="top-line">
            <a class="btn btn-hollow">
              <input type="file" name="file" accept="image/*" class="hide" @change="fn($event)" >更改头像
            </a>
          </td>
        </tr>
        <tr>
          <td class="title">昵称
          </td>
          <td><input type="text" placeholder="请输入昵称" name="name" v-model="name"></td>
        </tr>
        <tr>
          <td class="title">性别
          </td>
          <td>
            <input type="radio" value="1" name="gender" id="men" v-model="sex"><span>男</span>
            <input type="radio" value="0" name="gender" id="women" v-model="sex"><span>女</span>
          </td>
        </tr>
        <tr>
          <td class="title">简介
          </td>
          <td><textarea name="intro" cols="30" rows="10" v-model="intro"></textarea></td>
        </tr>
        </tbody>
      </table>
      <input type="submit" class="btn setting-save" value="保存" id="btn">
    </form>

  </div>
</template>

<script>
  export default {
    name: 'information',
    data(){
      return {
        name: this.$store.state.mine.getMineBaseMsg.msg.name,
        intro: this.$store.state.mine.getMineBaseMsg.msg.intro,
        sex: this.$store.state.mine.getMineBaseMsg.msg.sex,
        image: this.$store.state.mine.getMineBaseMsg.msg.image,
      }
    },
    // computed:{
    //   getInfor(){
    //     return {
    //       name: this.$store.state.mine.getMineBaseMsg.msg.name,
    //       intro: this.$store.state.mine.getMineBaseMsg.msg.intro,
    //       sex: this.$store.state.mine.getMineBaseMsg.msg.sex,
    //       image: this.$store.state.mine.getMineBaseMsg.msg.image,
    //     }
    //   }
    // },
    methods:{
      fn(obj){
        let self = this;
        console.log(obj.target.files[0]);
        let file = obj.target.files[0];
        let data = new FormData();
        data.append('file', file);
        data.append('data',112);
        console.log(data.get('file'));
        return this.$axios.post('/api/upload', data, {
          headers:{'content-type': 'multipart/form-data'}
        }).then(function(res){
          console.log(res.data);
          // self.image= require('../../server/' + filename);
          // self.image = require('../../server/' + res.data);
          let context = require.context('.', true, /^\.\.\/\.\.\/server\/img\.*\.jpeg$/);
          let filename = res.data;
          console.log(context(filename));
          // self.image = x;
        });
      }
    }
  }
</script>

<style scoped>
  .box{
    /*border:1px solid grey;*/
    background: white;
    width: 500px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 4px grey;
    margin: 0 auto;
  }
/*table{*/
  /*margin: 20px auto;*/
  /*padding: 0;*/
  /*width: 400px;*/
  /*height:350px;*/
  /*background: rgba(11, 11, 42, 0.18);*/
  /*!*border: 1px solid black;*!*/
/*}*/
  table tr td:nth-of-type(1){
    text-align: center;
    /*background: red;*/
    /*border-bottom: 1px solid grey;*/
  }
  img{
    width: 80px;
    height: 80px;
    border-radius: 100%;

  }
table{
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto;
}
#left{
  position: relative;
  top: 40px;
  left:8px;
}
.btn-hollow{
  font-size: 14px;
  /*border:1px solid rgba(59,194,29,.7);*/
  color:#42c02e!important;
  padding: 4px 12px;
  font-weight: 400;
  line-height: normal;
  border-radius: 40px;
  background: none;
}
.hide{
  position: absolute;
  display: block!important;
  width: 82px;
  opacity: 0;
}
.top-line{
  padding-top: 0;

}
/*tr:last-child {*/
  /*border: none;}*/
/*.base tr:first-child {*/
  /*border: none;*/
/*}*/

td{
  padding: 10px 0;
}
.title{
  font-size:18px;
}
.title1{
  font-size: 40px;text-align: center;margin: 20px;font-family: 'AR PL UKai TW MBE'
}
input[type='text']{
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #c8c8c8;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
}input[type='submit']{
  padding: 5px 10px;
  font-size: 15px;
  /*border: 1px solid #c8c8c8;*/
  /*border-radius: 4px;*/
  /*background-color: hsla(0,0%,71%,.1);*/
}
input[type='radio'] {
  margin: 0 3px 0 16px;
  font-size: 15px;
  vertical-align: middle;
}
.setting-save {
  width: 100px;
  display: block;
  margin: 0 40%;
  border-radius: 20px;
  background: rgba(59,194,29,.7);
  border: none;
}
#btn{
  outline: none;
}
  textarea{
    border-radius: 4px;
    background-color: hsla(0,0%,71%,.1);
  }
</style>
