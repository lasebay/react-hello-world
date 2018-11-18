import {
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAILED,
    SEARCH_CHECK_IN,
    SEARCH_IN_PROGRESS,
} from '../action/types';


const initState = {
    contents:[
        {id: '1', firstname: "john", lastname: "Doe", ssn: "123"},
        {id: '2', firstname: "Kyla", lastname: "Qi", ssn: "123"},
        {id: '3', firstname: "Robert", lastname: "Li", ssn: "123"},
        {id: '4', firstname: "Z", lastname: "M", ssn: "123"}
    ]
    form:[],
    error:'',
    loading: false,
}

const dashReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PATIENT_SUCCESS:
            return {...state, form: content};
        case GET_PATIENT_FAILED:
            return {...state, error: ''};
    }
}
export default dashReducer;

