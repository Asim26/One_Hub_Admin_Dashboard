import {} from './action-types'

export const fetchUsers =(data)=>{

    return {
        type:FETCH_DATA,
        data:data
    }
}