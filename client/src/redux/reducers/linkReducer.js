import{
    GET_ALL_LINKS,
    DELETE_LINK,
    ADD_NEW_LINK
    //, UPDATE_LINK 
} from "../actions/types"

const initialState = [];

export default function (state = initialState, action){
    switch(action.type){
        case GET_ALL_LINKS:
            return action.payload;
        case DELETE_LINK:
            return [...state].filter(id => id !== action.payload)
        case ADD_NEW_LINK:
            return [...state, action.payload]
        default:
            return state
    }
}