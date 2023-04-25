import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentProduct: null,
}

/*
 create slice function uses immer library inside which helps us to update immutable state
which helps us to update state in mutating like syntax.
*/
const cartSlice = createSlice({
    name: 'cartstate',
    initialState,
    reducers: {
        setCurrentProduct(state,action){
            state.currentProduct = action.payload
        }
    }
})

export const {setCurrentProduct} = cartSlice.actions;

export default cartSlice.reducer;
