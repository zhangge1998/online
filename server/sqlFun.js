//sql语句
let sqlFun = {
    user:{
        confirmTel: 'select * from user where tel = ?',
        add: 'insert into user(tel,pw) values (?,?)',
        select: 'select * from user where tel = ?',
        getUserInfo: 'select * from userInfo where tel = ?',
    }
};
module.exports = sqlFun;
