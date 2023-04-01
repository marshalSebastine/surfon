import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    width: 0,
    isDeskTop: !(window.matchMedia("(pointer: coarse) and (hover: none)").matches),
}
/*
 create slice function uses immer library inside which helps us to update immutable state
which helps us to update state in mutating like syntax.
*/
const windowSlice = createSlice({
    name: 'windowproperties',
    initialState,
    reducers: {
        setWindowWidth(state,action){
            state.width = action.payload
        }
    }
})

export const {setWindowWidth} = windowSlice.actions;

export default windowSlice.reducer;