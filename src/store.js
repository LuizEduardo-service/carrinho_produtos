import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import productReducer from './slices/ProductSlice'

const rootReducers = combineReducers({
    productStore: productReducer
})
export default configureStore({
    reducer: rootReducers
})