/* 该文件专门用于暴露一个Store对象，整个应用只有一个Store对象 */

// 引入creatStore, 用于创建Store
import { createStore } from 'redux'
// 引入汇总过后的reducer
import countReducer from './count_reducer.js'

//暴露Store
export default createStore(countReducer)
