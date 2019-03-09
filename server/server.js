//node后端服务器
// const userApi = require('./api/userApi');
const fs = require('fs');
// const path = require('path');
// const bodyParser = require('body-parser');
const express = require('express');
// const fs = require('fs');
let multer = require('multer');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
app.use(session({
  secret:'test',
  name:"user" ,
  resave: false,
  saveUninitialized: true,
  cookie:{maxAge: 6000*60*24 }
}));

app.use(bodyParser.urlencoded({extended:false}));
// 当前配置信息不负责上传头像，上传头像由前端负责
// 当前配置信息只负责设置图片的存储路径以及设置图片的名字
//创建文件夹
let createFileDirectory = function(path) {
  try {
    //检测文件夹是否存在，不存在抛出错误
    fs.accessSync(path);
  } catch (error) {
    //创建文件夹
    fs.mkdirSync(path);
  }
};
let stotage = multer.diskStorage({
// 存储的路径
  destination:function(req, file, cb) {
    //先创建路径在保存
    createFileDirectory('img');
    //指定文件保存路径
    cb(null, 'img/')
  },

// 设置图片的名称
  filename:function(req,file,callback){
  // console.log(file);
    // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
    callback(null, Date.now() + '-' + file.originalname);
  }
});
// 创建一个加载配置信息的upload对象
let upload = multer({storage:stotage});
app.use('/api/upload',upload.single('file'),function(req,res){
  let avatar = req.file;
  console.log(avatar);
  // console.log(req.body);
  // if(avatar){
  //   fs.unlink(avatar.path, (e)=>{
  //     if(e){
  //       console.log('文件操作失败');
  //       throw e;
  //     }else{
  //       console.log('文件：' + avatar.path + '删除成功');
  //     }
  //   });
  // }
  res.status(200).send('../../server/' + avatar.path);
});

// 后端api路由
app.use('/api/user', require('./api/userApi'));
//监听端口
app.listen(3000);
