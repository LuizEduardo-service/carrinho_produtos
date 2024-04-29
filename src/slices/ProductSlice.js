import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {

            state.products.push(action.payload)
        },
        removeProduct: (state, action) => {
            return {
                ...state,
                products: state.products.filter((item) => item.codigo !== action.payload)
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer