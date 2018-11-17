import dashReducer from './dashReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    dash:dashReducer
})

export default rootReducer