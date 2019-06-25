import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// fromJS -> 生成immutable对象（不可改变） 使用get方法和set方法，避免不小心手动改变state的值
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  // immutable 对象的set方法，会结合之前immutable对象的值和设置的值，返回新的对象，并不是修改原始state的值
  switch(action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false)
    case actionTypes.GET_HEADER_LIST:
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default: 
      return state
  }
}