import {
    GET_PATIENT_SUCCESS,
    GET_PATIENT_FAILED,
    SEARCH_CHECK_IN,
    SEARCH_IN_PROGRESS,
} from './types';



// export const getPatient = ({}) => {
//     return (dispatch) => {
//        let result = fetch('')
//        .then((response) => response.json())
//        .then((responseData)=> {
//            let data = responseData
//            let dataBlob = []
//            let i = 0;
//            data.map(function(item)) {
//             dataBlob.push({
//                 firstname:item.firstname,
//                 lastname: item.lastname,
//             });
//             i++;
//            }
           
//        });
//        dispatch({type: GET_PATIENT_SUCCESS , payload: dataBlob})
//     }
// }
export const SEARCH = 'SEARCH';

export function search(value) {
  return {type: SEARCH, value};
}


// export const getPatient = ({}) => {
//     return (dispatch) => {
//         dispatch{type: GET_PATIENT_SUCCESS});
        
//     }
// }
