import {
  LOGIN_SUCCESS,
  FETCH_ORDER_SUMMARY,
  LIST_OF_PRODUCTS,
} from "./action-types";

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function fetchOrderSummary(data) {
  return {
    type: FETCH_ORDER_SUMMARY,
    payload: data,
  };
}

export function listOfProducts(data) {
  return {
    type: LIST_OF_PRODUCTS,
    payload: data,
  };
}
