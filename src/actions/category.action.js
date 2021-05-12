import API from '../axios/api';
import {CREATE_CATEGORY, ERR_CATEGORY} from '../actions/Types'

export const createCategory = (formData) => async dispatch => {
    console.log("Form Data: ", formData)
    try {
        const res = await API.post("/api/category/create", formData)
        console.log("RESPONSE: ", res)
        
        dispatch({
            type: CREATE_CATEGORY,
            payload: res.data  
        })
        
    } catch (err) {
        dispatch({
            type: ERR_CATEGORY,
            payload: { msg: err.response.statusText, status: err.response.status }

        })
    }
}
