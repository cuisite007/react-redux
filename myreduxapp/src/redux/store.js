import {createStore, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

const allReducers = combineReducers({
  count : countReducer,
  person : personReducer
})
export default createStore(allReducers)