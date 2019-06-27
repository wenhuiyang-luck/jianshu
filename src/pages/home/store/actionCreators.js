import axios from 'axios';
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const handleHomeList = (resData) => ({
  type: actionTypes.GET_HOME_LIST,
  topicList: resData.topicList,
  articleList: resData.articleList,
  recommendList: resData.recommendList,
  writerList: resData.writerList
})

const handleAddArticleList = (resData, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(resData),
  nextPage
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const resData = res.data.data
      dispatch(handleHomeList(resData))
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const addArticleList = (page) => {
  return (dispatch) => {
    axios.get('/api/moreArticleList.json?page=' + page).then((res) => {
      const resData = res.data.data
      dispatch(handleAddArticleList(resData, page + 1))
    }).catch((err) => {
      console.log(err)
    })
  }
}