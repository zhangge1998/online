const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const md5 = require('md5-node');

let models = require('../db');
let $sql = require('../sqlFun');
let urlencodedParser = bodyParser.urlencoded({extended: false});
const route = express.Router();
//连接数据库
let conn = mysql.createConnection(models.mysql);

conn.connect();
let jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
//检测手机号是否注册过
route.post('/confirmTel', urlencodedParser, (req, res)=>{
  let sql = $sql.user.confirmTel;
  let params = req.body;
  console.log(params);
  conn.query(sql, params.tel, function(err, result){
    if(err){
      console.log(err);
    }
    if(result.length !== 0){
      // console.log('手机号已经注册');
      res.send('手机号已经注册');
    }else{
      res.send('未注册过');
    }
    res.end();
  })
});

// 增加用户接口
route.post('/addUser',urlencodedParser ,(req, res) => {
  let sql = $sql.user.add;
  let params = req.body;
  console.log(params);
  let fpw = md5(params.tel + md5(params.pw));

  conn.query(sql, [params.tel, fpw], function(err, result) {
      if (err) {
          console.log(err);
      }
      if (result) {
          console.log('success1!!!!');
          res.send('注册成功');
          // jsonWrite(res, result);
      }
    res.end();
  });
});

// route.post('/addUser', function(req, res){
//   res.send('ok!');
//   console.log(req);
// });
//登录
route.post('/matchUser', urlencodedParser, function(req, res){
  let sql = $sql.user.select;
  let params = req.body;
  console.log(params);
  let fpw = md5(params.tel + md5(params.pw));
  console.log(fpw);
  conn.query(sql, params.tel, function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      console.log(result);
      if(result.length !== 0){
        if(result[0].tel === params.tel && result[0].pw === fpw){
          req.session.user =  {tel:params.tel,pw:fpw};
          res.send(req.session);
          console.log(req.session);
        }else{
          res.send('用户名或密码错误');
        }
      }else{
        res.send('用户名或密码错误');
      }
    }
    res.end();
  });
});

route.use(function(req,res,next){
  if( req.session.user ){
    next();
  }else{
    // res.redirect('http://localhost:8080/');
    res.end();
  }
} );

route.post('/userInfo',function(req,res){
  let sql = $sql.user.getUserInfo;
  let tel = req.session.user.tel;
  conn.query(sql, tel, function(err, result){
    if(err){
      console.log(err);
    }
    if(result){
      console.log(result);
      res.send(result[0]);
    }
    res.end();
  });
});
route.post('/changeInfo', function(req, res){
  let sql = $sql.user.changeUserInfo;
  let tel = req.session.user.tel;
  let parmas  = req.body;
  console.log(parmas);
  conn.query(sql, [parmas.name, parmas.intro, parmas.sex, parmas.image, tel], function(err, result){
    if(err){
      console.log(err);
    }
    res.status(200).send('更新成功');
  })
});
route.post('/checkPw', function(req, res){
  let pw = req.body.pw;
  let tel = req.session.user.tel;
  let fpw = req.session.user.pw;
  console.log(md5(tel + md5(pw)), fpw);
  if(md5(tel + md5(pw)) === fpw){
    res.send({status: '1'})
  }else{
    res.send({status: '0'})
  }
  res.end();
});

route.post('/changePw', function(req,res){
  let pw = req.body.npw;
  let tel = req.session.user.tel;
  let sql = $sql.user.changePw;
  let npw = md5(tel + md5(pw));
  conn.query(sql, [npw, tel], function(err, result){
    if(err){
      console.log(err);
    }else{
      res.status(200).send({status: '1'});
    }
  })
});
route.get('/getSession', function(req, res){
  res.send(req.session.user);
  res.end();
});
route.get('/destroy', function(req, res){
  req.session.destroy();
  res.send('退出');
  res.end();
});

module.exports = route;
