//sql语句
let sqlFun = {
    user:{
        confirmTel: 'select * from user where tel = ?',
        addUser: 'insert into user(tel,pw) values (?,?)',
        getUserId: 'select id from user where tel = ?',
        addUserInfo: 'insert into userInfor(pid,tel) values (?,?)',
        select: 'select * from user where tel = ?',
        getUserInfo: 'select * from userInfor where tel = ?',
        changeUserInfo: 'update userInfo set name = ?, intro = ?, sex = ?, image = ? where tel = ?',
        changePw: 'update user set pw = ? where tel = ?',
        addAddr: 'insert into userAddr(pid,tel,name,phone,address,lng,lat,door) values(?,?,?,?,?,?,?,?)',
        getAddr: 'select * from userAddr where tel = ?',
        delAddr: 'delete from userAddr where id = ?',
    },
};
module.exports = sqlFun;
