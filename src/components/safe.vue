<template>
    <div class="safeBox">
      <form @submit.prevent="change">
        <span>请输入旧密码:</span>
        <input type="text" v-on:blur="check($event)" name="old" v-model="oldPw" autocomplete="off" autofocus="autofocus"><span class="warn">{{isTrue}}</span>
        <span>请输入新密码:</span>
        <input type="text" name="new" v-model="newPw" autocomplete="off"><span class="warn">{{isWrong}}</span>
        <input type="submit" value="提交">
      </form>
      <div class="final" v-bind:class="{active:isShow===true}">
        修改成功,请重新登录
      </div>
    </div>
</template>

<script>
    export default {
        name: "safe",
        data(){
          return {
            oldPw: '',
            newPw: '',
            isTrue: '',
            isWrong: '',
            isShow: false
          }
        },
        methods:{
          check(a){
            let self = this;
            if(this.oldPw !== ''){
              let param = new URLSearchParams();
              param.append('pw', this.oldPw);
              this.$axios({
                method: 'post',
                url: '/api/user/checkPw',
                data: param
              }).then(function(res){
                if(res.data.status === '0'){
                  self.oldPw = '';
                  self.isTrue = '密码错误，请重试'
                }else{
                  self.isTrue = '';
                }
              })
            }
          },
          change(){
            let self = this;
            let nPw = this.newPw;
            let check = /^(?!\d+$)[\da-zA-Z]{6,10}$/;
            if(this.oldPw !== this.newPw && check.test(nPw) ) {
              this.isWrong = '';
              let param = new URLSearchParams();
              param.append('npw', nPw);
              this.$axios({
                method: 'post',
                url: '/api/user/changePw',
                data: param
              }).then(function(res){
                console.log(res.data);
                if(res.data.status === '1'){
                  self.isShow = true;
                  setTimeout(function(){
                    self.isShow = false;
                    window.location.href = '/';
                    this.$axios({
                      method: 'get',
                      url: '/api/user/destroy',
                    })
                  }, 2000)
                }
              })
            }else{
              console.log('no');
              this.newPw = '';
              this.isWrong = '新密码由6-10位数字字母组成，且不能是纯字母'
            }
          }
        }
    }
</script>

<style scoped>
  .safeBox{
    width: 300px;
    height: 250px;
    margin: 20px auto;
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 4px grey;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
  }
  .safeBox span, .safeBox input{
    display: block;
  }
  .safeBox input[type='text']{
    width: 200px;
    height: 25px;
    font-size: 16px;
    margin: 5px auto;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    background-color: hsla(0,0%,71%,.1);

  }
  .safeBox input[type='submit']{
    font-size: 16px!important;
    height: 30px;
    line-height: 18px!important;
    padding: 3px 18px;
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    border-radius: 20px;
    margin: 10px 8px 0 3px;
    border: none;
    outline: none;
    color: #ffffff;
    background-color: #66b1ff;
    text-decoration: none;
  }
  .warn{
    color: red;
    font-size: 12px;
  }
  .final{
    width: 250px;
    height: 100px;
    font-size: 20px;
    border: 1px solid rgba(128, 128, 128, 0.5);
    background: hsl(0, 0%, 71%);
    text-align: center;
    line-height: 100px;
    position: absolute;
    left: 20px;
    top: 50px;
    display: none;
  }
  .active{
    display: block;
  }
</style>
