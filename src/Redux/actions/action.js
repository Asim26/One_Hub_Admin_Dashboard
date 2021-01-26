import {FETCH_DATA,FETCH_BRAND} from './action-types'

export const fetchUsers =(data)=>{

    return {
        type:FETCH_DATA,
        data:data
    }
}

export function fetchBrand(response) {
   // console.log("RESPONSE=>",response);
    return {
      type: FETCH_BRAND,
      payload: response
      
    };
  }