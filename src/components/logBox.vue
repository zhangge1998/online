<template>
  <div class="log">
    <form>
      <div class="line">
        <span>手机号:</span><input type="text" name="tel" v-model="tel" v-on:blur="test" autocomplete="off" autofocus>
      </div>
        <div class="line">
          <span>密码:</span><input type="password" name="pw" v-model="pw"> <br>
        </div>
      <a href="javascript:;" @click="login">登录</a>
    </form>
  </div>
</template>

<script>
    export default {
      name: "logBox",
      data () {
        return {
          tel: '',
          pw: ''
        }
      },
      methods:{
        test(){
          let phone = this.tel;
          if(phone !== '' && !/^1[34578]\d{9}$/.test(phone)){
            alert('账号格式不正确');
            return false;
          }
        },
        login(){
          let tel = this.tel;
          let pw = this.pw;
          if(tel !== '' && pw !== ''){
            let param = new URLSearchParams();
            param.append('tel', tel);
            param.append('pw', pw);
            this.$axios({
              method: 'post',
              url: '/api/user/matchUser',
              data: param
            }).then(function(res){
              console.log(res);
              if(res.data !== '用户名或密码错误'){
                window.location.href = '/index';
              }
            })
          }else{
            alert('手机号或密码为空');
          }

        }
      }
    }
</script>

<style scoped>
.log{
  width: 300px;
  height: 250px;
  margin: 50px auto;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background: rgba(25, 36, 36, 0.51);
  color: white;
  text-align: center;
}
  .log input{
    height:28px;
    display: inline-block;
    font-size: 16px;
  }
  a{
  font-size: 16px!important;
  height: 20px;
  line-height: 18px!important;
  padding: 3px 18px;
  display: inline-block;
  vertical-align: middle;
  font-weight: normal;
  border-radius: 2px;
  margin: 10px 8px 0 3px;
  border: 1px solid #3383da;
  color: #ffffff;
  background-color: #3383da;
    text-decoration: none;
  }
</style>
