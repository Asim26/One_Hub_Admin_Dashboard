import { listOfProducts } from "../actions/action";
import {
  LOGIN_SUCCESS,
  FETCH_ORDER_SUMMARY,
  LIST_OF_PRODUCTS,
  LIST_OF_ORDERS
} from "../actions/action-types";

const initialState = {
  user: [],
  orderSummary: [],
  listOfProducts: [],
  listOfOrders:[]
};

export default function myReducerOne(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case FETCH_ORDER_SUMMARY:
      return {
        ...state,
        orderSummary: action.payload,
      };

    case LIST_OF_PRODUCTS:
      return {
        ...state,
        listOfProducts: action.payload,
      };

      case LIST_OF_ORDERS:
      return {
        ...state,
        listOfOrders: action.payload,
      };

    default:
      return state;
  }
}
