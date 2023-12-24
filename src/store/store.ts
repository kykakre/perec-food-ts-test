import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productAPI} from "../service/productService";


const rootReducer = combineReducers({
    [productAPI.reducerPath]:productAPI.reducer,
})

export const setupStore =()=>{
    return configureStore({
        reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(productAPI.middleware)
    })
}
