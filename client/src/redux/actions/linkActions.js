import axios from "axios";
import
{
GET_ERRORS, 
GET_ALL_LINKS,
ADD_NEW_LINK,
DELETE_LINK,
UPDATE_LINK
} from "./types"

export const createNew = data => dispatch => {
    axios.post("/api/user/add_link", data)
    .then(res => dispatch({
        type:ADD_NEW_LINK,
        payload: data
    }))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}
export const fetchAll = () => dispatch => {
    axios.get("/api/user/view_links")
    .then(res => dispatch({
        type:GET_ALL_LINKS,
        payload: res.data.data
    }))
    .catch(err => dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

export const deleteLink = id => dispatch => {
    axios.delete(`/api/user/delete_link/${id}`)
    .then(res => dispatch({
        type:DELETE_LINK,
        payload:id
    }))
    .catch(err =>  dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}

export const updateLink = id => dispatch => {
    axios.put(`/api/user/delete_link/${id}`)
    .then(res => dispatch({
        type:UPDATE_LINK,
        payload:id
    }))
    .catch(err =>  dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}
