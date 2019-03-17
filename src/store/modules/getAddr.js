import api from './../fetch/api'
import * as types from './../types'
const state = {
  getAddress:{
    data:{}
  }
};

const actions = {
  getMineAddrApi({commit}){
    api.getAddressApi()
      .then(res=>{
        console.log(res);
        commit(types.GET_ADDRESS_API, res)
      })
  }
};

const getters = {
  getAddress: state => state.getAddress
};

const mutations = {
  [types.GET_ADDRESS_API]: function(state, res){
    state.getAddress = {...state.getAddress, data: res};
  }
};

export default{
  state,
  actions,
  getters,
  mutations
}
