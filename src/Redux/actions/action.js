import {LOGIN_SUCCESS,FETCH_ORDER_SUMMARY} from './action-types'

export function loginSuccess(data) {
  
    return {
      type: LOGIN_SUCCESS,
      payload: data
    };
  }

  export function fetchOrderSummary(data) {
   
    return {

      type: FETCH_ORDER_SUMMARY,
      payload: data,
    };
  }