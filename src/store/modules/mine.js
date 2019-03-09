import api from './../fetch/api'
import * as types from './../types'

const state = {
  getMineBaseMsg:{
    msg:{}
  }
};

const actions = {
  getMineBaseApi({commit}){
    api.mineBaseMsgApi()
      .then(res=>{
        console.log(res);
        commit(types.GET_BASE_API, res)
      })
  }
};

const getters = {
  getMineBaseMsg: state => state.getMineBaseMsg
};

const mutations = {
  [types.GET_BASE_API]: function(state, res){
    state.getMineBaseMsg = {...state.getMineBaseMsg, msg: res};
  }
};

export default{
  state,
  actions,
  getters,
  mutations
}
