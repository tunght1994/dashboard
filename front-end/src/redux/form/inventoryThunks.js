
import { submitFormFailed, submitFormStart } from './inventorySlice';
import axios from 'axios';
 
const host = 'http://localhost:5000'

export const submitForm = (formData) => async (dispatch) => {
    try {
        dispatch(submitFormStart)
        const response = await axios.post(`${host}/api/inventory`, formData);
        dispatch(submitFormSuccess());
        console.log(response.data);
    } catch (error) {
        dispatch(submitFormFailed(error.message))
        console.log('Error submitting form:', error)
    }
}