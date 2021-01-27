import {FETCH_DATA,FETCH_BRAND} from '../actions/action-types';

const initialState = {
    fetchUsersData: [],
    brandName :'', 
}

export default function fetchUsersData(state = initialState, action) {
    
    switch (action.type) {
        case FETCH_DATA:
        console.log('fetch user data reducer',state)
        return {
                ...state,
                fetchUsersData: action.data
        } 
        case FETCH_BRAND :
           // console.log("action.payload",action.payload);
            return {
                ... state,
                brandName : action.payload

            }        
        default:
            return state
    }

}