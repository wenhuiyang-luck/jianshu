import axios from "axios";
import * as actionTypes from './actionTypes';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const handleLogin = (account, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
      const result = res.data.data
      if (result) {
        dispatch(changeLogin())
      } else {
        alert('登录失败！')
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const handleLogout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})