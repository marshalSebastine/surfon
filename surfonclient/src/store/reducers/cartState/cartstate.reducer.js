import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentProduct: null,
    allProducts: [],
    cartProducts: []
}

/*
 create slice function uses immer library inside which helps us to update immutable state in a
 mutating like syntax
*/
const cartSlice = createSlice({
    name: 'cartstate',
    initialState,
    reducers: {
        setCurrentProduct(state,action){
            state.currentProduct = action.payload
        },
        setAllProducts(state,action){
            state.allProducts = action.payload
        },
        addToCart(state,action){
            const toAddPrdct = {...action.payload}
            if(state.cartProducts.length === 0){
                state.cartProducts.push(toAddPrdct)
                return
            }
      
            if(state.cartProducts.find((prdct) => {
                return (prdct._id === toAddPrdct._id && prdct.dateSelected === toAddPrdct.dateSelected && prdct.quantity === toAddPrdct.quantity)
            })){
                return
            }
            
            const productSet = state.cartProducts.filter((prdct) => {
                return (prdct._id !== toAddPrdct._id || prdct.dateSelected !== toAddPrdct.dateSelected)
            })
            productSet.push(toAddPrdct)
            state.cartProducts = productSet
        },
        updateCartItem(state,action){
            let cartitems = state.cartProducts.filter((prdct) => prdct._id !== action.payload._id)
            if(action.payload.quantity === "") action.payload.quantity = 0
            else {
                action.payload.quantity = parseInt(action.payload.quantity)
            }
            cartitems.push(action.payload)
            state.cartProducts = cartitems
        },
        removeFromCart(state,action){
            state.cartProducts = state.cartProducts.filter((prdct) => {
                return(prdct._id !== action.payload._id || prdct.quantity !== action.payload.quantity || prdct.dateSelected !== action.payload.dateSelected)
            })
        }
    }
})

export const {setCurrentProduct, addToCart, removeFromCart, updateCartItem, setAllProducts} = cartSlice.actions;

export default cartSlice.reducer;
