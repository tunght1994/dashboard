import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    transactionList: [],
    total: 0,
    loading: false,
    error: null
}

const transactionSlice = createSlice({
    name: 'transactionInventory',
    initialState,
    reducers: {
        fetchTransactionStart: (state, actions) => {
            state.loading = actions.payload
        },
        fetchTransactionSuccess: (state, actions) => {
            state.loading = actions.payload.loading,
            state.transactionList = actions.payload.isScrolling ? [...state.transactionList ,...actions.payload.data] : actions.payload.data,
            state.total = actions.payload.totalInventoryCount
        },
        fetchTransactionFailed: (state, actions) => {
            state.loading = actions.payload,
            state.error = actions.payload
        }
    }
})

export const { fetchTransactionStart , fetchTransactionSuccess, fetchTransactionFailed } = transactionSlice.actions
export default transactionSlice.reducer