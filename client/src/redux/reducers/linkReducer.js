import {
    GET_ALL_LINKS,
    DELETE_LINK,
    ADD_NEW_LINK,
    //, UPDATE_LINK
} from '../actions/types'

const initialState = {
    items: [],
    loading: true,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_LINKS:
            // console.log(action.payload,"hi")
            return {
                ...state,
                loading: false,
                items: action.payload,
            }
        case DELETE_LINK:
            return {
                ...state,
                items: state.items.filter(
                    (item) => item._id !== action.payload
                ),
            }
        case ADD_NEW_LINK:
            return [...state, action.payload]
        default:
            return state
    }
}
