import api from './../fetch/api'
import * as types from './../types'

const state = {
  getMineBaseMsg:{
    msg:{
      name:'',
      intro:'',
      sex:'',
      image:''
    }
  }
};

const actions = {
  getMineBaseApi({commit}){
    api.mineBaseMsgApi()
      .then(res=>{
        console.log(res);
        commit(types.GET_BASE_API, res)
      })
  },
  // changeImg({commit}){
  //   api.changeImgApi()
  //     .then(res=>{
  //       console.log(res);
  //       commit(types.CHANGE_IMG, res)
  //     })
  // }
};

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg,
  // changeImg: state => state.changeImg
};

const mutations = {
  [types.GET_BASE_API]: function(state, res){
    state.getMineBaseMsg = {...state.getMineBaseMsg, msg: res};
  },
  [types.CHANGE_IMG]: function(state, payload){
    console.log(payload);
    state.getMineBaseMsg.msg.image = payload.url;
  }
};

export default{
  state,
  actions,
  getters,
  mutations
}
