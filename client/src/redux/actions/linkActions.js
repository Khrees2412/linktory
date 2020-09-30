import api from '../../utils/api'
import {
    GET_ERRORS,
    GET_ALL_LINKS,
    ADD_NEW_LINK,
    DELETE_LINK,
    UPDATE_LINK,
} from './types'

export const createNew = (data) => (dispatch) => {
    api.post('/add_link', data)
        .then((res) =>
            dispatch({
                type: ADD_NEW_LINK,
                payload: data,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err, //err.response.data.error
            })
        )
}
export const fetchAll = () => (dispatch) => {
    api.get('/view_links')
        // .then(res => console.log(res.data.data))
        .then((res) =>
            dispatch({
                type: GET_ALL_LINKS,
                payload: res.data.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err, //err.response.data.error
            })
        )
}

export const deleteLink = (id) => (dispatch) => {
    api.delete(`/delete_link/${id}`)
        .then((res) =>
            dispatch({
                type: DELETE_LINK,
                payload: id,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err, //err.response.data.error
            })
        )
}

export const updateLink = (id) => (dispatch) => {
    api.put(`/delete_link/${id}`)
        .then((res) =>
            dispatch({
                type: UPDATE_LINK,
                payload: id,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err, //err.response.data.error
            })
        )
}
