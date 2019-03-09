<template>
  <div class="reg">
    <form>
      <div class="line">
        <span>手机号:</span><input type="text" name="tel" v-model="tel" v-on:blur="test" autocomplete="off">
      </div>
      <div class="line">
        <span>密码:</span><input type="password" name="pw" v-model="pw"> <br>
      </div>
      <a href="javascript:;" @click="addUser">注册</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        tel: '',
        pw: ''
      }
    },
    methods: {
      test(){
        let phone = this.tel;
        if(phone !== ''){
          if(/^1[34578]\d{9}$/.test(phone)){
            let param = new URLSearchParams();
            param.append('tel', phone);
            this.$axios({
              method: 'post',
              url: '/api/user/confirmTel',
              data: param
            }).then(function(response){
              console.log(response.data);
            })
          }else{
            alert("手机号码有误，请重填");
            return false;
          }
        }
      },
      addUser() {
        let tel = this.tel;
        let pw = this.pw;
        let param = new URLSearchParams();
        param.append('tel', tel);
        param.append('pw', pw);
        this.$axios({
          method: 'post',
          url: '/api/user/addUser',
          data: param
        }).then(function(response){
          console.log(response.data);
        })
      }
    }
  }
</script>
<style scoped>
  .reg{
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
  .reg input{
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
