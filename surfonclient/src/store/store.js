import { configureStore } from '@reduxjs/toolkit';
import windowpropertiesReducer from './reducers/windowproperties/windowproperties.reducer';
import corouselstateReducer from './reducers/corouselState/corouselstate.reducer';

const store = configureStore({
    reducer: {
        windowproperties: windowpropertiesReducer,
        corouselstate: corouselstateReducer
    }
})

export default store;