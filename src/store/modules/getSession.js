import api from './../fetch/api'
import * as types from './../types'
const state = {
  getSessionData:{
    data:{}
  }
};

const actions = {
  getSessionApi({commit}){
    api.getSessionApi()
      .then(res=>{
        console.log(res);
        commit(types.GET_SESSION_API, res)
      })
  }
};

const getters = {
  getSessionData: state => state.getSessionData
};

const mutations = {
  [types.GET_SESSION_API]: function(state, res){
    state.getSessionData = {...state.getSessionData, data: res};
  }
};

export default{
  state,
  actions,
  getters,
  mutations
}
