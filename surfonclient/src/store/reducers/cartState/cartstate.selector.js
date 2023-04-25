import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectCartState = (state) => state.cartstate;

export const selectCartCurrentProduct = createDraftSafeSelector(selectCartState,
    (cartstate) => {
        return cartstate.currentProduct
    })