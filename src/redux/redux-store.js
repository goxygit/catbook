import { combineReducers, legacy_createStore as createStore } from "redux";
import headerReducer from './headerReducer'
import contentReducer from './contentBarReducer'

let reducers = combineReducers(
    {
        headerBar: headerReducer,
        contentBar: contentReducer
    }
)
let store = createStore(reducers)



export default store