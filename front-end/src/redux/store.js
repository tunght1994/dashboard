import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebarSlice";
import inventoryReducer from "./form/inventorySlice";
import transactionInventoryReducer from "./transaction/transactionSlice";
import loadingReducer from './loading/loadingSlice'

const store = configureStore({
    reducer: combineReducers({
        sidebar: sidebarReducer,
        iventory: inventoryReducer,
        transactionInventory: transactionInventoryReducer,
        loading: loadingReducer,
    })
});

export default store;