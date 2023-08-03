import calculatorReducer from './reducers'
import { createStore } from 'redux'

const store=createStore(calculatorReducer);
export default store;