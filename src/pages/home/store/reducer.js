import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_LIST:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'articleList': fromJS(action.articleList),
        'recommendList': fromJS(action.recommendList),
        'writerList': fromJS(action.writerList)
      })
    case actionTypes.ADD_ARTICLE_LIST:
      return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
      })
    default: 
      return state
  }
}