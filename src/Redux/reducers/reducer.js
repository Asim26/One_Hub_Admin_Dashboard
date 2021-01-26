import {FETCH_DATA} from '../actions/action-types';

const initialState = {
    fetchUsersData: [],
}

export default function fetchUsersData(state = [], action) {
    switch (action.type) {
        case FETCH_DATA:
        console.log('fetch user data reducer',state)
        return {
                ...state,
                fetchUsersData: action.data
        }         
        default:
            return state
    }

}