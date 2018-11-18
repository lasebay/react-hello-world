import {
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAILED,
    SEARCH_CHECK_IN,
    SEARCH_IN_PROGRESS,
} from '../actions/types';


const initState = {
    contents:[
       {"name":"K Q", "ssn": "123123123", "comp": "headache"},
       {"name":"Z M", "ssn" :"123123123", "comp": "headache"}, 
       {"name":"R L", "ssn" :"123123123", "comp": "headache"}
    ],
    form:[],
    error:'',
    loading: false,
}

const dashReducer = (state = initState, action) => {
    return state
    
}
export default dashReducer;

