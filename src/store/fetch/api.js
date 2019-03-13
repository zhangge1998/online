import axios from 'axios'
export function fetch(url, parmas){
  return new Promise((resolve, reject) =>{
    axios.post(url, parmas).then(response=>{
      resolve(response.data);
    }).catch((error)=>{
      console.log(error);
      reject(error)
    })
  })
}
export function fetch1(url, parmas){
  return new Promise((resolve, reject) =>{
    axios.get(url).then(response=>{
      resolve(response.data);
    }).catch((error)=>{
      console.log(error);
      reject(error)
    })
  })
}

export default {
  mineBaseMsgApi(){
    return fetch('/api/user/userInfo');
  },
  getSessionApi(){
    return fetch1('/api/user/getSession');
  },
  // changeImgApi(){
  //   return fetch('/api/user/changeImg');
  // }
}
