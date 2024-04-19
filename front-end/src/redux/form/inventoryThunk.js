
import { setLoadingState } from '../loading/loadingThunk';
import { submitFormFailed, submitFormStart, submitFormSuccess } from './inventorySlice';
import axios from 'axios';
 
const host = 'http://localhost:5000'

export const submitForm = (formData, callbackSuccess) => async (dispatch) => {
    dispatch(setLoadingState(true))
    try {
        dispatch(submitFormStart)
        const response = await axios.post(`${host}/api/inventory`, formData);
        dispatch(submitFormSuccess());
        dispatch(setLoadingState(false))
        if(response.data.code === 200){
            console.log('log')
            callbackSuccess && callbackSuccess()
            return
        }
    } catch (error) {
        dispatch(submitFormFailed(error.message))
        console.log('Error submitting form:', error)
        dispatch(setLoadingState(false))

    }
}