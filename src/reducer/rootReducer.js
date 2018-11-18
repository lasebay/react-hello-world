import dashReducer from './dashReducer';
//combine reducers into one;
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    dash:dashReducer,
})

export default rootReducer