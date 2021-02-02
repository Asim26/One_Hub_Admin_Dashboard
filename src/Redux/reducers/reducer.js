import {FETCH_DATA,FETCH_BRAND,CREATE_BRAND,SINGLE_BRAND} from '../actions/action-types';

const initialState = {
    fetchUsersData: [],
    brands : [], 
    singleBrand :'',
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
                brands : action.payload

            }
        case CREATE_BRAND: {
                const newBrand = action.payload;
                return {
                  ...state,
                  createdBrand: newBrand,
                };
          }
        case SINGLE_BRAND:{
          return{
            ...state,
            singleBrand : action.payload
          }  

        }              
        default:
            return state
    }

}