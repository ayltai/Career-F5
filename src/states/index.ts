import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { persistReducer, persistStore, } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { preferencesReducer, } from './preferencesSlice';

export const store = configureStore({
    reducer    : persistReducer({
        key     : 'root',
        storage : sessionStorage,
    }, combineReducers({
        preferences : preferencesReducer,
    })),
    middleware : getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck : false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export { preferencesReducer, setLanguage, } from './preferencesSlice';
