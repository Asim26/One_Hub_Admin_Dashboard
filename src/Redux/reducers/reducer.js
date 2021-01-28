import {LOGIN_SUCCESS,FETCH_ORDER_SUMMARY} from '../actions/action-types';

const initialState = {
    user:[],
    orderSummary:[]

}

export default function myReducer(state = [], action) {
    switch (action.type) {        
        case LOGIN_SUCCESS:
            return {
              ...state,
              user: action.payload,
            };

            case FETCH_ORDER_SUMMARY: {
              return {
                ...state,
                orderSummary: action.payload,
              };
            }
          

        default:
            return state
    }

}