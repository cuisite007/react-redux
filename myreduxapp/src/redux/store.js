import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入汇总过后的reducer} from 'react'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

const allReducers = combineReducers({
  he : countReducer,
  renshu : personReducer
})

export default createStore(allReducers, applyMiddleware(thunk))

