import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    loading: false,
    error: null
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        submitFormStart(state) {
            state.loading = true,
           state.error = null
        },
        submitFormSuccess(state) {
            state.loading = false
        },
        submitFormFailed(state, action) {
            state.loading = false,
           state.error = action.payload
        }
    }
})

export const {submitFormStart, submitFormSuccess, submitFormFailed} = inventorySlice.actions
export default inventorySlice.reducer