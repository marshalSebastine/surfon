import { configureStore } from '@reduxjs/toolkit';
import windowpropertiesReducer from './reducers/windowproperties/windowproperties.reducer';
import corouselstateReducer from './reducers/corouselState/corouselstate.reducer';
import cartstateReducer from './reducers/cartState/cartstate.reducer';

const store = configureStore({
    reducer: {
        windowproperties: windowpropertiesReducer,
        corouselstate: corouselstateReducer,
        cartstate: cartstateReducer
    },
    devTools: true
})

export default store;