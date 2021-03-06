import axios from "axios";
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable' 

const changeDetail = (res) => ({
  type: actionTypes.GET_DETAIL,
  title: res.title,
  content: res.content,
  writerInfo: fromJS(res.writerInfo)
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      dispatch(changeDetail(res.data.data))
    }).catch((err) => {
      console.log(err)
    })
  }
}