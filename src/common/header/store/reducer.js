import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

// fromJS -> 生成immutable对象（不可改变） 使用get方法和set方法，避免不小心手动改变state的值
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable 对象的set方法，会结合之前immutable对象的值和设置的值，返回新的对象，并不是修改原始state的值
    return state.set('focused', true)
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}