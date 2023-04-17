import { createSlice, PayloadAction, } from '@reduxjs/toolkit';

type PreferencesState = {
    language : string,
};

const initialState : PreferencesState = {
    language : navigator.language.substring(0, 2),
};

const preferencesSlice = createSlice({
    initialState,
    name     : 'preferences',
    reducers : {
        setLanguage : (state, action : PayloadAction<string>) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage, } = preferencesSlice.actions;

export const preferencesReducer = preferencesSlice.reducer;
