
import { fetchTransactionFailed, fetchTransactionStart, fetchTransactionSuccess } from './transactionSlice';
import axios from 'axios';

const host = 'http://localhost:5000'

export const getTransactionInventory = (limit, lastId , isScrolling = false) => async dispatch => {
    try {
        dispatch(fetchTransactionStart())
        const response = await axios.get(`${host}/api/inventory` , {
            params: {
                limit: limit, 
                lastId: lastId,
            }
        })
        // console.log(response.data.data)
        dispatch(fetchTransactionSuccess({ data: response.data.data || [], totalInventoryCount: response.data.totalInventoryCount, isScrolling }))
    } catch (error) {
        dispatch(fetchTransactionFailed(error,message))
        console.log(error)
    }
} 