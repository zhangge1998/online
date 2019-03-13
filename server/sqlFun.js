//sql语句
let sqlFun = {
    user:{
        confirmTel: 'select * from user where tel = ?',
        add: 'insert into user(tel,pw) values (?,?)',
        select: 'select * from user where tel = ?',
        getUserInfo: 'select * from userInfo where tel = ?',
        changeUserInfo: 'update userInfo set name = ?, intro = ?, sex = ?, image = ? where tel = ?',
        changePw: 'update user set pw = ? where tel = ?'
    }
};
module.exports = sqlFun;
