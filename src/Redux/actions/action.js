import {
  LOGIN_SUCCESS,
  FETCH_ORDER_SUMMARY,
  LIST_OF_PRODUCTS,
  LIST_OF_ORDERS,
  CREATE_PRODUCT,
  SINGLE_PRODUCT
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

export function listOfOrders(data) {
  return {
    type: LIST_OF_ORDERS,
    payload: data,
  };
}

export function createProduct(data) {
  return {
    type: CREATE_PRODUCT,
    payload: data,
  };
}

export function singleProduct(data) {
  return {
    type: SINGLE_PRODUCT,
    payload: data,
  };
}