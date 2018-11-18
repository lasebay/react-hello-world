import {
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAILED,
    SEARCH_CHECK_IN,
    SEARCH_IN_PROGRESS,
} from '../actions/types';
import {SEARCH} from '../actions/dashAction';

const initState = {
    contents:[
       {"name":"K Q", "ssn": "123123123", "comp": "headache"},
       {"name":"Z M", "ssn" :"123123123", "comp": "headache"}, 
       {"name":"R L", "ssn" :"123123123", "comp": "headache"}
    ],
    contents2:[
        {"name":"John Doe", "ssn": "123123123", "comp": "stomache"},
        {"name":"Taylor Swift", "ssn" :"123123123", "comp": "pain"}, 
        {"name":"Irene Smith", "ssn" :"123123123", "comp": "headache"}
    ],
    form:[],
    error:'',
    loading: false,
}



const dashReducer = (state = initState, action) => {
    switch(action.type) {
    case SEARCH_CHECK_IN: {
      const {value} = action;
      const form = state.contents.filter((val) => val.includes(value.name));
      return {...state, value, form};
    }
    default:
      return state;
    }
    
}
export default dashReducer;

