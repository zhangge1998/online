import Vue from 'vue'
//引包
import VueRouter from 'vue-router'
import Register from '../views/Register'
import Login from '../views/Login'
import Home from '../views/Home'
import Index from '../views/Index'
import SellerDetail from '../views/SellerDetail'
import Profile from '../views/Profile'
import MyOrder from '../views/MyOrder'
import MyAddress from '../views/MyAddress'
import MySafety from '../views/MySafety'
import UnLogin from '../views/UnLogin'
Vue.use(VueRouter);
//配置路由表
const routes = [
  {
    path:'/',
    component: Home,
  },
  {
    path:'/register',
    component: Register
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/index',
    component: Index,
    // children:[
    //   {
    //     path:':num',
    //     component: SellerDetail
    //   }
    // ]
  },
  {
    path:'/index/:id',
    component: SellerDetail
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/myOrder',
    component: MyOrder,
  },
  {
    path: '/myAddress',
    component: MyAddress,
  },
  {
    path: '/mySafety',
    component: MySafety
  },
  {
    path:'/unLogin',
    component: UnLogin
  }
];
//挂载路由表,导出去
//默认是hash路由，mode:'history'，->H5的history
export default new VueRouter({
  mode:'history',
  routes
})
