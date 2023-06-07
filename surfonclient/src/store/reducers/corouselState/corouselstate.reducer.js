import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    slide: 1,
    totalSlides: 0
}
/*
 create slice function uses immer library inside which helps us to update immutable state
which helps us to update state in mutating like syntax.
*/
const corouselSlice = createSlice({
    name: 'corouselstate',
    initialState,
    reducers: {
        incrementSlide: (state) => {
            if(state.slide === state.totalSlides-1){
                state.slide = 1
            }else{
                state.slide += 1
            }
        },
        decrementSlide: (state) => {
            if(state.slide === 0){
                state.slide = state.totalSlides-2
            }else{
                state.slide -= 1
            }
        },
        setCorouselSlide(state,action){
            state.slide = action.payload
        },
        setTotalSlides: (state,action) => {
            state.totalSlides = action.payload
        }
    }
})

export const {setCorouselSlide, setTotalSlides, incrementSlide,decrementSlide } = corouselSlice.actions;

export default corouselSlice.reducer;
