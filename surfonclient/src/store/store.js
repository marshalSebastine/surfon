import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'
import { configureStore} from '@reduxjs/toolkit';
import {PERSIST} from "redux-persist"
import windowpropertiesReducer from './reducers/windowproperties/windowproperties.reducer';
import corouselstateReducer from './reducers/corouselState/corouselstate.reducer';
import cartstateReducer from './reducers/cartState/cartstate.reducer';

const persistConfig = {
    key: 'root',
    storage: storageSession,
  }

const persistedCartReducer = persistReducer(persistConfig, cartstateReducer)
  
const store = configureStore({
    reducer: {
        windowproperties: windowpropertiesReducer,
        corouselstate: corouselstateReducer,
        cartstate: persistedCartReducer
    },
    middleware: (getDefaultMiddleware) => {return getDefaultMiddleware({
        serializableCheck: {ignoredActions: [PERSIST]}})}
})

export let persistor = persistStore(store)
export default store;