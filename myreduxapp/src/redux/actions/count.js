import {INCREMENT,DECREMENT} from '../constants'

export const creatIncrementAction = data => ({type:INCREMENT, data})
export const createDecrementAction = data => ({type:DECREMENT,data})