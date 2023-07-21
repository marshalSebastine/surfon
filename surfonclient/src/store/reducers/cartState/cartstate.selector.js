import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectCartState = (state) => state.cartstate;

export const selectCartCurrentProduct = createDraftSafeSelector(selectCartState,
    (cartstate) => {
        return cartstate.currentProduct
    })

export const selectCartProducts = createDraftSafeSelector(selectCartState,
     (cartstate) => cartstate.cartProducts)

export const selectAllProducts = createDraftSafeSelector(selectCartState,(cartstate) => cartstate.allProducts)
