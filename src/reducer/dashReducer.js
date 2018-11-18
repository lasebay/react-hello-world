import {
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAILED,
    SEARCH_CHECK_IN,
    SEARCH_IN_PROGRESS,
} from '../actions/types';
import {SEARCH} from '../actions/dashAction';

const initState = {
    contents:[
       {"id": 1, "name":"K Q", "ssn": "123123123", "comp": "headache"},
       {"id": 2,"name":"Z M", "ssn" :"123123123", "comp": "headache"}, 
       {"id": 3,"name":"R L", "ssn" :"123123123", "comp": "headache"}
    ],
    contents2:[
        {"id": 1, "name":"John Doe", "ssn": "123123123", "comp": "stomache"},
        {"id": 2,"name":"Taylor Swift", "ssn" :"123123123", "comp": "pain"}, 
        {"id": 3,"name":"Irene Smith", "ssn" :"123123123", "comp": "headache"}
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

