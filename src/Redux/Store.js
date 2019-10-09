import reducer from "./Reducer";
import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducers = combineReducers({
    count: reducer
})

const store = createStore(combinedReducers, composeWithDevTools())
export default store